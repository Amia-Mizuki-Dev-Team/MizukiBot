import { execFileSync } from 'node:child_process'
import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'

const SITE_ORIGIN = 'https://help.mizuki.top'
const SITE_HOST = 'help.mizuki.top'
const INDEXNOW_KEY = 'e79ceab2280c3e9a4d8cdd92ec2fba44'
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow'
const KEY_LOCATION = `${SITE_ORIGIN}/${INDEXNOW_KEY}.txt`
const SITEMAP_FILE = resolve(process.argv[2] || 'docs/.vitepress/dist/sitemap.xml')

if (!existsSync(SITEMAP_FILE)) {
  throw new Error(`站点地图不存在：${SITEMAP_FILE}`)
}

const sitemapUrls = parseSitemap(readFileSync(SITEMAP_FILE, 'utf8'))
const urlList = selectUrlsForSubmission(sitemapUrls)

if (urlList.length === 0) {
  console.log('本次提交没有影响公开页面，跳过 IndexNow。')
  process.exit(0)
}

const requestBody = {
  host: SITE_HOST,
  key: INDEXNOW_KEY,
  keyLocation: KEY_LOCATION,
  urlList
}

const response = await submitWithRetry(requestBody)
console.log(`IndexNow 提交完成：HTTP ${response.status}，共 ${urlList.length} 个 URL。`)
for (const url of urlList) {
  console.log(`- ${url}`)
}

function parseSitemap(xml) {
  const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)]
    .map(match => decodeXml(match[1].trim()))
    .filter(url => url.startsWith(`${SITE_ORIGIN}/`))

  return [...new Set(urls)]
}

function selectUrlsForSubmission(allUrls) {
  if (process.env.INDEXNOW_FORCE_ALL === 'true') return allUrls

  const before = process.env.INDEXNOW_BEFORE_SHA || ''
  const after = process.env.INDEXNOW_AFTER_SHA || ''

  if (!isUsableSha(before) || !isUsableSha(after)) {
    return allUrls
  }

  let changedFiles
  try {
    changedFiles = execFileSync(
      'git',
      ['diff', '--name-only', before, after],
      { encoding: 'utf8' }
    )
      .split(/\r?\n/)
      .map(value => value.trim())
      .filter(Boolean)
  } catch (error) {
    console.warn(`无法读取提交差异，将提交全部 URL：${error.message}`)
    return allUrls
  }

  if (changedFiles.some(affectsEntireSite)) {
    return allUrls
  }

  const changedUrls = changedFiles
    .map(markdownPathToUrl)
    .filter(Boolean)

  return [...new Set(changedUrls)]
}

function affectsEntireSite(path) {
  return (
    path === 'package.json' ||
    path === 'package-lock.json' ||
    path.startsWith('docs/.vitepress/') ||
    path.startsWith('docs/public/') ||
    path === 'scripts/prepare-seo.mjs'
  )
}

function markdownPathToUrl(path) {
  if (!path.startsWith('docs/') || !path.endsWith('.md')) return null

  let route = path.slice('docs/'.length).replace(/\.md$/, '')
  route = route.replace(/(^|\/)index$/, '$1')

  if (route === '') return `${SITE_ORIGIN}/`
  return `${SITE_ORIGIN}/${route}`
}

function isUsableSha(value) {
  return /^[0-9a-f]{40}$/i.test(value) && !/^0+$/.test(value)
}

async function submitWithRetry(body) {
  let lastResponse = null

  for (let attempt = 1; attempt <= 3; attempt += 1) {
    const response = await fetch(INDEXNOW_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(20_000)
    })

    lastResponse = response
    if (response.ok) return response

    const retryable = response.status === 429 || response.status >= 500
    const responseText = await response.text()

    if (!retryable || attempt === 3) {
      throw new Error(
        `IndexNow 返回 HTTP ${response.status}${responseText ? `：${responseText}` : ''}`
      )
    }

    const waitMs = attempt * 3_000
    console.warn(`IndexNow 暂时失败（HTTP ${response.status}），${waitMs / 1000} 秒后重试。`)
    await new Promise(resolvePromise => setTimeout(resolvePromise, waitMs))
  }

  return lastResponse
}

function decodeXml(value) {
  return value
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
}
