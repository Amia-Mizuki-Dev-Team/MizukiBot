---
title: 通用工具与娱乐
description: 经济系统、表情包管理、群活统计、MC 服务器、B 站动态订阅等功能说明。
---

# 通用工具与娱乐
> 除了音游之外的其他功能都在这里。
<br>
<div class="custom-card" style="background: var(--vp-c-bg-soft); border: 2px solid #b37feb; padding: 20px; border-radius: 15px; margin-bottom: 25px;">
  <h3 style="margin-top: 0; color: #722ed1;">📦 表情包管理系统 (Meme)</h3>
  <p style="font-size: 13px; opacity: 0.8; margin-bottom: 15px;">集成审核、溯源的表情管理系统。</p>
  <h4 style="color: #722ed1; margin-top: 15px;">基础指令</h4>

| 指令 | 说明 | 示例 |
| :--- | :--- | :--- |
| `表情帮助` | 查看系统帮助 | - |
| `发送 [文件夹]` | 随机发一张 | `发送 mzk` |
| `查看 [图片名]` | 精确查看 | `查看 mzk1` |
| `看所有 [文件夹]` | 生成九宫格预览 | `看所有 mzk` |

  <h4 style="color: #722ed1; margin-top: 25px;">上传与管理</h4>

| 指令 | 说明 |
| :--- | :--- |
| `最近上传` | (管理) 查看最新入库记录 |
| `删除 [图片名]` | (管理) 删除图片及记录 |
| `溯源 [图片名]` | (管理) 查看上传者QQ |
| `锁定/解锁 [文件夹]` | (管理) 控制文件夹权限 |
| `屏蔽群 [群号]` | (管理) 禁止某群使用 |

</div>
<div class="custom-card" style="background: var(--vp-c-bg-soft); border-left: 5px solid #fadb14; padding: 20px; border-radius: 10px; margin-bottom: 25px;">
  <h3 style="margin-top: 0; color: #d4b106;">💰 Mizuki 25时经济</h3>
  <p style="font-size: 13px; opacity: 0.8; margin-bottom: 15px;">
    全图片化养成经济系统。<br>
    <a href="https://list.mizuki.top" target="_blank" style="color:#d4b106; font-weight:bold; margin-right: 15px;">👉 访问 list.mizuki.top 查看经济榜</a>
    <a href="https://store.mizuki.top" target="_blank" style="color:#faad14; font-weight:bold;">👉 访问 store.mizuki.top 网页商城</a>
  </p>

| 指令 | 说明 |
| :--- | :--- |
| `签到` | 每日签到获取基础资金 |
| `打工` | 赚取额外资金 |
| `个人信息` | 查看当前资产与状态 |
| `经济商城` | 浏览可购买的物品 |
| `我的背包` | 查看已拥有的物品 |
| `购买 [编号]` | 购买商城中的指定物品 |
| `使用 [编号]` | 使用背包中的指定物品 |

</div>
<div class="custom-card" style="background: var(--vp-c-bg-soft); border-left: 5px solid #ff85c0; padding: 20px; border-radius: 10px; margin-bottom: 25px;">
  <h3 style="margin-top: 0; color: #eb2f96;">🎉 播报与生成器</h3>

| 功能/指令 | 说明 | 示例 |
| :--- | :--- | :--- |
| **入群/离群提示** | Bot 自动发送入群欢迎与退群播报 | *(自动触发)* |
| `喜报 [内容]` | 生成一张喜报风格的图片 | `喜报 Bot修好了` |
| `悲报 [内容]` | 生成一张悲报风格的图片 | `悲报 服务器炸了` |

</div>
<div class="custom-card" style="background: var(--vp-c-bg-soft); border-left: 5px solid #1890ff; padding: 20px; border-radius: 10px; margin-bottom: 25px;">
  <h3 style="margin-top: 0; color: #1890ff;">📈 群活统计</h3>

| 指令 | 说明 |
| :--- | :--- |
| `今日发言` | 查看个人今日发言数 |
| `本月发言` | 查看个人本月发言数 |
| `全群统计` | (管理) 查看全群排行 |
| `今日DAU` | (管理) 查看日活人数 |

</div>
<div class="custom-card" style="background: var(--vp-c-bg-soft); border-left: 5px solid #52c41a; padding: 20px; border-radius: 10px; margin-bottom: 25px;">
  <h3 style="margin-top: 0; color: #52c41a;">🟩 Minecraft 服务器</h3>
  

| 项目 | 内容 |
| :--- | :--- |
| **版本** | Fabric 1.21.4 |
| **查询** | `mc status` |
| **加入** | 请在群公告获取 IP |

</div>
<div class="custom-card" style="background: var(--vp-c-bg-soft); border-left: 5px solid #fb7299; padding: 20px; border-radius: 12px; margin-bottom: 25px;">
  <h3 style="margin-top: 0; color: #fb7299;">📺 B站动态订阅</h3>
  <p style="font-size: 13px; opacity: 0.8; margin-bottom: 15px;">支持自动推送官方最新 B 站动态至群聊，<strong>目前需提供群号并联系管理员手动添加。</strong></p>

| 适用机型 | 可订阅内容 | 说明 |
| :--- | :--- | :--- |
| **1号机 / 3号机** | **舞萌 DX** 官方动态 | 请联系对应 Bot 管理员 |
| **2号机 / 4号机** | **PJSK 国服/国际服** 动态 | 请联系对应 Bot 管理员 |

</div>
<style>
/* 强制表格的第一列（指令）和第三列（示例）不换行，让第二列（说明）有更多空间 */
.custom-card table th:nth-child(1),
.custom-card table td:nth-child(1),
.custom-card table th:nth-child(3),
.custom-card table td:nth-child(3) {
  white-space: nowrap !important;
  word-break: keep-all !important;
}
</style>