---
title: 通用工具与娱乐
description: 群活统计、MC 服务器、群聊播报与常用生成器说明。
---

# 通用工具与娱乐
> 除了音游和经济系统之外的其他功能都在这里。

<div class="mzk-card">
  <h3>播报与生成器</h3>

<div class="mzk-table-wrapper">

| 功能/指令 | 说明 | 示例 |
| :--- | :--- | :--- |
| **入群/离群提示** | Bot 自动发送入群欢迎与退群播报 | 自动触发 |
| `喜报 [内容]` | 生成一张喜报风格的图片 | `喜报 Bot修好了` |
| `悲报 [内容]` | 生成一张悲报风格的图片 | `悲报 需要维护` |

</div>
</div>

<div class="mzk-card">
  <h3>群活统计</h3>

<div class="mzk-table-wrapper">

| 指令 | 说明 |
| :--- | :--- |
| `今日发言` | 查看个人今日发言数 |
| `本月发言` | 查看个人本月发言数 |
| `全群统计` | 管理员查看全群排行 |
| `今日DAU` | 管理员查看日活人数 |

</div>
</div>

<div class="mzk-card">
  <h3>Minecraft 服务器</h3>
  
<div class="mzk-table-wrapper">

| 项目 | 内容 |
| :--- | :--- |
| **版本** | Fabric 1.21.4 |
| **查询** | `mc status` |
| **加入** | 请在群公告获取 IP |

</div>
</div>

## 指令示例

<style scoped>
.chat-demo-grid { display: grid; gap: 18px; margin: 18px 0 28px; }
.chat-demo-card { border: 1px solid var(--vp-c-divider); border-radius: 18px; background: var(--vp-c-bg-soft); padding: 18px 18px 20px; }
.chat-demo-row { display: flex; align-items: flex-start; gap: 12px; }
.chat-demo-row.user { justify-content: flex-end; margin-bottom: 16px; }
.chat-demo-row.bot { justify-content: flex-start; }
.chat-demo-avatar { width: 42px; height: 42px; border-radius: 50%; background: var(--vp-c-brand-soft); display: flex; align-items: center; justify-content: center; font-weight: 700; color: var(--vp-c-brand-1); flex: 0 0 auto; }
.chat-demo-bubble { max-width: 76%; border-radius: 14px; padding: 10px 14px; line-height: 1.7; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06); word-break: break-word; }
.chat-demo-row.user .chat-demo-bubble { background: var(--vp-c-brand-soft); color: var(--vp-c-brand-1); }
.chat-demo-row.bot .chat-demo-bubble { background: var(--vp-c-bg); }
@media (min-width: 720px) { .chat-demo-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
</style>

<div class="chat-demo-grid">
  <div class="chat-demo-card">
    <div class="chat-demo-row user"><div class="chat-demo-bubble">今日发言</div><div class="chat-demo-avatar">我</div></div>
    <div class="chat-demo-row bot"><div class="chat-demo-avatar">Bot</div><div class="chat-demo-bubble">[返回今日发言数量]</div></div>
  </div>
  <div class="chat-demo-card">
    <div class="chat-demo-row user"><div class="chat-demo-bubble">本月发言</div><div class="chat-demo-avatar">我</div></div>
    <div class="chat-demo-row bot"><div class="chat-demo-avatar">Bot</div><div class="chat-demo-bubble">[返回本月发言统计]</div></div>
  </div>
  <div class="chat-demo-card">
    <div class="chat-demo-row user"><div class="chat-demo-bubble">全群统计</div><div class="chat-demo-avatar">我</div></div>
    <div class="chat-demo-row bot"><div class="chat-demo-avatar">Bot</div><div class="chat-demo-bubble">[返回群活排行]</div></div>
  </div>
  <div class="chat-demo-card">
    <div class="chat-demo-row user"><div class="chat-demo-bubble">喜报 Bot修好了</div><div class="chat-demo-avatar">我</div></div>
    <div class="chat-demo-row bot"><div class="chat-demo-avatar">Bot</div><div class="chat-demo-bubble">[生成喜报图片]</div></div>
  </div>
  <div class="chat-demo-card">
    <div class="chat-demo-row user"><div class="chat-demo-bubble">悲报 需要维护</div><div class="chat-demo-avatar">我</div></div>
    <div class="chat-demo-row bot"><div class="chat-demo-avatar">Bot</div><div class="chat-demo-bubble">[生成悲报图片]</div></div>
  </div>
  <div class="chat-demo-card">
    <div class="chat-demo-row user"><div class="chat-demo-bubble">mc status</div><div class="chat-demo-avatar">我</div></div>
    <div class="chat-demo-row bot"><div class="chat-demo-avatar">Bot</div><div class="chat-demo-bubble">[返回 MC 服务器状态]</div></div>
  </div>
</div>
