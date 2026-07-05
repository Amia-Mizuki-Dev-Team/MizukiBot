---
title: Mizuki 25时经济系统
description: Mizuki Bot 的群内虚拟积分、任务、收集与互动系统说明。
---

# Mizuki 25时经济系统

> 这是 Mizuki Bot 的群内虚拟积分与养成系统。积分、道具、卡牌和市场数据都只用于 Bot 内部互动，不对应现实货币，不提供反向兑换，也不承诺任何现实收益。

<div class="mzk-alert">
<strong>说明：</strong>本页是经济系统概览与使用边界说明，不再作为完整命令手册。实际可用指令、别名和权限范围请以 Bot 内 <code>经济帮助</code> 菜单为准。
</div>

<div class="mzk-alert">
<strong>合规说明：</strong>经济系统中的 PC、道具和收集内容均为虚拟互动数据，只能在 Mizuki Bot 场景内使用。请勿将其与现实货币、线下交易或外部资产绑定。
</div>

## 设计边界

<div class="mzk-card">

### 虚拟积分三条底线

系统内积分只作为内部交互单位使用。它不挂钩人民币，不跨平台流通，也不设计保本、付息或现实收益机制。

</div>

<div class="mzk-card">

### 风险隔离

所有高风险叙事都应被降级为内部模拟或数据展示。页面不宣传现实投资，不鼓励频繁投机，也不提供任何现实兑换入口。

</div>

<div class="mzk-card">

### 防沉迷取向

经济系统的目标是提供轻量互动、成长记录和虚拟生态调节，而不是制造持续刺激。后续功能应优先考虑冷却、限额、提示和管理员干预空间。

</div>

## 基础入口

<div class="cmd-examples">

<div class="cmd-card">
  <span class="cmd-pill">经济帮助</span>
  <span class="cmd-desc">查看经济系统菜单</span>
</div>

<div class="cmd-card">
  <span class="cmd-pill">签到</span>
  <span class="cmd-desc">每日签到，获取基础积分与运势信息</span>
</div>

<div class="cmd-card">
  <span class="cmd-pill">打工</span>
  <span class="cmd-desc">消耗体力，获取额外积分</span>
</div>

<div class="cmd-card">
  <span class="cmd-pill">个人信息</span>
  <span class="cmd-desc">查看等级、积分、背包和近期记录</span>
</div>

<div class="cmd-card">
  <span class="cmd-pill">我的背包</span>
  <span class="cmd-desc">查看已持有的虚拟道具</span>
</div>

<div class="cmd-card">
  <span class="cmd-pill">排行榜</span>
  <span class="cmd-desc">查看群内积分排行</span>
</div>

</div>

## 任务与成长

<div class="mzk-card">

### 每日任务

通过 `每日任务` 查看当天可完成事项；完成后使用 `领取奖励` 领取对应积分或道具奖励。

</div>

<div class="mzk-card">

### 成就系统

使用 `成就墙` 或 `成就列表` 查看成长进度。成就系统用于记录长期参与情况，不与现实收益挂钩。

</div>

<div class="mzk-card">

### 每日问答

使用 `每日问答` 查看题目并提交答案。该模块用于轻量互动和日常活跃。

</div>

## 经营与收集

<div class="cmd-examples">

<div class="cmd-card">
  <span class="cmd-pill">农场</span>
  <span class="cmd-desc">查看自己的农场状态</span>
</div>

<div class="cmd-card">
  <span class="cmd-pill">种植 c01</span>
  <span class="cmd-desc">种植指定作物</span>
</div>

<div class="cmd-card">
  <span class="cmd-pill">收菜</span>
  <span class="cmd-desc">收获成熟作物</span>
</div>

<div class="cmd-card">
  <span class="cmd-pill">宠物</span>
  <span class="cmd-desc">查看宠物状态</span>
</div>

<div class="cmd-card">
  <span class="cmd-pill">领养宠物 p01</span>
  <span class="cmd-desc">领养指定宠物</span>
</div>

<div class="cmd-card">
  <span class="cmd-pill">喂食</span>
  <span class="cmd-desc">照顾自己的宠物</span>
</div>

</div>

## 虚拟市场模拟

<div class="mzk-card">

### 模拟定位

虚拟市场模块用于模拟价格波动、供需变化和系统内流动性，不是现实股市入口，也不是投资建议。它只能使用 Bot 内部积分参与，且不得与现实资产形成兑换关系。

</div>

<div class="mzk-card">

### 风险筛查

市场相关功能需要经过风险筛查：禁止纯方向性对冲玩法，禁止现实货币入口，禁止以收益承诺诱导参与。页面只保留规则解释和风险边界，不使用“稳赚”“翻倍”“回本”等表述。

</div>

<div class="mzk-card">

### 宏观调节

系统设计可以参考“水龙头 / 蓄水池”模型：签到、任务等是积分来源；商城、维护费、道具消耗等是积分回收渠道。两者需要保持平衡，避免虚拟通胀和新用户进入门槛过高。

</div>

<div class="mzk-card">

### 健康参与

市场模块应保留冷却、限额、异常行为提示和管理员干预空间。它的目标是风险教育与虚拟生态模拟，而不是制造高频刺激。

</div>

## 卡牌与图鉴

<div class="mzk-card">

### PJSK 卡牌收集

卡牌模块用于收集和图鉴展示。可使用 `单抽`、`十连`、`我的卡牌`、`卡牌图鉴`、`合成` 等指令管理自己的卡牌数据。

</div>

<div class="mzk-card">

### 商城与道具

使用 `结算订单` 购买商城内的虚拟道具，使用 `使用` 或 `使用道具` 消耗背包中的道具。

</div>

## 社区互动

<div class="cmd-examples">

<div class="cmd-card">
  <span class="cmd-pill">写日记</span>
  <span class="cmd-desc">记录一条公开日记</span>
</div>

<div class="cmd-card">
  <span class="cmd-pill">树洞</span>
  <span class="cmd-desc">发送一条匿名树洞内容</span>
</div>

<div class="cmd-card">
  <span class="cmd-pill">日记墙</span>
  <span class="cmd-desc">查看最近日记与树洞</span>
</div>

<div class="cmd-card">
  <span class="cmd-pill">共鸣 3</span>
  <span class="cmd-desc">给指定编号内容添加互动反馈</span>
</div>

</div>

## 管理与维护

<div class="mzk-card">

### 统计与配置

管理员可使用 `经济统计` 查看整体运行情况。涉及用户数据或积分调整的管理指令应谨慎使用，并保留必要的操作记录。

</div>

<div class="mzk-card">

### CDK 兑换

`兑换CDK` 用于兑换系统生成的虚拟道具或活动奖励。CDK 仅限 Mizuki Bot 内部场景使用。

</div>

## Web API 与独立工具

<div class="mzk-card">

### Web API

`GET /economy/rank` 可返回 JSON 格式排行榜数据，用于页面展示或内部统计。

</div>

<div class="mzk-card">

### 卡牌数据工具

`python -m src.plugins.Mizuki-Econmy.crawl_cards` 用于缓存 PJSK 卡牌数据，供卡牌图鉴与相关展示功能使用。

</div>
