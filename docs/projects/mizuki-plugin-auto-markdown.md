---
title: Mizuki Plugin Auto Markdown
description: 面向 Mizuki Bot 官方版的 QQ 原生 Markdown 转换插件。
---

# Mizuki Plugin Auto Markdown

Mizuki Plugin Auto Markdown 是 MizukiBot-Develop 组织内的官方版适配插件，用于把标准信息转换为 QQ 原生 Markdown 展示。

## 仓库

- GitHub: [MizukiBot-Develop/Mizuki-plugin-Auto-Markdown](https://github.com/MizukiBot-Develop/Mizuki-plugin-Auto-Markdown)

## 项目定位

该插件只对 Mizuki Bot 官方版做适配，主要用于把常见 URL 转换为 QQ 原生 Markdown 格式，并对 Mai-Sync 插件场景做专属适配。

## 当前能力

<div class="mzk-card">

### URL Markdown 转换

支持将大部分 URL 转换为 QQ 原生 Markdown 展示形式，用于改善官方 Bot 的消息展示体验。

</div>

<div class="mzk-card">

### Mai-Sync 适配

包含面向 Mai-Sync 插件的专属适配逻辑。

</div>

## 维护说明

当前实现主要基于关键词检索替换。后续维护时建议逐步补充规则边界、测试样例和失败降级说明，避免 Markdown 展示行为不可控。
