<template>
  <footer :class="footerClasses" class="py-10 px-4 sm:px-6 lg:px-8 border-t backdrop-blur-xl">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col sm:flex-row items-center justify-between gap-6">
        <div class="flex items-center gap-3">
          <span class="text-xl font-bold bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
            {{ siteConfig.name }}
          </span>
          <span :class="textClasses" class="text-sm">
            {{ homePage.footer.copyright }}
          </span>
        </div>
        <div class="flex items-center gap-6">
          <a 
            v-for="link in footerLinks" 
            :key="link.name"
            :href="link.url"
            target="_blank"
            :class="footerLinkClasses"
            class="text-sm font-medium"
          >
            {{ link.name }}
          </a>
        </div>
      </div>
      <div class="mt-6 pt-6 border-t flex items-center justify-center gap-4">
        <span :class="textClasses" class="text-xs">
          用 Vue 3 + Tailwind CSS 构建
        </span>
        <span class="w-1 h-1 rounded-full bg-slate-400"></span>
        <span :class="textClasses" class="text-xs">
          保持热爱，奔赴山海
        </span>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed, inject } from 'vue'
import { siteConfig, homePage, footerLinks } from '../main.config.js'

const isDark = inject('isDark')

const textClasses = computed(() => isDark.value ? 'text-slate-400' : 'text-slate-500')
const footerLinkClasses = computed(() => isDark.value ? 'text-slate-400 hover:text-blue-400' : 'text-slate-500 hover:text-blue-600')

const footerClasses = computed(() => isDark.value ? 'border-slate-800/50 bg-slate-900/50' : 'border-slate-200/50 bg-white/50')
</script>
