# Amia_晓山瑞希 Help Documentation

`Amia-Mizuki-Dev-Team/MizukiBot` 是 [Amia_晓山瑞希帮助文档](https://help.mizuki.top) 的源码仓库。仓库名称沿用历史项目名；对外产品名称统一为 **Amia_晓山瑞希**。

站点承载用户文档、功能说明、使用规范、Bot 更新日志、服务公告和项目生态介绍，基于 [VitePress](https://vitepress.dev/) 构建，并通过 GitHub Actions 与 Cloudflare Pages 自动部署。

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

- 文档框架：VitePress
- 前端基础：Vue 3
- 运行环境：Node.js 20+
- 部署平台：Cloudflare Pages
- 自动化流程：GitHub Actions

## 本地开发

```bash
npm install
npm run docs:dev
```

构建生产版本：

```bash
npm run docs:build
```

## 维护团队

Amia-Mizuki Dev Team

© 2021-2026 Amia-Mizuki Dev Team. All rights reserved.
