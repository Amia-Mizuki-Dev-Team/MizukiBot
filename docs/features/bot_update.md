---
title: Mizuki Bot 更新日志
description: Bot 的更新历史和版本迭代记录。
---

# Mizuki Bot 更新日志

> Bot 的每一次进化都在这里。

<br>

<div class="mzk-card mzk-card--blue">
  <h3>2026.7 | HongXing 系统更新说明</h3>
  <p>图中说明不代表最终版本。本次记录包含安全修复、问题修复、功能更新、性能优化与其他维护项。</p>

  <h4>安全修复</h4>
  <ul>
    <li>修复 HongXing Update 模块中的劫持风险。</li>
    <li>修复 HongXingOS 生命周期第二阶段中 Int Economy 注入漏洞。</li>
    <li>修复 HongXing AuthLit4 生命周期中的“时间炸弹”问题，并将时间字段由两位年份扩展为四位年份。</li>
  </ul>

  <h4>问题修复</h4>
  <ul>
    <li>修复 HongXing Update 中更新代码与实际内容不符、代码错码、乱码等问题。</li>
    <li>修复 HongXingOS4 26.4 版本中风扇转速与调节软件不匹配、内存显示错误、CPU 信息显示乱码、进程无法关闭等错误。此修复将随 26.7 版本更新包发布。</li>
    <li>修复 HongXingOS5 26.02.20ed 版本中进程管理器显示“NaN”或乱码等问题，修复已包含于 26.07.27ek 版本更新包。</li>
    <li>修复 HongXing AuthLit4 中因主动干预机制导致的无法正常响应及黑屏等异常。修复包含于下一版本网络更新，预计传输耗时 2 小时。</li>
    <li>修复 Nano 内测 View 02 版本中 2FA 认证无法正常使用、二维码扫描失败及账号验证被强制中断的问题。</li>
    <li>修复 Nano 内测 View 02 版本中 Auth 失效的问题。</li>
  </ul>

  <h4>功能更新</h4>
  <ul>
    <li>更新 HongXingOS4 应用适配层，修正存在的适配偏差。</li>
    <li>修复 HongXingOS4 中软件适配与运行异常。</li>
    <li>更新 HongXingOS5 用户界面，并覆写设备底层数据。</li>
    <li>更新 HongXingOS5 中的 Auth 验证机制，引入新的验证手段。</li>
    <li>更新 HongXingOS5 自主学习与自适应能力。</li>
    <li>更新虚拟空白权限机制，并发布“隐私闪光弹”功能：任何应用读取权限时均会留下访问脚印。</li>
    <li>更新 WLAN 双网络加速功能。</li>
  </ul>

  <h4>性能优化</h4>
  <ul>
    <li>优化 HongXingOS6 应用适配层与扫描能力。</li>
    <li>优化 HongXingOS6 对 CPU、内存、GPU 的调用与调度能力，新增支持 Intel 第 10 代及更新处理器，并改进多核负载均衡。</li>
    <li>对 HongXing 3.1 历史遗留代码进行优化重构，本次更新将包含更多旧有代码的持续改进。</li>
    <li>优化 HongXing AuthLit4 启动速度、软硬件读取速度以及基底数据上传/下载速度。</li>
    <li>优化 HongXing AuthLit5 View 测试版中的过渡动画、UI 启动层、应用层以及软硬件读取与服务响应速度。</li>
    <li>优化 Nano View 02 加载速度。</li>
    <li>优化系统功耗，提升续航表现。</li>
  </ul>

  <h4>其他</h4>
  <ul>
    <li>开放 HongXingOS 侧载固件及修复工具，使用须内置有效认证证书，否则无法正常使用。</li>
    <li>重写用户界面。</li>
  </ul>
</div>

<div class="mzk-card mzk-card--purple">
  <h3>2026.7 | PJSK 功能与底层稳定性更新</h3>

  <h4>底层架构与稳定性修改</h4>
  <ul>
    <li>将客户端代理引擎从 websockets 升级为 aiohttp，缓解 Windows / 双栈网络环境下频繁出现的远程连接拒绝问题。</li>
    <li>补全 Napcat / OneBot V11 握手请求头，并实现登录信息与生命周期 API 回调拦截，降低被后端防火墙误判为非法客户端的概率。</li>
    <li>修复存活心跳包处理逻辑错误导致的代理与客户端无限断开重连问题。</li>
  </ul>

  <h4>业务逻辑与指令分发优化</h4>
  <ul>
    <li>重构双端指令池，将指令集划分为专有指令与共用指令，修复“补票”“倍率”等特殊指令及工具箱指令被代理误拦截的问题。</li>
    <li>优化外链清洗正则，精准放行 <code>[CQ:image,file=...]</code> 等内部直链，避免误删游戏截图与资源。</li>
  </ul>

  <h4>新功能与交互体验</h4>
  <ul>
    <li>新增免斜杠触发服务，支持在指定群聊内直接触发指令。</li>
    <li>引入动态配置与持久化存储机制，配置会实时保存至 <code>auto_slash_groups.json</code>。</li>
    <li>免斜杠配置仅限 Bot 超级管理员通过 <code>免斜杠配置 群号</code> 或 <code>免斜杠取消 群号</code> 热更新，并在帮助菜单中增加高风险免责声明。</li>
    <li>重构帮助菜单，扩充帮助按钮，将笼统描述替换为可直接复制的实用示例。</li>
    <li>修复帮助菜单中工具箱地址无法点击的问题，适配标准 Markdown 超链接格式。</li>
  </ul>
</div>

<div class="mzk-card mzk-card--green">
  <h3>2026.7 | Mizuki 经济榜与经济系统修复</h3>

  <h4>图像渲染层</h4>
  <ul>
    <li>修复打工结算图片中的收益正负号拼接错误。打工受伤导致收益为负数时，不再显示为 <code>+-2 PC</code>。</li>
  </ul>

  <h4>数据库与业务逻辑层</h4>
  <ul>
    <li>修复排行榜 SQL 变量转义崩溃，将 <code>DATE_FORMAT</code> 中的百分号转义，解决 aiomysql 格式化变量误判问题。</li>
    <li>补全红包与商城账单流水，在发红包、抢红包、商城购买事务中追加 <code>economy_logs</code> 记录。</li>
    <li>引入红包序列号机制，账单日志会记录 6 位字母数字混合序列号，便于查账和防重溯源。</li>
    <li>适配前端排行榜字段，严格输出网页端需要的键名并自动计算排名序号。</li>
  </ul>

  <h4>交互中枢</h4>
  <ul>
    <li>将 <code>safe_execute</code> 并发超时时间从 10 秒提升至 45 秒，降低高并发或图片生成时的误报警概率。</li>
    <li>挂载前端排行榜 API：通过 FastAPI 挂载 <code>/economy/rank</code> GET 路由并配置 CORS，使 <code>list.mizuki.top</code> 能请求实时排行榜。</li>
    <li>新增商城提货指令 <code>结算订单</code>，别名 <code>购买</code>，用于承接网页商城生成的文本命令。</li>
    <li>回归并强化 PK 系统，增加回复对象与消息内 at 节点的双重目标捕获机制，并过滤无效目标。</li>
    <li>隔离 Markdown 与普通文本流：官方 Bot 实例使用按钮和 Markdown 文本，其余小号降级为安全纯文本。</li>
    <li>修复 <code>经济帮助</code> 菜单硬编码玩家昵称的问题，改为动态获取当前触发者昵称。</li>
  </ul>
</div>

<div class="mzk-card mzk-card--yellow">
  <h3>2026.7 | 白名单系统更新</h3>

  <h4>核心鉴权逻辑修改</h4>
  <ul>
    <li>拆分缓存机制：授权成功缓存 10 分钟，失败状态仅缓存 30 秒，缩短群管授权后的恢复等待时间。</li>
    <li>精准抓取群主 ID：改为遍历群成员列表提取 <code>role == "owner"</code> 的用户 ID，并对旧数据中的 <code>owner_id = 0</code> 记录执行自动热修复。</li>
    <li>引入全局强拦截钩子，在事件流最顶层阻断未授权群聊消息，避免其他插件越权响应。</li>
    <li>增加定向拦截提示与防刷屏冷却：仅在群主或管理员触发时回复引导文案，并设置 5 分钟提示冷却。</li>
  </ul>

  <h4>管理面板重构</h4>
  <ul>
    <li>全面弃用旧版 Tortoise ORM 语法，改写为兼容 nonebot-plugin-orm 的异步 SQLAlchemy 标准查询语法。</li>
    <li>改用树状明细排版展示群名、群主、邀请人等信息，提高手机端可读性。</li>
    <li>增加状态标识，区分超管特批与开发群授权放行。</li>
  </ul>
</div>

<div class="mzk-card mzk-card--red">
  <h3>2026.5.30 | 开发组团队调整</h3>
  <p>
    公告日期：2026.5.30 &nbsp;|&nbsp; 分类：团队调整与维护变更
  </p>

  <h4>一、人事调整</h4>
  <ul>
    <li><strong>暂停工作</strong>：因学业繁忙，<code>HX-Wrdzgzs</code> 与 <code>MC_FanBuFan</code> 暂停开发工作。</li>
  </ul>

  <h4>二、维护信息</h4>
  <ul>
    <li><strong>维护降级</strong>：Bot 开发工作同步暂停，后续将仅进行最低等级的功能维护与常态稳定性保障。</li>
  </ul>
</div>

<div class="mzk-card mzk-card--blue">
  <h3>2026.4.22 | HongXing (江苏) 工作室 5月情报与系统规划</h3>
  <p>本次通报包含系统安装安排、机房建设规划、安全升级及核心人员职务调整说明。</p>
  
  <h4>一、系统停机与新机房建设</h4>
  <ul>
    <li><strong>系统停机安装安排</strong>：4月28日至30日，对 Ospalin HongXingos 8 系统进行停机安装。该系统主打营销分析与安全防护，保障用户数据隐私。</li>
    <li><strong>新机房选址与建设</strong>：4月18日-19日确认新机房选址江苏省苏州市。预计 2026 年上半年完成建设，下半年视情况分批迁移服务。</li>
    <li><strong>HongXingOS 7 规划</strong>：首轮内测预计 2026 年 10 月启动。内核基于 6.1 版本构建，并解决 OS6 中存在的部分重大问题。</li>
  </ul>

  <h4>二、AuthLit 安全升级与 OS6 构建更新</h4>
  <ul>
    <li><strong>AuthLit 4 更新说明</strong>：针对 4 月 12 日的外部攻击，于 4 月 25 日至 26 日进行更新。提升 AuthLit 权限至仅次于系统管理员，并新增主动干预固件。</li>
    <li><strong>OS6 构建版本更新</strong>：4 月 26 日提交新构建版本 (OS6 Build 2026.4.b57e205，更新代码 2e70)。</li>
    <li><strong>OS6 修复清单</strong>：修复启动过程中的内核崩溃、卡死、较大文件构建乱码或无响应等异常，并优化启动流程。</li>
  </ul>

  <h4>三、人员职务调整与排班说明</h4>
  <ul>
    <li><strong>核心人员工作调整</strong>：HX-Wrdzgzs 已于 3 月 14 日提交离职申请。自 6 月 23 日起，职责由一线开发转为二线开发。</li>
    <li><strong>五一期间值班安排</strong>：因特殊原因，HX-Wrdzgzs 不参与本次五一假期的值班工作，具体安排请查阅其他人员排班表。</li>
  </ul>
</div>

<div class="mzk-card mzk-card--purple">
  <h3>2026.4 | 4月核心更新与架构升级</h3>
  <p>此版本包含大量底层重构与功能迭代。目前 Mizuki Bot 日活量已达到 5w 以上，感谢大家的支持，后续将专向开发官方 Bot 及 DXPASS。</p>
  
  <h4>Bot 核心与安全防护</h4>
  <ul>
    <li><strong>Mizuki 文本审核</strong>：原 HX 鹰眼审核机制升级，加入上下文检索，并增加阶梯处罚机制。</li>
    <li><strong>鉴权防护框架</strong>：新增 HongXing AuthLit4。</li>
    <li><strong>底层预处理</strong>：新增 HongXing OpenAis，在底层框架上进行预处理机制。</li>
    <li><strong>交互优化</strong>：新增 Bot 信息间隔功能，采用随机秒数回复，并引用用户触发 Bot 的原信息。</li>
  </ul>

  <h4>经济系统与落雪 B50</h4>
  <ul>
    <li><strong>经济系统修复</strong>：更新打工界面；修复“打工多无法进行触发”的问题；Mizuki 经济榜系统从时刻更新调整为 3 分钟数据更新。</li>
    <li><strong>落雪 B50</strong>：在水鱼 B50 基础上新增 AP50，后续将支持热力图、分数趋势、FC50 等功能。</li>
  </ul>

  <h4>Mai-Sync 深度升级与周边软件</h4>
  <ul>
    <li><strong>Mai-Sync 更新清单</strong>：新增落雪水鱼双端上传、收藏品自动同步、账号预览、强制停止、取消绑定、队列系统等能力。</li>
    <li><strong>Mizuki-Sync 软件</strong>：将完成第一版更新，预计在 2026 年 5/6 月份开始第一轮内测。</li>
  </ul>
</div>

<div class="mzk-card mzk-card--purple">
  <h3>2026.3.1 | 经济系统进阶与修复</h3>
  <ul>
    <li><strong>指令更新</strong>：新增 <code>经济帮助</code>，用户发送即可获取文字版说明。</li>
    <li><strong>CDK 兑换系统</strong>：管理可通过发送 CDK 给玩家兑换物品。用户需在 <code>store.mizuki.top</code> 复制文案发送给 Bot。</li>
    <li><strong>打工与体力优化</strong>：体力不足时将显示下一体力值恢复时间；修复打工随机分配机制。</li>
    <li><strong>信息更正</strong>：修复个人信息与经济榜中显示的等级不一致的问题。</li>
    <li><strong>Bug 修复</strong>：修复经济榜与商城的部分 Bug。</li>
  </ul>
</div>

<div class="mzk-card">
  <h3>2026.2.20 | 马年大更新（新年快乐！）</h3>
  <p>祝大家马到成功，事业顺利！新版本添加了更多有趣的功能：</p>
  <ul>
    <li><strong>经济与商城</strong>：新增商店与背包功能，达到特定等级可购买补给、恢复、头衔、主题等，并保存至背包备用。</li>
    <li><strong>网页修复</strong>：修复 <code>list.mizuki.top</code> 网页缩放问题，并将注册时间调整为转义符格式。</li>
    <li><strong>事件与语录</strong>：更新黄历事件，扩展语录，丰富文案让签到更加具体化。</li>
    <li><strong>群管与订阅</strong>：更新欢迎/离群插件；更新 B站动态订阅，支持多群订阅。</li>
    <li><strong>性能与清理</strong>：修复猜卡面/猜歌遇到大文件无法上传的问题；删除使用较少的 AI Vits 语音服务。</li>
    <li><strong>HongXingOS6 3月Dev版</strong>：修复内核假死问题。</li>
  </ul>
</div>

<div class="mzk-card mzk-card--blue">
  <h3>2026.2.16 | 服务器分流与重构</h3>
  <p>基于不可抗因素，Bot 划分为「综合功能」与「PJSK 专属」阵列：</p>
  <ul>
    <li><strong>综合机</strong>：1号机 (3986839028) | 3号机 (3947949425) | 5号机 (3904382316)</li>
    <li><strong>PJSK机</strong>：2号机 (1005524479) | 4号机 (3925294264) | 6号机 (3675727244)</li>
  </ul>
  <ul>
    <li><strong>签到与经济正式版</strong>：重新构建签到插件，重构个人信息、经济帮助、转账、PK转码。</li>
    <li><strong>全新要素</strong>：更新黄历、事件触发、多熟练度、多打工类型；更新商城、用户等级、称号及主题色。</li>
    <li><strong>数据清理</strong>：删除旧版本 Status、旧版签到、旧欢迎语言以及 Vits 语音服务。</li>
  </ul>
</div>

<div class="mzk-card mzk-card--yellow">
  <h3>2026.2.6 - 2.13 | 经济系统与签到进阶</h3>
  <ul>
    <li><strong>(2.13) 经济生态上线</strong>：支持个人信息、签到、PK、熟练度、转账、红包等，新增每日随机事件。</li>
    <li><strong>(2.13) 安全与防护</strong>：拉 Bot 需进入审核群 <code>1053964431</code>；新增 PJSK 游玩次数限制；增加多 Bot 同群分流响应机制。</li>
    <li><strong>(2.06) 烤森与签到细则</strong>：接入烤森功能。签到设定 5-30pc，转赠手续费定为 4，单日限 5 次。</li>
  </ul>
</div>

<div class="mzk-card mzk-card--cyan">
  <h3>2026.2.3 | 数据对接与十万级并发</h3>
  <ul>
    <li><strong>成绩与安全</strong>：更新水鱼/落雪成绩上传，新增玩家成就感查看；更新落雪 OAuth 绑定提升安全性。</li>
    <li><strong>合规与热度</strong>：更新免责声明。Bot 日活量达 3.4w，使用人数近 1w。</li>
    <li><strong>系统底座补丁</strong>：更新 HongXingOS6 2月Bui版，修复消息上限导致的误判与内核假死。</li>
    <li><strong>Homo_qso 更新</strong>：支持中继查询、adif 格式导出、呼号绑定/解绑。</li>
  </ul>
</div>

<div class="mzk-card mzk-card--magenta">
  <h3>2026.1.27 - 1.31 | 反馈系统与邮箱上线</h3>
  <ul>
    <li><strong>(1.31) 反馈转移</strong>：删除旧 Feedback 插件，转换为飞书/腾讯文档。</li>
    <li><strong>(1.31) 功能迭代</strong>：实现舞萌成绩上传，部分插件可进行群内屏蔽。</li>
    <li><strong>(1.27) 情绪邮箱</strong>：新增 <code>Amia@mizuki.top</code> 邮箱。</li>
    <li><strong>(1.27) 已知问题跟进</strong>：规划重置公告插件；规划 mai 成绩上传。</li>
  </ul>
</div>

<div class="mzk-card mzk-card--orange">
  <h3>2026.1.25 | PJSK 车队助手重磅上线</h3>
  <p>新上线的车队系统更适合有冲榜需求的群聊。</p>
  <ul>
    <li><strong>发车格式</strong>：<code>5位房号 + 属性 + 缺人数</code>，支持“战力/普通/时效”等多属性筛选。</li>
    <li><strong>状态控制</strong>：发送“满”即标记满员，重发即补人；新车号自动替换旧车号。</li>
    <li><strong>跨群组队</strong>：支持多群共同使用车队；群管可申请车队广播，超管审核全群可见。</li>
  </ul>
</div>

<div class="mzk-card mzk-card--cyan">
  <h3>2026.1.19 - 1.24 | 断网风波与架构调整</h3>
  <ul>
    <li><strong>(1.24) 服务恢复与 AI 内测</strong>：断网后全线恢复，团队更名为 <strong>Akaboshi Lab | 赤星实验室</strong>。开发 Linux 版本的 HongXingOS，并更新 status 网页。</li>
    <li><strong>(1.23) 机房断网事件</strong>：遭遇无预警断网，期间仅保留帮助文档与 Dev 服务可用。</li>
    <li><strong>(1.19) 二月计划筹备</strong>：暂时移除 AI 功能与 <code>ham_qso</code> 进行重写；关闭所有私聊功能。</li>
  </ul>
</div>

<div class="mzk-card mzk-card--green">
  <h3>2026.1.1 - 1.11 | 正式版起航</h3>
  <ul>
    <li><strong>(1.11) Meme 重构与屏蔽</strong>：将 Meme 全部重构接入海豚数据库；新增 Meme 屏蔽群聊功能。</li>
    <li><strong>(1.11) 备用机启用</strong>：4号机正式作为备用 Bot，仅在主 Bot 风控或测试时启用。</li>
    <li><strong>(1.1) 正式版发布</strong>：集成 PJSK 全家桶、舞萌助手、娱乐模组等功能。</li>
    <li><strong>特别鸣谢技术支持（排名不分先后）</strong>：Te:Rivet, uni_mayu, ecomter, Sirius, zhu。</li>
  </ul>
</div>
