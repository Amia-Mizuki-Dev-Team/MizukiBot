---
title: PJSK 专项功能
description: PJSK 查分、查榜、组卡、猜歌等功能的用法说明。
---

# PJSK 模块功能
::: warning 账号防丢指南
**在进行账号上传或绑定操作前，请务必保存你的引继码与密码！**
以免因意外情况、网络波动或平台风控导致游戏账号丢失。Bot 无法为您找回丢失的账号。
:::

<p style="font-size: 14px; opacity: 0.8; margin-bottom: 25px; line-height: 1.8;">
  <strong>🌐 多服务器前缀支持：</strong><br>
  在大部分查分、查榜、绑定指令前添加特定前缀，即可跨服查询：<br>
  <code>cn</code> (国服) | <code>tw</code> (台服) | <code>en</code> (国际服) | <code>kr</code> (韩服) | 不加前缀默认日服<br>
  <em>（示例：<code>cn绑定</code>、<code>twsk</code>、<code>en逮捕</code>）</em>
</p>
---
<div class="mzk-card">
  <h3>🔗 账号绑定与数据上传</h3>
  <p>通过游戏 UID 进行绑定。绑定后默认为「不给看」模式，无法被其他人 @ 查询。</p>

<div class="mzk-table-wrapper">

| 指令 | 说明 |
| :--- | :--- |
| `[前缀]绑定 [ID]` | 绑定指定服务器的 PJSK 游戏 ID |
| `给看` / `不给看` | 开放或关闭他人逮捕/查询自己的权限 |

</div>

  <h4>📥 高级数据上传 (查榜/MySekai必备)</h4>
  <p>部分进阶功能需上传数据至数据库才可使用。</p>

<div class="mzk-table-wrapper">

| 数据类型 | 上传说明 |
| :--- | :--- |
| **基础数据 (日/台等)** | 访问 <a href="http://go.mikuware.top" target="_blank" style="color:#39C5BB; font-weight:bold;">👉 数据上传页面</a> 获取 Suite。（日服玩家可直接私聊 Bot 发送引继码，需重新引继） |
| **MySekai 数据** | 访问 <a href="https://haruki.seiunx.com/upload-data" target="_blank" style="color:#39C5BB; font-weight:bold;">👉 MySekai 数据上传页</a>。Android 推荐「Haruki工具箱」；iOS 推荐 MitM 代理模块。 |

</div>
</div>
<div class="mzk-card">
  <h3>📝 玩家信息、查分与 MySekai</h3>

<div class="mzk-table-wrapper">

| 指令 | 说明 |
| :--- | :--- |
| `个人信息` | 生成日服/默认账号的个人信息卡片图 |
| `[前缀]个人信息` | 生成指定外服的个人信息卡片（如：`cn个人信息` 或 `cnpjskprofile`） |
| `[前缀]逮捕 [@/ID]` | 查询目标 Ex/Ma/Apd 难度的 FC、AP 进度 |
| `rk` | 获取玩家排位信息 |
| `b39` | 获取 Rating 最高的 39 首歌与总分 (需上传数据，仅供参考) |
| `pjsk b30` | 获取 Rating 最高的 30 首歌与平均分 (需上传数据，算法不同) |
| `ms分析` / `msa2` | (MySekai) 分析现存材料情况 (msa2 为新版 UI) |
| `ms地图 [1-4]` | (MySekai) 生成资源分布图 (1草原/2花田/3沙滩/4废墟) |
| `ms照片 [序号]` | (MySekai) 下载用户在游戏内拍摄的照片 |

</div>
</div>
<div class="mzk-card">
  <h3>📈 高阶查榜与 PT 追踪</h3>
  <p><strong>WL 活动特供：</strong> 在查榜指令前加 <code>wl</code>，并在末尾加 <code>-c [角色]</code> 可查单榜 (如：<code>wlsk 100 -c haruka</code>)。</p>

<div class="mzk-table-wrapper">

| 指令 | 说明 | 示例 |
| :--- | :--- | :--- |
| `sk [排名/ID]` | 查指定排名/玩家分数 (支持同时查最多7人) | `sk 100` |
| `sk预测*` | 获取预测线信息 (仅日服单榜，不一定能获取到所有档线，数据源于33) | `sk预测` |
| `查房 [排名]` | 查询特定排名最近 1 小时的活动情况 | `查房 50` |
| `分数线 [排名]` | 查看本期活动中特定排名的分数趋势 | `分数线 1000` |
| `时速 [分钟]` | 查各榜线特定时间内 PT 增长时速 (最大1440) | `时速 10` |
| `半日速` / `日速` | 查看近半天 / 近一天各榜线的 PT 增长速度 | `日速` |
| `追踪 [排1] [排2]` | 追踪目前特定排名在本期的 PT 与排名趋势 | `追踪 1 2` |

</div>
</div>
<div class="mzk-card">
  <h3>🎫 组卡与查卡推荐 (需上传数据)</h3>
  
<div class="mzk-table-wrapper">

| 指令 | 说明 | 示例 |
| :--- | :--- | :--- |
| `组卡 [队名] [属性]` | 指定箱活中推荐最佳卡组 top7 (默认嫉妒ex)。队名含(ln/mmj/vbs/ws/25/vs)，属性含(绿/粉/橙/蓝/紫)。 | `组卡 ln 橙` |
| `活动组卡 [歌名] [难度]` | 当前活动推荐最佳卡组 top7。不填默认嫉妒ex。WL活第一参数识别为角色。 | `活动组卡 龙 hard` |
| `挑战组卡 [角色] [歌名] [难度]` | 每日挑战推荐最佳卡组 top7。 | `挑战组卡 ick 10th master` |
| `最强组卡` | 返回您同色同队中分数最高的卡组 top7 (默认嫉妒ex)。不需要参数。 | `最强组卡` |

</div>
</div>
<div class="mzk-card">
  <h3>🎶 歌曲谱面与别名设置</h3>
  <div class="mzk-alert">⚠️ 别名设置日志按日公示，违规乱设别名将被删词或封禁 Bot 使用权！</div>

<div class="mzk-table-wrapper">

| 指令 | 说明 |
| :--- | :--- |
| `pinfo [曲名]*` | 查询歌曲信息 |
| `pjskbpm [曲名]*` | 查看当前歌曲的 BPM |
| `查bpm [数字]*` | 查询对应 BPM 的所有歌曲 |
| `查物量 [数字]*` | 查询所有歌曲难度中，谱面物量等于指定物量的歌曲及难度 |
| `[歌名]谱面预览*` | 默认 master 难度。可加 <code>ex</code> 或 <code>apd</code> 前缀查看其他难度。 |
| `[歌名]技能预览*` | 默认 master 难度。返回谱面技能分布及分数占比。 |
| `难度排行*` | 格式：<code>难度排行 level [难度]</code>。可加 <code>fc/ap</code> 前缀。目前仅支持紫谱及早期红谱。 |
| `musicset [新] to [旧]` | 设置歌曲全局昵称 (删除用 `musicdel [昵称]`) |
| `charaset [新] to [旧]` | 设置角色全局昵称 (如: `charaset knd to 宵崎奏`) |
| `grcharaset [新] to [旧]` | 设置**仅当前群可用**的角色昵称 |
| `charalias [昵称]*` | 查看特定角色的所有已绑定昵称 |

</div>
</div>
<div class="mzk-card mzk-card--pink">
  <h3>🎫 卡牌与活动全能图鉴</h3>
  
<div class="mzk-table-wrapper">

| 指令 | 说明 |
| :--- | :--- |
| `查卡 [角色/卡面ID]*` | 查角色所有卡牌，或查特定 ID 卡牌的详细信息 |
| `card [编号]*` | 返回指定卡面图片 |
| `cardinfo [编号]*` | 返回卡面基础信息（属性、技能、当期活动等） |
| `活动总览*` | 返回当前所有活动的概要 (因图片较大，部分频道不可用) |
| `查活动 [ID/关键字]*` | 查指定活动。支持单/多关键字精细筛选 (如 `查活动 草 5v5`、`查活动 knd 蓝`) |

</div>
</div>
<div class="mzk-card mzk-card--green">
  <h3>🎮 互动小游戏与 5v5 活动功能</h3>

<div class="mzk-table-wrapper">

| 指令 | 说明 |
| :--- | :--- |
| `5v5胜率 / 分数` | (5v5活动限定) 返回双方胜率/分数。 |
| `tf启动` | (5v5活动限定) 送3次无偿火给绑定 ID 的用户。 |
| `pjsk听歌识曲*` | 发送片段猜歌名/花名 (40s限时)。输入 <code>结束猜曲</code> 中断。 |
| `pjsk猜卡面*` | 发送卡面局部截图猜角色 (40s限时)。输入 <code>结束猜卡面</code> 中断。 |
| `pjsk抽卡*` | 格式：<code>pjsk抽卡/pjskXX连/pjsk反抽卡 [当期卡池编号]</code>。模拟抽卡体验。 |
| `看 [角色]*` | 返回该角色随机卡图。 |
| `随个 [组合] [level]*` | 返回随机指定等级歌曲 info。如果有组合名，会从该组合中随机。 |
| `葱什么*` | 返回随机歌曲 info。 |

</div>
</div>

## 指令示例

<div class="cmd-examples">

<div class="cmd-card">
  <span class="cmd-pill">逮捕 @小明</span>
  <span class="cmd-desc">查询目标 FC、AP 进度</span>
</div>

<div class="cmd-card">
  <span class="cmd-pill">sk 100</span>
  <span class="cmd-desc">查榜线第 100 名的分数</span>
</div>

<div class="cmd-card">
  <span class="cmd-pill">b39</span>
  <span class="cmd-desc">Rating 最高的 39 首歌与总分</span>
</div>

<div class="cmd-card">
  <span class="cmd-pill">组卡 ln 橙</span>
  <span class="cmd-desc">箱活 LN 橙色属性最佳卡组推荐</span>
</div>

<div class="cmd-card">
  <span class="cmd-pill">追踪 1 50</span>
  <span class="cmd-desc">追踪第 1 名和第 50 名的 PT 趋势</span>
</div>

<div class="cmd-card">
  <span class="cmd-pill">cn逮捕 100</span>
  <span class="cmd-desc">使用 cn 前缀查询国服榜线</span>
</div>

</div>
