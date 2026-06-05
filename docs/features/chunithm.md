---
title: 中二节奏专项
description: 中二节奏查分、查歌、B30 等功能的用法说明。
---

# 🎹 中二节奏 (Chunithm)

> 中二节奏（Chunithm）的查分和查歌功能，目前只支持国服。

<br>

::: info 💡 数据来源说明
目前中二节奏模块 **仅支持国服**，所有数据均完全来源于 [水鱼查分器 (diving-fish)](https://www.diving-fish.com/)。
:::

<div class="mzk-card mzk-card--yellow">
  <h3>🏆 个人成绩与 Rating</h3>
  <p>用于查询您在国服的当前个人实力数据。</p>

<div class="mzk-table-wrapper">

| 指令 | 说明 | 示例 |
| :--- | :--- | :--- |
| `chu b30` | 查询个人 B30、R10 成绩记录以及总 Rating | `chu b30` |

</div>
</div>

<div class="mzk-card mzk-card--red">
  <h3>🎶 歌曲与谱面信息</h3>
  <div class="mzk-alert">⚠️ <strong>注意：</strong> <code>chuinfo</code> 和 <code>chuchart</code> <strong>必须使用歌曲 ID</strong> 进行查询。</div>

<div class="mzk-table-wrapper">

| 指令 | 说明 | 示例 |
| :--- | :--- | :--- |
| `chu [曲名]` | 查询歌曲 ID (不区分大小写，仅匹配歌曲名称) | `chu 祈愿` |
| `chuinfo [ID]` | 查询歌曲基本信息 (仅支持 ID 查询) | `chuinfo 1145` |
| `chuchart [ID]` | 查询歌曲谱面 (仅支持 ID 查询)。默认返回 master 难度 | `chuchart 1145` |
| `chuchart [ID][难度]` | 添加 <code>ex</code>, <code>ma</code>, <code>ult</code> 后缀查看 Expert/Master/Ultima 难度 | `chuchart 1145ult` |

</div>
</div>


