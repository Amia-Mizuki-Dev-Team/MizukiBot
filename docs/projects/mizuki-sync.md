---
title: Mizuki Sync Android
description: 面向舞萌 DX 玩家设计的 Android 第三方客户端，基于 LXNS API 与后端数据清洗服务。
---

# Mizuki Sync Android

Mizuki Sync Android 是面向舞萌 DX 玩家设计的 Android 第三方客户端。项目通过对接落雪查分器 (LXNS) API，为玩家提供成绩查询、曲库筛选、玩家状态同步和数据展示能力。

## 仓库

- GitHub: [HX-Wrdzgzs/Mizuki-Sync-Android](https://github.com/HX-Wrdzgzs/Mizuki-Sync-Android)

## 项目定位

这个项目采用前后端分离架构。Android 客户端只负责 UI 渲染、本地缓存和请求发起；后端负责数据清洗、版本去重、公共数据分发和涉密 API Key 管理，避免客户端直接暴露第三方开发者密钥。

## 核心能力

<div class="mzk-card">

### Android 客户端

使用 Kotlin 构建，核心组件包括 RecyclerView、CardView、Coroutines、OkHttp 和 Glide。客户端负责玩家名片、曲库列表、筛选条件和成绩信息展示。

</div>

<div class="mzk-card">

### 曲库与筛选

支持定数范围、游戏版本和乐曲分类等筛选。后端会定时拉取落雪数据并生成规范化字典，减少客户端硬编码。

</div>

<div class="mzk-card">

### 成绩同步

支持同步玩家状态，并在主页展示最新游玩成绩、单曲达成率和评级等数据。

</div>

## 架构说明

| 组件 | 技术栈 |
| :--- | :--- |
| Android 客户端 | Kotlin, RecyclerView, CardView, Coroutines, OkHttp, Glide |
| 后端服务 | FastAPI, Uvicorn |
| 数据来源 | LXNS API |
| 后台任务 | `lxns_update.py` 定时同步与清洗曲目数据 |

## 维护说明

文档站只保留项目定位和架构说明。具体后端部署、客户端编译和 API Key 配置以仓库 README 为准。
