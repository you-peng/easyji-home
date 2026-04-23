import { createApp, ref, provide } from 'vue'
import App from './App.vue'
import './style.css'
import router from './router'

const app = createApp(App)

// 全局主题状态
const isDark = ref(false)
// 从localStorage读取
const savedTheme = localStorage.getItem('darkTheme')
if (savedTheme === 'true') {
  isDark.value = true
  document.documentElement.classList.add('dark')
}
const toggleTheme = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark')
  localStorage.setItem('darkTheme', isDark.value.toString())
}
app.provide('isDark', isDark)
app.provide('toggleTheme', toggleTheme)

app.use(router).mount('#app')