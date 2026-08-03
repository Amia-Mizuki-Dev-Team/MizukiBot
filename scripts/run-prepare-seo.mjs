import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

globalThis.escapeRegExp = value =>
  String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

await import('./prepare-seo.mjs')

const notFoundPage = resolve('docs/.vitepress/dist/404.html')
if (existsSync(notFoundPage)) {
  const original = readFileSync(notFoundPage, 'utf8')
  let html = upsertMeta(original, 'robots', 'noindex,follow')
  html = upsertMeta(html, 'googlebot', 'noindex,follow')

  if (html !== original) {
    writeFileSync(notFoundPage, html, 'utf8')
    console.log('SEO 输出处理完成：404 页面已标记为 noindex。')
  }
}

function upsertMeta(html, name, content) {
  const tags = [...html.matchAll(/<meta\b[^>]*>/gi)]
  const existing = tags.find(match =>
    String(getAttribute(match[0], 'name') || '').toLowerCase() === name.toLowerCase()
  )?.[0]

  if (existing) {
    return html.replace(existing, setAttribute(existing, 'content', content))
  }

  if (!/<\/head>/i.test(html)) return html
  return html.replace(
    /<\/head>/i,
    `  <meta name="${name}" content="${content}">\n</head>`
  )
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

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}
