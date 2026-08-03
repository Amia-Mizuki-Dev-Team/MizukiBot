import { execFileSync } from 'node:child_process'
import { existsSync, readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs'
import { join, relative, resolve } from 'node:path'

const DIST_DIR = resolve(process.argv[2] || 'docs/.vitepress/dist')
const DOCS_DIR = resolve('docs')
const REPO_DIR = resolve('.')
const MIN_DESCRIPTION_LENGTH = 56
const MAX_DESCRIPTION_LENGTH = 150
const SITE_URL = 'https://help.mizuki.top'

if (!existsSync(DIST_DIR)) {
  throw new Error(`构建目录不存在：${DIST_DIR}`)
}

const softwareStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': `${SITE_URL}/#software`,
  name: 'Amia_晓山瑞希',
  alternateName: ['Mizuki Bot', 'Amia Bot'],
  url: `${SITE_URL}/`,
  applicationCategory: 'CommunicationApplication',
  inLanguage: 'zh-CN',
  description:
    'Amia_晓山瑞希，原 Mizuki Bot，是支持 PJSK、舞萌 DX 成绩同步与分析、群聊娱乐和经济系统的综合型 QQ Bot。',
  image: `${SITE_URL}/Picture/banner.jpg`,
  publisher: {
    '@id': `${SITE_URL}/#organization`
  },
  featureList: [
    'PJSK 查询与车队辅助',
    '舞萌 DX 成绩同步',
    'B50、AP50 与成绩分析',
    '音游互动功能',
    '群聊经济与娱乐系统'
  ],
  sameAs: [
    'https://github.com/Amia-Mizuki-Dev-Team',
    'https://github.com/Amia-Mizuki-Dev-Team/MizukiBot'
  ]
}

let changedPages = 0
let expandedDescriptions = 0
let bodyDerivedDescriptions = 0
let datedPages = 0

for (const file of walk(DIST_DIR).filter(path => path.endsWith('.html'))) {
  const original = readFileSync(file, 'utf8')
  let html = original
  const title = getPageTitle(html)
  const currentDescription = getMetaContent(html, 'name', 'description')
  const currentNormalized = normalizeWhitespace(decodeHtml(currentDescription || ''))
  const bodySummary = extractPageSummary(html)
  const description = normalizeDescription(title, currentDescription, bodySummary)
  const sourceFile = resolveSourceFileFromBuiltFile(file)
  const lastmod = sourceFile ? getGitLastmod(sourceFile) : null

  if (description !== currentNormalized) {
    expandedDescriptions += 1
    if (bodySummary && description.includes([...bodySummary].slice(0, 28).join(''))) {
      bodyDerivedDescriptions += 1
    }
  }

  html = upsertMeta(html, 'name', 'description', description)
  html = upsertMeta(html, 'property', 'og:description', description)
  html = upsertMeta(html, 'name', 'twitter:description', description)

  if (lastmod) {
    html = upsertMeta(html, 'property', 'article:modified_time', lastmod)
    html = upsertMeta(html, 'property', 'og:updated_time', lastmod)
    html = updateJsonLdByType(html, 'WebPage', data => ({ ...data, dateModified: lastmod }))
    datedPages += 1
  }

  if (relative(DIST_DIR, file).replaceAll('\\', '/') === 'index.html') {
    html = upsertJsonLd(html, softwareStructuredData)
  }

  if (html !== original) {
    writeFileSync(file, html, 'utf8')
    changedPages += 1
  }
}

const sitemapLastmodCount = updateSitemapLastmod()

console.log(
  `SEO 输出处理完成：更新 ${changedPages} 个页面，扩展 ${expandedDescriptions} 个过短描述，其中 ${bodyDerivedDescriptions} 个使用正文摘要；为 ${datedPages} 个页面写入 dateModified，并为 ${sitemapLastmodCount} 个 sitemap URL 写入 lastmod。`
)

function updateSitemapLastmod() {
  const sitemapPath = resolve(DIST_DIR, 'sitemap.xml')
  if (!existsSync(sitemapPath)) {
    throw new Error('缺少 sitemap.xml，无法写入 lastmod')
  }

  const original = readFileSync(sitemapPath, 'utf8')
  let updatedEntries = 0

  const sitemap = original.replace(/<url>([\s\S]*?)<\/url>/g, block => {
    const locMatch = block.match(/<loc>([\s\S]*?)<\/loc>/i)
    if (!locMatch) return block

    const sourceFile = resolveSourceFile(decodeXml(locMatch[1]))
    const lastmod = sourceFile ? getGitLastmod(sourceFile) : null
    if (!lastmod) return block

    const lastmodTag = `<lastmod>${lastmod}</lastmod>`
    let nextBlock

    if (/<lastmod>[\s\S]*?<\/lastmod>/i.test(block)) {
      nextBlock = block.replace(/<lastmod>[\s\S]*?<\/lastmod>/i, lastmodTag)
    } else {
      nextBlock = block.replace(/(<loc>[\s\S]*?<\/loc>)/i, `$1\n    ${lastmodTag}`)
    }

    if (nextBlock !== block) updatedEntries += 1
    return nextBlock
  })

  if (sitemap !== original) {
    writeFileSync(sitemapPath, sitemap, 'utf8')
  }

  return updatedEntries
}

function resolveSourceFile(loc) {
  let pathname
  try {
    pathname = decodeURIComponent(new URL(loc).pathname)
  } catch {
    return null
  }

  const normalized = pathname.replace(/^\/+|\/+$/g, '')
  const candidates = normalized
    ? [resolve(DOCS_DIR, `${normalized}.md`), resolve(DOCS_DIR, normalized, 'index.md')]
    : [resolve(DOCS_DIR, 'index.md')]

  return candidates.find(file => file.startsWith(DOCS_DIR) && existsSync(file)) || null
}

function resolveSourceFileFromBuiltFile(file) {
  const builtPath = relative(DIST_DIR, file).replaceAll('\\', '/')
  const candidates = []

  if (builtPath === 'index.html') {
    candidates.push(resolve(DOCS_DIR, 'index.md'))
  } else if (builtPath.endsWith('/index.html')) {
    const directory = builtPath.slice(0, -'/index.html'.length)
    candidates.push(resolve(DOCS_DIR, directory, 'index.md'))
  } else {
    candidates.push(resolve(DOCS_DIR, builtPath.replace(/\.html$/i, '.md')))
  }

  return candidates.find(candidate => candidate.startsWith(DOCS_DIR) && existsSync(candidate)) || null
}

function getGitLastmod(sourceFile) {
  const repoPath = relative(REPO_DIR, sourceFile).replaceAll('\\', '/')

  try {
    const timestamp = execFileSync(
      'git',
      ['log', '-1', '--format=%cI', '--', repoPath],
      { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }
    ).trim()

    if (!timestamp) return null
    const date = new Date(timestamp)
    return Number.isNaN(date.getTime()) ? null : date.toISOString()
  } catch {
    return null
  }
}

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

function getPageTitle(html) {
  const match = html.match(/<title>([\s\S]*?)<\/title>/i)
  const title = normalizeWhitespace(decodeHtml(match?.[1] || 'Amia_晓山瑞希'))
  return title.replace(/\s*[|｜]\s*Amia_晓山瑞希帮助文档\s*$/u, '') || 'Amia_晓山瑞希'
}

function normalizeDescription(title, currentDescription, bodySummary) {
  const current = normalizeWhitespace(decodeHtml(currentDescription || ''))
  if ([...current].length >= MIN_DESCRIPTION_LENGTH) {
    return [...current].slice(0, MAX_DESCRIPTION_LENGTH).join('')
  }

  const base = current.replace(/[。.!！?？]+$/u, '')
  const summary = normalizeWhitespace(bodySummary)
  const parts = []

  if (base) parts.push(base)
  if (summary && !base.includes(summary) && !summary.includes(base)) parts.push(summary)

  let expanded = parts.join('。')
  if (!expanded) expanded = `${title}相关说明`

  if ([...expanded].length < MIN_DESCRIPTION_LENGTH) {
    expanded = `${expanded.replace(/[。.!！?？]+$/u, '')}。本页属于 Amia_晓山瑞希官方帮助文档，提供相关功能、适用范围、操作入口与维护信息。`
  }

  return [...expanded].slice(0, MAX_DESCRIPTION_LENGTH).join('')
}

function extractPageSummary(html) {
  const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1] || html

  for (const match of main.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/gi)) {
    const text = normalizeWhitespace(decodeHtml(stripTags(match[1])))
    if ([...text].length < 24) continue
    if (/^(©|版权所有|上一页|下一页)/u.test(text)) continue
    return [...text].slice(0, 110).join('')
  }

  return ''
}

function stripTags(value) {
  return String(value)
    .replace(/<script\b[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style\b[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
}

function normalizeWhitespace(value) {
  return String(value).replace(/\s+/g, ' ').trim()
}

function decodeHtml(value) {
  return String(value)
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
}

function decodeXml(value) {
  return String(value)
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .trim()
}

function escapeHtmlAttribute(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
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
  const escapedValue = escapeHtmlAttribute(value)
  const pattern = new RegExp(
    `(\\s${escapeRegExp(name)}\\s*=\\s*)(?:"[^"]*"|'[^']*'|[^\\s>]+)`,
    'i'
  )

  if (pattern.test(tag)) {
    return tag.replace(pattern, `$1"${escapedValue}"`)
  }

  return tag.replace(/\s*\/?\s*>$/, match => ` ${name}="${escapedValue}"${match}`)
}

function findMetaTag(html, selectorAttribute, selectorValue) {
  for (const match of html.matchAll(/<meta\b[^>]*>/gi)) {
    if (
      String(getAttribute(match[0], selectorAttribute) || '').toLowerCase() ===
      selectorValue.toLowerCase()
    ) {
      return match[0]
    }
  }
  return null
}

function getMetaContent(html, selectorAttribute, selectorValue) {
  const tag = findMetaTag(html, selectorAttribute, selectorValue)
  return tag ? getAttribute(tag, 'content') : null
}

function upsertMeta(html, selectorAttribute, selectorValue, content) {
  const existing = findMetaTag(html, selectorAttribute, selectorValue)
  if (existing) {
    return html.replace(existing, setAttribute(existing, 'content', content))
  }

  const tag = `<meta ${selectorAttribute}="${escapeHtmlAttribute(selectorValue)}" content="${escapeHtmlAttribute(content)}">`
  return injectIntoHead(html, tag)
}

function upsertJsonLd(html, data) {
  const id = String(data['@id'])
  if (html.includes(id)) return html

  const json = JSON.stringify(data).replace(/</g, '\\u003c')
  return injectIntoHead(html, `<script type="application/ld+json">${json}</script>`)
}

function updateJsonLdByType(html, type, mutate) {
  return html.replace(
    /<script\b([^>]*)type=["']application\/ld\+json["']([^>]*)>([\s\S]*?)<\/script>/gi,
    (full, before, after, jsonText) => {
      try {
        const data = JSON.parse(jsonText)
        if (data?.['@type'] !== type) return full
        const updated = JSON.stringify(mutate(data)).replace(/</g, '\\u003c')
        return `<script${before}type="application/ld+json"${after}>${updated}</script>`
      } catch {
        return full
      }
    }
  )
}

function injectIntoHead(html, tag) {
  if (!/<\/head>/i.test(html)) {
    throw new Error('生成页面缺少 </head>，无法写入 SEO 标签')
  }
  return html.replace(/<\/head>/i, `  ${tag}\n</head>`)
}
