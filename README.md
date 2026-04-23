# 个人网站项目

## 目录

- [项目简介](#项目简介)
- [快速开始](#快速开始)
- [项目结构](#项目结构)
- [配置管理](#配置管理)
- [部署](#部署)
- [协作规范](#协作规范)
- [贡献](#贡献)
- [许可证](#许可证)
- [联系方式](#联系方式)

## 项目简介

这是一个基于 Vue 3 + Vite 构建的个人网站项目，使用 Tailwind CSS 进行样式设计，具有现代化的界面和完整的功能模块。

### 功能特性

- 响应式设计，适配不同屏幕尺寸
- 支持亮色/深色模式切换
- 个人介绍与展示
- 项目作品展示
- 文章分享
- 技能展示
- 联系方式
- 社交链接

### 技术栈

- **前端框架**：Vue 3 (组合式 API)
- **构建工具**：Vite
- **路由管理**：Vue Router 4
- **样式框架**：Tailwind CSS 3
- **状态管理**：Vue 3 的 provide/inject API

## 快速开始

### 环境要求

- Node.js >= 14.0.0
- npm >= 6.0.0
- Yarn >= 1.22.0（可选）

### 安装依赖

```bash
# 使用 npm
npm install

# 使用 yarn
yarn install
```

### 启动开发服务器

```bash
# 使用 npm
npm run dev

# 使用 yarn
yarn dev
```

开发服务器将在配置的端口启动，默认为 http://localhost:5173。

### 构建生产版本

```bash
# 使用 npm
npm run build

# 使用 yarn
yarn build
```

构建产物将生成在 `dist` 目录中。

### 预览生产构建

```bash
# 使用 npm
npm run serve

# 使用 yarn
yarn serve
```

预览服务器将在配置的端口启动，默认为 http://localhost:4173。

### 端口配置

可以通过修改环境配置文件来更改服务器端口：

- 开发环境：修改 `.env.development` 文件中的 `VITE_PORT` 值
- 生产环境：修改 `.env.production` 文件中的 `VITE_PORT` 值

## 项目结构

```
├── public/             # 静态资源
├── src/                # 源代码
│   ├── assets/         # 资源文件
│   ├── components/     # 组件
│   │   └── Navbar.vue  # 导航栏组件
│   ├── views/          # 页面组件
│   │   ├── Home.vue    # 首页
│   │   ├── About.vue   # 关于页
│   │   ├── Social.vue  # 社交页
│   │   ├── Projects.vue # 项目页
│   │   ├── Articles.vue # 文章页
│   │   ├── Skills.vue  # 技能页
│   │   └── Contact.vue # 联系页
│   ├── router/         # 路由配置
│   │   └── index.js    # 路由定义
│   ├── main.js         # 应用入口
│   ├── main.config.js  # 全局配置
│   └── style.css       # 全局样式
├── package.json        # 项目配置
└── vite.config.js      # Vite 配置
```

## 配置管理

项目的全局配置和静态数据存储在 `src/main.config.js` 文件中，包括：

- 站点配置（名称、标题、副标题）
- 导航配置
- 社交链接
- 项目数据
- 文章数据
- 技能数据
- 关于信息

## 部署

### 静态网站部署

1. 构建生产版本：`npm run build`
2. 将 `dist` 目录中的文件部署到任何静态网站托管服务，如：
   - GitHub Pages
   - Netlify
   - Vercel
   - 阿里云 OSS
   - 腾讯云 COS

### 服务器部署

如果需要在自己的服务器上部署，可以使用以下步骤：

1. 构建生产版本：`npm run build`
2. 将 `dist` 目录复制到服务器
3. 使用 Nginx 或 Apache 配置静态网站服务

## 协作规范

### 代码风格

- 使用 Vue 3 的组合式 API
- 遵循 ESLint 规则
- 使用 Prettier 格式化代码
- 组件命名使用 PascalCase
- 变量和函数命名使用 camelCase

### 提交规范

使用语义化提交信息，格式如下：

```
<类型>(<范围>): <描述>

<详细描述>

<脚注>
```

类型包括：
- feat: 新功能
- fix: 修复 bug
- docs: 文档更新
- style: 代码样式调整
- refactor: 代码重构
- test: 测试相关
- chore: 构建或依赖更新

### 分支管理

- main: 主分支，用于发布生产版本
- develop: 开发分支，用于集成功能
- feature/*: 特性分支，用于开发新功能
- fix/*: 修复分支，用于修复 bug

## 贡献

欢迎提交 Issue 和 Pull Request 来改进这个项目。

## 许可证

本项目采用 MIT 许可证。

## 一键发布

### 使用方法

```bash
# 交互式发布（推荐）
yarn release

# 或者手动指定版本号
yarn tag v1.0.0

# 推送所有标签
yarn push-tag
```

### 功能说明

- 交互式输入版本号和 Release 说明
- 自动创建 Git Tag
- 推送到 Gitee 远程仓库
- 生成 RELEASE.md 文件

## 联系方式

如有问题或建议，请通过以下方式联系：

- 邮件：example@example.com
- GitHub：https://github.com
