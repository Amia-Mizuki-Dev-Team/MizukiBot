import { existsSync, readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs'
import { join, resolve } from 'node:path'

const DIST_DIR = resolve(process.argv[2] || 'docs/.vitepress/dist')
const homepage = resolve(DIST_DIR, 'index.html')
const heroImage = '/Picture/avatar.webp?v=20260830a'
const criticalImages = new Set([
  heroImage,
  '/Picture/logo.gif',
  '/Picture/logo.webp'
])

if (!existsSync(homepage)) {
  throw new Error(`缺少首页构建文件：${homepage}`)
}

const preloadTag = `<link rel="preload" as="image" href="${heroImage}" fetchpriority="high">`
let updatedPages = 0
let lazyImages = 0

for (const file of walk(DIST_DIR).filter(path => path.endsWith('.html'))) {
  const original = readFileSync(file, 'utf8')
  let html = original.replace(/<img\b[^>]*>/gi, tag => {
    const src = getAttribute(tag, 'src') || ''
    if (!src || src.startsWith('data:')) return tag

    let next = setAttribute(tag, 'decoding', 'async')

    if (src === heroImage) {
      next = removeAttribute(next, 'loading')
      next = setAttribute(next, 'fetchpriority', 'high')
      return next
    }

    if (criticalImages.has(src)) {
      next = removeAttribute(next, 'loading')
      return next
    }

    if (String(getAttribute(next, 'loading') || '').toLowerCase() !== 'lazy') {
      lazyImages += 1
    }
    return setAttribute(next, 'loading', 'lazy')
  })

  if (file === homepage && !hasImagePreload(html, heroImage)) {
    if (!/<\/head>/i.test(html)) {
      throw new Error('首页缺少 </head>，无法写入首屏图片预加载标签')
    }
    html = html.replace(/<\/head>/i, `  ${preloadTag}\n</head>`)
  }

  if (html !== original) {
    writeFileSync(file, html, 'utf8')
    updatedPages += 1
  }
}

console.log(
  `性能输出处理完成：更新 ${updatedPages} 个页面，为 ${lazyImages} 张非首屏图片补充懒加载，并确保 ${heroImage} 预加载。`
)

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

function hasImagePreload(content, href) {
  for (const match of content.matchAll(/<link\b[^>]*>/gi)) {
    const tag = match[0]
    if (
      String(getAttribute(tag, 'rel') || '').toLowerCase() === 'preload' &&
      String(getAttribute(tag, 'as') || '').toLowerCase() === 'image' &&
      getAttribute(tag, 'href') === href
    ) {
      return true
    }
  }
  return false
}

function getAttribute(tag, name) {
  const pattern = new RegExp(
    `\\s${escapeRegExp(name)}\\s*=\\s*(?:"([^"]*)"|'([^']*)'|([^\\s>]+))`,
    'i'
  )
  const match = tag.match(pattern)
  return match ? match[1] ?? match[2] ?? match[3] ?? '' : null
}

function setAttribute(tag, name, value) {
  const pattern = new RegExp(
    `(\\s${escapeRegExp(name)}\\s*=\\s*)(?:"[^"]*"|'[^']*'|[^\\s>]+)`,
    'i'
  )

  if (pattern.test(tag)) {
    return tag.replace(pattern, `$1"${value}"`)
  }

  return tag.replace(/\s*\/?\s*>$/, match => ` ${name}="${value}"${match}`)
}

function removeAttribute(tag, name) {
  const pattern = new RegExp(
    `\\s${escapeRegExp(name)}(?:\\s*=\\s*(?:"[^"]*"|'[^']*'|[^\\s>]+))?`,
    'i'
  )
  return tag.replace(pattern, '')
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}
