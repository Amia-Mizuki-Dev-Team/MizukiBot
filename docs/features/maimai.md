# 舞萌 DX 专项
> 查分、查歌与排队服务。
<br>
<div class="custom-card" style="background: var(--vp-c-bg-soft); border-left: 5px solid #faad14; padding: 20px; border-radius: 12px; margin-bottom: 20px;">
  <h3 style="margin-top: 0; color: #faad14;">🟡 核心查询</h3>

| 指令 | 说明 |
| :--- | :--- |
| `今日舞萌` | 查看今日运势与推荐曲 |
| `b50` | 查询 Best 50 成绩 |
| `随个 [难度]` | 随机推歌 (例: `随个紫`) |
| `查歌 [关键词]` | 查询曲目详细信息 |
| `定数查歌 [范围]` | 例: `定数查歌 13.5 13.9` |

</div>
<div class="custom-card" style="background: var(--vp-c-bg-soft); border-left: 5px solid #52c41a; padding: 20px; border-radius: 12px; margin-bottom: 20px;">
  <h3 style="margin-top: 0; color: #52c41a;">🟢 牌子与进度</h3>

| 指令 | 说明 |
| :--- | :--- |
| `[牌子]进度` | 例: `霸者进度` / `舞舞进度` |
| `[等级]进度` | 例: `13+进度` |
| `完成表 [等级]` | 生成等级完成度图片 |
| `分数线 [曲ID]` | 查询各达成率所需分数 |

</div>
<div class="custom-card" style="background: var(--vp-c-bg-soft); border-left: 5px solid #1890ff; padding: 20px; border-radius: 12px; margin-bottom: 20px;">
  <h3 style="margin-top: 0; color: #1890ff;">🔵 查询与娱乐</h3>

| 指令 | 说明 |
| :--- | :--- |
| `是什么歌` | 查询别名对应的歌曲 |
| `[牌名/难度]是什么谱` | 查询指定谱面信息 |
| `查[别名] 谱面[难度]` | 精确查询特定歌曲难度谱面 |
| `添加别名 [ID] [名]` | 提交新的歌曲别名 |
| `mai猜歌` | 开启猜歌小游戏 |

</div>
<div class="custom-card" style="background: var(--vp-c-bg-soft); border-left: 5px solid #722ed1; padding: 20px; border-radius: 12px; margin-bottom: 20px;">
  <h3 style="margin-top: 0; color: #722ed1;">🖥️ 舞萌服务器状态</h3>
  
  <h4 style="color: #722ed1; margin-top: 15px;">🔗 查看服务器状态 (无需私钥即可查询)</h4>
  <p style="font-size: 14px; opacity: 0.9;">发送 <code>/net</code> 、 <code>网咋样</code> 或 <code>炸了吗</code></p>
  <h4 style="color: #722ed1; margin-top: 20px;">🔗 手动上报 (需要 Client ID + 私钥才可上报)</h4>
  <ul style="margin: 5px 0 0 20px; font-size: 14px; opacity: 0.9;">
    <li><code>/report 断网</code></li>
    <li><code>/report 小黑屋</code></li>
    <li><code>/report 被发票</code></li>
    <li><code>/report 罚站 300</code></li>
    <li><code>/report help</code></li>
  </ul>
  <h4 style="color: #722ed1; margin-top: 20px;">🔗 自动监听 (群聊)</h4>
  <p style="font-size: 14px; opacity: 0.9; margin-bottom: 10px;">插件会自动识别群聊中的以下说法并上报，无需手动触发：</p>
  
  <strong style="font-size: 14px;">异常触发 (主语+动词组合)</strong>
  <ul style="margin: 5px 0 10px 20px; font-size: 14px; opacity: 0.9;">
    <li><strong>主语</strong>：华立、SEGA、服务器、机台、NET等</li>
    <li><strong>动词</strong>：炸、挂、死、坏、崩等</li>
    <li><strong>示例</strong>：「服务器又炸了」「SEGA挂了」「机台灰网」「游客了」「20min了」</li>
  </ul>
  <strong style="font-size: 14px;">正常触发</strong>
  <ul style="margin: 5px 0 10px 20px; font-size: 14px; opacity: 0.9;">
    <li><strong>示例</strong>：「服务器好了」「华立稳了」「绿网了」</li>
  </ul>
  <strong style="font-size: 14px;">冯氏指数</strong>
  <ul style="margin: 5px 0 0 20px; font-size: 14px; opacity: 0.9;">
    <li><strong>起飞 (异常)</strong>：「华立冯飞了」「SEGA老冯起飞」</li>
    <li><strong>返航 (正常)</strong>：「华立冯返航了」「SEGA老冯落地」</li>
  </ul>
</div>
<div class="custom-card" style="background: var(--vp-c-bg-soft); border: 2px solid #ffc069; padding: 20px; border-radius: 12px; margin-bottom: 20px;">
  <h3 style="margin-top: 0; color: #fa8c16;">🟠 骚话模式 (娱乐)</h3>

| 指令 | 说明 |
| :--- | :--- |
| `xxmai什么` | 例: `柚子mai什么` |
| `我要在 [难度] 上 [分]` | 立 flag |
| `今天mai出勤打什么` | 随机推荐 |

</div>
<div class="custom-card" style="background: var(--vp-c-bg-soft); border: 2px solid #ff4d4f; padding: 25px; border-radius: 15px; margin-top: 30px;">
  <h3 style="margin-top: 0; color: #ff4d4f;">✨ 舞萌DX 成绩同步助手 ✨</h3>
  
  <div style="background:rgba(255, 77, 79, 0.1); padding:10px; border-radius:8px; margin-bottom:15px;">
    <p style="font-size: 13px; color:#ff4d4f; font-weight:bold; margin:0;">
      ⚠️ 维护时间: 每日 00:00-11:00 暂停服务
    </p>
    <p style="font-size: 13px; color:#ff4d4f; margin-top:5px; margin-bottom:0;">
      <strong>⚠️ 注意:</strong> 落雪绑定已升级为 OAuth 2.0 链接授权，旧版 token 已失效，现支持链接授权，更加方便！
    </p>
  </div>
  <h4 style="color: #ff7875; margin-top: 15px;">📜 免责声明 (使用前必读)</h4>
  <p style="font-size: 12px; opacity: 0.8; margin-bottom: 10px;">发送任意指令可查看协议链接。必须同意后方可使用本功能。</p>

| 指令 | 说明 |
| :--- | :--- |
| `同意Mizuki免责声明` | 同意用户协议 |
| `拒绝Mizuki免责声明` | 拒绝用户协议 |
| `撤回Mizuki免责声明同意` | 撤回之前的授权同意 |

  <h4 style="color: #ff7875; margin-top: 25px;">🔑 第一步：设置类型</h4>

| 指令 | 说明 |
| :--- | :--- |
| `设置类型 1` | <strong>类型一</strong>：仅上传成绩到查分器后立即返回。 |
| `设置类型 2` | <strong>类型二</strong>：上传成绩后，等待70秒并自动登出 (会上传占位曲)。 |

  <h4 style="color: #ff7875; margin-top: 25px;">🔑 第二步：绑定账号</h4>

| 指令 | 说明 |
| :--- | :--- |
| `绑定水鱼 [Token]` | 🐟 绑定水鱼查分器 |
| `绑定落雪` | ❄️ 获取落雪认证链接 |
| `落雪确认 [授权码]` | ✅ 确认并完成落雪绑定 |

  <h4 style="color: #ff7875; margin-top: 25px;">📊 第三步：同步成绩与查询</h4>

| 指令 | 说明 |
| :--- | :--- |
| `上传成绩` | 开始同步 (发送指令后，再发送二维码文本) |
| `预览mai` | 查看用户游戏账号的基本信息 (发送指令后，再发送二维码文本) |
| `取消` | 取消当前操作，退出上传流程 |

  <h4 style="color: #ff7875; margin-top: 25px;">🚦 队列系统与管理</h4>
  <p style="font-size: 13px; opacity: 0.8; margin-bottom: 10px;">
    • 队列最多容纳 10 人，同时只能处理 1 个用户。<br>
    • 类型一用户结束后，立即开始处理下一个；<br>
    • 类型二用户需等待其登出后 10 秒，下一个用户才开始。
  </p>

| 指令 | 说明 |
| :--- | :--- |
| `队列状态` | 查看当前队列排队人数 |
| `查看绑定` | 查看当前绑定状态和类型 |
| `登出` | 强制清理异常登录状态 |
| `设置类型` | 重新设置用户类型 (1或2) |

</div>