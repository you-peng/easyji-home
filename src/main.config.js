import Home from './views/HomePage.vue'
import About from './views/AboutPage.vue'
import Social from './components/Social.vue'
import Projects from './components/Projects.vue'
import Articles from './components/Articles.vue'
import Skills from './components/Skills.vue'
import Contact from './components/Contact.vue'

// 主题配置
export const themeConfig = {
  defaultDark: false
}

// 0.导航配置
export const navConfig = [
  { name: '首页', path: '/', component: Home },
  { name: '社交', path: '/social', component: Social },
  { name: '项目', path: '/projects', component: Projects },
  { name: '文章', path: '/articles', component: Articles },
  { name: '技能', path: '/skills', component: Skills },
  { name: '联系我', path: '/contact', component: Contact },
  { name: '关于我', path: '/about', component: About }
]

// 1.网站配置
export const siteConfig = {
  webtitle: 'EaseJi website',
  name: 'EaseJi',
  title: '欢迎来到我的个人网站',
  subtitle: '探索、学习、分享',
  favicon: '/favicon.ico',
  avatar: 'https://foruda.gitee.com/avatar/1776943058021188497/8133883_you-peng_1776943057.png!avatar100'
}

// 1.1.首页按钮配置
export const homeButtons = [
  { text: '查看我的项目', path: '/projects', type: 'primary' },
  { text: '我写的文章', path: '/articles', type: 'secondary' },
  { text: '访问 gitee', url: 'https://gitee.com/you-peng', type: 'secondary' }
]

// 2.社交配置
export const social = {
  pageTitle: '我的社交',
  pageSubtitle: '找到我在不同平台上的身影'
}

// 2.1.社交链接配置
export const socialLinks = [
  { name: 'GitHub', icon: 'https://github.githubassets.com/favicons/favicon.svg', url: 'https://github.com/you-peng', description: '查看我的代码仓库' },
  { name: '微博', icon: 'https://weibo.com/favicon.ico', url: 'https://weibo.com/u/6085616680', description: '社交媒体' },
  { name: 'B站', icon: 'https://www.bilibili.com/favicon.ico', url: 'https://space.bilibili.com/441665860?spm_id_from=333.1007.0.0', description: '观看我的视频' }
]

// 3.项目配置
export const projectsPage = {
  pageTitle: '我的项目',
  pageSubtitle: '探索我最近完成的一些作品',
  viewAllText: '查看全部仓库',
  viewAllUrl: 'https://gitee.com/you-peng',
  defaultIcon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>',
  defaultTag: 'Public',
  defaultTagText: 'Code',
  defaultStars: 0
}

//3.1.项目列表
export const projects = [
  { name: 'EaseJi 个人主页', description: '极简个人主页网站，采用 Vue 3 + Tailwind CSS 构建，支持深色/浅色主题切换，包含响应式布局和流畅的微交互动效。', tags: ['Vue 3', 'Tailwind', 'Vite', 'CSS'], projecturl: 'https://gitee.com/you-peng/easyji-home', image: 'https://test.fukit.cn/autoupload/f/SLNLFkWgg1dGXklhAeLZbdiO_OyvX7mIgxFBfDMDErs/20260427/8UTw/1894X986/00homepage.png', stars: 0 },
  { name: 'FastAPI 后端模板', description: '基于 FastAPI 的快速开发模板，集成 SQLAlchemy、JWT 认证、Redis 缓存和异步任务队列。', tags: ['Python', 'FastAPI', 'SQLAlchemy', 'Redis'], projecturl: 'https://gitee.com/you-peng/fastapi-template', image: '', stars: 0 },
  { name: '数据可视化仪表盘', description: '企业级数据可视化解决方案，支持多维度数据分析和实时图表展示。', tags: ['React', 'D3.js', 'TypeScript'], projecturl: 'https://gitee.com/you-peng/data-dashboard', image: '', stars: 0 },
  { name: '自动化部署工具', description: '基于 Docker 的自动化部署脚本，支持一键部署、滚动更新和蓝绿发布。', tags: ['Docker', 'CI/CD', 'Shell'], projecturl: 'https://gitee.com/you-peng/auto-deploy', image: '', stars: 0 }
]

// 4.文章配置
export const articlesPage = {
  pageTitle: '我的文章',
  pageSubtitle: '分享我的技术见解与学习笔记',
  readMoreText: '跳转阅读全文',
  viewAllText: '查看所有文章',
  viewAllUrl: '/articles',
  defaultIcon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>'
}

// 4.1.文章列表
export const articles = [
  { id: 1, title: 'Vue 3 Composition API 深度解析', category: '技术', excerpt: '深入探讨 Vue 3 组合式 API 的设计理念，包括 ref、reactive、computed 的底层实现原理和最佳使用场景。', url: 'https://gitee.com/you-peng' },
  { id: 2, title: 'FastAPI 异步编程实战', category: '后端', excerpt: '从入门到精通，掌握 FastAPI 的异步特性，构建高性能 RESTful API 服务。', url: 'https://gitee.com/you-peng' },
  { id: 3, title: 'Docker 容器化部署实践', category: '运维', excerpt: '从零开始学习 Docker，包括镜像构建、容器编排和多容器应用部署。', url: 'https://gitee.com/you-peng' },
  { id: 4, title: 'Git 工作流最佳实践', category: '工具', excerpt: '分享团队协作中常用的 Git 工作流模式，包括 Git Flow、GitHub Flow 的选择与应用。', url: 'https://gitee.com/you-peng' }
]

// 5.技能配置
export const skills = {
  pageTitle: '我的技能',
  pageSubtitle: '我的技术栈与工具集',
  skillIcons: {
    'Python': 'https://cdn.simpleicons.org/python/005799',
    'Java': 'https://cdn.simpleicons.org/openjdk/ED8B00',
    'Docker': 'https://cdn.simpleicons.org/docker/2496ED',
    'Git': 'https://cdn.simpleicons.org/git/F05032'
  },
  defaultIcon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 12 22 21 10 12 10 12 2"/></svg>'
}

// 5.1.技能分类
export const skillCategories = [
  {
    name: '技能',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'Java', level: 80 },
      { name: 'Docker', level: 65 },
      { name: 'Git', level: 85 }
    ]
  }
]

// 6.联系我配置
export const contact = {
  pageTitle: '联系我',
  pageSubtitle: '如果你想与我交流，可以通过以下方式联系我',
  email: '1871670089@qq.com',
  wechatQrCode: '/qrcode/wechat.png',
  qqQrCode: '/qrcode/qq.png',
  methods: [
    { title: '邮件', icon: 'https://cdn.simpleicons.org/gmail/FFFFFF', gradient: 'from-blue-500 to-indigo-500', hoverGradient: 'from-blue-400/30 to-indigo-400/30' },
    { title: '微信', icon: 'https://cdn.simpleicons.org/wechat/07C160', gradient: 'from-indigo-500 to-purple-500', hoverGradient: 'from-indigo-400/30 to-purple-400/30' },
    { title: 'QQ', icon: 'https://favicon.im/qq.com', gradient: 'from-emerald-500 to-teal-500', hoverGradient: 'from-emerald-400/30 to-teal-400/30' }
  ]
}

// 7.关于我配置
export const aboutMe = {
  title: '你好，我是一名开发者',
  description: [
    '努力学习的开发者，一枚普通社畜，互相学习。联系邮箱: 1871670089@qq.com',
    '我专注于后端开发，同时也有前端开发的经验。我相信好的代码不仅要能运行，还要易于维护和扩展。',
    '在这个网站上，你可以查看我的项目作品、阅读我的文章、了解我的技能，或者通过联系页面与我交流。'
  ],
  pageTitle: 'EaseJi | 易继',
  pageSubtitle: '我的背景与经历',
  avatar: 'https://foruda.gitee.com/avatar/1776943058021188497/8133883_you-peng_1776943057.png!avatar100',
  features: [
    { title: '全平台开发', description: '适配桌面和移动端', icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="15" height="14" rx="2"/><path d="M17 8h6"/><path d="M17 12h6"/><path d="M17 16h6"/><path d="M21 18V7a2 2 0 0 0-2-2H3"/></svg>' },
    { title: '高效开发', description: '使用现代技术栈', icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 15a3 3 0 0 0 0-6H6a3 3 0 0 0 0 6h12z"/><path d="M18 9v-3a3 3 0 0 0-5.12-2.34L6 9"/><path d="M18 15v3a3 3 0 0 1-5.12 2.34L6 15"/></svg>' },
    { title: '创新思维', description: '探索有趣的解决方案', icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 12 22 21 10 12 10 12 2"/></svg>' }
  ],
  backButton: '回到首页'
}

// 8.首页配置
export const homePage = {
  welcomeText: '欢迎来到我的个人网站',
  introText: 'If I never see you again, good morning, good afternoon and good night.',
  stats: {
    projects: 1,
    articles: 2,
    stars: 0
  },
  footer: {
    copyright: '© 2026 EaseJi. All rights reserved.'
  }
}

// 9.页脚配置
export const footerLinks = [
  { name: 'GitHub', url: 'https://github.com/you-peng' },
  { name: 'Gitee', url: 'https://gitee.com/you-peng' },
  { name: '微博', url: 'https://weibo.com/u/6085616680' }
]
