<template>
  <section id="social" :class="sectionBgClasses" class="pt-20 pb-14 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-10">
        <h2 :class="headingClasses" class="text-4xl md:text-6xl font-extrabold mb-2 tracking-tighter leading-none">{{ social.pageTitle }}</h2>
        <p :class="textClasses" class="text-base max-w-md mx-auto mt-3">{{ social.pageSubtitle }}</p>
        <div class="w-16 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mt-3"></div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
        <a 
          v-for="(item, index) in socialLinks" 
          :key="item.name" 
          :href="item.url" 
          target="_blank"
          :class="socialCardClasses"
          :style="{ transitionDelay: `${index * 150}ms` }"
        >
          <div :class="iconContainerClasses" class="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300">
            <img v-if="item.icon.includes('http')" :src="item.icon" class="w-8 h-8 object-contain">
            <span v-else class="text-3xl">{{ item.icon }}</span>
          </div>
          <h3 :class="cardTitleClasses" class="text-lg sm:text-xl font-bold mb-2 transition-colors text-center">
            {{ item.name }}
          </h3>
          <p :class="textClasses" class="text-sm text-center">{{ item.description }}</p>
          <div class="mt-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span class="inline-flex items-center text-blue-500 text-sm font-medium">
              访问
              <svg class="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
            </span>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, inject } from 'vue'
import { socialLinks, social } from '../main.config.js'

const isDark = inject('isDark')

const sectionBgClasses = computed(() => isDark.value ? 'bg-slate-900/40' : 'bg-gradient-to-b from-white/60 to-white')
const headingClasses = computed(() => isDark.value ? 'text-slate-100' : 'text-slate-800')
const textClasses = computed(() => isDark.value ? 'text-slate-400' : 'text-slate-500')
const cardTitleClasses = computed(() => isDark.value ? 'text-slate-100 group-hover:text-blue-400' : 'text-slate-800 group-hover:text-blue-600')

const iconContainerClasses = computed(() => isDark.value
  ? 'bg-slate-700/50'
  : 'bg-slate-100'
)

const socialCardClasses = computed(() => isDark.value
  ? 'group bg-slate-800/60 backdrop-blur-xl rounded-[2.5rem] p-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.2)] border border-slate-700/50 hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-2'
  : 'group bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.1)] border border-slate-200/50 hover:border-blue-200 transition-all duration-300 hover:-translate-y-2'
)
</script>
