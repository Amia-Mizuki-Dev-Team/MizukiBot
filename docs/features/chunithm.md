---
title: 中二节奏专项
description: 中二节奏查分、查歌、B30 等功能的用法说明。
---

# 中二节奏 (Chunithm)

> 中二节奏（Chunithm）的查分和查歌功能，目前只支持国服。

::: info 数据来源说明
目前中二节奏模块 **仅支持国服**，所有数据均完全来源于 [水鱼查分器 (diving-fish)](https://www.diving-fish.com/)。
:::

<div class="mzk-card">
  <h3>个人成绩与 Rating</h3>
  <p>用于查询您在国服的当前个人数据。</p>

<div class="mzk-table-wrapper">

| 指令 | 说明 | 示例 |
| :--- | :--- | :--- |
| `chu b30` | 查询个人 B30、R10 成绩记录以及总 Rating | `chu b30` |

</div>
</div>

<div class="mzk-card">
  <h3>歌曲与谱面信息</h3>
  <div class="mzk-alert"><strong>注意：</strong> <code>chuinfo</code> 和 <code>chuchart</code> <strong>必须使用歌曲 ID</strong> 进行查询。</div>

<div class="mzk-table-wrapper">

| 指令 | 说明 | 示例 |
| :--- | :--- | :--- |
| `chu [曲名]` | 查询歌曲 ID (不区分大小写，仅匹配歌曲名称) | `chu 祈愿` |
| `chuinfo [ID]` | 查询歌曲基本信息 (仅支持 ID 查询) | `chuinfo 1145` |
| `chuchart [ID]` | 查询歌曲谱面 (仅支持 ID 查询)。默认返回 master 难度 | `chuchart 1145` |
| `chuchart [ID][难度]` | 添加 <code>ex</code>, <code>ma</code>, <code>ult</code> 后缀查看 Expert/Master/Ultima 难度 | `chuchart 1145ult` |

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
    <div class="chat-demo-row user"><div class="chat-demo-bubble">chu b30</div><div class="chat-demo-avatar">我</div></div>
    <div class="chat-demo-row bot"><div class="chat-demo-avatar">Bot</div><div class="chat-demo-bubble">[生成个人 B30、R10 与总 Rating 图]</div></div>
  </div>
  <div class="chat-demo-card">
    <div class="chat-demo-row user"><div class="chat-demo-bubble">chu 祈愿</div><div class="chat-demo-avatar">我</div></div>
    <div class="chat-demo-row bot"><div class="chat-demo-avatar">Bot</div><div class="chat-demo-bubble">[匹配歌曲并返回可用于查询的歌曲 ID]</div></div>
  </div>
  <div class="chat-demo-card">
    <div class="chat-demo-row user"><div class="chat-demo-bubble">chuinfo 1145</div><div class="chat-demo-avatar">我</div></div>
    <div class="chat-demo-row bot"><div class="chat-demo-avatar">Bot</div><div class="chat-demo-bubble">[ID 1145 的歌曲基本信息]</div></div>
  </div>
  <div class="chat-demo-card">
    <div class="chat-demo-row user"><div class="chat-demo-bubble">chuchart 1145ult</div><div class="chat-demo-avatar">我</div></div>
    <div class="chat-demo-row bot"><div class="chat-demo-avatar">Bot</div><div class="chat-demo-bubble">[ID 1145 的 Ultima 难度谱面信息]</div></div>
  </div>
</div>
