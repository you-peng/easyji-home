import { createRouter, createWebHistory } from 'vue-router'
import { navConfig } from '../main.config.js'

const routes = navConfig.map(item => ({
  path: item.path,
  name: item.name,
  component: item.component
}))

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
