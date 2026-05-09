<template>
  <div class="min-h-screen relative">
    <div :class="bgClasses" class="absolute inset-0"></div>
    <div class="relative z-10">
      <section id="articles" :class="sectionBgClasses" class="pt-20 pb-14 px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-10">
            <h2 :class="headingClasses" class="text-4xl md:text-6xl font-extrabold mb-2 tracking-tighter leading-none">{{ articlesPage.pageTitle }}</h2>
            <p :class="textClasses" class="text-base mt-3">{{ articlesPage.pageSubtitle }}</p>
            <div class="w-16 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mt-3"></div>
          </div>
          <div class="space-y-4">
            <article 
              v-for="(article, index) in articles" 
              :key="article.id" 
              :class="articleCardClasses"
              :style="{ transitionDelay: `${index * 100}ms` }"
            >
              <div class="flex flex-col md:flex-row gap-5">
                <div class="w-full md:w-28 h-20 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 group/thumb relative overflow-hidden">
                  <div class="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                  <svg class="w-8 h-8 text-white relative z-10 group-hover/thumb:scale-110 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10 9 9 9 8 9"/>
                  </svg>
                  <span :class="categoryBadgeClasses" class="absolute top-2 right-2 text-xs font-bold px-2.5 py-1 rounded-full">
                    {{ article.category }}
                  </span>
                </div>
                <div class="flex-1 flex flex-col justify-center">
                  <h3 :class="cardTitleClasses" class="text-lg sm:text-xl font-bold mb-2 group-hover:translate-x-1 transition-all duration-300">
                    {{ article.title }}
                  </h3>
                  <p :class="textClasses" class="text-sm leading-relaxed line-clamp-2 mb-4">
                    {{ article.excerpt }}
                  </p>
                  <a 
                    :href="article.url" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    :class="readMoreClasses"
                    class="inline-flex items-center font-semibold text-sm group-hover:translate-x-1 transition-all duration-300"
                  >
                    {{ articlesPage.readMoreText }}
                    <svg class="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </a>
                </div>
                <div class="hidden md:flex items-center">
                  <div :class="arrowIconClasses" class="w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div class="mt-8 text-center">
            <router-link 
              :to="articlesPage.viewAllUrl" 
              :class="secondaryButtonClasses" 
              class="inline-flex items-center px-8 py-3.5 font-bold rounded-2xl shadow-sm hover:shadow-md border-2 transition-all duration-300 hover:-translate-y-1 active:translate-y-0"
            >
              {{ articlesPage.viewAllText }}
              <svg class="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </router-link>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { computed, inject } from 'vue'
import { articles, articlesPage } from '../main.config.js'

const isDark = inject('isDark')

const bgClasses = computed(() => isDark.value
  ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800'
  : 'bg-gradient-to-br from-slate-50 via-blue-50/80 to-indigo-100/60'
)
const sectionBgClasses = computed(() => isDark.value ? 'bg-slate-900/40' : 'bg-gradient-to-b from-white/60 to-white')
const headingClasses = computed(() => isDark.value ? 'text-slate-100' : 'text-slate-800')
const textClasses = computed(() => isDark.value ? 'text-slate-400' : 'text-slate-500')
const cardTitleClasses = computed(() => isDark.value ? 'text-slate-100 group-hover:text-blue-400' : 'text-slate-800 group-hover:text-blue-600')
const readMoreClasses = computed(() => isDark.value ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500')
const categoryBadgeClasses = computed(() => isDark.value ? 'bg-slate-800/90 text-slate-200' : 'bg-white/90 text-slate-700')
const arrowIconClasses = computed(() => isDark.value ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-50 text-blue-600')

const secondaryButtonClasses = computed(() => isDark.value
  ? 'bg-slate-800/80 text-white border-slate-700 hover:border-blue-500/50 hover:text-blue-400 backdrop-blur-xl'
  : 'bg-white/80 text-slate-700 border-slate-200 hover:border-blue-300 hover:text-blue-600 backdrop-blur-xl'
)

const articleCardClasses = computed(() => isDark.value
  ? 'group bg-slate-800/60 backdrop-blur-xl rounded-[2rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.2)] p-5 sm:p-6 border border-slate-700/50 hover:border-blue-500/40 transition-all duration-500 hover:-translate-y-1'
  : 'group bg-white/80 backdrop-blur-xl rounded-[2rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.1)] p-5 sm:p-6 border border-slate-200/50 hover:border-blue-200 transition-all duration-500 hover:-translate-y-1'
)
</script>
