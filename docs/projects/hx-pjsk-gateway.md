---
title: HX-Pjsk-Gateway
description: Project Sekai 高性能 Web 查询网关，提供网页端 PJSK 查分、查榜服务。
---

# HX-Pjsk-Gateway (PJSK Web Bridge)

> Mizuki PJSK 查分终端 — 基于 Web 的无缝鉴权与数据可视化网关，作为 OneBot v11 / Napcat 机器人的前端延伸，让玩家通过网页端优雅、直观地获取《Project Sekai》游戏数据。


## 技术栈

| 层级 | 技术选型 |
|:---|:---|
| **前端** | React + Vite + TypeScript + Zustand |
| **中间层** | FastAPI (Python + uvloop) |
| **数据引擎** | Haruki / Sakura Client (OneBot v11) |
| **鉴权节点** | NoneBot2 |
| **存储** | MySQL, Redis |

<br>

## 核心流程

### 1. QQ 强身份认证
彻底弃用传统账号密码，利用 QQ 实现设备与游戏数据的双重绑定。用户发送验证码至 Bot，通过 SSE 实时推送 Token，无缝继承已有 Suite 数据。

### 2. 异步 Echo 查询
利用 OneBot 协议的 `echo` 字段解决单点 WebSocket 多并发上下文错乱问题。请求挂起为 `asyncio.Future`，收到对应返回包后精确唤醒，同时支持 15 秒软超时降级。

### 3. 图片旁路极速渲染
拦截 Haruki 响应中的本地图片绝对路径，实时转码为 WebP 格式（体积缩减约 80%），通过浏览器原生缓存实现秒开。

<br>

## 纵深防御

- 物理隔离风控：高频查询不连接腾讯服务器，由本地 Haruki 节点消化 OneBot 数据包，实现 0 冻结风险
- 设备级熔断：单账户上限 5 台设备的 LRU 淘汰队列
- 边缘安全：CF Tunnel 隐藏源站 + Turnstile 人机验证 + 雷池 WAF

