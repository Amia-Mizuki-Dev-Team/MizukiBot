---
title: 项目生态
description: Amia_晓山瑞希及 Amia-Mizuki Dev Team 当前 Bot、公开插件、客户端、网关和基础组件总览。
---

# 项目生态

本页面说明 Amia_晓山瑞希与 Amia-Mizuki Dev Team 各项目的职责和关系。项目是否已经对外稳定提供，以对应页面和功能状态页的说明为准；仓库存在不等于功能已经正式上线。

## 入口与文档

### MizukiBot

`Amia-Mizuki-Dev-Team/MizukiBot` 是当前帮助站与公开项目生态文档的源码仓库。仓库名称沿用历史项目名，对外产品名称统一为 **Amia_晓山瑞希**。

- GitHub: [Amia-Mizuki-Dev-Team/MizukiBot](https://github.com/Amia-Mizuki-Dev-Team/MizukiBot)

## 用户功能与客户端

### Amia-plugin-maimaidx

舞萌 DX 查分、分析与互动插件。项目原名为 `lxns_b50`，现统一使用 `Amia-plugin-maimaidx`。主要覆盖 B50、AP50、单曲详情、战力分析、名片生成、曲目检索、进度统计和群内互动功能。详情见 [Amia-plugin-maimaidx](/projects/amia-plugin-maimaidx)。

### Mizuki-plugin-Maimai-sync

独立的舞萌 DX 成绩同步组件，负责水鱼与落雪账号绑定、成绩上传、队列处理和同步状态查询。它与 `Amia-plugin-maimaidx` 分工独立：前者负责同步，后者负责查询与分析。

### Amia-plugin-pjskhelp

PJSK 综合帮助与后端指令网关，提供 QQ 官方 Bot 的 Markdown/按钮菜单、普通 Bot 图片帮助、区域前缀指令和后端路由能力。项目详情见 [PJSK Help](/projects/amia-plugin-pjskhelp)。

### Amia Sync Android

用于舞萌 DX 成绩同步相关操作的 Android 客户端。客户端状态、下载方式和支持范围见 [Amia Sync Android](/projects/mizuki-sync)。

## 协议桥接与网关

### Gensokyo NewQQ

QQ 官方机器人客户端与协议桥接组件，承担 BotGo、HTTP API、WebSocket、WebUI、消息转换和 ID 映射等能力。项目详情见 [Gensokyo NewQQ](/projects/gensokyo-newqq)。

### HX-Pjsk-Gateway

PJSK 指令和后端服务之间的网关组件，用于路由、连接管理与兼容处理。项目详情见 [HX-Pjsk-Gateway](/projects/hx-pjsk-gateway)。

### Amia-plugin-qbind

QQ 官方机器人身份绑定基础设施，负责会话身份与真实 QQ 号映射，并向其他插件提供统一身份解析能力。项目详情见 [Amia Plugin QBind](/projects/amia-plugin-qbind)。

## Bot 业务插件

以下项目直接提供用户功能，其具体使用方式以“功能文档”和 Bot 内帮助菜单为准：

- `Amia-plugin-economy`：群聊经济、资产、任务、商城与收集系统；
- [`Amia-plugin-meme`](/projects/amia-plugin-meme)：表情包与图库管理；
- [`Amia-plugin-help`](https://github.com/Amia-Mizuki-Dev-Team/Amia-plugin-help)：帮助入口与能力索引；
- [`Amia-plugin-group`](/projects/amia-plugin-group)：群公告管理与自动分发；
- [`Amia-plugin-welcome`](https://github.com/Amia-Mizuki-Dev-Team/Amia-plugin-welcome)：成员加入与离开提示；
- [`Amia-plugin-send`](https://github.com/Amia-Mizuki-Dev-Team/Amia-plugin-send)：消息活动统计、群活排行与统计 Provider；
- `Amia-plugin-pjskcarteam`：PJSK 协力车队与跨群广播。

## 核心与治理组件

这些组件主要为插件协作、身份、权限、审计和数据聚合提供基础能力，通常不直接暴露用户指令。

### amia-core

Amia 插件生态的轻量级契约层，统一身份模型、Provider 协议、注册表、安全调用、超时、异常隔离和耗时记录。业务插件通过公开 Provider 协作，避免直接读取其他插件数据库。

### Amia-plugin-permission

统一权限节点判断服务，支持 canonical 身份、平台身份、群聊上下文节点和通配符。当前采用默认拒绝策略：权限服务缺失、规则无效或检查异常时不会自动放行。

### Amia-plugin-audit

结构化审计组件，将权限、配置、绑定和管理操作写入独立审计账本。敏感字段会进行脱敏，审计失败不会反向中断原业务操作。

### Amia-plugin-profile

统一个人信息聚合组件，通过 `IdentityResolver`、`StatsProvider` 和各业务插件注册的 `ProfileProvider` 组合个人卡片。单个 Provider 超时或异常时，其他信息仍可继续生成。

### Amia-plugin-group-insight

群聊活跃分析组件。管理员在目标群主动开启分析后，组件才会按 `self_id + group_id` 记录之后产生的匿名活动元数据；默认不会采集所有群聊。当前主要提供消息量、发言用户数和基础活跃摘要。

### Amia-plugin-qbind

身份解析与真实 QQ 映射组件，为需要 canonical 身份的业务插件提供 `IdentityResolver`、绑定检查与解绑能力。详情见 [Amia Plugin QBind](/projects/amia-plugin-qbind)。

## 项目状态说明

公开页面只区分以下状态：

- **已上线**：已经在正式 Bot 或公开服务中使用；
- **测试中**：已有实现，但仍需兼容性或生产验证；
- **规划中**：尚未作为稳定功能发布。

未明确标记为“已上线”的能力，不应视为正式服务承诺。项目职责、支持范围和已知限制以对应项目页面与[功能状态](/status)为准。
