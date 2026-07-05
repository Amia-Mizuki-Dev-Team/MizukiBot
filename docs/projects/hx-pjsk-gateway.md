---
title: HX-Pjsk-Gateway
description: Project Sekai Web 查询网关，将 OneBot v11 数据能力转换为网页端 API 服务。
---

# HX-Pjsk-Gateway

HX-Pjsk-Gateway 是 Mizuki 生态里的 Project Sekai Web 查询网关。它把 Haruki / Sakura Client 一类 OneBot v11 数据节点转换为网页端可用的 API 服务，让玩家可以通过 Web 页面查询 Suite 抓包数据。

## 仓库

- GitHub: [HX-Wrdzgzs/hx-pjsk-gateway](https://github.com/HX-Wrdzgzs/hx-pjsk-gateway)

## 项目定位

这个项目不是普通 Bot 插件，而是 Web 查询链路里的桥接层。它负责把 QQ / OneBot 侧已有的数据能力包装成前后端分离的 Web 服务，并处理网页端查询、状态推送和图片展示。

## 技术栈

| 层级 | 技术选型 |
| :--- | :--- |
| 前端 | React, Vite, TypeScript, Zustand |
| 中间层 | FastAPI, uvloop |
| 数据引擎 | Haruki / Sakura Client, OneBot v11 |
| 状态存储 | MySQL, Redis |

## 核心机制

<div class="mzk-card">

### Web 查询桥接

前端请求由 FastAPI 接收，再被转换为 OneBot 数据包交给底层数据节点处理，最后把结果返回给网页端。

</div>

<div class="mzk-card">

### Echo 异步查询

项目使用 OneBot 协议中的 `echo` 字段区分并发请求。每个请求会挂起等待对应返回，收到匹配结果后再唤醒响应。

</div>

<div class="mzk-card">

### 图片旁路渲染

网关会把查询结果中的本地图片转换为 Web 端更适合展示的静态资源，减少页面加载压力。

</div>

## 维护说明

文档站只保留架构说明和项目入口。具体部署、接口与开发阶段应以仓库 README 为准。
