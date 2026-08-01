import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { join, relative, resolve } from 'node:path'

const DIST_DIR = resolve(process.argv[2] || 'docs/.vitepress/dist')
const MIN_DESCRIPTION_LENGTH = 56
const INDEXNOW_KEY = 'e79ceab2280c3e9a4d8cdd92ec2fba44'
const errors = []
const warnings = []

if (!existsSync(DIST_DIR)) {
  throw new Error(`构建目录不存在：${DIST_DIR}`)
}

const htmlFiles = walk(DIST_DIR).filter(path => path.endsWith('.html'))

for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8')
  const page = relative(DIST_DIR, file).replaceAll('\\', '/')
  const description = decodeHtml(getMetaContent(html, 'name', 'description') || '')
  const canonicalTags = [...html.matchAll(/<link\b[^>]*>/gi)].filter(
    match => String(getAttribute(match[0], 'rel') || '').toLowerCase() === 'canonical'
  )

  if ([...description.trim()].length < MIN_DESCRIPTION_LENGTH) {
    errors.push(`${page}: meta description 过短或缺失（${[...description.trim()].length} 字符）`)
  }

  if (canonicalTags.length !== 1) {
    errors.push(`${page}: canonical 数量应为 1，实际为 ${canonicalTags.length}`)
  }

  const robots = String(getMetaContent(html, 'name', 'robots') || '').toLowerCase()
  if (robots.includes('noindex')) {
    errors.push(`${page}: 页面包含 noindex`)
  }

  for (const image of html.matchAll(/<img\b[^>]*>/gi)) {
    if (!hasAttribute(image[0], 'alt')) {
      errors.push(`${page}: 图片缺少 alt 属性：${image[0].slice(0, 160)}`)
    }
  }

  if ([...description.trim()].length > 160) {
    warnings.push(`${page}: meta description 超过 160 字符`)
  }
}

checkPublicFile('robots.txt', content => {
  if (!/^User-agent:\s*\*/im.test(content)) return '缺少 User-agent: *'
  if (!/^Allow:\s*\//im.test(content)) return '缺少 Allow: /'
  if (!/^Sitemap:\s*https:\/\/help\.mizuki\.top\/sitemap\.xml/im.test(content)) {
    return '缺少正确的 Sitemap 地址'
  }
  return null
})

checkPublicFile('sitemap.xml', content => {
  const urls = [...content.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1])
  if (urls.length === 0) return '站点地图没有 URL'
  if (urls.some(url => !url.startsWith('https://help.mizuki.top/'))) {
    return '站点地图包含非规范域名 URL'
  }
  return null
})

checkPublicFile(`${INDEXNOW_KEY}.txt`, content => {
  return content.trim() === INDEXNOW_KEY ? null : 'IndexNow 密钥文件内容不匹配'
})

const homepage = resolve(DIST_DIR, 'index.html')
if (!existsSync(homepage)) {
  errors.push('缺少首页 index.html')
} else if (!readFileSync(homepage, 'utf8').includes('https://help.mizuki.top/#software')) {
  errors.push('首页缺少 SoftwareApplication 结构化数据')
}

for (const warning of warnings) {
  console.warn(`::warning::${warning}`)
}

if (errors.length > 0) {
  for (const error of errors) {
    console.error(`::error::${error}`)
  }
  throw new Error(`SEO 验证失败，共 ${errors.length} 项错误`)
}

console.log(`SEO 验证通过：${htmlFiles.length} 个 HTML 页面，未发现阻止收录的输出问题。`)

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

function hasAttribute(tag, name) {
  const pattern = new RegExp(`\\s${escapeRegExp(name)}(?=\\s|=|/?>)`, 'i')
  return pattern.test(tag)
}

function getAttribute(tag, name) {
  const pattern = new RegExp(
    `\\s${escapeRegExp(name)}\\s*=\\s*(?:"([^"]*)"|'([^']*)'|([^\\s>]+))`,
    'i'
  )
  const match = tag.match(pattern)
  return match ? match[1] ?? match[2] ?? match[3] ?? '' : null
}

function getMetaContent(html, selectorAttribute, selectorValue) {
  for (const match of html.matchAll(/<meta\b[^>]*>/gi)) {
    if (
      String(getAttribute(match[0], selectorAttribute) || '').toLowerCase() ===
      selectorValue.toLowerCase()
    ) {
      return getAttribute(match[0], 'content')
    }
  }
  return null
}

function checkPublicFile(name, validate) {
  const file = resolve(DIST_DIR, name)
  if (!existsSync(file)) {
    errors.push(`缺少公开文件：${name}`)
    return
  }

  const message = validate(readFileSync(file, 'utf8'))
  if (message) errors.push(`${name}: ${message}`)
}

function decodeHtml(value) {
  return String(value)
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}
