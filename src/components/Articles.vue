<template>
  <section id="articles" :class="sectionBgClasses" class="pt-20 pb-14 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-10">
        <h2 :class="headingClasses" class="text-3xl sm:text-4xl font-bold mb-2">{{ articlesPage.pageTitle }}</h2>
        <p :class="textClasses" class="text-base">{{ articlesPage.pageSubtitle }}</p>
        <div class="w-16 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mt-3"></div>
      </div>
      <div class="space-y-3.5 lg:space-y-4">
        <article v-for="article in articles" :key="article.id" :class="articleCardClasses">
          <div class="flex flex-col md:flex-row gap-5">
            <div class="w-full md:w-32 h-24 bg-gradient-to-br from-blue-500 via-indigo-500 to-violet-500 rounded-2xl flex items-center justify-center flex-shrink-0 group/thumb relative">
              <span class="text-5xl group-hover/thumb:scale-115 transition-transform duration-300">{{ articlesPage.defaultIcon }}</span>
              <span class="absolute top-2 right-2 bg-white/90 dark:bg-slate-800/90 text-xs font-bold px-2 py-1 rounded-full text-slate-700 dark:text-slate-200">
                {{ article.category }}
              </span>
            </div>
            <div class="flex-1 flex flex-col justify-center">
              <h3 :class="cardTitleClasses" class="text-lg sm:text-xl font-bold mb-3 transition-colors">{{ article.title }}</h3>
              <p :class="textClasses" class="text-sm mb-4 leading-relaxed line-clamp-2 group-hover:line-clamp-none group-hover:whitespace-normal group-hover:overflow-visible">{{ article.excerpt }}</p>
              <a :href="article.url" target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-blue-500 hover:text-blue-400 font-bold text-sm group-hover:underline transition-colors">
                {{ articlesPage.readMoreText }}
                <svg class="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </a>
            </div>
          </div>
        </article>
      </div>
      <div class="mt-8 text-center">
        <router-link :to="articlesPage.viewAllUrl" :class="secondaryButtonClasses" class="inline-flex items-center px-6 py-3 font-bold rounded-2xl shadow-sm hover:shadow-md border-2 transition-all duration-300 transform hover:-translate-y-1">
          {{ articlesPage.viewAllText }}
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, inject } from 'vue'
import { articles, articlesPage } from '../main.config.js'

const isDark = inject('isDark')

const sectionBgClasses = computed(() => isDark.value ? 'bg-slate-900/40' : 'bg-white/60')
const headingClasses = computed(() => isDark.value ? 'text-slate-100' : 'text-slate-800')
const textClasses = computed(() => isDark.value ? 'text-slate-400' : 'text-slate-500')
const cardTitleClasses = computed(() => isDark.value ? 'text-slate-100 group-hover:text-blue-400' : 'text-slate-800 group-hover:text-blue-600')

const secondaryButtonClasses = computed(() => isDark.value
  ? 'bg-slate-800 text-white border-slate-700 hover:border-blue-500/50 hover:text-blue-400'
  : 'bg-white text-slate-700 border-slate-200 hover:border-blue-300 hover:text-blue-600'
)

const articleCardClasses = computed(() => isDark.value
  ? 'group bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl p-6 border border-slate-700 hover:border-blue-500/40 hover:bg-slate-800/90 transition-all duration-300 hover:-translate-y-1.5'
  : 'group bg-white rounded-2xl shadow-lg hover:shadow-2xl p-6 border border-slate-200 hover:border-blue-200 hover:bg-white/90 transition-all duration-300 hover:-translate-y-1.5'
)
</script>

