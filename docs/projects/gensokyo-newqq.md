---
title: Gensokyo NewQQ
description: Mizuki 官方 Bot 使用的 QQ 官方机器人客户端与 OneBot 桥接组件。
---

# Gensokyo NewQQ

Gensokyo NewQQ 是 Mizuki 官方 Bot 使用的 QQ 官方机器人客户端与协议桥接组件。它基于 Go 编写，使用 Tencent BotGo 接入 QQ 官方机器人能力，并提供 WebUI、HTTP API、WebSocket、ID 映射和消息处理等基础模块。

## 仓库

- GitHub: [HX-Wrdzgzs/Gensokyo-NewQQ](https://github.com/HX-Wrdzgzs/Gensokyo-NewQQ)

## 项目定位

这个项目位于官方 Bot 运行链路底层。上层插件通过它获得 QQ 官方机器人客户端能力，并在需要时调用本地接口完成 ID 映射、消息下发和协议转换。

## 核心能力

<div class="mzk-card">

### QQ 官方机器人接入

项目依赖 Tencent BotGo，并在主程序中初始化 openapi、websocket、event、token 等模块，用于连接 QQ 官方机器人能力。

</div>

<div class="mzk-card">

### OneBot 与 WebSocket 链路

项目包含 HTTP API、WebSocket client/server、echo、handlers、Processor 等模块，用于承接上层 Bot 插件和协议事件处理。

</div>

<div class="mzk-card">

### ID 映射能力

项目包含 `idmap` 模块，并被 QBind 插件用于把官方 Bot 会话虚拟 ID 映射到真实 QQ 号。

</div>

<div class="mzk-card">

### WebUI 与配置管理

主程序会初始化 WebUI 数据库，加载 `config.yml`，并支持配置热重载与启动参数。

</div>

## 关联插件

Gensokyo NewQQ 是 QBind 插件的底层依赖之一。相关说明见：

[Mizuki Plugin QBind](/projects/mizuki-plugin-qbind)
