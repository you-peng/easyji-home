import Home from './views/Home.vue'
import About from './views/About.vue'
import Social from './views/Social.vue'
import Projects from './views/Projects.vue'
import Articles from './views/Articles.vue'
import Skills from './views/Skills.vue'
import Contact from './views/Contact.vue'

export const siteConfig = {
  name: '个人网站',
  title: '欢迎来到我的个人网站',
  subtitle: '探索、学习、分享'
}

export const navConfig = [
  { name: '首页', path: '/', component: Home },
  { name: '社交', path: '/social', component: Social },
  { name: '项目', path: '/projects', component: Projects },
  { name: '文章', path: '/articles', component: Articles },
  { name: '技能', path: '/skills', component: Skills },
  { name: '联系我', path: '/contact', component: Contact },
  { name: '关于我', path: '/about', component: About }
]

export const homeButtons = [
  { text: '查看我的项目', path: '/projects', type: 'primary' },
  { text: '我写的网站', path: '/articles', type: 'secondary' },
  { text: '访问 gitee', url: 'https://gitee.com', type: 'secondary' }
]

export const socialLinks = [
  { name: 'GitHub', icon: '🐙', url: 'https://github.com', description: '查看我的代码仓库' },
  { name: '微博', icon: '🌟', url: 'https://weibo.com', description: '社交媒体' },
  { name: 'B站', icon: '📺', url: 'https://bilibili.com', description: '观看我的视频' }
]

export const projects = [
  { name: '项目一', description: '这是一个使用 Vue 3 开发的项目，实现了很多有趣的功能。', tags: ['Vue', 'JavaScript', 'Tailwind'], github: 'https://github.com', demo: '#' },
  { name: '项目二', description: '一个全栈应用，包含前端和后端的完整解决方案。', tags: ['Node.js', 'React', 'MongoDB'], github: 'https://github.com' },
  { name: '项目三', description: '移动应用开发，支持 iOS 和 Android 双平台。', tags: ['React Native', 'TypeScript'], github: 'https://github.com', demo: '#' },
  { name: '项目四', description: '机器学习项目，探索 AI 和数据科学相关的实验。', tags: ['Python', 'TensorFlow', '机器学习'], github: 'https://github.com' }
]

export const articles = [
  { id: 1, title: 'Vue 3 组合式 API 入门指南', date: '2024-01-15', category: '技术', excerpt: '本文介绍 Vue 3 新特性，包括 setup、ref、reactive 等核心概念。' },
  { id: 2, title: 'Tailwind CSS 最佳实践', date: '2024-01-10', category: '前端', excerpt: '分享一些使用 Tailwind CSS 的实用技巧和最佳实践。' },
  { id: 3, title: '我的编程学习之路', date: '2024-01-05', category: '随笔', excerpt: '回顾自己的编程学习历程，希望能给初学者一些启发。' },
  { id: 4, title: '前端性能优化技巧', date: '2023-12-28', category: '技术', excerpt: '一些实用的前端性能优化方法和工具推荐。' }
]

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

export const aboutMe = {
  title: '你好，我是一名开发者',
  description: [
    '我热爱编程和技术，喜欢探索新的编程语言和框架。',
    '我专注于前端开发，同时也有后端开发的经验。我相信好的代码不仅要能运行，还要易于维护和扩展。',
    '在这个网站上，你可以查看我的项目作品、阅读我的文章、了解我的技能，或者通过联系页面与我交流。'
  ]
}
