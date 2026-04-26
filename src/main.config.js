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
  defaultEmoji: '💻',
  defaultTag: 'Public',
  defaultTagText: 'Code',
  defaultStars: 0
}

//3.1.项目列表
export const projects = [
  { name: '个人主页网站 - EaseJi', description: '易继｜EaseJii 极简个人主页，轻量简约布局，自带柔和交互微动效，响应式自适应，个人展示专属站点。', tags: ['Vue', 'JS', 'Tailwind', 'CSS', 'HTML'], projecturl: 'https://gitee.com/you-peng/easyji-home', image: 'https://test.fukit.cn/autoupload/f/SLNLFkWgg1dGXklhAeLZbdiO_OyvX7mIgxFBfDMDErs/20260427/8UTw/1894X986/00homepage.png' },
  { name: '项目二', description: '一个全栈应用，包含前端和后端的完整解决方案。', tags: ['Node.js', 'React', 'MongoDB'], projecturl: 'https://gitee.com/', image: '' },
  { name: '项目三', description: '移动应用开发，支持 iOS 和 Android 双平台。', tags: ['React Native', 'TypeScript'], projecturl: 'https://gitee.com/', image: '' },
  { name: '项目四', description: '机器学习项目，探索 AI 和数据科学相关的实验。', tags: ['Python', 'TensorFlow', '机器学习'], projecturl: 'https://gitee.com/', image: '' }
]

// 4.文章配置
export const articlesPage = {
  pageTitle: '我的文章',
  pageSubtitle: '分享我的技术见解与学习笔记',
  readMoreText: '跳转阅读全文',
  viewAllText: '查看所有文章',
  viewAllUrl: '/articles',
  defaultIcon: '📝'
}

// 4.1.文章列表
export const articles = [
  { id: 1, title: 'Vue 3 组合式 API 入门指南', category: '技术', excerpt: '本文介绍 Vue 3 新特性，包括 setup、ref、reactive 等核心概念。', url: 'https://example.com/vue3-guide' },
  { id: 2, title: 'Tailwind CSS 最佳实践', category: '前端', excerpt: '分享一些使用 Tailwind CSS 的实用技巧和最佳实践。', url: 'https://example.com/tailwind-best-practices' },
  { id: 3, title: '我的编程学习之路', category: '随笔', excerpt: '回顾自己的编程学习历程，希望能给初学者一些启发。', url: 'https://example.com/my-learning-path' },
  { id: 4, title: '前端性能优化技巧', category: '技术', excerpt: '一些实用的前端性能优化方法和工具推荐。', url: 'https://example.com/frontend-optimization' }
]

// 5.技能配置
export const skills = {
  pageTitle: '我的技能',
  pageSubtitle: '我的技术栈与工具集',
  skillIcons: {
    'Python': 'https://cdn.simpleicons.org/python/005799',
    'Java': 'https://cdn.simpleicons.org/openjdk/cg4bed',
    'Docker': 'https://cdn.simpleicons.org/docker/2496ED',
    'Git': 'https://cdn.simpleicons.org/git/F05032'
  },
  defaultIcon: '💡'
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
    { title: '全平台开发', description: '适配桌面和移动端', icon: '📱' },
    { title: '高效开发', description: '使用现代技术栈', icon: '🚀' },
    { title: '创新思维', description: '探索有趣的解决方案', icon: '💡' }
  ],
  backButton: '回到首页'
}

// 8.首页配置
export const homePage = {
  welcomeText: '欢迎来到我的个人网站',
  introText: 'If I never see you again, good morning, good afternoon and good night.',
  footer: {
    copyright: '© 2026 {siteConfig.name}. All rights reserved.'
  }
}
