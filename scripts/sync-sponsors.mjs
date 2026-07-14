/**
 * 爱发电赞助者名单同步脚本
 *
 * 用法:
 *   node scripts/sync-sponsors.mjs
 *
 * 环境变量:
 *   AFDIAN_USER_ID - 爱发电开发者后台的 user_id
 *   AFDIAN_TOKEN   - 爱发电开发者后台的 API token
 *
 * 自动更新 docs/sponsor_list.md 中的：
 *   1. 爱发电赞助者卡片
 *   2. 赞助者总数
 *   3. 核心赞助数量
 *   4. 最后同步时间
 */

import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const SPONSOR_FILE = resolve(__dirname, '..', 'docs', 'sponsor_list.md')
const API_BASE = 'https://ifdian.net/api/open'
const SPONSORS_START = '<!-- SPONSORS_START -->'
const SPONSORS_END = '<!-- SPONSORS_END -->'

async function main() {
  const userId = process.env.AFDIAN_USER_ID
  const token = process.env.AFDIAN_TOKEN

  if (!userId || !token) {
    throw new Error('请设置 AFDIAN_USER_ID 和 AFDIAN_TOKEN 环境变量')
  }

  const sponsors = await fetchAllSponsors(userId, token)
  sponsors.sort(
    (a, b) =>
      parseFloat(b.all_sum_amount || '0') -
      parseFloat(a.all_sum_amount || '0')
  )

  const existing = readFileSync(SPONSOR_FILE, 'utf-8')
  const startIndex = existing.indexOf(SPONSORS_START)
  const endIndex = existing.indexOf(SPONSORS_END)

  if (startIndex === -1 || endIndex === -1 || endIndex < startIndex) {
    throw new Error('赞助榜文件缺少有效的 SPONSORS_START / SPONSORS_END 标记')
  }

  // 标记前的卡片由人工维护，例如服务器、节点等线下核心赞助。
  const staticSection = existing.slice(0, startIndex)
  const staticSponsorCount = countMatches(staticSection, /class="sponsor-card"/g)
  const staticCoreCount = countMatches(
    staticSection,
    /class="sponsor-tag sponsor-tag--(?:gold|platinum)"/g
  )

  const apiCoreCount = sponsors.filter(
    sponsor => parseFloat(sponsor.all_sum_amount || '0') >= 50
  ).length
  const totalSponsorCount = staticSponsorCount + sponsors.length
  const coreSponsorCount = staticCoreCount + apiCoreCount

  const cards = sponsors.map(renderSponsorCard).join('\n')
  const sponsorRegion = `${SPONSORS_START}
<div class="sponsor-grid">
${cards}
</div>
${SPONSORS_END}`

  let newContent =
    existing.slice(0, startIndex) +
    sponsorRegion +
    existing.slice(endIndex + SPONSORS_END.length)

  newContent = replaceStatistic(newContent, '赞助者', totalSponsorCount)
  newContent = replaceStatistic(newContent, '核心赞助', coreSponsorCount)

  const updatedAt = new Date().toLocaleString('zh-CN', {
    timeZone: 'Asia/Shanghai'
  })
  newContent = newContent.replace(
    /名单由爱发电 API 自动同步，更新时间：[^<\n]*/,
    `名单由爱发电 API 自动同步，更新时间：${updatedAt}`
  )

  writeFileSync(SPONSOR_FILE, newContent, 'utf-8')
  console.log(
    `已同步 ${sponsors.length} 位爱发电赞助者；页面共 ${totalSponsorCount} 位赞助者，其中 ${coreSponsorCount} 位核心赞助`
  )
}

async function fetchAllSponsors(userId, token) {
  const sponsors = []
  let page = 1
  let totalPage = 1

  while (page <= totalPage) {
    const data = await apiCall(
      'query-sponsor',
      { page, per_page: 100 },
      userId,
      token
    )
    sponsors.push(...(data.list || []))
    totalPage = Number(data.total_page) || 1
    page += 1
  }

  return sponsors
}

function renderSponsorCard(sponsor) {
  const user = sponsor.user || {}
  const name = String(user.name || '匿名赞助者')
  const avatar = String(user.avatar || '')
  const amount = String(sponsor.all_sum_amount || '0')
  const tier = getTier(parseFloat(amount))
  const safeName = escapeHtml(name)
  const initial = escapeHtml(name.charAt(0).toUpperCase() || '?')
  const avatarHtml = avatar
    ? `<img src="${escapeHtml(avatar)}" alt="${safeName}" class="sponsor-card-avatar-img" />`
    : `<span>${initial}</span>`

  return `  <div class="sponsor-card">
    <div class="sponsor-card-avatar">
      ${avatarHtml}
    </div>
    <div class="sponsor-card-body">
      <h3>${safeName}</h3>
      <span class="sponsor-tag sponsor-tag--${tier.class}">${tier.label}</span>
      <p>累计赞助 ¥${escapeHtml(amount)}</p>
    </div>
  </div>`
}

function replaceStatistic(content, label, value) {
  const escapedLabel = escapeRegExp(label)
  const pattern = new RegExp(
    `(<span class="sponsor-stat-num">)\\d+(</span>\\s*<span class="sponsor-stat-label">${escapedLabel}</span>)`
  )

  if (!pattern.test(content)) {
    throw new Error(`未找到“${label}”统计区域`)
  }

  return content.replace(pattern, `$1${value}$2`)
}

async function apiCall(endpoint, params, userId, token) {
  const ts = Math.floor(Date.now() / 1000)
  const paramsStr = JSON.stringify(params)
  const signStr = `${token}params${paramsStr}ts${ts}user_id${userId}`
  const sign = createHash('md5').update(signStr).digest('hex')

  const response = await fetch(`${API_BASE}/${endpoint}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user_id: userId, params: paramsStr, ts, sign })
  })

  if (!response.ok) {
    throw new Error(`爱发电 API HTTP ${response.status}`)
  }

  const json = await response.json()
  if (json.ec !== 200) {
    throw new Error(`爱发电 API 错误：${json.em} (ec=${json.ec})`)
  }

  return json.data || {}
}

function getTier(amount) {
  if (amount >= 100) return { label: '团队赞助', class: 'platinum' }
  if (amount >= 50) return { label: '核心赞助商', class: 'gold' }
  if (amount >= 10) return { label: '赞助商', class: 'silver' }
  return { label: '支持者', class: 'bronze' }
}

function countMatches(content, pattern) {
  return (content.match(pattern) || []).length
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

main().catch(error => {
  console.error('同步失败：', error.message)
  process.exit(1)
})
