---
title: PJSK 专项功能
description: Project Sekai 查分、查榜、绑定、歌曲、卡牌、MySekai 与活动功能说明。
---

# Project Sekai 专项功能

Project Sekai 是 Mizuki Bot 最早开始研发的模块，也是目前功能和特性最多的模块。本页以 Sakura 功能清单为主参考，按使用场景重新整理；完整指令、别名和区服支持以 Bot 内帮助为准。

::: warning 账号防丢提醒
绑定或上传数据前，请先保存自己的引继码与密码。Bot 不能找回丢失账号。
:::

## 基础规则

<div class="mzk-card">

### 区服前缀

用户数据相关功能可以加 `tw` / `cn` 前缀触发台服或国服对应功能。不加前缀时通常按默认区服处理。部分国服、台服功能有独立特性，具体以功能说明和 Bot 返回为准。

<div class="cmd-examples">

<div class="cmd-card"><span class="cmd-pill">cn绑定 123456789</span><span class="cmd-desc">绑定国服账号</span></div>
<div class="cmd-card"><span class="cmd-pill">tw个人信息</span><span class="cmd-desc">查看台服个人信息</span></div>
<div class="cmd-card"><span class="cmd-pill">cn逮捕 @用户</span><span class="cmd-desc">查询国服进度</span></div>

</div>

</div>

<div class="mzk-card">

### @ 查询

没有参数的用户数据功能通常可以被 @ 使用。查询他人前请注意对方是否开启 `给看`。

</div>

## 用户数据

<div class="mzk-card">

### 绑定与权限

通过 `绑定 ID` 绑定账号。ID 可在游戏内个人信息页查看。绑定后默认为 `不给看`，无法被他人 @ 查询。

已支持多 ID 绑定，可用 `切绑定` / `解绑` 管理默认 ID。

<div class="cmd-examples">

<div class="cmd-card"><span class="cmd-pill">绑定 123456789</span><span class="cmd-desc">绑定默认区服账号</span></div>
<div class="cmd-card"><span class="cmd-pill">切绑定</span><span class="cmd-desc">切换默认绑定 ID</span></div>
<div class="cmd-card"><span class="cmd-pill">解绑</span><span class="cmd-desc">管理已绑定账号</span></div>
<div class="cmd-card"><span class="cmd-pill">给看 / 不给看</span><span class="cmd-desc">开放或关闭他人查询权限</span></div>

</div>

</div>

<div class="mzk-card">

### 基础信息

<div class="cmd-examples">

<div class="cmd-card"><span class="cmd-pill">id</span><span class="cmd-desc">返回当前 QQ 号绑定 ID</span></div>
<div class="cmd-card"><span class="cmd-pill">pjskprofile</span><span class="cmd-desc">获取个人信息图</span></div>
<div class="cmd-card"><span class="cmd-pill">视奸</span><span class="cmd-desc">查看当前队伍综合力及构成</span></div>
<div class="cmd-card"><span class="cmd-pill">查时间</span><span class="cmd-desc">查询当前绑定 ID 注册时间</span></div>

</div>

</div>

<div class="mzk-card">

### 进度与 Rating

`逮捕` 可查询 Expert / Master 的 FC、AP 进度。上传数据后，可查询更完整的高难度 FC / AP、排位与统计信息。

<div class="cmd-examples">

<div class="cmd-card"><span class="cmd-pill">逮捕 @用户</span><span class="cmd-desc">查询 FC / AP 进度</span></div>
<div class="cmd-card"><span class="cmd-pill">rk</span><span class="cmd-desc">获取玩家排位信息</span></div>
<div class="cmd-card"><span class="cmd-pill">b39</span><span class="cmd-desc">查看 Rating 最高 39 首曲目</span></div>
<div class="cmd-card"><span class="cmd-pill">pjsk b30</span><span class="cmd-desc">查看另一套 Rating 统计</span></div>

</div>

`b39` 和 `pjsk b30` 算法不同，仅供参考。

</div>

<div class="mzk-card">

### b30 / b39 排除列表

可将指定歌曲从当前绑定 ID 的 `b30` / `b39` 统计中排除，支持曲名或歌曲 ID。

<div class="cmd-examples">

<div class="cmd-card"><span class="cmd-pill">b30删歌 曲名</span><span class="cmd-desc">排除指定歌曲</span></div>
<div class="cmd-card"><span class="cmd-pill">b30恢复歌 曲名</span><span class="cmd-desc">恢复被排除歌曲</span></div>
<div class="cmd-card"><span class="cmd-pill">b30还原歌 曲名</span><span class="cmd-desc">恢复被排除歌曲</span></div>
<div class="cmd-card"><span class="cmd-pill">b30删歌列表</span><span class="cmd-desc">查看当前排除列表</span></div>

</div>

</div>

<div class="mzk-card">

### 详细数据

<div class="cmd-examples">

<div class="cmd-card"><span class="cmd-pill">pjsk进度</span><span class="cmd-desc">查询 Master 完成情况</span></div>
<div class="cmd-card"><span class="cmd-pill">pjsk进度ex</span><span class="cmd-desc">查询 Expert 完成情况</span></div>
<div class="cmd-card"><span class="cmd-pill">pjsk进度apd</span><span class="cmd-desc">查询 Append 完成情况</span></div>
<div class="cmd-card"><span class="cmd-pill">pjskdetail</span><span class="cmd-desc">获取个人详细信息</span></div>
<div class="cmd-card"><span class="cmd-pill">pjskcard</span><span class="cmd-desc">获取个人卡牌图鉴</span></div>
<div class="cmd-card"><span class="cmd-pill">pjskevent</span><span class="cmd-desc">获取个人活动记录</span></div>

</div>

`pjsk进度` 支持 AP、FC、Clear、All 状态统计；Expert / Append 可分别使用 `pjsk进度ex` 和 `pjsk进度apd`。`pjskdetail` 可能包含金币、水晶、家具练度、每日挑战进度等信息，介意公开展示时建议私聊查询。`pjskcard` 可追加角色花名查看单角色图鉴。

</div>

## 数据上传

<div class="mzk-card">

上传数据后，可使用查榜、Rating、组卡、MySekai 等进阶功能。

- 日服 / 台服：进入上传页面查看教程。
- 日服：可直接把引继信息复制给 Bot 完成上传，需要重新引继一次。
- 上传 suite 后，可查询上传时的数据；后续说明不再重复标注。

</div>

## MySekai

<div class="mzk-card">

上传 MySekai 数据后可使用以下功能。当前仅 JP 完整支持；TW / CN 目前仅预留指令入口，上传接口和完整业务逻辑尚未实现。

<div class="cmd-examples">

<div class="cmd-card"><span class="cmd-pill">msg / msgate</span><span class="cmd-desc">查询 gate 升级材料与进度</span></div>
<div class="cmd-card"><span class="cmd-pill">msf</span><span class="cmd-desc">查看家具列表或详情</span></div>
<div class="cmd-card"><span class="cmd-pill">msr / msmap / msa</span><span class="cmd-desc">查询资源与地图总览</span></div>
<div class="cmd-card"><span class="cmd-pill">msp / mysekai照片</span><span class="cmd-desc">查看照片列表或指定照片</span></div>
<div class="cmd-card"><span class="cmd-pill">msm / mss / mssong</span><span class="cmd-desc">查询音乐记录与收藏</span></div>

</div>

补充：`msgate` 可带 gateId；`msmap` 可带 `all` 显示全部资源；`msp -1` 可查看最新一张照片。

</div>

## 组卡

<div class="mzk-card">

### 活动组卡

组卡功能需要上传数据。结果按活动点数或分数排序，返回推荐卡组 top7。

<div class="cmd-examples">

<div class="cmd-card"><span class="cmd-pill">组卡 ln 橙</span><span class="cmd-desc">指定队伍和属性组卡</span></div>
<div class="cmd-card"><span class="cmd-pill">活动组卡 龙 hard</span><span class="cmd-desc">按当前活动组卡</span></div>
<div class="cmd-card"><span class="cmd-pill">活动组卡 角色=ick 10th master</span><span class="cmd-desc">指定队长或角色参数</span></div>
<div class="cmd-card"><span class="cmd-pill">挑战组卡 ick 10th master</span><span class="cmd-desc">每日挑战组卡</span></div>
<div class="cmd-card"><span class="cmd-pill">最强组卡</span><span class="cmd-desc">查看同色同队高分卡组</span></div>

</div>

常用队伍：`ln`、`mmj`、`vbs`、`ws`、`25`、`vs`。常用属性：绿、粉、橙、蓝、紫。

</div>

## 活动与查榜

<div class="mzk-card">

### 活动排名

<div class="cmd-examples">

<div class="cmd-card"><span class="cmd-pill">sk 100</span><span class="cmd-desc">查询活动排名或档线</span></div>
<div class="cmd-card"><span class="cmd-pill">sk预测</span><span class="cmd-desc">查看预测线，仅日服单榜</span></div>
<div class="cmd-card"><span class="cmd-pill">分数线 1000</span><span class="cmd-desc">查看指定排名分数趋势</span></div>
<div class="cmd-card"><span class="cmd-pill">sk线 1000</span><span class="cmd-desc">同类档线查询</span></div>
<div class="cmd-card"><span class="cmd-pill">查房 100</span><span class="cmd-desc">查看最近一小时活动情况</span></div>

</div>

`sk预测` 数据源于 33，不一定能覆盖全部档线。档线数据可能有延迟。

</div>

<div class="mzk-card">

### 时速与 WL

<div class="cmd-examples">

<div class="cmd-card"><span class="cmd-pill">ss</span><span class="cmd-desc">查看当前档线时速</span></div>
<div class="cmd-card"><span class="cmd-pill">wlss 角色</span><span class="cmd-desc">查看角色单榜时速</span></div>
<div class="cmd-card"><span class="cmd-pill">wlsk 100 -c haruka</span><span class="cmd-desc">查询 WL 角色单榜</span></div>

</div>

`wlss` 暂时为日服限定。`ss` 与 `wlss` 的速度计算以 Bot 当前实现为准。

</div>

## 歌曲与谱面

<div class="mzk-card">

### 歌曲资料

<div class="cmd-examples">

<div class="cmd-card"><span class="cmd-pill">pinfo 曲名</span><span class="cmd-desc">查询歌曲信息</span></div>
<div class="cmd-card"><span class="cmd-pill">活动 86</span><span class="cmd-desc">查询指定活动</span></div>
<div class="cmd-card"><span class="cmd-pill">findevent help</span><span class="cmd-desc">查看活动筛选说明</span></div>
<div class="cmd-card"><span class="cmd-pill">查bpm 180</span><span class="cmd-desc">按 BPM 查询歌曲</span></div>
<div class="cmd-card"><span class="cmd-pill">查物量 1000</span><span class="cmd-desc">按谱面物量查询</span></div>

</div>

</div>

<div class="mzk-card">

### 谱面与难度

<div class="cmd-examples">

<div class="cmd-card"><span class="cmd-pill">难度排行 level 31</span><span class="cmd-desc">查看定数排行</span></div>
<div class="cmd-card"><span class="cmd-pill">fc难度排行 level 31</span><span class="cmd-desc">查看 FC 难度排行</span></div>
<div class="cmd-card"><span class="cmd-pill">曲名谱面预览</span><span class="cmd-desc">查看 Master 谱面</span></div>
<div class="cmd-card"><span class="cmd-pill">曲名ex谱面预览</span><span class="cmd-desc">查看 Expert 谱面</span></div>
<div class="cmd-card"><span class="cmd-pill">曲名apd谱面预览</span><span class="cmd-desc">查看 Append 谱面</span></div>
<div class="cmd-card"><span class="cmd-pill">曲名技能预览</span><span class="cmd-desc">查看技能分布与分数占比</span></div>

</div>

定数目前主要支持紫谱与早期红谱。2023-02-20 之后的歌曲定数以 AP 难度为准。

</div>

## 卡牌与角色

<div class="mzk-card">

### 卡牌查询

<div class="cmd-examples">

<div class="cmd-card"><span class="cmd-pill">findcard 25 紫</span><span class="cmd-desc">按条件查卡</span></div>
<div class="cmd-card"><span class="cmd-pill">查卡 宵崎奏</span><span class="cmd-desc">查询角色卡牌</span></div>
<div class="cmd-card"><span class="cmd-pill">card 123</span><span class="cmd-desc">返回指定卡面图片</span></div>
<div class="cmd-card"><span class="cmd-pill">cardinfo 123</span><span class="cmd-desc">查看卡牌基础信息</span></div>

</div>

`findcard` 最多支持 3 个参数，可按队伍、角色、稀有度、属性筛选。

</div>

<div class="mzk-card">

### 角色与别名

<div class="cmd-examples">

<div class="cmd-card"><span class="cmd-pill">charinfo 宵崎奏</span><span class="cmd-desc">查询角色花名</span></div>
<div class="cmd-card"><span class="cmd-pill">pset 新 to 旧</span><span class="cmd-desc">设置歌曲花名</span></div>
<div class="cmd-card"><span class="cmd-pill">pdel 昵称</span><span class="cmd-desc">删除歌曲花名</span></div>
<div class="cmd-card"><span class="cmd-pill">charset 新 to 旧</span><span class="cmd-desc">设置角色花名</span></div>
<div class="cmd-card"><span class="cmd-pill">chardel 昵称</span><span class="cmd-desc">删除角色花名</span></div>

</div>

</div>

## 5v5 与活动辅助

<div class="mzk-card">

5v5 相关功能仅在对应活动期间有意义，部分功能可能临时不可用或存在限制。

<div class="cmd-examples">

<div class="cmd-card"><span class="cmd-pill">5v5胜率</span><span class="cmd-desc">查看双方队伍胜率</span></div>
<div class="cmd-card"><span class="cmd-pill">5v5分数</span><span class="cmd-desc">查看双方结算分数</span></div>
<div class="cmd-card"><span class="cmd-pill">tf启动</span><span class="cmd-desc">给绑定 ID 用户送火</span></div>

</div>

</div>

## 轻量互动

<div class="mzk-card">

这些功能用于群内娱乐和随机推荐，不影响游戏账号数据。

<div class="cmd-examples">

<div class="cmd-card"><span class="cmd-pill">pjsk听歌识曲</span><span class="cmd-desc">听片段猜歌，可用结束猜曲中断</span></div>
<div class="cmd-card"><span class="cmd-pill">pjsk猜卡面</span><span class="cmd-desc">看局部猜角色，可用结束猜卡面中断</span></div>
<div class="cmd-card"><span class="cmd-pill">pjsk抽卡 123</span><span class="cmd-desc">按卡池编号模拟抽卡</span></div>
<div class="cmd-card"><span class="cmd-pill">看 宵崎奏</span><span class="cmd-desc">返回该角色随机卡图</span></div>
<div class="cmd-card"><span class="cmd-pill">随个 31</span><span class="cmd-desc">随机指定等级歌曲</span></div>
<div class="cmd-card"><span class="cmd-pill">葱什么</span><span class="cmd-desc">返回随机歌曲信息</span></div>

</div>

</div>

## 订阅与推送

<div class="mzk-card">

群主或管理员可以为当前群开启或关闭结活 live 通知。每天 10 点还会检测是否有更新；如果有更新，会推送到订阅群聊。

<div class="cmd-examples">

<div class="cmd-card"><span class="cmd-pill">开启live订阅</span><span class="cmd-desc">开启结活 live 通知</span></div>
<div class="cmd-card"><span class="cmd-pill">开启live推送</span><span class="cmd-desc">兼容写法</span></div>
<div class="cmd-card"><span class="cmd-pill">开启live通知</span><span class="cmd-desc">兼容写法</span></div>
<div class="cmd-card"><span class="cmd-pill">关闭live订阅</span><span class="cmd-desc">关闭当前群订阅</span></div>

</div>

</div>

## 使用建议

<div class="mzk-card">

- 查自己：先 `绑定 ID`，再用 `pjskprofile` 或 `pjskdetail`。
- 查他人：确认对方已 `给看`，再 @ 查询。
- 查榜线：用 `sk`、`分数线`、`ss`、`查房`。
- 查歌曲：用 `pinfo`、`查bpm`、`查物量`、`谱面预览`。
- 查卡牌：用 `findcard`、`card`、`cardinfo`。
- 组卡与 MySekai：先上传数据，再使用对应功能。

</div>
