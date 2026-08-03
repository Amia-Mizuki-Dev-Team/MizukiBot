import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { extname, join, relative, resolve } from 'node:path'

const DIST_DIR = resolve(process.argv[2] || 'docs/.vitepress/dist')
const errors = []
const warnings = []

if (!existsSync(DIST_DIR)) {
  throw new Error(`构建目录不存在：${DIST_DIR}`)
}

const homepage = resolve(DIST_DIR, 'index.html')
const headersFile = resolve(DIST_DIR, '_headers')
const heroImagePath = '/Picture/avatar.jpg'

if (!existsSync(homepage)) {
  errors.push('缺少首页 index.html')
} else {
  const html = readFileSync(homepage, 'utf8')
  const hero = [...html.matchAll(/<img\b[^>]*>/gi)]
    .map(match => match[0])
    .find(tag => getAttribute(tag, 'src') === heroImagePath)

  if (!hero) {
    errors.push(`首页缺少首屏图片：${heroImagePath}`)
  } else {
    if (getAttribute(hero, 'width') !== '350' || getAttribute(hero, 'height') !== '350') {
      errors.push('首页首屏图片必须保留 350×350 固定尺寸')
    }
    if (String(getAttribute(hero, 'fetchpriority') || '').toLowerCase() !== 'high') {
      errors.push('首页首屏图片缺少 fetchpriority="high"')
    }
    if (String(getAttribute(hero, 'loading') || '').toLowerCase() === 'lazy') {
      errors.push('首页首屏图片不能使用 loading="lazy"')
    }
  }

  const hasPreload = [...html.matchAll(/<link\b[^>]*>/gi)]
    .map(match => match[0])
    .some(tag =>
      String(getAttribute(tag, 'rel') || '').toLowerCase() === 'preload' &&
      String(getAttribute(tag, 'as') || '').toLowerCase() === 'image' &&
      getAttribute(tag, 'href') === heroImagePath
    )

  if (!hasPreload) {
    errors.push(`首页缺少 ${heroImagePath} 的图片预加载标签`)
  }
}

if (!existsSync(headersFile)) {
  errors.push('构建输出缺少 Cloudflare Pages _headers 文件')
} else {
  const headers = readFileSync(headersFile, 'utf8')
  if (!/\/assets\/\*[\s\S]*Cache-Control:\s*public,[^\n]*max-age=31536000,[^\n]*immutable/i.test(headers)) {
    errors.push('_headers 未对 /assets/* 配置一年 immutable 缓存')
  }
  if (!/mizuki-bot-docs\.pages\.dev\/\*[\s\S]*X-Robots-Tag:\s*noindex/i.test(headers)) {
    errors.push('_headers 未禁止 Cloudflare Pages 默认域名收录')
  }
}

const files = walk(DIST_DIR)
const assetFiles = files.filter(file => relative(DIST_DIR, file).replaceAll('\\', '/').startsWith('assets/'))
const cssText = assetFiles
  .filter(file => extname(file).toLowerCase() === '.css')
  .map(file => readFileSync(file, 'utf8'))
  .join('\n')

if (!cssText.includes('content-visibility:auto')) {
  errors.push('构建 CSS 未包含首页延迟渲染规则 content-visibility:auto')
}

const budgets = {
  '.js': { warn: 500 * 1024, fail: 2 * 1024 * 1024 },
  '.css': { warn: 180 * 1024, fail: 1024 * 1024 },
  '.jpg': { warn: 1024 * 1024, fail: 8 * 1024 * 1024 },
  '.jpeg': { warn: 1024 * 1024, fail: 8 * 1024 * 1024 },
  '.png': { warn: 1024 * 1024, fail: 8 * 1024 * 1024 },
  '.gif': { warn: 2 * 1024 * 1024, fail: 10 * 1024 * 1024 },
  '.webp': { warn: 1024 * 1024, fail: 8 * 1024 * 1024 }
}

const measured = []
for (const file of files) {
  const extension = extname(file).toLowerCase()
  const budget = budgets[extension]
  if (!budget) continue

  const size = statSync(file).size
  const name = relative(DIST_DIR, file).replaceAll('\\', '/')
  measured.push({ name, size })

  if (size > budget.fail) {
    errors.push(`${name}: ${formatBytes(size)} 超过硬性预算 ${formatBytes(budget.fail)}`)
  } else if (size > budget.warn) {
    warnings.push(`${name}: ${formatBytes(size)} 超过建议预算 ${formatBytes(budget.warn)}`)
  }
}

for (const warning of warnings) {
  console.warn(`::warning::${warning}`)
}

const largest = measured.sort((a, b) => b.size - a.size).slice(0, 10)
console.log('构建产物中体积最大的资源：')
for (const asset of largest) {
  console.log(`- ${asset.name}: ${formatBytes(asset.size)}`)
}

if (errors.length > 0) {
  for (const error of errors) {
    console.error(`::error::${error}`)
  }
  throw new Error(`性能验证失败，共 ${errors.length} 项错误`)
}

console.log(`性能验证通过：检查 ${files.length} 个构建文件，发现 ${warnings.length} 项非阻断预算警告。`)

function walk(directory) {
  const files = []
  for (const entry of readdirSync(directory)) {
    const fullPath = join(directory, entry)
    if (statSync(fullPath).isDirectory()) {
      files.push(...walk(fullPath))
    } else {
      files.push(fullPath)
    }
  }
  return files
}

function getAttribute(tag, name) {
  const pattern = new RegExp(
    `\\s${escapeRegExp(name)}\\s*=\\s*(?:"([^"]*)"|'([^']*)'|([^\\s>]+))`,
    'i'
  )
  const match = tag.match(pattern)
  return match ? match[1] ?? match[2] ?? match[3] ?? '' : null
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KiB`
  return `${(bytes / 1024 / 1024).toFixed(2)} MiB`
}
