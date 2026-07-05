---
title: Mizuki Economy
description: NoneBot2 群聊经济与社交互动插件，适配 QQ 官方机器人原生 UI。
---

# Mizuki Economy

Mizuki Economy 是 Mizuki 生态中的群聊经济与社交互动插件。项目基于 NoneBot2，面向 QQ 官方机器人做了原生 Markdown 与内联按钮适配，同时保留非官方实例的纯文本降级能力。

## 仓库

- GitHub: [HX-Wrdzgzs/MIzuki-Econmy](https://github.com/HX-Wrdzgzs/MIzuki-Econmy)

## 项目定位

这个项目承载 Mizuki Bot 的 25 时经济系统。它不是单一签到插件，而是一套包含资产、社交、经营、收集和活动的群内虚拟经济模型。

## 核心能力

<div class="mzk-card">

### 官方 Bot UI 适配

在 QQ 官方机器人实例下输出原生 Markdown 与内联按钮；在非官方实例下自动降级为纯文本，保证多实例兼容。

</div>

<div class="mzk-card">

### 异步图像渲染

基于 Pillow 绘制签到面板、个人信息卡片、打工结算、背包、排行榜和卡牌图鉴等图片 UI。

</div>

<div class="mzk-card">

### 数据一致性

底层支持 MySQL / InnoDB，并在多人同时操作的场景中使用事务和行级锁，降低并发写入导致的数据错误。

</div>

<div class="mzk-card">

### 群内互动玩法

包含签到、打工、转账、群内活动、商城、贷款、股票、每日任务、成就、抽卡、农场、宠物、副本、探索和日记墙等模块。

</div>

## 用户文档

经济系统的具体指令请查看：

[经济系统功能文档](/features/economy)

## 维护说明

项目 README 中包含依赖、数据库配置、本地降级存储和更新日志。文档站保留概览；部署、运行和更新细节应以仓库 README 为准。
