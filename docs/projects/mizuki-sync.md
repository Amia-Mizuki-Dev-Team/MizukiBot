---
title: Mizuki Sync (已废弃)
description: MizukiSync 舞萌 DX Android 查分工具，已停止维护。
---

# Mizuki Sync (舞萌同步) — 已废弃

::: danger 项目废弃声明
本项目已正式停止维护，不再提供任何更新和技术支持。以下内容仅作历史存档。
:::

> MizukiSync 是一款专为舞萌 DX (maimai DX) 玩家设计的 Android 第三方客户端，通过对接落雪查分器 (LXNS) API，为玩家提供流畅的成绩查询与曲库管理体验。

<br>

## 核心特性

- **现代化交互 UI**：六宫格清晰布局，玩家名片全景展示（Rating、段位、阶级、底板、头像、称号跑马灯）
- **极速曲库与智能筛选**：支持定数范围、游戏版本、乐曲分类三重联合筛选，服务端定时拉取官方数据
- **成绩同步与追踪**：一键同步最新玩家状态，直观展示最新游玩成绩、单曲达成率与评级
- **极致的安全架构**：客户端完全脱敏，不包含任何第三方开发者 API Key；服务端每日自动清洗落雪数据

<br>

## 架构说明

| 组件 | 技术栈 |
|:---|:---|
| **Android 客户端** | Kotlin, RecyclerView, CardView, Coroutines, OkHttp, Glide |
| **后端服务** | Python FastAPI, Uvicorn, 数据清洗守护进程 |

