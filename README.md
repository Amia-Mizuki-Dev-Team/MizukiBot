# Amia_晓山瑞希 Help Documentation

`Amia-Mizuki-Dev-Team/MizukiBot` 是 [Amia_晓山瑞希帮助文档](https://help.mizuki.top/) 的源码仓库。仓库名称沿用历史项目名；当前对外名称统一为 **Amia_晓山瑞希**。

Amia_晓山瑞希是面向 QQ 群聊场景维护的 Bot 与插件集合。当前公开文档覆盖 PJSK、舞萌 DX、中二节奏、群聊管理与互动、经济系统、身份绑定与权限等能力；部分功能依赖独立插件或后端服务，因此“组织中存在对应仓库”不等于“生产环境已经稳定开放”。实际可用范围以 [功能状态](https://help.mizuki.top/status) 和具体功能页为准。

本站基于 [VitePress](https://vitepress.dev/) 构建，通过 GitHub Actions 执行构建与检查，并部署到 Cloudflare Pages。

## 当前文档范围

### 音游相关

- **Project Sekai**：查询、榜单、绑定、卡牌、歌曲、MySekai、后端路由与车队相关说明；
- **舞萌 DX**：B50、AP50、成绩查询与同步、曲库检索、分析和服务状态；
- **中二节奏**：B30、歌曲信息与谱面查询。

### 群聊与互动

- 群管理、欢迎与入群提示；
- 表情与常用生成器；
- 群活跃统计、播报和常用工具；
- 群内虚拟经济、任务、收集与互动玩法；
- 业余无线电 QSO 等独立场景插件。

### 身份与基础组件

- QQ 身份绑定与资料关联；
- 权限与管理员识别；
- 消息发送与兼容性处理；
- 帮助菜单、状态页、日志与问题反馈入口。

其中部分治理、统计、审计或扩展组件属于内部维护能力，不在 README 中将其描述为默认面向所有群开放的功能。

## 项目定位

本仓库主要负责公开帮助文档、服务公告、功能状态和项目生态说明，**不是 Bot 核心服务端仓库**，也不代表所有组织仓库的运行时逻辑都位于这里。

文档维护遵循以下原则：

- **以实际状态为准**：区分已上线、测试中、维护中和仅存在开发仓库的能力；
- **减少宣传性表述**：优先说明功能边界、依赖条件和已知限制；
- **保持可追溯**：功能变化尽量同步到状态页、更新日志和对应项目说明；
- **避免过度承诺**：第三方数据源、协议兼容与外部服务可用性不由本项目单方面保证。

## 文档入口

- [开始使用](https://help.mizuki.top/usage)
- [PJSK 专项功能](https://help.mizuki.top/features/pjsk)
- [舞萌 DX 专项](https://help.mizuki.top/features/maimai)
- [中二节奏专项](https://help.mizuki.top/features/chunithm)
- [经济系统](https://help.mizuki.top/features/economy)
- [通用工具与娱乐](https://help.mizuki.top/features/tools)
- [功能状态与数据来源](https://help.mizuki.top/status)
- [常见问题](https://help.mizuki.top/faq)
- [项目生态](https://help.mizuki.top/projects/)

## 技术概览

- 文档框架：VitePress 1.6.4
- 前端基础：Vue 3
- 运行环境：Node.js 24、npm 11
- 部署工具：Wrangler 4 / Cloudflare Pages
- 自动化流程：GitHub Actions、Dependabot、npm audit、SEO 构建审计

## 本地开发

```bash
npm ci
npm run docs:dev
```

构建并执行站点检查：

```bash
npm run docs:build
npm audit --audit-level=moderate
```

## 维护

Amia-Mizuki Dev Team

文档功能范围最后核对：2026-09-08。

© 2021-2026 Amia-Mizuki Dev Team. All rights reserved.
