/**
 * 爱发电赞助者名单同步脚本
 * 
 * 用法:
 *   node scripts/sync-sponsors.mjs
 * 
 * 环境变量:
 *   AFDIAN_USER_ID   - 爱发电开发者后台的 user_id
 *   AFDIAN_TOKEN     - 爱发电开发者后台的 API token
 * 
 * 自动更新 docs/sponsor_list.md 的赞助者列表。
 * 建议配合 GitHub Actions 定时运行（如每天一次）。
 */

import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const SPONSOR_FILE = resolve(__dirname, '..', 'docs', 'sponsor_list.md')

const API_BASE = 'https://ifdian.net/api/open'
const TIER_ORDER = ['团队赞助', '核心赞助商', '赞助商', '支持者']

async function main() {
  const userId = process.env.AFDIAN_USER_ID
  const token = process.env.AFDIAN_TOKEN

  if (!userId || !token) {
    console.error('请设置 AFDIAN_USER_ID 和 AFDIAN_TOKEN 环境变量')
    console.error('可在 https://ifdian.net/dashboard/dev 获取')
    process.exit(1)
  }

  // 分页获取所有赞助者
  const sponsors = []
  let page = 1
  let totalPage = 1

  while (page <= totalPage) {
    const data = await apiCall('query-sponsor', { page, per_page: 100 }, userId, token)
    const list = data.list || []
    sponsors.push(...list)
    totalPage = data.total_page || 1
    page++
  }

  // 排序：按累计金额降序
  sponsors.sort((a, b) => parseFloat(b.all_sum_amount || '0') - parseFloat(a.all_sum_amount || '0'))

  // 生成赞助者卡片 HTML
  const cards = sponsors.map(s => {
    const user = s.user || {}
    const name = user.name || '匿名赞助者'
    const avatar = user.avatar || ''
    const amount = s.all_sum_amount || '0'
    const tier = getTier(parseFloat(amount))
    const initial = name.charAt(0).toUpperCase()
    const avatarHtml = avatar
      ? `<img src="${avatar}" alt="${name}" class="sponsor-card-avatar-img" />`
      : `<span>${initial}</span>`

    return `  <div class="sponsor-card">
    <div class="sponsor-card-avatar">
      ${avatarHtml}
    </div>
    <div class="sponsor-card-body">
      <h3>${escapeHtml(name)}</h3>
      <span class="sponsor-tag sponsor-tag--${tier.class}">${tier.label}</span>
      <p>累计赞助 ¥${amount}</p>
    </div>
  </div>`
  }).join('\n')

  // 读取现有文件，替换赞助者列表区域
  const existing = readFileSync(SPONSOR_FILE, 'utf-8')
  const header = existing.split('<!-- SPONSORS_START -->')[0] || existing

  const newContent = header + `<!-- SPONSORS_START -->
<div class="sponsor-grid">
${cards}
</div>
<!-- SPONSORS_END -->

<div style="margin-top: 40px; text-align: center; color: var(--vp-c-text-2); font-size: 14px;">
  <p>名单由爱发电 API 自动同步，更新时间：${new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })}</p>
  <p style="margin-top: 8px;">
    <a href="https://ifdian.net/a/wrdzgzs" target="_blank" style="color: var(--vp-c-brand-1); font-weight: bold;">
      前往爱发电赞助 →
    </a>
  </p>
</div>
`

  writeFileSync(SPONSOR_FILE, newContent, 'utf-8')
  console.log(`✅ 已同步 ${sponsors.length} 位赞助者到 ${SPONSOR_FILE}`)
}

/**
 * 调用爱发电 API
 */
async function apiCall(endpoint, params, userId, token) {
  const ts = Math.floor(Date.now() / 1000)
  const paramsStr = JSON.stringify(params)
  const signStr = `${token}params${paramsStr}ts${ts}user_id${userId}`
  const sign = createHash('md5').update(signStr).digest('hex')

  const res = await fetch(`${API_BASE}/${endpoint}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user_id: userId, params: paramsStr, ts, sign })
  })

  const json = await res.json()
  if (json.ec !== 200) {
    throw new Error(`API error: ${json.em} (ec=${json.ec})`)
  }
  return json.data
}

/**
 * 根据金额计算赞助等级
 */
function getTier(amount) {
  if (amount >= 100) return { label: '团队赞助', class: 'platinum' }
  if (amount >= 50) return { label: '核心赞助商', class: 'gold' }
  if (amount >= 10) return { label: '赞助商', class: 'silver' }
  return { label: '支持者', class: 'bronze' }
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

main().catch(err => {
  console.error('❌ 同步失败:', err.message)
  process.exit(1)
})
