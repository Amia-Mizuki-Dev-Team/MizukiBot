---
title: Amia Plugin Homo QSO
description: Mizuki Bot 无线电日志插件，HAM 通联记录管理工具。
---

# Amia Plugin Homo QSO

> 无线电日志 (QSO) 通联管理插件，支持呼号注册、通联记录、中继查询等功能。

## 仓库

- GitHub: [Amia-Mizuki-Dev-Team/Amia-plugin-homo-qso](https://github.com/Amia-Mizuki-Dev-Team/Amia-plugin-homo-qso)

## 功能特性

- 呼号注册与管理
- QSO 通联记录录入与查询
- 智能文本解析（自动识别频率、呼号、RST、卫星等）
- 中继台数据查询（内置全国中继数据库）
- 数据导出（Excel）
- 个人预设（设备/功率）
- 多时区支持（UTC / UTC+8）
- 卫星通联支持
- 定时自动备份

## 指令列表

| 指令 | 说明 |
| :--- | :--- |
| `qso帮助` | 查看帮助菜单 |
| `注册呼号 [呼号]` | 注册个人呼号 |
| `qso [内容]` | 录入通联记录（支持批量） |
| `查看qso` | 查看最近 20 条通联记录 |
| `导出qso` | 导出 Excel 格式通联日志 |
| `修改qso [ID]` | 修改指定记录 |
| `删除qso [ID]` / `删除qso [起]-[止]` | 删除指定记录 |
| `解绑呼号` | 注销当前呼号 |
| `设置 设备 [名] 功率 [值]` | 设置个人预设 |
| `修改时区 UTC / UTC+8` | 切换时区 |
| `查中继 [地名]` | 查询中继台数据 |
| `开启本群QSO` / `关闭本群QSO` | 群白名单管理 |
| `重载中继库` | 重新导入中继数据 |