# Amia_晓山瑞希 Help Documentation

`Amia-Mizuki-Dev-Team/MizukiBot` 是 [Amia_晓山瑞希帮助文档](https://help.mizuki.top/) 的源码仓库。仓库名称沿用历史项目名；对外产品名称统一为 **Amia_晓山瑞希**。

Amia_晓山瑞希，原名 Mizuki Bot，是支持 PJSK 查询与车队辅助、舞萌 DX 成绩同步、B50、AP50、成绩分析、群聊娱乐和经济系统的综合型 QQ Bot。本仓库负责其公开帮助文档、服务公告与项目生态说明。

站点基于 [VitePress](https://vitepress.dev/) 构建，通过 GitHub Actions 完成依赖审计、SEO 输出验证和 Cloudflare Pages 自动部署。

## 项目定位

本仓库不是 Bot 核心服务端，也不包含运行时逻辑。它是 Amia 生态的公开文档入口，用于帮助用户完成配置、查询功能说明、提交问题，并了解相关项目。

文档维护遵循三个原则：

- **清晰**：入口明确，标题和导航保持统一；
- **克制**：减少模板化宣传和重复内容，以实际使用信息为主；
- **可维护**：新增页面时同步维护导航、侧边栏、首页入口和关联链接。

## 文档范围

- **入门指南**：基础使用、身份绑定、问题反馈与常见操作；
- **音游功能**：PJSK、舞萌 DX、中二节奏的查询、分析和同步说明；
- **通用功能**：经济系统、表情包、群聊工具和其他互动功能；
- **更新与公告**：Bot 更新日志、Minecraft 更新和服务状态；
- **规范文件**：群规、风险说明、用户协议、赞助和团队信息；
- **项目生态**：插件、客户端、网关、协议桥接和核心治理组件。

## 技术概览

- 文档框架：VitePress 1.6.4
- 前端基础：Vue 3
- 运行环境：Node.js 24、npm 11
- 部署工具：Wrangler 4 / Cloudflare Pages
- 自动化流程：GitHub Actions、Dependabot、npm audit、SEO 构建审计

## 本地开发

安装锁定依赖：

```bash
npm ci
```

启动本地文档服务：

```bash
npm run docs:dev
```

构建并执行 SEO 输出审计：

```bash
npm run docs:build
```

检查依赖安全状态：

```bash
npm audit --audit-level=moderate
```

## 维护团队

Amia-Mizuki Dev Team

© 2021-2026 Amia-Mizuki Dev Team. All rights reserved.
