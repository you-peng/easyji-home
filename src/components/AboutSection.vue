<template>
  <div class="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8">
    <transition enter-active-class="transition-all duration-1200 ease-in-out" enter-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100">
      <div class="text-center mb-4 sm:mb-6">
        <div class="mb-4 sm:mb-6">
          <div :class="avatarClasses" class="w-28 h-28 sm:w-40 sm:h-40 mx-auto rounded-full overflow-hidden shadow-2xl flex items-center justify-center relative">
            <div class="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-indigo-400/30 rounded-full animate-pulse"></div>
            <img :src="aboutMe.avatar" alt="Avatar" class="w-full h-full object-cover relative z-10">
          </div>
        </div>
        <h1 :class="titleClasses" class="text-xl sm:text-2xl lg:text-3xl font-extrabold mb-1 sm:mb-2">{{ aboutMe.pageTitle }}</h1>
        <p :class="textClasses" class="text-xs sm:text-sm md:text-base max-w-md mx-auto">{{ aboutMe.pageSubtitle }}</p>
        <div class="w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mt-2 sm:mt-3"></div>
      </div>
    </transition>

    <transition enter-active-class="transition-all duration-1200 ease-in-out delay-200" enter-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100">
      <div :class="aboutCardClasses" class="p-4 sm:p-6 lg:p-8 rounded-2xl shadow-xl border mb-3 sm:mb-5">
        <p v-for="(paragraph, index) in aboutMe.description" :key="index" :class="textClasses" class="text-xs sm:text-sm md:text-base leading-relaxed mb-2 sm:mb-3">
          {{ paragraph }}
        </p>
      </div>
    </transition>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
      <transition v-for="(feature, index) in aboutMe.features" :key="feature.title" enter-active-class="transition-all duration-1200 ease-in-out" :enter-class="'opacity-0 scale-95'" enter-to-class="opacity-100 scale-100" :style="{ transitionDelay: (index + 3) * 200 + 'ms' }">
        <div :class="featureCardClasses" class="p-4 sm:p-6 rounded-2xl shadow-xl border text-center group hover:-translate-y-2 transition-all duration-300">
          <div :class="iconContainerClasses" class="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 sm:mb-4 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <div v-html="feature.icon" :class="iconClasses" class="w-6 h-6 sm:w-7 sm:h-7"></div>
          </div>
          <h3 :class="cardTitleClasses" class="text-sm sm:text-base lg:text-lg font-bold mb-1 sm:mb-2">{{ feature.title }}</h3>
          <p :class="textClasses" class="text-xs sm:text-sm">{{ feature.description }}</p>
        </div>
      </transition>
    </div>

    <transition enter-active-class="transition-all duration-1200 ease-in-out delay-800" enter-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100">
      <div class="mt-4 sm:mt-6 lg:mt-8 text-center">
        <a href="/" class="inline-flex items-center px-6 py-3 sm:px-8 sm:py-3.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-xl sm:rounded-2xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 hover:from-blue-600 hover:to-indigo-700 transform hover:-translate-y-1 active:translate-y-0 transition-all duration-300">
          {{ aboutMe.backButton }}
          <svg class="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
          </svg>
        </a>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { computed, inject } from 'vue'
import { aboutMe } from '../main.config.js'

const isDark = inject('isDark')

const titleClasses = computed(() => isDark.value ? 'text-slate-100' : 'text-slate-800')
const textClasses = computed(() => isDark.value ? 'text-slate-400' : 'text-slate-600')
const cardTitleClasses = computed(() => isDark.value ? 'text-slate-100' : 'text-slate-800')
const iconClasses = computed(() => isDark.value ? 'text-blue-400' : 'text-blue-600')

const avatarClasses = computed(() => isDark.value
  ? 'border-4 border-slate-700 bg-gradient-to-br from-blue-500/30 via-indigo-500/30 to-purple-500/30'
  : 'border-4 border-white bg-gradient-to-br from-blue-500/30 via-indigo-500/30 to-purple-500/30'
)

const aboutCardClasses = computed(() => isDark.value
  ? 'bg-slate-800/60 backdrop-blur-xl border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-300'
  : 'bg-white/80 backdrop-blur-xl border-slate-200/50 shadow-xl hover:shadow-2xl transition-all duration-300'
)

const featureCardClasses = computed(() => isDark.value
  ? 'bg-slate-800/60 backdrop-blur-xl border-slate-700/50 shadow-xl hover:shadow-2xl hover:border-blue-500/40 transition-all duration-300'
  : 'bg-white/80 backdrop-blur-xl border-slate-200/50 shadow-xl hover:shadow-2xl hover:border-blue-200 transition-all duration-300'
)

const iconContainerClasses = computed(() => isDark.value
  ? 'bg-blue-500/10'
  : 'bg-blue-50'
)
</script>
