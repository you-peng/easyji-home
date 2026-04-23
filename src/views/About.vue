<template>
  <div class="min-h-screen relative">
    <div :class="bgClasses" class="absolute inset-0"></div>
    <div class="relative z-10">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-14">
        <div class="text-center mb-10">
          <div class="mb-8">
            <div :class="avatarClasses" class="w-36 h-36 sm:w-48 sm:h-48 mx-auto rounded-full overflow-hidden shadow-2xl flex items-center justify-center relative">
              <div class="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-indigo-400/30 rounded-full animate-pulse"></div>
              <span class="text-8xl sm:text-9xl relative z-10">🐑</span>
            </div>
          </div>
          <h1 :class="titleClasses" class="text-3xl sm:text-4xl font-extrabold mb-2">关于我</h1>
          <p :class="textClasses" class="text-base max-w-md mx-auto">了解我的背景与经历</p>
          <div class="w-16 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mt-3"></div>
        </div>

        <div :class="aboutCardClasses" class="p-6 rounded-2xl shadow-xl border mb-7">
          <p :class="textClasses" class="text-base sm:text-lg leading-relaxed mb-4">
            大家好！我是一个热爱编程和技术的人，喜欢探索各种有趣的项目和解决方案。
          </p>
          <p :class="textClasses" class="text-base sm:text-lg leading-relaxed mb-4">
            我主要使用 Python、Java 等语言进行开发，对视频处理、自动化、AI 等领域都有着浓厚的兴趣。
          </p>
          <p :class="textClasses" class="text-base sm:text-lg leading-relaxed">
            如果你对我的项目感兴趣，或者想与我交流，请通过导航栏的「联系我」联系我！
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          <div :class="aboutCardClasses" class="p-6 rounded-2xl shadow-xl border text-center group hover:-translate-y-1.5 transition-all duration-300">
            <div class="text-4xl mb-3 group-hover:scale-115 transition-transform duration-300">📱</div>
            <h3 :class="cardTitleClasses" class="text-lg font-bold mb-2">全平台开发</h3>
            <p :class="textClasses" class="text-sm">适配桌面和移动端</p>
          </div>
          <div :class="aboutCardClasses" class="p-6 rounded-2xl shadow-xl border text-center group hover:-translate-y-1.5 transition-all duration-300">
            <div class="text-4xl mb-3 group-hover:scale-115 transition-transform duration-300">🚀</div>
            <h3 :class="cardTitleClasses" class="text-lg font-bold mb-2">高效开发</h3>
            <p :class="textClasses" class="text-sm">使用现代技术栈</p>
          </div>
          <div :class="aboutCardClasses" class="p-6 rounded-2xl shadow-xl border text-center group hover:-translate-y-1.5 transition-all duration-300">
            <div class="text-4xl mb-3 group-hover:scale-115 transition-transform duration-300">💡</div>
            <h3 :class="cardTitleClasses" class="text-lg font-bold mb-2">创新思维</h3>
            <p :class="textClasses" class="text-sm">探索有趣的解决方案</p>
          </div>
        </div>

        <div class="mt-10 text-center">
          <a href="/" class="inline-flex items-center px-7 py-3.5 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-indigo-600 transform hover:-translate-y-1 transition-all duration-300">
            回到首页
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

