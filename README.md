# 个人网站项目

## 目录

- [项目简介](#项目简介)
- [快速开始](#快速开始)
- [项目结构](#项目结构)
- [配置管理](#配置管理)
- [组件说明](#组件说明)
- [部署](#部署)
- [协作规范](#协作规范)
- [贡献](#贡献)
- [许可证](#许可证)
- [联系方式](#联系方式)

## 项目简介

这是一个基于 Vue 3 + Vite 构建的个人网站项目，使用 Tailwind CSS 进行样式设计，具有现代化的界面和完整的功能模块。

### 功能特性

- 📱 响应式设计，适配不同屏幕尺寸
- 🌓 支持亮色/深色模式切换
- 👤 个人介绍与展示
- 💻 项目作品展示
- 📝 文章分享
- 🛠️ 技能展示
- 📧 联系方式（邮件、微信、QQ）
- 🔗 社交链接
- 🎨 现代化 UI 设计
- ⚡ 快速加载

### 技术栈

- **前端框架**：Vue 3 (组合式 API)
- **构建工具**：Vite
- **路由管理**：Vue Router 4
- **样式框架**：Tailwind CSS 3
- **状态管理**：Vue 3 的 provide/inject API
- **图标服务**：Simple Icons

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

### 一键发布

```bash
# 交互式发布
yarn release
```

## 项目结构

```
├── public/             # 静态资源
│   ├── favicon.ico      # 网站图标
│   └── qrcode/          # 二维码图片（微信、QQ等）
├── src/                # 源代码
│   ├── assets/         # 资源文件
│   ├── components/      # 组件
│   │   ├── Navbar.vue       # 导航栏组件
│   │   ├── HeroSection.vue  # 首页英雄区域组件
│   │   ├── Social.vue       # 社交链接组件
│   │   ├── Projects.vue     # 项目展示组件
│   │   ├── Articles.vue     # 文章列表组件
│   │   ├── Skills.vue       # 技能展示组件
│   │   ├── Contact.vue      # 联系方式组件
│   │   ├── ContactModal.vue # 联系弹框组件
│   │   ├── AboutSection.vue # 关于页面内容组件
│   │   └── Footer.vue       # 页脚组件
│   ├── views/           # 页面组件
│   │   ├── HomePage.vue     # 首页
│   │   └── AboutPage.vue    # 关于页面
│   ├── router/          # 路由配置
│   │   └── index.js         # 路由定义
│   ├── main.js         # 应用入口
│   ├── main.config.js  # 全局配置
│   └── style.css       # 全局样式
├── .env                # 环境变量
├── .env.development    # 开发环境配置
├── .env.production     # 生产环境配置
├── package.json        # 项目配置
├── vite.config.js      # Vite 配置
├── tailwind.config.js  # Tailwind CSS 配置
├── postcss.config.js   # PostCSS 配置
├── Dockerfile          # Docker 构建配置
├── nginx.conf          # Nginx 配置
└── README.md           # 项目文档
```

## 配置管理

项目的全局配置和静态数据存储在 `src/main.config.js` 文件中，包括：

### 0. 导航配置
- `navConfig`：导航栏导航链接配置

### 1. 网站配置
- `siteConfig`：站点基本信息（名称、标题、副标题、头像等

### 2. 社交配置
- `social`：社交页面配置
- `socialLinks`：社交链接列表

### 3. 项目配置
- `projectsPage`：项目页面配置
- `projects`：项目列表

### 4. 文章配置
- `articlesPage`：文章页面配置
- `articles`：文章列表

### 5. 技能配置
- `skills`：技能页面配置
- `skillCategories`：技能分类

### 6. 联系我配置
- `contact`：联系页面配置
- `contact.methods`：联系方式（邮件、微信、QQ）
- `contact.wechatQrCode`：微信二维码路径
- `contact.qqQrCode`：QQ二维码路径

### 7. 关于我配置
- `aboutMe`：关于页面配置

### 8. 首页配置
- `homePage`：首页配置

## 组件说明

### 页面组件

| 组件名 | 说明 | 路径 |
|--------|------|------|
| HomePage | 首页 | `src/views/HomePage.vue` | 首页，包含所有功能模块的完整页面 |
| AboutPage | 关于页 | `src/views/AboutPage.vue` | 个人介绍页面 |

### 功能组件

| 组件名 | 说明 | 路径 |
|--------|------|------|
| Navbar | 导航栏 | `src/components/Navbar.vue` | 顶部导航栏，支持深色/浅色模式切换 |
| HeroSection | 首页英雄区域 | `src/components/HeroSection.vue` | 首页的头部展示 |
| Social | 社交链接 | `src/components/Social.vue` | 展示社交平台链接卡片 |
| Projects | 项目展示 | `src/components/Projects.vue` | 展示个人项目作品 |
| Articles | 文章列表 | `src/components/Articles.vue` | 展示文章列表 |
| Skills | 技能展示 | `src/components/Skills.vue` | 展示技能卡片 |
| Contact | 联系方式 | `src/components/Contact.vue` | 展示联系方式，点击弹框 |
| ContactModal | 联系弹框 | `src/components/ContactModal.vue` | 弹窗展示邮件/二维码 |
| AboutSection | 关于页面内容 | `src/components/AboutSection.vue` | 关于页面 |
| Footer | 页脚 | `src/components/Footer.vue` | 网站底部版权信息 |

## 部署

### 静态资源说明

所有静态资源（包括二维码图片）需要放置在 `public/` 目录下才能被正确访问：

```
public/
├── favicon.ico
└── qrcode/
    ├── wechat.png   # 微信二维码
    └── qq.png      # QQ二维码
```

### 静态网站部署

1. 构建生产版本：`npm run build`
2. 将 `dist` 目录中的文件部署到任何静态网站托管服务，如：
   - GitHub Pages
   - Netlify
   - Vercel
   - 阿里云 OSS
   - 腾讯云 COS

### Docker 一键部署

```bash
# 进入项目目录
cd easyji-home

# 构建镜像
docker build -t my-website .

# 停止并移除旧容器（如果存在）
docker stop website 2>/dev/null || true
docker rm website 2>/dev/null || true

# 启动新容器
docker run -d -p 80:80 --name website my-website

# 查看运行状态
echo "部署完成！访问 http://localhost"
docker ps
```

**说明**：
- 端口：默认映射 80 端口
- 持久化：如需持久化配置，可挂载目录
- 重启策略：如需自动重启，添加 `--restart always`

### 传统服务器部署

如果需要在自己的服务器上部署，可以使用以下步骤：

1. 构建生产版本：`npm run build`
2. 将 `dist` 目录复制到服务器
3. 使用 Nginx 配置静态网站服务

**Nginx 配置示例**：

```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /path/to/dist;
    index index.html;

    # Hash 模式路由支持
    location / {
        try_files $uri $uri/ /index.html;
    }

    # 静态资源缓存
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 30d;
        add_header Cache-Control "public, max-age=2592000";
    }
}
```

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

## 联系方式

如有问题或建议，请通过以下方式联系：

- 邮件：1871670089@qq.com
- GitHub：https://github.com/you-peng
- Gitee：https://gitee.com/you-peng
