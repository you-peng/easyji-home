<template>
  <section id="home" class="min-h-[85vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
    <div class="max-w-5xl mx-auto w-full">
      <div class="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12">
        <div class="flex-1 text-center lg:text-left">
          <div class="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-5 border border-blue-200 dark:border-blue-800">
            <span class="mr-2">👋</span>
            {{ homePage.welcomeText }}
          </div>
          <h1 :class="titleClasses" class="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight tracking-tight">
            你好，我是 <span class="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">{{ siteConfig.name }}</span>
          </h1>
          <p :class="subtitleClasses" class="text-lg sm:text-xl mb-5 max-w-xl mx-auto lg:mx-0">
            {{ siteConfig.subtitle }}
          </p>
          <p :class="textClasses" class="text-base sm:text-lg mb-6 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            {{ homePage.introText }}
          </p>
          <div class="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <template v-for="(button, index) in homeButtons" :key="index">
              <router-link v-if="button.path"
                :to="button.path"
                :class="button.type === 'primary'
                  ? 'group inline-flex items-center justify-center px-7 py-3.5 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-indigo-600 transform hover:-translate-y-1 transition-all duration-300'
                  : 'inline-flex items-center justify-center px-7 py-3.5 font-bold rounded-2xl border-2 shadow-sm hover:shadow-md transform hover:-translate-y-1 transition-all duration-300 ' + secondaryButtonClasses">
                {{ button.text }}
                <svg v-if="button.type === 'primary'" class="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
              </router-link>
              <a v-else
                :href="button.url"
                target="_blank"
                :class="button.type === 'primary'
                  ? 'group inline-flex items-center justify-center px-7 py-3.5 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-indigo-600 transform hover:-translate-y-1 transition-all duration-300'
                  : 'inline-flex items-center justify-center px-7 py-3.5 font-bold rounded-2xl border-2 shadow-sm hover:shadow-md transform hover:-translate-y-1 transition-all duration-300 ' + secondaryButtonClasses">
                {{ button.text }}
                <svg v-if="button.type === 'primary'" class="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
              </a>
            </template>
          </div>
        </div>
        <div class="flex-shrink-0 flex justify-center lg:justify-end">
          <div :class="avatarClasses" class="w-36 h-36 sm:w-48 sm:h-48 lg:w-52 lg:h-52 rounded-full overflow-hidden shadow-2xl flex items-center justify-center relative">
            <div class="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-indigo-400/30 rounded-full animate-pulse"></div>
            <img :src="siteConfig.avatar" alt="Avatar" class="w-full h-full object-cover relative z-10">
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

const secondaryButtonClasses = computed(() => isDark.value
  ? 'bg-slate-800 text-white border-slate-700 hover:border-blue-500/50 hover:text-blue-400'
  : 'bg-white text-slate-700 border-slate-200 hover:border-blue-300 hover:text-blue-600'
)

const avatarClasses = computed(() => isDark.value
  ? 'border-4 border-slate-700 bg-gradient-to-br from-emerald-400 via-teal-400 to-cyan-400'
  : 'border-4 border-white bg-gradient-to-br from-emerald-400 via-teal-400 to-cyan-400'
)
</script>