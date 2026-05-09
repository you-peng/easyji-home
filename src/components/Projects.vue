<template>
  <div class="min-h-screen relative">
    <div :class="bgClasses" class="absolute inset-0"></div>
    <div class="relative z-10">
      <section id="projects" class="pt-20 pb-14 px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-10">
            <h2 :class="headingClasses" class="text-4xl md:text-6xl font-extrabold mb-2 tracking-tighter leading-none">{{ projectsPage.pageTitle }}</h2>
            <p :class="textClasses" class="text-base max-w-md mx-auto mt-3">{{ projectsPage.pageSubtitle }}</p>
            <a :href="projectsPage.viewAllUrl" :class="linkClasses" class="mt-3 inline-flex items-center text-sm font-semibold transition-colors hover:underline" target="_blank" rel="noopener noreferrer">
              {{ projectsPage.viewAllText }}
              <svg class="ml-1.5 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5">
            <a 
              v-for="(project, index) in projects" 
              :key="project.name" 
              :href="project.projecturl" 
              target="_blank" 
              rel="noopener noreferrer" 
              :class="projectCardClasses"
              :style="{ transitionDelay: `${index * 100}ms` }"
            >
              <div class="relative h-32 sm:h-36 overflow-hidden group/img">
                <div v-if="!project.image" class="absolute inset-0 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600"></div>
                <img 
                  v-if="project.image" 
                  :src="project.image" 
                  alt="Project Image" 
                  class="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-700"
                />
                <div class="absolute inset-0 flex items-center justify-center">
                  <div 
                    v-if="!project.image"
                    class="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover/img:scale-110 transition-transform duration-500"
                  >
                    <svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <rect x="3" y="3" width="7" height="7"/>
                      <rect x="14" y="3" width="7" height="7"/>
                      <rect x="14" y="14" width="7" height="7"/>
                      <rect x="3" y="14" width="7" height="7"/>
                    </svg>
                  </div>
                </div>
                <div class="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                <div class="absolute top-4 right-4">
                  <span :class="tagClasses" class="px-3 py-1 rounded-full text-xs font-bold">
                    {{ projectsPage.defaultTag }}
                  </span>
                </div>
                <div class="absolute bottom-4 left-4 flex items-center">
                  <svg class="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                  <span class="text-white text-sm font-bold">{{ project.stars || projectsPage.defaultStars }}</span>
                </div>
              </div>
              <div class="p-6 sm:p-8">
                <h3 :class="cardTitleClasses" class="text-lg sm:text-xl font-bold mb-3 transition-colors group-hover:translate-x-1">
                  {{ project.name }}
                </h3>
                <p :class="textClasses" class="text-sm leading-relaxed line-clamp-2 mb-4">
                  {{ project.description }}
                </p>
                <div class="flex items-center flex-wrap gap-2">
                  <span 
                    v-for="tag in project.tags" 
                    :key="tag" 
                    :class="tagClasses" 
                    class="px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {{ tag }}
                  </span>
                </div>
                <div class="mt-4 flex items-center text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span class="text-sm font-medium">查看详情</span>
                  <svg class="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { computed, inject } from 'vue'
import { projects, projectsPage } from '../main.config.js'

const isDark = inject('isDark')

const bgClasses = computed(() => isDark.value
  ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800'
  : 'bg-gradient-to-br from-slate-50 via-blue-50/80 to-indigo-100/60'
)
const headingClasses = computed(() => isDark.value ? 'text-slate-100' : 'text-slate-800')
const textClasses = computed(() => isDark.value ? 'text-slate-400' : 'text-slate-500')
const cardTitleClasses = computed(() => isDark.value ? 'text-slate-100 group-hover:text-blue-400' : 'text-slate-800 group-hover:text-blue-600')
const linkClasses = computed(() => isDark.value ? 'text-slate-400 hover:text-blue-400' : 'text-slate-600 hover:text-blue-600')
const tagClasses = computed(() => isDark.value ? 'bg-slate-700/80 text-slate-300' : 'bg-slate-100 text-slate-600')

const projectCardClasses = computed(() => isDark.value
  ? 'group bg-slate-800 rounded-[2.5rem] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.25)] overflow-hidden border border-slate-700/50 hover:border-blue-500/40 transition-all duration-500 hover:-translate-y-2'
  : 'group bg-white rounded-[2.5rem] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.1)] overflow-hidden border border-slate-200/50 hover:border-blue-200 transition-all duration-500 hover:-translate-y-2'
)
</script>
