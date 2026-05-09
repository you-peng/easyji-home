<template>
  <section id="home" class="min-h-[100dvh] flex items-center relative overflow-hidden px-4 sm:px-6 lg:px-8 py-12">
    <div class="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-indigo-50 dark:from-slate-900/50 dark:to-slate-800/50"></div>
    <div class="absolute top-20 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse-glow"></div>
    <div class="absolute bottom-20 left-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse-glow" style="animation-delay: 1s;"></div>
    
    <div class="max-w-7xl mx-auto w-full relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
        <div class="lg:col-span-7 lg:col-start-1 text-center lg:text-left lg:pr-8">
          <div 
            :class="badgeClasses"
            class="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold mb-6 border backdrop-blur-xl"
          >
            <svg class="mr-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
            </svg>
            {{ homePage.welcomeText }}
          </div>
          
          <h1 :class="titleClasses" class="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-5 leading-tight tracking-tighter">
            你好，我是
            <br />
            <span class="relative inline-block">
              <span class="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
                {{ siteConfig.name }}
              </span>
              <svg class="absolute -bottom-2 left-0 w-full h-1" viewBox="0 0 200 4" fill="none">
                <path d="M0 2Q50 4 100 2T200 2" stroke="url(#gradient)" stroke-width="2" stroke-linecap="round"/>
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#3B82F6"/>
                    <stop offset="50%" stop-color="#6366F1"/>
                    <stop offset="100%" stop-color="#8B5CF6"/>
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>
          
          <p :class="subtitleClasses" class="text-lg sm:text-xl mb-6 max-w-xl mx-auto lg:mx-0">
            {{ siteConfig.subtitle }}
          </p>
          
          <p :class="textClasses" class="text-base sm:text-lg mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            {{ homePage.introText }}
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <template v-for="(button, index) in homeButtons" :key="index">
              <router-link v-if="button.path"
                :to="button.path"
                :class="button.type === 'primary'
                  ? 'group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-2xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 hover:from-blue-600 hover:to-indigo-700 transform hover:-translate-y-1 active:translate-y-0 transition-all duration-300'
                  : 'inline-flex items-center justify-center px-8 py-4 font-bold rounded-2xl border-2 shadow-sm hover:shadow-md transform hover:-translate-y-1 active:translate-y-0 transition-all duration-300 ' + secondaryButtonClasses">
                {{ button.text }}
                <svg v-if="button.type === 'primary'" class="ml-2 w-5 h-5 transition-transform duration-500 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
              </router-link>
              <a v-else
                :href="button.url"
                target="_blank"
                :class="button.type === 'primary'
                  ? 'group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-2xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 hover:from-blue-600 hover:to-indigo-700 transform hover:-translate-y-1 active:translate-y-0 transition-all duration-300'
                  : 'inline-flex items-center justify-center px-8 py-4 font-bold rounded-2xl border-2 shadow-sm hover:shadow-md transform hover:-translate-y-1 active:translate-y-0 transition-all duration-300 ' + secondaryButtonClasses">
                {{ button.text }}
                <svg v-if="button.type === 'primary'" class="ml-2 w-5 h-5 transition-transform duration-500 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
              </a>
            </template>
          </div>
          
          <div class="flex items-center gap-6 mt-10 justify-center lg:justify-start">
            <div class="text-center">
              <div :class="counterClasses" class="text-3xl font-bold">{{ homePage.stats.projects }}</div>
              <div :class="textClasses" class="text-xs">完成项目</div>
            </div>
            <div class="w-px h-10 bg-slate-300 dark:bg-slate-600"></div>
            <div class="text-center">
              <div :class="counterClasses" class="text-3xl font-bold">{{ homePage.stats.articles }}</div>
              <div :class="textClasses" class="text-xs">技术文章</div>
            </div>
            <div class="w-px h-10 bg-slate-300 dark:bg-slate-600"></div>
            <div class="text-center">
              <div :class="counterClasses" class="text-3xl font-bold">{{ homePage.stats.stars }}</div>
              <div :class="textClasses" class="text-xs">获得星标</div>
            </div>
          </div>
        </div>
        
        <div class="lg:col-span-5 lg:col-start-8 flex justify-center lg:justify-end relative">
          <div class="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-2xl scale-110 animate-pulse-glow"></div>
          <div 
            :class="avatarContainerClasses"
            class="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-2xl animate-float"
          >
            <div class="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-indigo-500/20 to-purple-500/20"></div>
            <img :src="siteConfig.avatar" alt="Avatar" class="w-full h-full object-cover relative z-10">
            <div class="absolute inset-0 border-4 border-white/20 rounded-full"></div>
            <div class="absolute -bottom-2 -right-2 w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg border-4 border-white dark:border-slate-800">
              <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          
          <div 
            :class="floatingCardClasses"
            class="absolute -top-4 -left-4 p-4 rounded-2xl backdrop-blur-xl border shadow-lg animate-float"
            style="animation-delay: 0.5s;"
          >
            <svg class="w-8 h-8 text-blue-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <div class="text-sm font-bold">Vue 3</div>
            <div class="text-xs opacity-60">框架</div>
          </div>
          
          <div 
            :class="floatingCardClasses"
            class="absolute -bottom-4 -right-4 p-4 rounded-2xl backdrop-blur-xl border shadow-lg animate-float"
            style="animation-delay: 1s;"
          >
            <svg class="w-8 h-8 text-green-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <div class="text-sm font-bold">Python</div>
            <div class="text-xs opacity-60">语言</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, inject } from 'vue'
import { siteConfig, homePage, homeButtons } from '../main.config.js'

const isDark = inject('isDark')

const titleClasses = computed(() => isDark.value ? 'text-slate-100' : 'text-slate-800')
const subtitleClasses = computed(() => isDark.value ? 'text-slate-300' : 'text-slate-600')
const textClasses = computed(() => isDark.value ? 'text-slate-400' : 'text-slate-500')
const counterClasses = computed(() => isDark.value ? 'text-blue-400' : 'text-blue-600')

const badgeClasses = computed(() => isDark.value
  ? 'bg-slate-800/80 text-blue-400 border-blue-500/30'
  : 'bg-white/80 text-blue-600 border-blue-200/50'
)

const secondaryButtonClasses = computed(() => isDark.value
  ? 'bg-slate-800/80 text-white border-slate-700 hover:border-blue-500/50 hover:text-blue-400 backdrop-blur-xl'
  : 'bg-white/80 text-slate-700 border-slate-200 hover:border-blue-300 hover:text-blue-600 backdrop-blur-xl'
)

const avatarContainerClasses = computed(() => isDark.value
  ? 'border-4 border-slate-700/50 bg-gradient-to-br from-slate-800 to-slate-900'
  : 'border-4 border-white bg-gradient-to-br from-white to-slate-50'
)

const floatingCardClasses = computed(() => isDark.value
  ? 'bg-slate-800/60 border-slate-700/50 text-slate-200'
  : 'bg-white/70 border-slate-200/50 text-slate-700'
)
</script>

<style scoped>
@keyframes pulse-glow {
  0%, 100% {
    opacity: 0.4;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.05);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-pulse-glow {
  animation: pulse-glow 4s ease-in-out infinite;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}
</style>
