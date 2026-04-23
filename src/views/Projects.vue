<template>
  <div class="min-h-screen relative">
    <div :class="bgClasses" class="absolute inset-0"></div>
    <div class="relative z-10">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-10">
          <div>
            <h1 :class="headingClasses" class="text-3xl sm:text-4xl font-bold mb-2">我的项目</h1>
            <p :class="textClasses" class="text-base">探索我最近完成的一些作品</p>
          </div>
          <a href="#" :class="linkClasses" class="mt-3 sm:mt-0 inline-flex items-center text-sm font-semibold transition-colors hover:underline">
            查看全部仓库
            <svg class="ml-1.5 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5">
          <div v-for="project in projects" :key="project.name" :class="projectCardClasses">
            <div class="h-32 sm:h-36 bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500 flex items-center justify-center relative overflow-hidden group/img">
              <div class="absolute inset-0 bg-black/0 group-hover/img:bg-black/15 transition-colors duration-300"></div>
              <div class="text-5xl sm:text-6xl font-bold text-white group-hover/img:scale-115 transition-transform duration-500">{{ project.emoji || '💻' }}</div>
            </div>
            <div class="p-5">
              <div class="flex justify-between items-start mb-2.5">
                <h3 :class="cardTitleClasses" class="text-lg sm:text-xl font-bold transition-colors">{{ project.name }}</h3>
                <span :class="tagClasses" class="px-2.5 py-0.5 rounded-full text-xs font-bold">Public</span>
              </div>
              <p :class="textClasses" class="text-sm mb-4 leading-relaxed">{{ project.description }}</p>
              <div :class="projectFooterClasses" class="flex justify-between items-center pt-3 border-t">
                <div class="flex items-center gap-1.5">
                  <span :class="textClasses" class="text-sm font-medium">{{ project.tags?.[0] || 'Code' }}</span>
                </div>
                <div :class="textClasses" class="flex items-center">
                  <svg class="w-4 h-4 mr-1.5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                  <span class="text-sm font-bold">{{ project.stars || 0 }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, inject } from 'vue'
import { projects } from '../main.config.js'

const isDark = inject('isDark')

const bgClasses = computed(() => isDark.value
  ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800'
  : 'bg-gradient-to-br from-slate-50 via-blue-50/80 to-indigo-100/60'
)

const headingClasses = computed(() => isDark.value ? 'text-slate-100' : 'text-slate-800')
const textClasses = computed(() => isDark.value ? 'text-slate-400' : 'text-slate-500')
const cardTitleClasses = computed(() => isDark.value ? 'text-slate-100' : 'text-slate-800')
const linkClasses = computed(() => isDark.value ? 'text-slate-400 hover:text-blue-400' : 'text-slate-600 hover:text-blue-600')
const tagClasses = computed(() => isDark.value ? 'bg-slate-700/80 text-slate-300' : 'bg-slate-100 text-slate-600')
const projectFooterClasses = computed(() => isDark.value ? 'border-t border-slate-700' : 'border-t border-slate-200')

const projectCardClasses = computed(() => isDark.value
  ? 'group bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden border border-slate-700 hover:border-blue-500/40 hover:bg-slate-800/90 transition-all duration-300 hover:-translate-y-1.5'
  : 'group bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden border border-slate-200 hover:border-blue-200 hover:bg-white/90 transition-all duration-300 hover:-translate-y-1.5'
)
</script>

