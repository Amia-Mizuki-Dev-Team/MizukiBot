---
title: PJSK 专项功能
description: Project Sekai 查分、查榜、绑定、歌曲、卡牌、MySekai 与活动功能说明。
---

# Project Sekai 专项功能

Project Sekai 是 Mizuki Bot 功能覆盖最完整的模块之一，包含账号绑定、个人资料、活动榜线、歌曲谱面、卡牌、组卡、MySekai、订阅推送等常用能力。本页只整理高频入口与使用逻辑；完整指令、别名、参数和权限范围仍以 Bot 内帮助菜单为准。

::: warning 账号防丢提醒
绑定、验证或上传数据前，请先保存自己的引继码与密码。Bot 无法找回丢失账号。
:::

## 基础规则

### 群聊触发方式

Mizuki Bot 现在支持群内主动消息。群主在机器人管理中为 Bot 开启“获取群内全部消息”权限后，群聊内可直接发送指令触发，不需要每次都先提及机器人。若群聊没有开启该权限，实际触发方式以 Bot 返回和平台配置为准。

### 区服前缀

常用前缀：`cn` 国服、`tw` 台服、`en` 国际服、`kr` 韩服。不加前缀时通常按默认区服处理。部分区服功能存在独立限制，具体以 Bot 返回为准。

常见示例：

- `cn绑定 123456789`：绑定国服账号。
- `tw个人信息`：查看台服个人信息。
- `en逮捕 用户ID`：查询国际服进度。
- `krsk 100`：查询韩服榜线。

## 账号、绑定与验证

### 基础绑定

- `绑定 ID`：绑定游戏账号，ID 可在游戏内个人信息页查看。
- `绑定列表`：查看当前 QQ 号已绑定账号。
- `切绑定` / `交换绑定`：切换或交换已绑定账号顺序。
- `设置主账号 ID` / `设置默认绑定 ID`：设置默认查询账号。
- `清除默认绑定` / `取消默认绑定`：清除全局或区服默认绑定。
- `解绑 ID`：解绑指定账号。
- `给看` / `不给看`：开放或关闭他人查询权限。绑定后默认是 `不给看`。

### 验证与数据状态

部分账号、抓包、个人信息背景和 MySekai 功能需要先完成工具箱验证或上传数据。

- `pjsk验证`：验证自己的游戏账号。
- `pjsk验证列表`：查看已验证账号。
- `抓包数据` / `sud`：查看 suite 上传状态。
- `烤森抓包数据` / `msd`：查看 MySekai 数据状态。
- `隐藏抓包` / `展示抓包`：控制 suite 数据展示。
- `隐藏烤森抓包` / `展示烤森抓包`：控制 MySekai 数据展示。
- `隐藏ID` / `显示ID`：控制查询结果中的 UID 展示。

工具箱验证教程：<https://neo.haruki.seiunx.com/toolbox-tutorial/verify-guide>

## 数据上传入口

上传数据后，可使用 Rating、查榜、组卡、MySekai 等进阶功能。

- 基础数据上传：<http://go.mikuware.top>
- MySekai 数据上传：<https://haruki.seiunx.com/upload-data>
- 日服玩家可按 Bot 提示直接提交引继信息完成上传，通常需要重新引继一次。
- 上传 suite 后，可查询上传时的数据；后续说明不再重复标注。

## 个人资料与进度

### 基础信息

- `id`：返回当前 QQ 号绑定 ID。
- `pjskprofile` / `个人信息`：生成个人信息图，可输入 UID 查询指定账号。
- `自定义个人信息 1`：渲染公开 profile 中的指定页面。
- `视奸`：查看当前队伍综合力及构成。
- `查时间` / `注册时间`：查询当前绑定 ID 注册时间。

### 个人信息背景

个人信息背景需要完成账号验证后使用。

- `上传个人信息背景`：上传自定义背景图。
- `调整个人信息 竖屏 模糊5 透明50`：调整背景显示方式。
- `清空个人信息背景`：移除自定义背景。
- 以上设置可加 `u序号` 操作自己的其他绑定账号。

### 进度与 Rating

- `逮捕 用户ID`：查询 clear / FC / AP 进度。
- `rk`：获取玩家排位信息。
- `b39`：查看 Rating 最高 39 首曲目和总分，仅供参考。
- `pjsk b30`：查看另一套 Rating 统计，算法与 `b39` 不同。
- `b30删歌 曲名`：从 b30 / b39 统计中排除指定歌曲。
- `b30恢复歌 曲名` / `b30还原歌 曲名`：恢复被排除歌曲。
- `b30删歌列表`：查看当前排除列表。

### 详细数据与养成

- `pjsk进度`：查询 Master 完成情况。
- `pjsk进度ex`：查询 Expert 完成情况。
- `pjsk进度apd`：查询 Append 完成情况。
- `pjskdetail`：获取金币、水晶、家具练度、每日挑战等详细信息；介意公开展示时建议私聊查询。
- `pjskcard`：获取个人卡牌图鉴，可追加角色花名查看单角色图鉴。
- `pjskevent`：获取个人活动记录。
- `打歌奖励`：查询账号剩余歌曲奖励。
- `每日挑战`：查询每日挑战奖励进度。
- `角色加成`：查询角色加成信息。
- `区域道具 mmj`：查询区域道具升级素材。
- `羁绊等级`：查询角色羁绊等级。
- `队长统计`：查询队长次数。

## 活动与查榜

### 榜线与活动排名

- `sk 100`：查询活动排名或指定档线。
- `sk线` / `分数线 1000`：查看当前活动档线。
- `sk预测`：查看预测线，数据可能无法覆盖所有档线。
- `ss` / `时速 10`：查看当前榜线时速或指定时间范围速度。
- `半日速` / `日速`：查看半日或日均速度。
- `查房 100`：查看最近一小时活动情况。
- `ptr` / `玩家轨迹`：查询玩家在当前活动的冲榜统计。
- `rtr` / `档线轨迹` / `追踪 1 50`：追踪档线历史轨迹。
- `csb`：查询指定排名的热力图数据。
- `wlsk 100 -c haruka`：查询 World Link 角色单榜。
- `wlss 角色`：查看角色单榜时速。

### 活动信息与 5v5

- `查活动 86`：查询指定活动。
- `findevent help`：查看活动筛选说明。
- `5v5胜率`：查看双方队伍胜率。
- `5v5分数`：查看双方结算分数。
- `tf启动`：给绑定 ID 用户送火。

5v5 相关功能只在对应活动期间有意义，部分功能可能临时不可用。

## MySekai / 烤森

MySekai 功能依赖 MySekai 数据上传。当前 JP 支持最完整；TW / CN 的支持范围以 Bot 返回为准。常用能力包括烤森资源、地图、家具、唱片、蓝图、照片、对话、大门升级和烤森百景查询。

- `msa` / `烤森资源`：查询资源、天气、来访角色等信息。
- `msm` / `msmap` / `烤森地图`：查询烤森地图，可指定地图 ID。
- `msam`：同时输出资源信息与四张烤森地图。
- `烤森家具列表` / `mysekai家具列表`：查询当前服务器全部家具列表。
- `msf` / `家具列表`：查询账号已获得家具列表。
- `msr` / `mss` / `mssong`：查询音乐唱片收集。
- `msb`：查看烤森蓝图列表。
- `msp 2`：查看烤森相册中的指定照片，编号从 1 开始。
- `烤森对话列表`：查询烤森角色对话列表。
- `msg` / `msgate`：查询大门升级材料与进度，可带团队名。
- `bjsk 1-5`：查询烤森百景投稿排名，可查询单个名次、范围或指定百景 ID。

## 组卡

组卡功能需要上传 suite 数据。页面只列常用入口；更细的参数以 Bot 内帮助菜单为准。

- `组卡 ln 橙`：指定队伍和属性组卡。
- `活动组卡 龙 hard`：按当前活动组卡。
- `活动组卡 角色=ick 10th master`：指定队长或角色参数。
- `挑战组卡 ick 10th master`：每日挑战组卡。
- `最强组卡`：查看同色同队高分卡组。
- `加成组卡 event123 100`：按指定活动和加成目标组卡。
- `烤森组卡 绿 mmj`：按烤森获取 pt 场景组卡。

常用参数包括歌曲名、难度、协力 / 单人 / auto、综合力 / 实效、火数、活动 ID、WL 章节、团名、颜色、最低实效、指定队长、排除卡牌和养成状态。参数之间需要保留空格。

## 歌曲与谱面

### 歌曲资料

- `pinfo 曲名` / `查曲 曲名`：查询歌曲信息，支持歌曲 ID、别名、活动 ID、箱活缩写和自定义谱面 ID。
- `查bpm 180`：按 BPM 查询歌曲。
- `查物量 1000`：按谱面物量查询。
- `查曲绘 曲名`：查询歌曲曲绘原图。
- `歌曲排行`：按指定条件查询歌曲排行。
- `歌曲meta`：查询歌曲数据指标。
- `随个 31`：随机指定等级歌曲。
- `葱什么`：返回随机歌曲信息。

### 谱面与难度

- `难度排行 level 31`：查看定数排行。
- `fc难度排行 level 31`：查看 FC 难度排行。
- `曲名谱面预览`：查看 Master 谱面。
- `曲名ex谱面预览`：查看 Expert 谱面。
- `曲名apd谱面预览`：查看 Append 谱面。
- `曲名技能预览`：查看技能分布与分数占比。
- `谱面样式 black` / `谱面底色 white`：设置谱面预览色调。
- `jp谱面预览 自定义谱面ID`：查询日服自定义谱面预览。

定数目前主要支持紫谱与早期红谱。2023-02-20 之后的歌曲定数以 AP 难度为准。

## 卡牌与角色

### 卡牌查询

- `findcard 25 紫` / `查卡 宵崎奏`：按队伍、角色、稀有度、属性等条件查卡。
- `卡牌列表 mmj 4`：按条件筛选卡牌列表。
- `卡牌一览 mnr` / `查箱 mnr`：按条件生成卡牌一览；上传 suite 后可显示未拥有卡牌。
- `card 123` / `查卡面 123`：返回指定卡面图片。
- `cardinfo 123`：查看卡牌基础信息。

### 角色与别名

- `charinfo 宵崎奏`：查询角色花名。
- `pset 新 to 旧`：设置歌曲花名。
- `pdel 昵称`：删除歌曲花名。
- `charaset 新 to 旧`：设置角色花名。
- `chardel 昵称`：删除角色花名。
- `grcharaset 新 to 旧`：设置本群角色花名。

## 轻量互动

这些功能用于群内娱乐和随机推荐，不影响游戏账号数据。

- `pjsk听歌识曲`：听片段猜歌，可用 `结束猜曲` 中断。
- `pjsk猜卡面`：看局部猜角色，可用 `结束猜卡面` 中断。
- `pjsk抽卡 123`：按卡池编号模拟抽卡。
- `看 宵崎奏`：返回该角色随机卡图。

## 订阅与推送

群主或管理员可以为当前群开启或关闭结活 live 通知。每天 10 点还会检测是否有更新；如果有更新，会推送到订阅群聊。

- `开启live订阅`
- `开启live推送`
- `开启live通知`
- `关闭live订阅`

## 指令示例

<style scoped>
.pjsk-demo-grid {
  display: grid;
  gap: 18px;
  margin: 18px 0 28px;
}
.pjsk-demo-card {
  border: 1px solid var(--vp-c-divider);
  border-radius: 18px;
  background: var(--vp-c-bg-soft);
  padding: 18px 18px 20px;
}
.pjsk-demo-row {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}
.pjsk-demo-row.user {
  justify-content: flex-end;
  margin-bottom: 16px;
}
.pjsk-demo-row.bot {
  justify-content: flex-start;
}
.pjsk-demo-avatar {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: var(--vp-c-brand-soft);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: var(--vp-c-brand-1);
  flex: 0 0 auto;
}
.pjsk-demo-bubble {
  max-width: 76%;
  border-radius: 14px;
  padding: 10px 14px;
  line-height: 1.7;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
  word-break: break-word;
}
.pjsk-demo-row.user .pjsk-demo-bubble {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
}
.pjsk-demo-row.bot .pjsk-demo-bubble {
  background: var(--vp-c-bg);
}
@media (min-width: 720px) {
  .pjsk-demo-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>

<div class="pjsk-demo-grid">
  <div class="pjsk-demo-card">
    <div class="pjsk-demo-row user">
      <div class="pjsk-demo-bubble">/绑定 123456789</div>
      <div class="pjsk-demo-avatar">我</div>
    </div>
    <div class="pjsk-demo-row bot">
      <div class="pjsk-demo-avatar">Bot</div>
      <div class="pjsk-demo-bubble">[已绑定该 Project Sekai 账号]</div>
    </div>
  </div>

  <div class="pjsk-demo-card">
    <div class="pjsk-demo-row user">
      <div class="pjsk-demo-bubble">/个人信息</div>
      <div class="pjsk-demo-avatar">我</div>
    </div>
    <div class="pjsk-demo-row bot">
      <div class="pjsk-demo-avatar">Bot</div>
      <div class="pjsk-demo-bubble">[当前绑定账号的个人信息图]</div>
    </div>
  </div>

  <div class="pjsk-demo-card">
    <div class="pjsk-demo-row user">
      <div class="pjsk-demo-bubble">/sk线</div>
      <div class="pjsk-demo-avatar">我</div>
    </div>
    <div class="pjsk-demo-row bot">
      <div class="pjsk-demo-avatar">Bot</div>
      <div class="pjsk-demo-bubble">[当期活动各排名的分数线]</div>
    </div>
  </div>

  <div class="pjsk-demo-card">
    <div class="pjsk-demo-row user">
      <div class="pjsk-demo-bubble">/查曲 六兆年</div>
      <div class="pjsk-demo-avatar">我</div>
    </div>
    <div class="pjsk-demo-row bot">
      <div class="pjsk-demo-avatar">Bot</div>
      <div class="pjsk-demo-bubble">[匹配到的歌曲详情]</div>
    </div>
  </div>

  <div class="pjsk-demo-card">
    <div class="pjsk-demo-row user">
      <div class="pjsk-demo-bubble">/查卡 25h</div>
      <div class="pjsk-demo-avatar">我</div>
    </div>
    <div class="pjsk-demo-row bot">
      <div class="pjsk-demo-avatar">Bot</div>
      <div class="pjsk-demo-bubble">[25h 所属卡牌的列表]</div>
    </div>
  </div>

  <div class="pjsk-demo-card">
    <div class="pjsk-demo-row user">
      <div class="pjsk-demo-bubble">/卡牌列表 mmj 4</div>
      <div class="pjsk-demo-avatar">我</div>
    </div>
    <div class="pjsk-demo-row bot">
      <div class="pjsk-demo-avatar">Bot</div>
      <div class="pjsk-demo-bubble">[包含所有 mmj 四星卡牌的卡牌列表]</div>
    </div>
  </div>

  <div class="pjsk-demo-card">
    <div class="pjsk-demo-row user">
      <div class="pjsk-demo-bubble">/bjsk 1-5</div>
      <div class="pjsk-demo-avatar">我</div>
    </div>
    <div class="pjsk-demo-row bot">
      <div class="pjsk-demo-avatar">Bot</div>
      <div class="pjsk-demo-bubble">[当前烤森百景 1 到 5 名的投稿与评价数据]</div>
    </div>
  </div>

  <div class="pjsk-demo-card">
    <div class="pjsk-demo-row user">
      <div class="pjsk-demo-bubble">/组卡 ln 橙</div>
      <div class="pjsk-demo-avatar">我</div>
    </div>
    <div class="pjsk-demo-row bot">
      <div class="pjsk-demo-avatar">Bot</div>
      <div class="pjsk-demo-bubble">[按队伍与属性生成的组卡结果]</div>
    </div>
  </div>
</div>

## 使用建议

- 查自己：先 `绑定 ID`，再用 `pjskprofile`、`个人信息` 或 `pjskdetail`。
- 查他人：确认对方已 `给看`，再输入 UID 或按 Bot 支持的方式查询。
- 查上传状态：用 `抓包数据` 和 `烤森抓包数据`。
- 查榜线：用 `sk`、`sk线`、`分数线`、`时速`、`查房`。
- 查歌曲：用 `pinfo`、`查曲`、`查bpm`、`查物量`、`谱面预览`。
- 查卡牌：用 `findcard`、`卡牌列表`、`卡牌一览`、`card`、`cardinfo`。
- 组卡与 MySekai：先上传数据，再使用对应功能。
