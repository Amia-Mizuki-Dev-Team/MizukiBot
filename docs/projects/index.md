---
title: 关联项目
description: Mizuki Bot 与 Amia-Mizuki Dev Team 的业务插件、客户端、网关、统计组件和基础设施项目总览。
---

# 关联项目

这里整理 Mizuki Bot 与 Amia-Mizuki Dev Team 生态中的主要项目。内容仅说明职责和维护边界，不附带外部仓库链接；部分组件只服务于开发组现有机器人环境，不代表可以直接独立部署。

## 用户功能与内容工具

### Amia-plugin-maimaidx

舞萌 DX 查询与分析组件，承担成绩、曲目、B50、AP50、单曲详情、战力分析和相关推荐能力。

### Mizuki-plugin-Maimai-sync

舞萌 DX 成绩同步组件，用于在现有 Bot 环境中完成用户成绩同步和数据整理。

### Mizuki-plugin-Maimai-Expand

舞萌 DX 扩展能力集合，用于补充主查询插件之外的分析和交互场景。

### Amia-plugin-meme

表情包与图库管理插件，支持本地图库、图片上传、删除、来源记录、分类锁定和多格式缓存整理。

### Amia-plugin-economy

群聊经济与社交互动系统，覆盖签到、任务、红包、商店、股市、拍卖、抽卡、农场、宠物、副本和成就等玩法。

### Amia-plugin-homo-qso

HAM 通联日志组件，提供呼号注册、QSO 记录、中继查询、时区处理和数据导出。

## 群聊与帮助能力

### Amia-plugin-help

帮助指令的文字前置插件，在完整图片帮助或分类帮助执行前发送简短说明，并保持后续帮助链路继续处理。

### Amia-plugin-group

群聊公告管理与自动分发插件，支持公告增删改查、统计，以及向尚未收到最新公告的群聊或私聊目标补发一次。

### Amia-plugin-welcome

群成员加入与离开提示插件，负责欢迎文案、离群提示和相关消息格式适配。

### Amia-plugin-send

消息活动统计插件，记录群聊和私聊活动，提供今日、本月、年度排行、群活跃汇总和统计数据接口。

## 核心与治理组件

### amia-core

Amia 插件体系的核心注册与共享能力层，为身份、统计、权限和其他 Provider 提供统一接入位置。

### Amia-plugin-permission

权限能力组件，用于逐步替代只依赖超管身份的粗粒度权限判断。

### Amia-plugin-audit

审计能力组件，用于记录公告、权限和其他管理操作的结构化日志。

### Amia-plugin-profile

用户资料与个人摘要组件，整合身份、活动和业务侧信息。

### Amia-plugin-group-insight

群聊洞察组件，读取统计 Provider，生成群活跃、成员参与和趋势摘要。

## 客户端、网关与基础设施

### Gensokyo NewQQ

Mizuki 官方 Bot 使用的 QQ 官方机器人客户端与协议桥接组件，承担 BotGo、HTTP API、WebSocket、WebUI 和 ID 映射等能力。

### HX-Pjsk-Gateway

Project Sekai Web 查询网关，把 OneBot 数据节点转换为网页端可使用的查询与展示能力。

### Amia Sync Android

面向舞萌 DX 玩家设计的 Android 客户端，用于成绩查询、曲库筛选和玩家状态同步。

### LXNS B50

舞萌 DX 查分与分析组件，覆盖 B50、AP50、单曲详情、战力分析、上分建议和群内互动场景。

## 维护说明

- 文档只描述项目定位、功能边界和当前维护方向。
- 内部组件不会公开运行地址、密钥、数据库结构或完整部署流程。
- 项目名称、职责和状态发生变化时，应同步更新首页、导航和本页说明。
- 尚未稳定或仍在迁移的组件，不应在用户文档中描述为已经完整上线。
