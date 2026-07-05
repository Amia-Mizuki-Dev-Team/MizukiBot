---
title: PJSK 专项功能
description: PJSK 查分、查榜、绑定、歌曲、卡牌与活动功能说明。
---

# PJSK 专项功能

PJSK 模块主要用于查分、查榜、绑定、歌曲资料、卡牌资料和活动数据。当前功能链路参考 Haruki / Sakura 生态，具体可用指令以 Bot 内帮助为准。

::: warning 账号防丢提醒
绑定或上传数据前，请先保存自己的引继码与密码。Bot 不能找回丢失账号。
:::

## 服务器前缀

<div class="mzk-card">

不加前缀时默认使用日服。需要跨服查询时，在指令前加服务器前缀。

<div class="cmd-examples">

<div class="cmd-card">
  <span class="cmd-pill">cn绑定 123456789</span>
  <span class="cmd-desc">绑定国服账号</span>
</div>

<div class="cmd-card">
  <span class="cmd-pill">twsk 100</span>
  <span class="cmd-desc">查询台服榜线</span>
</div>

<div class="cmd-card">
  <span class="cmd-pill">en逮捕 @用户</span>
  <span class="cmd-desc">查询国际服进度</span>
</div>

</div>

常用前缀：`cn` 国服、`tw` 台服、`en` 国际服、`kr` 韩服。

</div>

## 账号与数据

<div class="mzk-card">

### 绑定

把 QQ 用户与游戏 UID 关联起来。绑定后可查询个人资料、成绩与活动数据。

<div class="cmd-examples">

<div class="cmd-card">
  <span class="cmd-pill">绑定 123456789</span>
  <span class="cmd-desc">绑定默认服务器账号</span>
</div>

<div class="cmd-card">
  <span class="cmd-pill">cn绑定 123456789</span>
  <span class="cmd-desc">绑定国服账号</span>
</div>

<div class="cmd-card">
  <span class="cmd-pill">给看 / 不给看</span>
  <span class="cmd-desc">控制他人是否可查询你</span>
</div>

</div>

</div>

<div class="mzk-card">

### 数据上传

部分查榜、组卡和 MySekai 功能需要先上传数据。上传入口和具体流程以 Bot 当前提示为准。

- 基础数据：用于成绩、排行、卡组等功能。
- MySekai 数据：用于材料分析、地图和照片相关功能。

</div>

## 玩家信息与查分

<div class="mzk-card">

### 个人资料

查看自己的游戏资料、绑定状态和基础进度。

<div class="cmd-examples">

<div class="cmd-card">
  <span class="cmd-pill">个人信息</span>
  <span class="cmd-desc">生成个人资料卡</span>
</div>

<div class="cmd-card">
  <span class="cmd-pill">cn个人信息</span>
  <span class="cmd-desc">查看国服资料</span>
</div>

<div class="cmd-card">
  <span class="cmd-pill">rk</span>
  <span class="cmd-desc">查看排位信息</span>
</div>

</div>

</div>

<div class="mzk-card">

### 成绩进度

用于查看 FC、AP、Rating 与目标进度。部分结果依赖上传数据。

<div class="cmd-examples">

<div class="cmd-card">
  <span class="cmd-pill">逮捕 @用户</span>
  <span class="cmd-desc">查询目标 FC / AP 进度</span>
</div>

<div class="cmd-card">
  <span class="cmd-pill">b39</span>
  <span class="cmd-desc">查看 Rating 最高曲目</span>
</div>

<div class="cmd-card">
  <span class="cmd-pill">pjsk b30</span>
  <span class="cmd-desc">查看另一套 Rating 统计</span>
</div>

</div>

</div>

## 活动与查榜

<div class="mzk-card">

### 活动榜线

查询活动排名、分数线和近期速度。WL 活动可按角色查询单榜。

<div class="cmd-examples">

<div class="cmd-card">
  <span class="cmd-pill">sk 100</span>
  <span class="cmd-desc">查询第 100 名分数</span>
</div>

<div class="cmd-card">
  <span class="cmd-pill">分数线 1000</span>
  <span class="cmd-desc">查看指定排名趋势</span>
</div>

<div class="cmd-card">
  <span class="cmd-pill">时速 10</span>
  <span class="cmd-desc">查看榜线近期增长</span>
</div>

<div class="cmd-card">
  <span class="cmd-pill">追踪 1 50</span>
  <span class="cmd-desc">追踪两个排名的趋势</span>
</div>

</div>

</div>

<div class="mzk-card">

### WL 与特殊活动

WL 单榜查询可在查榜指令前加 `wl`，并用 `-c` 指定角色。

示例：`wlsk 100 -c haruka`

</div>

## 歌曲与谱面

<div class="mzk-card">

### 歌曲资料

查询歌曲信息、BPM、谱面物量和难度排行。

<div class="cmd-examples">

<div class="cmd-card">
  <span class="cmd-pill">pinfo 曲名</span>
  <span class="cmd-desc">查看歌曲资料</span>
</div>

<div class="cmd-card">
  <span class="cmd-pill">pjskbpm 曲名</span>
  <span class="cmd-desc">查看 BPM</span>
</div>

<div class="cmd-card">
  <span class="cmd-pill">查物量 1000</span>
  <span class="cmd-desc">按物量查谱面</span>
</div>

<div class="cmd-card">
  <span class="cmd-pill">难度排行 level 31</span>
  <span class="cmd-desc">查看指定难度排行</span>
</div>

</div>

</div>

<div class="mzk-card">

### 谱面预览

查看谱面预览、技能分布和分数占比。默认使用 Master 难度，可加难度前缀。

<div class="cmd-examples">

<div class="cmd-card">
  <span class="cmd-pill">曲名谱面预览</span>
  <span class="cmd-desc">查看默认谱面预览</span>
</div>

<div class="cmd-card">
  <span class="cmd-pill">ex曲名谱面预览</span>
  <span class="cmd-desc">查看 Expert 谱面</span>
</div>

<div class="cmd-card">
  <span class="cmd-pill">曲名技能预览</span>
  <span class="cmd-desc">查看技能分布</span>
</div>

</div>

</div>

## 卡牌、角色与组卡

<div class="mzk-card">

### 卡牌资料

查询角色卡牌、卡面图片、技能和活动归属。

<div class="cmd-examples">

<div class="cmd-card">
  <span class="cmd-pill">查卡 宵崎奏</span>
  <span class="cmd-desc">查看角色卡牌</span>
</div>

<div class="cmd-card">
  <span class="cmd-pill">card 123</span>
  <span class="cmd-desc">查看指定卡面</span>
</div>

<div class="cmd-card">
  <span class="cmd-pill">cardinfo 123</span>
  <span class="cmd-desc">查看卡牌信息</span>
</div>

</div>

</div>

<div class="mzk-card">

### 组卡推荐

根据活动、歌曲、属性或角色生成推荐卡组。需要上传数据。

<div class="cmd-examples">

<div class="cmd-card">
  <span class="cmd-pill">组卡 ln 橙</span>
  <span class="cmd-desc">按队伍与属性组卡</span>
</div>

<div class="cmd-card">
  <span class="cmd-pill">活动组卡 龙 hard</span>
  <span class="cmd-desc">按当前活动组卡</span>
</div>

<div class="cmd-card">
  <span class="cmd-pill">挑战组卡 ick</span>
  <span class="cmd-desc">每日挑战组卡</span>
</div>

<div class="cmd-card">
  <span class="cmd-pill">最强组卡</span>
  <span class="cmd-desc">查看高分卡组</span>
</div>

</div>

</div>

## MySekai

<div class="mzk-card">

MySekai 功能依赖额外数据。常用于材料分析、地图资源和照片查看。

<div class="cmd-examples">

<div class="cmd-card">
  <span class="cmd-pill">ms分析</span>
  <span class="cmd-desc">分析材料情况</span>
</div>

<div class="cmd-card">
  <span class="cmd-pill">msa2</span>
  <span class="cmd-desc">新版分析界面</span>
</div>

<div class="cmd-card">
  <span class="cmd-pill">ms地图 1</span>
  <span class="cmd-desc">生成资源分布图</span>
</div>

<div class="cmd-card">
  <span class="cmd-pill">ms照片 1</span>
  <span class="cmd-desc">查看游戏内照片</span>
</div>

</div>

</div>

## 别名与群内设置

<div class="mzk-card">

别名会影响全局或本群查询。设置前请确认名称准确，避免影响其他用户。

<div class="cmd-examples">

<div class="cmd-card">
  <span class="cmd-pill">musicset 新 to 旧</span>
  <span class="cmd-desc">设置歌曲别名</span>
</div>

<div class="cmd-card">
  <span class="cmd-pill">charaset 新 to 旧</span>
  <span class="cmd-desc">设置角色别名</span>
</div>

<div class="cmd-card">
  <span class="cmd-pill">grcharaset 新 to 旧</span>
  <span class="cmd-desc">设置本群角色别名</span>
</div>

<div class="cmd-card">
  <span class="cmd-pill">charalias 昵称</span>
  <span class="cmd-desc">查看角色别名</span>
</div>

</div>

</div>

## 轻量互动

<div class="mzk-card">

这些功能用于群内娱乐和随机推荐，不影响游戏账号数据。

<div class="cmd-examples">

<div class="cmd-card">
  <span class="cmd-pill">pjsk听歌识曲</span>
  <span class="cmd-desc">听片段猜歌</span>
</div>

<div class="cmd-card">
  <span class="cmd-pill">pjsk猜卡面</span>
  <span class="cmd-desc">看局部猜角色</span>
</div>

<div class="cmd-card">
  <span class="cmd-pill">看 宵崎奏</span>
  <span class="cmd-desc">随机返回角色卡图</span>
</div>

<div class="cmd-card">
  <span class="cmd-pill">随个 31</span>
  <span class="cmd-desc">随机指定等级歌曲</span>
</div>

</div>

</div>

## 使用建议

<div class="mzk-card">

- 想查自己：先绑定，再用 `个人信息`。
- 想查活动：用 `sk`、`分数线`、`时速`。
- 想查歌曲：用 `pinfo`、`pjskbpm`、`谱面预览`。
- 想组卡：先上传数据，再用 `组卡` 或 `活动组卡`。
- 不确定指令：在 Bot 内发送 PJSK 帮助菜单。

</div>
