<template>
  <div class="min-h-screen relative">
    <div :class="bgClasses" class="absolute inset-0"></div>
    <div class="relative z-10">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div class="text-center mb-10">
          <h1 :class="headingClasses" class="text-3xl sm:text-4xl font-bold mb-2">联系我</h1>
          <p :class="textClasses" class="text-base max-w-md mx-auto">如果你想与我交流，可以通过以下方式联系我</p>
          <div class="w-16 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mt-3"></div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
          <a href="mailto:example@example.com" 
             class="group bg-gradient-to-br from-blue-500 to-indigo-500 text-white rounded-2xl p-5 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-indigo-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="text-4xl mb-3 transition-transform duration-300 group-hover:scale-115 relative z-10">✉️</div>
            <div class="text-base sm:text-lg font-bold relative z-10">发送邮件</div>
          </a>
          <a href="#" 
             class="group bg-gradient-to-br from-indigo-500 to-purple-500 text-white rounded-2xl p-5 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-indigo-400/30 to-purple-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="text-4xl mb-3 transition-transform duration-300 group-hover:scale-115 relative z-10">💬</div>
            <div class="text-base sm:text-lg font-bold relative z-10">添加微信</div>
          </a>
          <a href="#" 
             class="group bg-gradient-to-br from-emerald-500 to-teal-500 text-white rounded-2xl p-5 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-emerald-400/30 to-teal-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="text-4xl mb-3 transition-transform duration-300 group-hover:scale-115 relative z-10">👤</div>
            <div class="text-base sm:text-lg font-bold relative z-10">添加QQ</div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, inject } from 'vue'

const isDark = inject('isDark')

const bgClasses = computed(() => isDark.value
  ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800'
  : 'bg-gradient-to-br from-slate-50 via-blue-50/80 to-indigo-100/60'
)

const headingClasses = computed(() => isDark.value ? 'text-slate-100' : 'text-slate-800')
const textClasses = computed(() => isDark.value ? 'text-slate-400' : 'text-slate-500')
</script>

