<template>
  <section id="social" :class="sectionBgClasses" class="pt-20 pb-14 px-4 sm:px-6 lg:px-8">
    <div class="max-w-5xl mx-auto">
      <div class="text-center mb-10">
        <h2 :class="headingClasses" class="text-3xl sm:text-4xl font-bold mb-3">{{ social.pageTitle }}</h2>
        <p :class="textClasses" class="text-base max-w-md mx-auto">{{ social.pageSubtitle }}</p>
        <div class="w-16 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mt-3"></div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
        <a v-for="(item, index) in socialLinks" :key="item.name" :href="item.url" target="_blank"
           :class="getSocialCardClasses(index)">
          <div class="mb-4 transition-all duration-300 group-hover:scale-115 group-hover:-translate-y-1 flex items-center justify-center">
            <img v-if="item.icon.includes('http')" :src="item.icon" class="w-10 h-10 object-contain">
            <span v-else class="text-4xl">{{ item.icon }}</span>
          </div>
          <h3 :class="cardTitleClasses" class="text-lg sm:text-xl font-bold mb-2 transition-colors text-center">{{ item.name }}</h3>
          <p :class="textClasses" class="text-sm text-center">{{ item.description }}</p>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, inject } from 'vue'
import { socialLinks, social } from '../main.config.js'

const isDark = inject('isDark')

const sectionBgClasses = computed(() => isDark.value ? 'bg-slate-900/40' : 'bg-white/60')
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

