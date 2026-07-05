---
title: 舞萌 DX 专项
description: 舞萌 DX 查分、查歌、服务器状态监控和成绩同步的用法说明。
---

# 舞萌 DX 专项
> 查分、查歌与排队服务。

## 成绩核心查分

<div class="mzk-table-wrapper">

| 指令 | 示例 | 说明 |
| :--- | :--- | :--- |
| `b50` | `b50` / `b50 @玩家A` | Best 50 个人面板（可查他人） |
| `ap50` | `ap50` | AP 50 纯收曲全成就图（落雪源） |
| `dxpass` | `dxpass 葵巴 6 206002` | 个人 DX Pass 属性金卡名片 |
| `minfo` | `minfo 11252` / `minfo valsq` | 单曲游玩详情与分数线 |
| `id` | `id 11252` | 歌曲谱面数据与定数底标 |
| `mai状态` | `mai状态` | 双端同步与档案大盘 |

</div>

## 曲目检索与进度完成表

<div class="mzk-table-wrapper">

| 指令 | 示例 | 说明 |
| :--- | :--- | :--- |
| `查歌 [关键词]` | `查歌 Garakuta` | 全局模糊检索歌曲 |
| `[等级]完成表` | `14完成表` / `14+ ap完成表` | 等级定数完成表 |
| `[版本代号][牌子类型]完成表` | `桃极完成表` / `双将完成表` | 牌子完成表 |
| `[版本代号][牌子类型]进度` | `真舞进度` / `桃极进度` | 牌子进度查询 |
| `[等级] [判定] 进度` | `14 sss进度` | 等级段位成绩进度 |

</div>

## 账户绑定与路由

<div class="mzk-table-wrapper">

| 指令 | 说明 |
| :--- | :--- |
| `lxbind` / `绑定落雪` | 落雪 OAuth 一键绑定，根据提示授权并发送授权码 |
| `切换数据源 [落雪/水鱼]` | 切换默认查分输出端 |

</div>

<div class="mzk-card">
  <h3>舞萌服务器状态</h3>

  <h4>查看服务器状态</h4>
  <p>发送 <code>/net</code>、<code>网咋样</code> 或 <code>炸了吗</code>（无需私钥即可查询）</p>

  <h4>手动上报</h4>

<div class="mzk-table-wrapper">

| 指令 | 示例 | 说明 |
| :--- | :--- | :--- |
| `/report 断网` | `/report 断网` | 上报断网状态 |
| `/report 小黑屋` | `/report 小黑屋` | 上报小黑屋状态 |
| `/report 被发票` | `/report 被发票` | 上报被发票状态 |
| `/report 罚站 [秒]` | `/report 罚站 300` | 上报罚站及等待时长 |
| `/report help` | `/report help` | 查看上报帮助 |

</div>

  <h4>自动监听（群聊自动识别）</h4>

<div class="mzk-table-wrapper">

| 类型 | 触发词示例 |
| :--- | :--- |
| 异常触发 | 主语（华立/SEGA/服务器/机台/NET）+ 动词（炸/挂/死/坏/崩）|  |
| 异常示例 | 「服务器又炸了」「SEGA挂了」「机台灰网」「游客了」|  |
| 正常触发 | 「服务器好了」「华立稳了」「绿网了」|  |
| 冯氏起飞（异常）| 「华立冯飞了」「SEGA老冯起飞」|  |
| 冯氏返航（正常）| 「华立冯返航了」「SEGA老冯落地」|  |

</div>
</div>
<div class="mzk-card">
  <h3>✨ 舞萌DX 成绩同步助手 ✨</h3>
  
  <div class="mzk-alert">
    <strong>⚠️ 维护时间: 每日 00:00-11:00 暂停服务</strong><br>
    <strong>⚠️ 注意:</strong> 落雪绑定已升级为 OAuth 2.0 链接授权，旧版 token 已失效，现支持链接授权，更加方便！
  </div>
  <h4>📜 免责声明 (使用前必读)</h4>
  <p>发送任意指令可查看协议链接。必须同意后方可使用本功能。</p>

<div class="mzk-table-wrapper">

| 指令 | 示例 | 说明 |
| :--- | :--- | :--- |
| `同意Mizuki免责声明` | `同意Mizuki免责声明` | 同意用户协议 |
| `拒绝Mizuki免责声明` | `拒绝Mizuki免责声明` | 拒绝用户协议 |
| `撤回Mizuki免责声明同意` | `撤回Mizuki免责声明同意` | 撤回之前的授权同意 |

</div>

  <h4>第一步：设置类型</h4>

<div class="mzk-table-wrapper">

| 指令 | 示例 | 说明 |
| :--- | :--- | :--- |
| `设置类型 1` | `设置类型 1` | 仅上传成绩到查分器后立即返回 |
| `设置类型 2` | `设置类型 2` | 上传成绩后等待 70 秒自动登出 |

</div>

  <h4>第二步：绑定账号</h4>

<div class="mzk-table-wrapper">

| 指令 | 示例 | 说明 |
| :--- | :--- | :--- |
| `绑定水鱼 [Token]` | `绑定水鱼 xxxxx` | 绑定水鱼查分器 |
| `绑定落雪` | `绑定落雪` | 获取落雪 OAuth 认证链接 |
| `落雪确认 [授权码]` | `落雪确认 XXXX-XXXX` | 确认并完成落雪绑定 |

</div>

  <h4>第三步：同步成绩与查询</h4>

<div class="mzk-table-wrapper">

| 指令 | 示例 | 说明 |
| :--- | :--- | :--- |
| `上传成绩` | `上传成绩` | 开始同步（之后发送二维码文本） |
| `预览mai` | `预览mai` | 查看游戏账号基本信息 |
| `取消` | `取消` | 取消当前操作，退出上传流程 |

</div>

  <h4>队列系统与管理</h4>
  <p>队列最多容纳 10 人，同时只能处理 1 个用户。</p>

<div class="mzk-table-wrapper">

| 指令 | 示例 | 说明 |
| :--- | :--- | :--- |
| `队列状态` | `队列状态` | 查看当前队列排队人数 |
| `查看绑定` | `查看绑定` | 查看当前绑定状态和类型 |
| `登出` | `登出` | 强制清理异常登录状态 |
| `设置类型` | `设置类型 1` | 重新设置用户类型 |

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
    <div class="chat-demo-row user"><div class="chat-demo-bubble">b50</div><div class="chat-demo-avatar">我</div></div>
    <div class="chat-demo-row bot"><div class="chat-demo-avatar">Bot</div><div class="chat-demo-bubble">[生成你的 Best 50 成绩面板]</div></div>
  </div>
  <div class="chat-demo-card">
    <div class="chat-demo-row user"><div class="chat-demo-bubble">ap50</div><div class="chat-demo-avatar">我</div></div>
    <div class="chat-demo-row bot"><div class="chat-demo-avatar">Bot</div><div class="chat-demo-bubble">[生成 AP 50 纯收曲全成就图]</div></div>
  </div>
  <div class="chat-demo-card">
    <div class="chat-demo-row user"><div class="chat-demo-bubble">查歌 回转吧</div><div class="chat-demo-avatar">我</div></div>
    <div class="chat-demo-row bot"><div class="chat-demo-avatar">Bot</div><div class="chat-demo-bubble">[匹配到的舞萌 DX 曲目信息]</div></div>
  </div>
  <div class="chat-demo-card">
    <div class="chat-demo-row user"><div class="chat-demo-bubble">14+ ap完成表</div><div class="chat-demo-avatar">我</div></div>
    <div class="chat-demo-row bot"><div class="chat-demo-avatar">Bot</div><div class="chat-demo-bubble">[14+ 等级 AP 完成表]</div></div>
  </div>
  <div class="chat-demo-card">
    <div class="chat-demo-row user"><div class="chat-demo-bubble">mai状态</div><div class="chat-demo-avatar">我</div></div>
    <div class="chat-demo-row bot"><div class="chat-demo-avatar">Bot</div><div class="chat-demo-bubble">[双端同步与档案状态概览]</div></div>
  </div>
  <div class="chat-demo-card">
    <div class="chat-demo-row user"><div class="chat-demo-bubble">上传成绩</div><div class="chat-demo-avatar">我</div></div>
    <div class="chat-demo-row bot"><div class="chat-demo-avatar">Bot</div><div class="chat-demo-bubble">[进入成绩同步流程，等待二维码文本]</div></div>
  </div>
</div>
