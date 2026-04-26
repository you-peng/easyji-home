import { createApp, ref, provide } from 'vue'
import App from './App.vue'
import './style.css'
import router from './router'
import { themeConfig, siteConfig } from './main.config.js'

const app = createApp(App)

// 设置网页配置
// 设置网页标题
document.title = siteConfig.webtitle
// 设置 favicon
const faviconLink = document.querySelector('link[rel="icon"]')
if (faviconLink) {
  faviconLink.href = siteConfig.favicon
}
// 设置 viewport
const viewportMeta = document.querySelector('meta[name="viewport"]')
if (viewportMeta) {
  viewportMeta.content = siteConfig.viewport
}

// 全局主题状态
const isDark = ref(themeConfig.defaultDark)
// 从localStorage读取
const savedTheme = localStorage.getItem('darkTheme')
if (savedTheme !== null) {
  isDark.value = savedTheme === 'true'
  if (isDark.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
} else {
  // 如果localStorage中没有保存的主题，使用默认配置
  isDark.value = themeConfig.defaultDark
  if (themeConfig.defaultDark) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}
const toggleTheme = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark')
  localStorage.setItem('darkTheme', isDark.value.toString())
}
app.provide('isDark', isDark)
app.provide('toggleTheme', toggleTheme)

app.use(router).mount('#app')