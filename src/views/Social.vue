<template>
  <div class="min-h-screen relative">
    <div :class="bgClasses" class="absolute inset-0"></div>
    <div class="relative z-10">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div class="text-center mb-10">
          <h1 :class="headingClasses" class="text-3xl sm:text-4xl font-bold mb-3">我的频道</h1>
          <p :class="textClasses" class="text-base max-w-md mx-auto">找到我在不同平台上的身影</p>
          <div class="w-16 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mt-3"></div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          <a v-for="(social, index) in socialLinks" :key="social.name" :href="social.url" target="_blank"
             :class="getSocialCardClasses(index)">
            <div class="text-4xl mb-4 transition-all duration-300 group-hover:scale-115 group-hover:-translate-y-1">{{ social.icon }}</div>
            <h3 :class="cardTitleClasses" class="text-lg sm:text-xl font-bold mb-2 transition-colors">{{ social.name }}</h3>
            <p :class="textClasses" class="text-sm">{{ social.description }}</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, inject } from 'vue'
import { socialLinks } from '../main.config.js'

const isDark = inject('isDark')

const bgClasses = computed(() => isDark.value
  ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800'
  : 'bg-gradient-to-br from-slate-50 via-blue-50/80 to-indigo-100/60'
)

const headingClasses = computed(() => isDark.value ? 'text-slate-100' : 'text-slate-800')
const textClasses = computed(() => isDark.value ? 'text-slate-400' : 'text-slate-500')
const cardTitleClasses = computed(() => isDark.value ? 'text-slate-100 group-hover:text-blue-400' : 'text-slate-800 group-hover:text-blue-600')

const getSocialCardClasses = (index) => {
  const base = isDark.value
    ? 'group bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-slate-700 hover:border-blue-500/40 hover:bg-slate-800/90 transition-all duration-300 hover:-translate-y-1.5'
    : 'group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-slate-200 hover:border-blue-200 hover:bg-white/90 transition-all duration-300 hover:-translate-y-1.5'
  const highlight = index === 1 && !isDark.value ? 'ring-2 ring-blue-300/50' : ''
  return highlight ? `${base} ${highlight}` : base
}
</script>

