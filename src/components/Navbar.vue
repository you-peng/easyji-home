<template>
  <nav :class="navClasses" class="sticky top-0 z-50 border-b backdrop-blur-xl shadow-sm transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <a href="/" @click.prevent="scrollToTop" class="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity duration-300">
            {{ siteName }}
          </a>
        </div>
        <div class="hidden md:flex items-center space-x-2">
          <a 
            v-for="item in navItems" 
            :key="item.id"
            :href="item.href"
            @click.prevent="navigateTo(item)"
            :class="navItemClasses"
          >
            {{ item.name }}
          </a>
        </div>
        <div class="flex items-center space-x-2">
          <button @click="toggleTheme" :class="themeButtonClasses">
            <svg v-if="!isDark" class="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
            <svg v-else class="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </button>
          <div class="md:hidden flex items-center">
            <button @click="toggleMenu" :class="themeButtonClasses">
              <svg v-if="!isMenuOpen" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg v-else class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    <transition enter-active-class="transition-all duration-300 ease-out" enter-class="opacity-0 -translate-y-2" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition-all duration-200 ease-in" leave-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-2">
      <div v-if="isMenuOpen" :class="mobileMenuClasses">
        <div class="px-4 py-4 space-y-2">
          <a 
            v-for="item in navItems" 
            :key="item.id"
            :href="item.href"
            @click.prevent="navigateTo(item)"
            :class="mobileNavItemClasses"
          >
            {{ item.name }}
          </a>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, computed, inject } from 'vue'
import { useRouter } from 'vue-router'
import { siteConfig } from '../main.config.js'

const router = useRouter()
const isMenuOpen = ref(false)
const isDark = inject('isDark')
const toggleTheme = inject('toggleTheme')
const siteName = siteConfig.name

const navItems = [
  { id: 'home', name: '首页', href: '/' },
  { id: 'social', name: '社交', href: '/#social' },
  { id: 'projects', name: '项目', href: '/#projects' },
  { id: 'articles', name: '文章', href: '/#articles' },
  { id: 'skills', name: '技能', href: '/#skills' },
  { id: 'contact', name: '联系我', href: '/#contact' },
  { id: 'about', name: '关于我', href: '/about' }
]

const navClasses = computed(() => isDark.value 
  ? 'bg-slate-900/70 border-slate-800/50'
  : 'bg-white/70 border-slate-200/50'
)

const navItemClasses = computed(() => isDark.value
  ? 'px-4 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-all duration-200'
  : 'px-4 py-2.5 rounded-xl text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50/60 transition-all duration-200'
)

const themeButtonClasses = computed(() => isDark.value
  ? 'p-2.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/60 transition-all duration-200'
  : 'p-2.5 rounded-xl text-slate-500 hover:text-slate-700 hover:bg-slate-100/60 transition-all duration-200'
)

const mobileMenuClasses = computed(() => isDark.value
  ? 'md:hidden bg-slate-900/90 backdrop-blur-xl border-t border-slate-800/50 shadow-lg'
  : 'md:hidden bg-white/90 backdrop-blur-xl border-t border-slate-200/50 shadow-lg'
)

const mobileNavItemClasses = computed(() => isDark.value
  ? 'block px-4 py-3 rounded-xl text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-all duration-200'
  : 'block px-4 py-3 rounded-xl text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50/60 transition-all duration-200'
)

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const navigateTo = (item) => {
  isMenuOpen.value = false
  if (item.id === 'about') {
    router.push('/about')
  } else if (item.id === 'home') {
    router.push('/').then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    })
  } else {
    router.push('/').then(() => {
      setTimeout(() => {
        const element = document.getElementById(item.id)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 150)
    })
  }
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>
