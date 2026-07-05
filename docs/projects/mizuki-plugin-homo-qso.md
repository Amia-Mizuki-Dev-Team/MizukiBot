---
title: Mizuki Plugin Homo QSO
description: Mizuki Bot 无线电日志插件，HAM 通联记录与中继查询工具。
---

# Mizuki Plugin Homo QSO

Mizuki Plugin Homo QSO 是 MizukiBot-Develop 组织内的 HAM 无线电日志插件。它基于 NoneBot2 与 OneBot v11，提供呼号注册、QSO 通联记录、日志查看、Excel 导出、中继查询和群白名单控制。

## 仓库

- GitHub: [MizukiBot-Develop/Mizuki-plugin-homo-qso](https://github.com/MizukiBot-Develop/Mizuki-plugin-homo-qso)

## 项目定位

这个项目面向有无线电通联记录需求的用户。插件会把用户呼号、通联记录、设备功率预设和中继信息写入数据库，并支持在群内通过指令完成记录、查询和导出。

## 核心能力

<div class="mzk-card">

### 呼号与个人预设

支持注册呼号、解绑呼号，以及设置常用设备和功率。录入 QSO 时可以复用个人预设，减少重复输入。

</div>

<div class="mzk-card">

### QSO 日志管理

支持通联记录录入、最近记录查看、指定记录修改、单条或范围删除，并可导出 Excel 文件。

</div>

<div class="mzk-card">

### 时间与数据展示

支持 UTC 与 UTC+8 时区选择。查看记录时会把最近日志渲染为图片，方便在群内阅读。

</div>

<div class="mzk-card">

### 中继查询

内置中继数据初始化逻辑，支持按地名或名称模糊查询中继，并允许超管重载中继库。

</div>

## 常用指令

| 指令 | 说明 |
| :--- | :--- |
| `qso帮助` | 查看使用说明。 |
| `注册呼号 [呼号]` | 注册个人呼号。 |
| `qso [内容]` | 录入通联记录，支持批量文本解析。 |
| `查看qso` | 查看最近 20 条通联记录。 |
| `导出qso` | 导出 Excel 格式通联日志。 |
| `修改qso [ID]` | 修改指定记录。 |
| `删除qso [ID]` / `删除qso [起]-[止]` | 删除指定记录。 |
| `解绑呼号` | 注销当前呼号。 |
| `设置 设备 [名] 功率 [值]` | 设置个人设备和功率预设。 |
| `修改时区 UTC / UTC+8` | 切换记录显示时区。 |
| `查中继 [地名]` | 查询中继台数据。 |
| `开启本群QSO` / `关闭本群QSO` | 超管控制群白名单。 |
| `重载中继库` | 超管重新导入中继数据。 |
