---
title: HX-Pjsk-Gateway
description: Project Sekai Web 查询网关，将 OneBot v11 数据能力转换为 RESTful 与 SSE API 服务。
---

# HX-Pjsk-Gateway

HX-Pjsk-Gateway 是 Mizuki 生态里的 Project Sekai Web 查询网关。它把 Haruki / Sakura Client 一类 OneBot v11 数据节点转换为面向网页端的 RESTful 与 SSE API 服务，让玩家可以通过 Web 页面查询 Suite 抓包数据。

## 仓库

- GitHub: [HX-Wrdzgzs/hx-pjsk-gateway](https://github.com/HX-Wrdzgzs/hx-pjsk-gateway)

## 项目定位

这个项目不是普通 Bot 插件，而是 Web 查询链路里的桥接层。它负责把 QQ / OneBot 侧已有的数据能力包装成前后端分离的 Web 服务，并处理认证、并发查询、图片转码和边缘防护。

## 技术栈

| 层级 | 技术选型 |
| :--- | :--- |
| 前端 | React, Vite, TypeScript, Zustand |
| 中间层 | FastAPI, uvloop |
| 数据引擎 | Haruki / Sakura Client, OneBot v11 |
| 鉴权节点 | NoneBot2 |
| 存储与状态 | MySQL, Redis |
| 边缘防护 | Cloudflare Pages, CF Tunnel, Turnstile, WAF |

## 核心机制

<div class="mzk-card">

### QQ 强身份认证

前端生成验证码并建立 SSE 通道，用户把验证码发送给 NoneBot2 验证节点。验证节点把真实 QQ 号回传给 FastAPI，FastAPI 完成映射并向前端下发 JWT。

</div>

<div class="mzk-card">

### 异步 Echo 查询

Web 请求会被包装成 OneBot JSON 数据包，并注入 UUID 作为 `echo` 字段。FastAPI 挂起对应 Future，等 Haruki 返回同一 `echo` 后精确唤醒 HTTP 响应。

</div>

<div class="mzk-card">

### 图片旁路渲染

网关会拦截 Haruki 响应里的本地图片路径，将图片转码为 WebP 后作为静态资源下发，减少 Web 端加载体积并改善图片展示速度。

</div>

## 开发阶段

项目 README 里规划了协议层 POC、并发控制、认证状态中心和业务全量接入四个阶段。文档站只保留架构说明和项目入口，具体部署细节应以仓库 README 为准。
