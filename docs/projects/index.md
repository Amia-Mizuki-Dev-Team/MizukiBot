---
title: 关联项目
description: Mizuki Bot 与 Amia-Mizuki Dev Team 的客户端、网关、协议桥接和主要生态组件总览。
---

# 关联项目

这里整理 Mizuki Bot 生态中适合单独查看的客户端、网关、协议桥接和主要项目。已经在“功能文档”中有独立入口的业务功能，不再重复放入侧边栏。

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

## 内部基础组件

以下组件主要服务于开发组内部架构，不作为普通用户的侧边栏入口：

- `amia-core`
- `Amia-plugin-permission`
- `Amia-plugin-audit`
- `Amia-plugin-profile`
- `Amia-plugin-group-insight`

## 维护说明

- 关联项目侧边栏只保留独立客户端、网关、协议桥接和核心用户项目。
- 与功能文档重合的插件不重复展示。
- 内部维护组件只在本页说明，不提供独立导航入口。
- 尚未稳定或仍在迁移的组件，不应描述为已经完整上线。
