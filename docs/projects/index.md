---
title: 关联项目
description: Mizuki Bot 与 Amia-Mizuki Dev Team 当前活跃插件、核心契约和成绩同步组件总览。
---

# 关联项目

这里整理 Mizuki Bot 生态中的主要项目。已经在“功能文档”中有独立入口的业务功能不再重复放入侧边栏；核心与治理组件统一在本页说明。

## 主要项目

### Amia-plugin-maimaidx

舞萌 DX 查分、分析与互动插件。项目原名为 `lxns_b50`，现统一使用 `Amia-plugin-maimaidx` 作为名称。主要覆盖 B50、AP50、单曲详情、战力分析、名片生成、曲目检索、进度统计和群内小游戏。

### Mizuki-plugin-Maimai-sync

当前使用中的舞萌 DX 成绩同步插件，负责水鱼与落雪账号绑定、成绩上传、队列处理和同步状态查询。它是独立于 `Amia-plugin-maimaidx` 的成绩同步项目；本任务只对其进行只读审查，不在这里修改其代码。

### Amia-plugin-pjskhelp

PJSK 综合帮助与 Haruki/Sakura 后端指令网关。当前主体已完成，提供官方 Bot Markdown/按钮菜单、普通 Bot 图片帮助、区域前缀指令、后端路由、启动关闭和断线重连说明；项目详情见 [PJSK Help](/projects/amia-plugin-pjskhelp)。

### Gensokyo NewQQ

Mizuki 官方 Bot 使用的 QQ 官方机器人客户端与协议桥接组件，承担 BotGo、HTTP API、WebSocket、WebUI 和 ID 映射等能力。

## 已归入功能文档的组件

以下项目仍属于 Mizuki Bot 生态，但对应能力已经在“功能文档”中集中说明，因此不再重复占用“关联项目”侧边栏：

- `Amia-plugin-economy`：群聊经济与互动系统。
- `Amia-plugin-meme`：表情包与图库管理。
- `Amia-plugin-help`：帮助指令前置说明。
- `Amia-plugin-group`：公告管理与自动分发。
- `Amia-plugin-welcome`：成员加入与离开提示。
- `Amia-plugin-send`：消息活动统计与群活排行。

## 核心与治理组件

这些组件主要为插件之间的协作、身份、权限、审计和数据聚合提供基础能力，不作为普通用户的侧边栏入口。

### amia-core

Amia / Mizuki NoneBot 插件生态的轻量级契约层。它不直接提供用户指令，也不保存业务数据，而是统一身份模型、Provider 协议、注册表和安全调用方式，避免业务插件彼此硬编码依赖。

当前主要提供身份解析、统计、个人卡片、健康检查、权限、审计和能力清单等统一接口，并为 Provider 调用提供超时、异常隔离和耗时记录。

### Amia-plugin-permission

基于 `amia-core` 的最小权限服务。它通过静态规则判断某个身份是否拥有指定权限节点，支持 canonical 身份、未绑定平台身份、全局节点、群聊上下文节点和通配符。

当前采用默认拒绝策略；权限服务缺失、规则无效或检查异常时不会自动放行。复杂角色继承、数据库权限和网页管理仍不属于当前实现范围。

### Amia-plugin-audit

结构化审计组件，实现 `amia-core` 的 `AuditLogger` 协议，将经济、权限、账号绑定和管理操作写入独立 SQLite 审计账本。

审计记录包含操作身份、动作、目标、时间和结构化详情；敏感字段会递归脱敏。审计写入失败不会反向中断原业务操作。

### Amia-plugin-profile

统一个人信息聚合组件。它通过 `amia-core` 获取身份解析器、消息活动统计和各业务插件注册的 `ProfileProvider`，把分散信息组合成个人卡片。

该组件不会直接读取 Economy、Send、QBind 等插件的数据库；单个 Provider 超时或异常时，其他信息仍可继续生成。

### Amia-plugin-group-insight

群聊活跃分析组件。它通过 `amia-core` 获取 `Amia-plugin-send` 注册的统计 Provider，而不是直接读取 Send 的 SQLite。

当前提供最近 7 日消息总数、不同发言用户数和基础群活跃摘要；趋势图、成员留存、自动群报和 AI 内容总结仍属于后续规划，不视为已上线功能。

## 认领状态摘要

- 主体已完成：`amia-core`、`Amia-plugin-permission`、`Amia-plugin-audit`、`Amia-plugin-qbind`、`Amia-plugin-send`、`Amia-plugin-profile`、`Amia-plugin-maimaidx`、`Amia-plugin-economy`、`Amia-plugin-pjskhelp`、`MizukiBot`。
- 主体完成但待测试：`Amia-plugin-group-insight`、`Amia-plugin-welcome`。
- 已有实现但仍需完善：`Amia-plugin-meme`、`Amia-plugin-help`、`Amia-plugin-group`。
- 部分实现、需按代码继续审查：`Amia-plugin-pjskcarteam`。
- 由其他开发者认领：`Amia-plugin-maimai-coach`、`Amia-plugin-maimai-rival`，不进入待认领列表。
- 尚未正式开发：`Amia-plugin-reputation`、`Amia-plugin-season`、`Amia-plugin-group-quest`、`Amia-plugin-notify`、`Amia-plugin-status`、`Amia-plugin-feedback`、`Amia-plugin-error-watch`。

完整的仓库职责、下一步工作和工程工具分类见 [开发者招募与认领清单](/recruiting)。

## 维护边界

- `Amia-plugin-maimai-coach` 与 `Amia-plugin-maimai-rival` 由其他开发者维护，不属于本任务的开发范围。
- `Mizuki-plugin-Maimai-sync` 是当前成绩同步项目；本任务只读审查，不把它改造成 Core 或 maimaidx 的业务模块。
- 本页只记录当前活跃生态，不重新收录已废弃的 Android 客户端、旧同步项目、旧 Lxns 命名页或 `homo-qso`。

## 维护说明

- 关联项目侧边栏只保留独立客户端、网关、协议桥接和核心用户项目。
- 与功能文档重合的插件不重复展示。
- 核心与治理组件统一在项目总览中说明，不单独占用侧边栏。
- 尚未稳定或仍在迁移的能力，不应描述为已经完整上线。
