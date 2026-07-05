---
title: Mizuki Plugin PJSK CarTeam
description: Mizuki Bot PJSK 协力车队自动广播、车牌识别与状态管理插件。
---

# Mizuki Plugin PJSK CarTeam

Mizuki Plugin PJSK CarTeam 是 MizukiBot-Develop 组织内的 PJSK 协力车队广播插件。它基于 NoneBot2 与 OneBot v11，负责识别车牌、维护车队状态，并把车队列表同步广播到已开启功能的群。

## 仓库

- GitHub: [MizukiBot-Develop/Mizuki-plugin-pjskcarteam](https://github.com/MizukiBot-Develop/Mizuki-plugin-pjskcarteam)

## 项目定位

这个项目主要解决 PJSK 多群协力车队的信息分发问题。群内发送符合格式的车牌后，插件会解析房间号、缺人数量、车型、战力要求、备注和时限，并向广播列表中的群同步最新车队状态。

## 核心能力

<div class="mzk-card">

### 车牌识别

通过正则识别 5 位房间号和 `q1` 至 `q4` 缺人标记，支持附带车型、战力、备注和时间信息。

</div>

<div class="mzk-card">

### 状态管理

支持车队创建、更新、满员标记、强制删除和过期清理。满员车队和超时车队会被定时任务自动清理。

</div>

<div class="mzk-card">

### 多群广播

群主、管理员或超管可以开启/关闭群广播。插件使用后台队列分发消息，降低群发时的阻塞和风控风险。

</div>

## 常用指令

| 指令 | 说明 |
| :--- | :--- |
| `开启车队广播` | 允许本群接收和发送车队广播。 |
| `关闭车队广播` | 关闭本群车队广播。 |
| `添加车队群 [群号]` | 超管添加指定群。 |
| `删除车队群 [群号]` | 超管移除指定群。 |
| `删除车队 [房间号]` / `删车 [房间号]` | 超管强制删除指定车队。 |
| `查看群列表` | 超管查看当前广播群列表。 |

## 发车格式

```text
[5位房间号] [描述] q[1-4] [备注]
```

示例：

```text
12345 龙 q3 2小时 240
```

发送 `m`、`M`、`满了` 或 `满` 可以标记当前用户最近创建的车队为满员。
