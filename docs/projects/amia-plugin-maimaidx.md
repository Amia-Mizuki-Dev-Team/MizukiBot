---
title: Amia-plugin-maimaidx
description: Mizuki Bot 生态中的舞萌 DX 查分、分析与互动插件。
---

# Amia-plugin-maimaidx

`Amia-plugin-maimaidx` 是开发组内部维护的 NoneBot2 舞萌 DX 查分与分析插件。项目原名为 `lxns_b50`，现统一使用 `Amia-plugin-maimaidx` 作为项目名称。

项目集成 LXNS 与 Diving-Fish 双数据源，用于成绩查询、战力分析、名片生成、曲目检索、进度统计和群内小游戏等场景。

## 当前状态

主体已完成。历史 NoneBot 插件标识符仍为 `lxns_b50`；账号绑定由 `maimai_sync` 和 qbind 负责，maimaidx 不实现第二套账号绑定系统。后续仅记录具体缺陷和集成验证，不把项目列入待开发。

## 核心能力

### 成绩查询

支持 B50、AP50、单曲详情、谱面统计和分数线计算。

### 玩家分析

支持个人名片、Rating 曲线、绑定状态诊断、数据源切换、战力排行、成绩分析、近期成绩速报和高难底力分析。

### 曲目与进度

支持曲名与 ID 检索、定数与 BPM 查询、版本完成表、等级进度和上分推荐。

### 群内互动

支持猜歌、猜曲绘、听歌猜歌和别名猜歌等互动功能。

## 维护状态

- 当前面向开发组现有机器人环境维护。
- 依赖 LXNS、Diving-Fish、曲库资源和消息适配层。
- 不提供公开通用部署说明。
- 仓库当前尚未选择开源许可证。
