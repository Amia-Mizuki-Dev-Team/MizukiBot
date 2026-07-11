---
layout: home
title: Mizuki Bot 帮助文档
description: Mizuki Bot 官方帮助文档，提供 PJSK、舞萌 DX、中二节奏、经济系统、表情包、群聊公告、欢迎提示、活动统计、Minecraft 服务器和关联项目说明。

hero:
  name: "Mizuki Bot"
  text: "帮助文档"
  tagline: "音游查询、群聊工具、经济系统与项目生态的官方使用说明"
  actions:
    - theme: brand
      text: 如何使用
      link: /usage
    - theme: alt
      text: PJSK 功能
      link: /features/pjsk
    - theme: alt
      text: 问题反馈
      link: /feedback

features:
  - title: 音游专项
    details: PJSK 查分查榜、舞萌 DX B50 与成绩同步、中二节奏数据查询。
    link: /features/pjsk
  - title: 经济与互动
    details: 群内积分、任务、收集、商店、拍卖、抽卡和长期互动玩法。
    link: /features/economy
  - title: 群聊工具
    details: 表情包、公告分发、欢迎提示、群活统计、帮助菜单和基础管理能力。
    link: /features/tools
  - title: Minecraft
    details: Mizuki 公益 Minecraft 服务器说明与更新信息。
    link: /features/minecraft
  - title: 更新日志
    details: 查看 Mizuki Bot、系统底座和相关功能模块的维护记录。
    link: /features/bot_update
  - title: 关联项目
    details: 了解插件、客户端、网关、权限、审计和统计组件的职责。
    link: /projects/
---

<div class="home-section mzk-home-cover">
  <img
    src="/Picture/banner.jpg"
    alt="Mizuki Bot 帮助文档预览图，包含 PJSK、舞萌 DX、中二节奏、经济系统与群聊工具"
    width="1200"
    height="630"
    loading="eager"
    fetchpriority="high"
    style="display:block;width:100%;height:auto;border-radius:18px;box-shadow:0 12px 36px rgba(142,72,101,.16);"
  >
</div>

<div class="home-section mzk-home-overview">

## Mizuki Bot 官方帮助入口

Mizuki Bot 帮助文档集中整理 Bot 入群、权限配置、账号绑定、指令触发、功能说明、更新公告和项目生态。内容以当前维护状态为准，部分组件仅服务于开发组现有机器人环境。

<div class="support-grid support-grid--compact">

  <a href="/usage" class="support-card">
    <div class="support-info">
      <strong>如何使用 Mizuki Bot</strong>
      <span>邀请 Bot 入群、配置权限并开始使用</span>
    </div>
  </a>

  <a href="/features/pjsk" class="support-card">
    <div class="support-info">
      <strong>PJSK 专项功能</strong>
      <span>查分、查榜、绑定、歌曲、卡牌、MySekai、活动和车队辅助</span>
    </div>
  </a>

  <a href="/features/maimai" class="support-card">
    <div class="support-info">
      <strong>舞萌 DX 专项</strong>
      <span>B50、AP50、查歌、成绩同步、状态查询、战力分析和上分建议</span>
    </div>
  </a>

  <a href="/features/chunithm" class="support-card">
    <div class="support-info">
      <strong>中二节奏专项</strong>
      <span>B30、歌曲信息、谱面数据和成绩查询</span>
    </div>
  </a>

  <a href="/features/economy" class="support-card">
    <div class="support-info">
      <strong>Mizuki 25时经济系统</strong>
      <span>签到、任务、红包、商店、股市、拍卖、抽卡、农场、宠物和副本</span>
    </div>
  </a>

  <a href="/features/tools" class="support-card">
    <div class="support-info">
      <strong>群聊工具与娱乐</strong>
      <span>表情包、公告、欢迎提示、群活排行、帮助菜单和常用生成器</span>
    </div>
  </a>

</div>
</div>

<div class="home-section">

## 功能范围

本站目前覆盖以下能力，列表仅作功能概览，不附带外部项目链接：

- **PJSK**：多区服查询、账号绑定、活动榜线、歌曲与谱面、卡牌与组卡、MySekai、Live 推送和车队广播辅助。
- **舞萌 DX**：B50、AP50、单曲详情、成绩同步、服务器状态、Rating 与战力分析、个人名片和上分建议。
- **中二节奏**：B30、歌曲信息、谱面与成绩查询。
- **经济系统**：签到、打工、红包、V50、商店、股市、拍卖、抽卡、农场、宠物、副本和成就等长期玩法。
- **群聊能力**：帮助前置提示、公告维护与自动分发、成员加入或离开提示、消息活动统计、群内排行和用户概览。
- **内容工具**：PJSK 表情生成、本地图库管理、图片上传、删除、来源记录、分类锁定和缓存整理。
- **服务器与公告**：Minecraft 公益服务器说明、Bot 更新记录、使用规范和问题反馈。

</div>

<div class="home-section">

## 生态与关联项目

以下项目共同组成 Mizuki Bot 的文档、业务插件与基础设施体系；部分项目处于内部维护、迁移或实验阶段：

- **Amia-plugin-help**：帮助指令的文字前置与帮助链路衔接。
- **Amia-plugin-group**：群聊公告维护、统计和自动补发。
- **Amia-plugin-welcome**：群成员加入与离开提示。
- **Amia-plugin-send**：消息活动记录、群活排行、DAU 与统计数据提供。
- **Amia-plugin-meme**：表情包图库、上传、删除、溯源和缓存管理。
- **Amia-plugin-maimaidx、Mizuki-plugin-Maimai-sync、Mizuki-plugin-Maimai-Expand**：舞萌 DX 查询、同步与扩展能力。
- **Amia-plugin-economy**：群聊经济和社交互动系统。
- **Amia-plugin-homo-qso**：HAM 呼号、QSO 日志、中继查询和导出。
- **amia-core、Amia-plugin-permission、Amia-plugin-audit**：核心注册表、权限和审计基础能力。
- **Amia-plugin-profile、Amia-plugin-group-insight**：用户资料、活动摘要与群聊洞察。
- **Gensokyo NewQQ、HX-Pjsk-Gateway、Amia Sync Android、LXNS B50**：QQ 协议桥接、PJSK Web 查询、移动端成绩工具和舞萌分析组件。

</div>

<div class="home-section">

## 获取更多支持

<div class="support-grid support-grid--compact">

  <a href="/feedback" class="support-card">
    <div class="support-info">
      <strong>问题反馈</strong>
      <span>遇到 Bug 或有新建议时提交反馈</span>
    </div>
  </a>

  <a href="/asking" class="support-card">
    <div class="support-info">
      <strong>提问的智慧</strong>
      <span>查看如何提交更容易被定位的问题描述</span>
    </div>
  </a>

  <a href="/recruiting" class="support-card">
    <div class="support-info">
      <strong>开发者招募</strong>
      <span>参与文档、插件和工具维护</span>
    </div>
  </a>

  <a href="/projects/" class="support-card">
    <div class="support-info">
      <strong>关联项目</strong>
      <span>查看生态组件的职责和维护状态</span>
    </div>
  </a>

</div>
</div>
