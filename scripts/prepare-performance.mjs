import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const DIST_DIR = resolve(process.argv[2] || 'docs/.vitepress/dist')
const homepage = resolve(DIST_DIR, 'index.html')
const heroImage = '/Picture/avatar.jpg'

if (!existsSync(homepage)) {
  throw new Error(`缺少首页构建文件：${homepage}`)
}

const preloadTag = `<link rel="preload" as="image" href="${heroImage}" fetchpriority="high">`
const original = readFileSync(homepage, 'utf8')
let html = original

if (!hasImagePreload(html, heroImage)) {
  if (!/<\/head>/i.test(html)) {
    throw new Error('首页缺少 </head>，无法写入首屏图片预加载标签')
  }
  html = html.replace(/<\/head>/i, `  ${preloadTag}\n</head>`)
}

if (html !== original) {
  writeFileSync(homepage, html, 'utf8')
  console.log(`性能输出处理完成：已为 ${heroImage} 添加首页预加载。`)
} else {
  console.log(`性能输出处理完成：首页已包含 ${heroImage} 预加载。`)
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

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}
