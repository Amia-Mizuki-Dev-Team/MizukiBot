---
title: Mizuki Bot 更新日志
description: Bot 的更新历史和版本迭代记录。
---

# Mizuki Bot 更新日志

> Bot 的每一次进化都在这里。

<br>

<div class="custom-card" style="background: var(--vp-c-bg-soft); border-left: 5px solid #f5222d; padding: 20px; border-radius: 12px; margin-bottom: 25px; text-align: left;">
  <h3 style="margin-top: 0; margin-bottom: 10px; font-size: 1.25em; font-weight: 600; color: #f5222d; text-align: left;">2026.5.30 | 开发组团队调整</h3>
  <p style="font-size: 13px; opacity: 0.8; margin-bottom: 15px; text-align: left;">
    📅 公告日期：2026.5.30 &nbsp;|&nbsp; 📢 分类：团队调整与维护变更
  </p>

  <h4 style="margin-top: 15px; margin-bottom: 5px; font-size: 1.05em; font-weight: 600; color: var(--vp-c-text-1); text-align: left;">一、人事调整</h4>
  <ul style="display: block; margin: 5px 0 15px 0; padding-left: 20px; font-size: 14px; opacity: 0.9; line-height: 1.8; text-align: left; list-style-type: disc;">
    <li style="text-align: left; display: list-item;"><strong>暂停工作</strong>：因学业繁忙，<code>HX-Wrdzgzs</code> 与 <code>MC_FanBuFan</code> 暂停开发工作。</li>
  </ul>

  <h4 style="margin-top: 15px; margin-bottom: 5px; font-size: 1.05em; font-weight: 600; color: var(--vp-c-text-1); text-align: left;">二、维护信息</h4>
  <ul style="display: block; margin: 5px 0 0 0; padding-left: 20px; font-size: 14px; opacity: 0.9; line-height: 1.8; text-align: left; list-style-type: disc;">
    <li style="text-align: left; display: list-item;"><strong>维护降级</strong>：Bot 开发工作同步暂停，后续将仅进行最低等级的功能维护与常态稳定性保障。</li>
  </ul>
</div>

<div class="custom-card" style="background: var(--vp-c-bg-soft); border-left: 5px solid #2f54eb; padding: 20px; border-radius: 12px; margin-bottom: 25px;">
  <h3 style="margin-top: 0; color: #2f54eb;">2026.4.22 | HongXing (江苏) 工作室 5月情报与系统规划</h3>
  <p style="font-size: 13px; opacity: 0.8; margin-bottom: 15px;">本次通报包含系统安装安排、机房建设规划、安全升级及核心人员职务调整说明。</p>
  
  <h4 style="color: #2f54eb; margin-top: 15px; font-size: 15px;">一、系统停机与新机房建设</h4>
  <ul style="margin: 5px 0 15px 20px; font-size: 14px; opacity: 0.9; line-height: 1.8;">
    <li><strong>系统停机安装安排</strong>：4月28日至30日，对 Ospalin HongXingos 8 系统进行停机安装。该系统主打营销分析与安全防护，保障用户数据隐私。</li>
    <li><strong>新机房选址与建设</strong>：4月18日-19日确认新机房选址江苏省苏州市。预计 2026 年上半年完成建设，下半年视情况分批迁移服务。</li>
    <li><strong>HongXingOS 7 规划</strong>：首轮内测预计 2026 年 10 月启动。内核基于 6.1 版本构建，并解决 OS6 中存在的部分重大问题。</li>
  </ul>

  <h4 style="color: #2f54eb; margin-top: 15px; font-size: 15px;">二、AuthLit 安全升级与 OS6 构建更新</h4>
  <ul style="margin: 5px 0 15px 20px; font-size: 14px; opacity: 0.9; line-height: 1.8;">
    <li><strong>AuthLit 4 更新说明</strong>：针对 4 月 12 日的外部攻击，于 4 月 25 日至 26 日进行更新。提升 AuthLit 权限至仅次于系统管理员，并新增主动干预固件（可拦截不明来源/危害性可交互内容）。</li>
    <li><strong>OS6 构建版本更新</strong>：4 月 26 日提交新构建版本 (OS6 Build 2026.4.b57e205，更新代码 2e70)。</li>
    <li><strong>OS6 修复清单</strong>：
      <ol style="margin-top: 5px; margin-bottom: 5px;">
        <li>修复启动过程中的内核崩溃、卡死等无法正常启动的异常。</li>
        <li>修复构建较大文件时出现的乱码或无响应问题。</li>
        <li>优化启动流程，缩短系统自检时间。</li>
      </ol>
    </li>
  </ul>

  <h4 style="color: #2f54eb; margin-top: 15px; font-size: 15px;">三、人员职务调整与排班说明</h4>
  <ul style="margin: 5px 0 0 20px; font-size: 14px; opacity: 0.9; line-height: 1.8;">
    <li><strong>核心人员工作调整</strong>：HX-Wrdzgzs 已于 3 月 14 日提交离职申请。自 6 月 23 日起，职责由一线开发转为二线开发（主抓系统内核维护及重大问题解决）。预计 2027 年第一季度正式退出并完成项目交接。</li>
    <li><strong>五一期间值班安排</strong>：因特殊原因，HX-Wrdzgzs 不参与本次五一假期的值班工作，具体安排请查阅其他人员排班表。</li>
  </ul>
</div>

<div class="custom-card" style="background: var(--vp-c-bg-soft); border-left: 5px solid #722ed1; padding: 20px; border-radius: 12px; margin-bottom: 25px;">
  <h3 style="margin-top: 0; color: #722ed1;">2026.4 | 4月核心更新与架构升级</h3>
  <p style="font-size: 13px; opacity: 0.8; margin-bottom: 15px;">此版本包含大量底层重构与功能迭代（屎山x）。目前 Mizuki Bot 日活量已达到 5w 以上，感谢大家的支持，后续将专向开发官方 Bot 及 DXPASS（已规划）。</p>
  
  <h4 style="color: #722ed1; margin-top: 15px; font-size: 15px;">Bot 核心与安全防护</h4>
  <ul style="margin: 5px 0 15px 20px; font-size: 14px; opacity: 0.9; line-height: 1.8;">
    <li><strong>Mizuki 文本审核</strong>：原 HX 鹰眼审核机制升级，加入上下文检索（当用户触发 Bot 时上下文为 10 条）。当用户发送违规信息（包括 18+）将拦截即将发送的信息，并反向封禁该用户对 Bot 的使用权，增加阶梯处罚机制。</li>
    <li><strong>鉴权防护框架</strong>：新增 HongXing AuthLit4。该系统将（不）有效抵御各类恶意攻击，为用户数据与隐私安全提供最高级别保障。</li>
    <li><strong>底层预处理</strong>：新增 HongXing OpenAis，在底层框架上进行预处理机制并提前缓存需要的功能，也是 AuthLit 的必要驱动（闲着无聊搞得x）。</li>
    <li><strong>交互优化</strong>：新增 Bot 信息间隔功能，采用随机秒数回复，并引用用户触发 Bot 的原信息。</li>
  </ul>

  <h4 style="color: #722ed1; margin-top: 15px; font-size: 15px;">经济系统与落雪 B50</h4>
  <ul style="margin: 5px 0 15px 20px; font-size: 14px; opacity: 0.9; line-height: 1.8;">
    <li><strong>经济系统修复</strong>：更新了打工界面；修复了目前已知“打工多无法进行触发”的问题；Mizuki 经济榜系统从时刻更新调整为 3 分钟数据更新。</li>
    <li><strong>落雪 B50 (预计新增)</strong>：在水鱼 B50 基础上新增 AP50，后续将支持热力图、分数趋势、FC50 等功能（注：该功能不支持别名投票系统）。</li>
  </ul>

  <h4 style="color: #722ed1; margin-top: 15px; font-size: 15px;">Mai-Sync 深度升级与周边软件</h4>
  <ul style="margin: 5px 0 15px 20px; font-size: 14px; opacity: 0.9; line-height: 1.8;">
    <li><strong>Mai-Sync 更新清单</strong>：
      <ol style="margin-top: 5px; margin-bottom: 5px;">
        <li>新增落雪水鱼双端上传。</li>
        <li>新增落雪收藏品自动同步并自动登出 [仅限类型二]。</li>
        <li>自动绑定 Userid 后无需发送二维码即可获取成绩 [仅限类型一，且成绩不含 FC/FS 状态]。</li>
        <li>功能新增：用户账号预览、强制停止指令、取消绑定(落雪/水鱼/Userid)指令、队列系统、华立不下发 Cookie 的提示词。</li>
        <li>底层与交互：各分布 Bot 数据共通；支持带参指令直接触发；不再增加游玩 PC 数与上传占位成绩。</li>
        <li>文案优化：优化上传提示词（如: 上传成绩 文本）、舞萌帮助提示语及绑定落雪提示语。</li>
      </ol>
    </li>
    <li><strong>Mizuki-Sync 软件</strong>：将完成第一版更新，预计在 2026 年 5/6 月份开始第一轮内测，后续将发送测试链接。</li>
  </ul>

  <h4 style="color: #722ed1; margin-top: 15px; font-size: 15px;">HongXing (南京) 工作室公告</h4>
  <ul style="margin: 5px 0 0 20px; font-size: 14px; opacity: 0.9; line-height: 1.8;">
    <li><strong>系统规划</strong>：停止对 HongXing3 / 3.1 的更新维护支持；HongXingOS7 预计延迟开发至 27 年；内核版本将修更至 6.1 版本。</li>
    <li><strong>安全与新分支</strong>：在 HongXingOS6 Bui.2026.4 (更新代码 e7f9) 中新增 HongXing AuthLit4，更新后几天内将完全覆盖所有保护（此机制不会对外传输隐私信息）；新增 Ospalin HongXingos8 海外版本测试中。</li>
    <li><strong>底层与架构</strong>：新增 HongXing OpenAis 底层固件（已知情况下为可选安装）；更新 HongXing 虚拟化/虚拟机/集群的管理机制。</li>
    <li><strong>Bug 修复清单</strong>：
      <ul style="margin-top: 5px; margin-bottom: 5px;">
        <li>修复错误代码 2840：在触发更新/重置等高级系统功能时进行等待页面并（成功）死机的问题。</li>
        <li>修复登录账户时资料不是本账户的情况（原因：系统未同步更新导致系统认为没获取到并自动随机生成了用户信息）。</li>
        <li>修复启动内核时出现乱码的情况。</li>
        <li>修复 VMM 底层干预时出现崩溃的问题。</li>
        <li>修复游戏自适应出现 CPU/GPU 调用过高的问题。</li>
      </ul>
    </li>
  </ul>
</div>

<div class="custom-card" style="background: var(--vp-c-bg-soft); border-left: 5px solid #a855f7; padding: 20px; border-radius: 12px; margin-bottom: 25px;">
  <h3 style="margin-top: 0; color: #a855f7;">2026.3.1 | 经济系统进阶与修复</h3>
  <ul style="margin: 10px 0 0 20px; font-size: 14px; opacity: 0.9; line-height: 1.8;">
    <li><strong>指令更新</strong>：新增 <code>经济帮助</code> 用户发送即可获取文字版说明。</li>
    <li><strong>CDK 兑换系统</strong>：管理可通过发送 CDK 给玩家兑换物品。用户需在 <code>store.mizuki.top</code> 复制文案发送给 Bot，兑换成功后扣除对应 PC 数。（注：暂无用户登录系统，需手动发给 Bot）</li>
    <li><strong>打工与体力优化</strong>：体力不足时将显示下一体力值恢复时间；修复了打工的随机分配机制（只需发送 <code>打工</code> 即可分配 社交/技术/搬运）。</li>
    <li><strong>信息更正</strong>：修复了个人信息与经济榜中显示的等级不一致的问题，现已分类。</li>
    <li><strong>Bug 修复</strong>：修复了经济榜与商城的部分 Bug。修复了 PJSK 猜卡面生效时，触发部分角色名会误发图的问题（现已改为触发文本时自动禁言 42-45 秒）。</li>
  </ul>
</div>

<div class="custom-card" style="background: var(--vp-c-bg-soft); border-left: 5px solid #ff4d4f; padding: 20px; border-radius: 12px; margin-bottom: 25px;">
  <h3 style="margin-top: 0; color: #ff4d4f;">2026.2.20 | 马年大更新（新年快乐！）</h3>
  <p style="font-size: 13px; opacity: 0.8; margin-bottom: 15px;">祝大家马到成功，事业顺利！新版本添加了更多有趣的功能：</p>
  <ul style="margin: 10px 0 0 20px; font-size: 14px; opacity: 0.9; line-height: 1.8;">
    <li><strong>经济与商城</strong>：新增商店与背包功能，达到特定等级可购买补给、恢复、头衔、主题等，并保存至背包备用。</li>
    <li><strong>网页修复</strong>：修复了 <code>list.mizuki.top</code> 网页缩放问题，并将注册时间调整为转义符格式。</li>
    <li><strong>事件与语录</strong>：更新黄历事件，扩展语录，丰富文案让签到更加具体化。</li>
    <li><strong>群管与订阅</strong>：更新欢迎/离群插件（各设 10 条文案）；更新 B站动态订阅，支持多群订阅。</li>
    <li><strong>性能与清理</strong>：修复猜卡面/猜歌遇到大文件无法上传的问题；删除了使用较少的 AI Vits 语音服务。</li>
    <li><strong>HongXingOS6 3月Dev版</strong>：修复了内核假死问题，同时解决了提出问题的用户（划掉）。</li>
  </ul>
</div>

<div class="custom-card" style="background: var(--vp-c-bg-soft); border-left: 5px solid #1890ff; padding: 20px; border-radius: 12px; margin-bottom: 25px;">
  <h3 style="margin-top: 0; color: #1890ff;">2026.2.16 | 服务器分流与重构</h3>
  <p style="font-size: 13px; opacity: 0.8; margin-bottom: 10px;">基于不可抗因素，Bot 划分为「综合功能」与「PJSK 专属」阵列：</p>
  <ul style="margin: 0 0 15px 20px; font-size: 13px; opacity: 0.9;">
    <li><strong>综合机</strong>：1号机 (3986839028) | 3号机 (3947949425) | 5号机 (3904382316)</li>
    <li><strong>PJSK机</strong>：2号机 (1005524479) | 4号机 (3925294264) | 6号机 (3675727244)</li>
  </ul>
  <ul style="margin: 10px 0 0 20px; font-size: 14px; opacity: 0.9; line-height: 1.8;">
    <li><strong>签到与经济正式版</strong>：重新构建了签到插件（测试版数据已清空），重构了个人信息、经济帮助、转账、PK转码。</li>
    <li><strong>全新要素</strong>：更新黄历、事件触发、多熟练度、多打工类型；更新商城、用户等级、称号及主题色。</li>
    <li><strong>数据清理</strong>：删除了旧版本 Status、旧版签到、逆天的欢迎语言以及 Vits 语音服务。</li>
  </ul>
</div>

<div class="custom-card" style="background: var(--vp-c-bg-soft); border-left: 5px solid #d4b106; padding: 20px; border-radius: 12px; margin-bottom: 25px;">
  <h3 style="margin-top: 0; color: #d4b106;">2026.2.6 - 2.13 | 经济系统与签到进阶</h3>
  <ul style="margin: 10px 0 0 20px; font-size: 14px; opacity: 0.9; line-height: 1.8;">
    <li><strong>(2.13) 经济生态上线</strong>：支持个人信息、签到、PK、熟练度、转账、红包等，新增每日随机事件。</li>
    <li><strong>(2.13) 安全与防护</strong>：拉 Bot 需进入审核群 <code>1053964431</code>；新增 PJSK 游玩次数限制（默认 20 次，可修改）；增加多 Bot 同群分流响应机制。</li>
    <li><strong>(2.06) 烤森与签到细则</strong>：接入烤森功能（可视奸烤森进度）。签到设定 5-30pc，好友对战随机数（至少留对方50%），转赠手续费定为 4（转账≥10收取，单日限5次）。</li>
  </ul>
</div>

<div class="custom-card" style="background: var(--vp-c-bg-soft); border-left: 5px solid #39C5BB; padding: 20px; border-radius: 12px; margin-bottom: 25px;">
  <h3 style="margin-top: 0; color: #39C5BB;">2026.2.3 | 数据对接与十万级并发</h3>
  <ul style="margin: 10px 0 0 20px; font-size: 14px; opacity: 0.9; line-height: 1.8;">
    <li><strong>成绩与安全</strong>：更新水鱼/落雪成绩上传，新增玩家成就感查看；更新落雪 OAuth 绑定提升安全性（感谢 Te:River 提供解决方案）。</li>
    <li><strong>合规与热度</strong>：更新免责声明（将对接本地数据库审核）。Bot 日活量达 3.4w，使用人数近 1w，帮助文档荣登必应首页！</li>
    <li><strong>系统底座补丁</strong>：更新 HongXingOS6 2月Bui版，修复 1w/h 消息上限导致的 DDOS 误判与内核假死（现调整为 10w/h）。补丁代码 7320。</li>
    <li><strong>Homo_qso 更新</strong>：支持所有中继查询、adif 格式导出、呼号绑定/解绑，未来向 ft8 自动分配开发。</li>
  </ul>
</div>

<div class="custom-card" style="background: var(--vp-c-bg-soft); border-left: 5px solid #eb2f96; padding: 20px; border-radius: 12px; margin-bottom: 25px;">
  <h3 style="margin-top: 0; color: #eb2f96;">2026.1.27 - 1.31 | 反馈系统与邮箱上线</h3>
  <ul style="margin: 10px 0 0 20px; font-size: 14px; opacity: 0.9; line-height: 1.8;">
    <li><strong>(1.31) 反馈转移</strong>：删除旧 Feedback 插件，转换为飞书/腾讯文档（因部分用户长篇大论不发图）。</li>
    <li><strong>(1.31) 功能迭代</strong>：实现舞萌成绩上传，部分插件可进行群内屏蔽。</li>
    <li><strong>(1.27) 情绪邮箱</strong>：新增 <code>Amia@mizuki.top</code> 邮箱，支持情绪问题倾诉（数据永久保密）。</li>
    <li><strong>(1.27) 已知问题跟进</strong>：规划重置公告插件（原匹配器导致触发频繁）；规划 mai 成绩上传。</li>
  </ul>
</div>

<div class="custom-card" style="background: var(--vp-c-bg-soft); border-left: 5px solid #fa8c16; padding: 20px; border-radius: 12px; margin-bottom: 25px;">
  <h3 style="margin-top: 0; color: #fa8c16;">2026.1.25 | PJSK 车队助手重磅上线</h3>
  <p style="font-size: 13px; opacity: 0.8; margin-bottom: 10px;">还在为找不到队友发愁？新上线的车队系统更适合有冲榜心的烤批！</p>
  <ul style="margin: 10px 0 0 20px; font-size: 14px; opacity: 0.9; line-height: 1.8;">
    <li><strong>发车格式</strong>：<code>5位房号 + 属性 + 缺人数</code>，支持“战力/普通/时效”等多属性筛选。</li>
    <li><strong>状态控制</strong>：发送“满”即标记满员，重发即补人；新车号自动替换旧车号。</li>
    <li><strong>跨群组队</strong>：支持多群共同使用车队；群管可申请车队广播，超管审核全群可见，拉满组队效率！</li>
  </ul>
</div>

<div class="custom-card" style="background: var(--vp-c-bg-soft); border-left: 5px solid #13c2c2; padding: 20px; border-radius: 12px; margin-bottom: 25px;">
  <h3 style="margin-top: 0; color: #13c2c2;">2026.1.19 - 1.24 | 断网风波与架构调整</h3>
  <ul style="margin: 10px 0 0 20px; font-size: 14px; opacity: 0.9; line-height: 1.8;">
    <li><strong>(1.24) 服务恢复与 AI 内测</strong>：断网后全线恢复，团队更名为 <strong>Akaboshi Lab | 赤星实验室</strong>。内测会自我学习群聊风格并“偷表情包”的 AI 对话功能。开发 Linux 版本的 HongXingOS，并更新 status 网页。</li>
    <li><strong>(1.23) 机房断网事件</strong>：遭遇无预警断网，期间仅保留帮助文档与 Dev 服务可用。</li>
    <li><strong>(1.19) 二月计划筹备</strong>：暂时移除 AI 功能与 <code>ham_qso</code> 进行重写；关闭所有私聊功能。</li>
  </ul>
</div>

<div class="custom-card" style="background: var(--vp-c-bg-soft); border-left: 5px solid #52c41a; padding: 20px; border-radius: 12px; margin-bottom: 25px;">
  <h3 style="margin-top: 0; color: #52c41a;">2026.1.1 - 1.11 | 正式版起航</h3>
  <ul style="margin: 10px 0 0 20px; font-size: 14px; opacity: 0.9; line-height: 1.8;">
    <li><strong>(1.11) Meme 重构与屏蔽</strong>：将 Meme 全部重构接入海豚数据库（因为 .json 炸了不得不干）；新增 Meme 屏蔽群聊功能，防止多次触发嫌烦。</li>
    <li><strong>(1.11) 备用机启用</strong>：4号机正式作为备用 Bot，仅在主 Bot 风控或测试时启用（建议添加双 Q 号防封）。</li>
    <li><strong>(1.1) 正式版发布</strong>：集成了 PJSK 全家桶、舞萌助手、娱乐模组（Meme/表情制作/B站解析等）。</li>
    <li><strong>特别鸣谢技术支持（排名不分先后）</strong>：Te:Rivet, uni_mayu, ecomter, Sirius, zhu。</li>
  </ul>
</div>
