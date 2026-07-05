---
title: Mizuki Plugin QBind
description: QQ 官方机器人环境下的真实 QQ 号绑定插件，依赖 Gensokyo 客户端的映射能力。
---

# Mizuki Plugin QBind

Mizuki Plugin QBind 是 Mizuki 官方 Bot 环境下的账号绑定插件。它用于解决 QQ 官方机器人场景中 `event.get_user_id()` 不等于真实 QQ 号的问题，通过 `qbind` / `qunbind` 指令建立会话 ID 与真实 QQ 号的映射。

## 项目定位

这个插件属于官方 Bot 基础设施，不面向普通功能展示。它会在全局预处理阶段检查用户是否已绑定；未绑定用户只能使用绑定相关指令，其他功能会被拦截并提示先完成绑定。

## 核心能力

<div class="mzk-card">

### 全局前置绑定

插件导出 `is_bound()`、`get_real_qq()` 和 `ensure_bound()`，其他插件可以复用这些函数确认用户是否已绑定真实 QQ 号。

</div>

<div class="mzk-card">

### 二次确认流程

用户发送 `qbind <QQ号>` 后，插件会先校验 QQ 号格式，再进入两分钟有效期的确认流程，避免误绑定。

</div>

<div class="mzk-card">

### Gensokyo 映射调用

确认绑定后，插件调用本地 Gensokyo API，把会话虚拟 ID 映射到真实 QQ 号。解绑时也会通过同一接口清除映射。

</div>

<div class="mzk-card">

### Markdown 按钮适配

插件内置 Gensokyo Markdown 消息构建逻辑，可输出绑定、确认、取消和重新绑定等快捷按钮。

</div>

## 常用指令

| 指令 | 说明 |
| :--- | :--- |
| `qbind <QQ号>` | 发起真实 QQ 号绑定。 |
| `confirm_bind` | 确认当前待绑定请求。 |
| `cancel_bind` | 取消当前待绑定请求。 |
| `qunbind <QQ号>` | 发起解绑流程。 |

## 关联客户端

该插件依赖 Gensokyo 客户端提供的本地映射接口。相关说明见：

[Gensokyo NewQQ](/projects/gensokyo-newqq)
