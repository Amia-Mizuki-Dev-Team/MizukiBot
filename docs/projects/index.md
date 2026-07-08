---
title: 关联项目
description: Mizuki Bot / Amia-Mizuki Dev Team 相关插件、客户端、网关和基础设施项目总览。
---

# 关联项目

这里收录 Mizuki Bot 与 Amia-Mizuki Dev Team 生态中与用户功能、官方 Bot 基础设施、Web 查询和移动端工具相关的项目。页面用于帮助用户和开发者了解各项目的职责、维护状态和文档入口。

## 状态说明

- **公开文档**：可以作为功能说明或项目介绍阅读。
- **开发组内部维护**：代码面向现有机器人环境和开发组服务，不代表外部环境可直接部署。
- **实验中**：仍在验证架构或交互方式，接口和实现可能变化。
- **暂不提供部署说明**：文档只描述边界和维护信息，不提供完整部署流程或公开调用方式。

## 推荐查看

<div class="mzk-card">

### LXNS B50

舞萌 DX 查分与分析插件，集成落雪 (LXNS) 与水鱼 (Diving-Fish) 双数据源，覆盖 B50、AP50、单曲详情、战力分析、上分推荐和群内猜歌等场景。

状态：公开文档；开发组内部维护。

[查看项目说明](/projects/lxns-b50)

</div>

<div class="mzk-card">

### Amia Sync Android

面向舞萌 DX 玩家设计的 Android 第三方客户端，使用 LXNS API 与后端数据清洗服务提供成绩查询、曲库筛选和玩家状态同步。

状态：实验中；开发组内部维护。

[查看项目说明](/projects/mizuki-sync)

</div>

<div class="mzk-card">

### HX-Pjsk-Gateway

Project Sekai Web 查询网关，把 OneBot v11 数据节点转换为网页端可用的查询与展示能力。

状态：开发组内部维护；暂不提供公开部署说明。

[查看项目说明](/projects/hx-pjsk-gateway)

</div>

<div class="mzk-card">

### Amia Plugin Economy

群聊经济与社交互动插件，处于 `Amia-plugin-*` 新命名体系迁移中。当前以开发组现有机器人环境为主要维护对象。

状态：开发组内部维护；暂未选择 License。

[查看功能文档](/features/economy)

</div>

<div class="mzk-card">

### Amia Plugin QBind

机器人侧账号绑定插件，用于建立 QQ 用户与业务系统账号之间的统一身份映射。

状态：开发组内部维护；身份入口能力，需保持较严格的安全边界。

[查看项目说明](/projects/amia-plugin-qbind)

</div>

<div class="mzk-card">

### Gensokyo NewQQ

Mizuki 官方 Bot 使用的 QQ 官方机器人客户端与协议桥接组件，承载 BotGo、HTTP API、WebSocket、WebUI 和 ID 映射等能力。

状态：开发组内部维护；兼容性持续整理中。

[查看项目说明](/projects/gensokyo-newqq)

</div>

<div class="mzk-card">

### Meme 表情插件

Mizuki Bot 的表情包管理插件，支持本地图库、图片上传、删除、溯源、文件夹锁定和多格式缓存管理。

状态：开发组内部维护。

[查看项目说明](/projects/amia-plugin-meme)

</div>

<div class="mzk-card">

### PJSK 车队广播

面向 PJSK 找车和车队广播场景的辅助插件，用于车牌识别、状态管理和群内消息整理。

状态：开发组内部维护；不作为公开通用服务发布。

[查看项目说明](/projects/amia-plugin-pjskcarteam)

</div>

<div class="mzk-card">

### HAM 无线电日志

HAM 通联记录管理插件，支持呼号注册、QSO 日志、中继查询和导出等开发组内部功能整理。

状态：开发组内部维护。

[查看项目说明](/projects/amia-plugin-homo-qso)

</div>