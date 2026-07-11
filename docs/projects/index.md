---
title: 关联项目
description: Mizuki Bot 与 Amia-Mizuki Dev Team 的客户端、网关、协议桥接和主要生态组件总览。
---

# 关联项目

这里整理 Mizuki Bot 生态中的主要项目。已经在“功能文档”中有独立入口的业务功能不再重复放入侧边栏；核心与治理组件统一在本页说明。

## 主要项目

### Amia-plugin-maimaidx

舞萌 DX 查分、分析与互动插件。项目原名为 `lxns_b50`，现统一使用 `Amia-plugin-maimaidx` 作为名称。主要覆盖 B50、AP50、单曲详情、战力分析、名片生成、曲目检索、进度统计和群内小游戏。

### Amia Sync Android

面向舞萌 DX 玩家的 Android 客户端，用于成绩查询、曲库筛选和玩家状态同步。

### HX-Pjsk-Gateway

Project Sekai Web 查询网关，将 OneBot 数据节点转换为网页端可使用的查询与展示能力。

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
- `Amia-plugin-homo-qso`：HAM 通联日志与中继查询。

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

## 维护说明

- 关联项目侧边栏只保留独立客户端、网关、协议桥接和核心用户项目。
- 与功能文档重合的插件不重复展示。
- 核心与治理组件统一在项目总览中说明，不单独占用侧边栏。
- 尚未稳定或仍在迁移的能力，不应描述为已经完整上线。
