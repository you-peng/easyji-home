<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <transition enter-active-class="transition-all duration-1200 ease-in-out" enter-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100">
      <div class="text-center mb-6">
        <div class="mb-6">
          <div :class="avatarClasses" class="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full overflow-hidden shadow-2xl flex items-center justify-center relative">
            <div class="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-indigo-400/30 rounded-full animate-pulse"></div>
            <img :src="aboutMe.avatar" alt="Avatar" class="w-full h-full object-cover relative z-10">
          </div>
        </div>
        <h1 :class="titleClasses" class="text-2xl sm:text-3xl font-extrabold mb-2">{{ aboutMe.pageTitle }}</h1>
        <p :class="textClasses" class="text-sm sm:text-base max-w-md mx-auto">{{ aboutMe.pageSubtitle }}</p>
        <div class="w-16 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mt-2"></div>
      </div>
    </transition>

    <transition enter-active-class="transition-all duration-1200 ease-in-out delay-200" enter-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100">
      <div :class="aboutCardClasses" class="p-4 rounded-2xl shadow-xl border mb-5">
        <p v-for="(paragraph, index) in aboutMe.description" :key="index" :class="textClasses" class="text-sm sm:text-base leading-relaxed mb-3">
          {{ paragraph }}
        </p>
      </div>
    </transition>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
      <transition v-for="(feature, index) in aboutMe.features" :key="feature.title" enter-active-class="transition-all duration-1200 ease-in-out" :enter-class="'opacity-0 scale-95'" enter-to-class="opacity-100 scale-100" :style="{ transitionDelay: (index + 3) * 200 + 'ms' }">
        <div :class="aboutCardClasses" class="p-4 rounded-2xl shadow-xl border text-center group hover:-translate-y-1.5 transition-all duration-300">
          <div class="text-3xl mb-2 group-hover:scale-115 transition-transform duration-300">{{ feature.icon }}</div>
          <h3 :class="cardTitleClasses" class="text-base font-bold mb-1">{{ feature.title }}</h3>
          <p :class="textClasses" class="text-xs sm:text-sm">{{ feature.description }}</p>
        </div>
      </transition>
    </div>

    <transition enter-active-class="transition-all duration-1200 ease-in-out delay-800" enter-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100">
      <div class="mt-6 text-center">
        <a href="/" class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-indigo-600 transform hover:-translate-y-1 transition-all duration-300">
          {{ aboutMe.backButton }}
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

const avatarClasses = computed(() => isDark.value
  ? 'border-4 border-slate-700 bg-gradient-to-br from-emerald-400 via-teal-400 to-cyan-400'
  : 'border-4 border-white bg-gradient-to-br from-emerald-400 via-teal-400 to-cyan-400'
)

const aboutCardClasses = computed(() => isDark.value
  ? 'bg-slate-800 border-slate-700 shadow-xl hover:shadow-2xl transition-all duration-300'
  : 'bg-white border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300'
)
</script>