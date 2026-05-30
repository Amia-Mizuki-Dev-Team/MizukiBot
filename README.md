# Mizuki Bot Help Documentation

这是 [Mizuki Bot 帮助文档](https://help.mizuki.top) 的静态站点源码仓库。基于 [VitePress](https://vitepress.dev/) 构建，用于向用户提供全方位的 Bot 使用指引与功能文档。

## 📖 文档内容覆盖范围

本站点提供了 Mizuki Bot 以下核心模块的使用说明：
* **核心音游支持**：PJSK (Project Sekai)、舞萌 DX (Maimai DX)、中二节奏 (Chunithm)。
* **数据与成绩**：落雪咖啡屋账号绑定、成绩同步助手、查分查榜指引。
* **娱乐与实用工具**：表情包 (Meme) 生成系统、25 时经济系统、Minecraft 服务器信息、B 站动态订阅。
* **规范与声明**：群规、免责声明、用户使用协议及赞助榜单。

## 🛠️ 技术栈

* **框架**: [VitePress](https://vitepress.dev/) (基于 Vue 3)
* **环境**: Node.js (建议 v20 或以上版本)
* **部署**: Cloudflare Pages (通过 GitHub Actions 自动构建部署)


##  部署流程

本项目已配置自动化部署 (CI/CD)。

* 任何推送到 `main` 分支的代码更改，都将触发 GitHub Actions 的工作流。
* 工作流会自动执行构建，并将生成的静态资源部署至 **Cloudflare Pages**。
* 也可以在 GitHub 的 Actions 面板中，通过 `workflow_dispatch` 手动触发部署工作流。

## 👥 开发团队

* **HongXing (Jiangsu) Dev Team** / **Mizuki Dev Team**
* © 2020-2026 MizukiBot Team. 保留所有权利。