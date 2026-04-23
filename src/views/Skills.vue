<template>
  <div class="min-h-screen relative">
    <div :class="bgClasses" class="absolute inset-0"></div>
    <div class="relative z-10">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div class="text-center mb-10">
          <h1 :class="headingClasses" class="text-3xl sm:text-4xl font-bold mb-2">我的技能</h1>
          <p :class="textClasses" class="text-base">我的技术栈与工具集</p>
          <div class="w-16 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mt-3"></div>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-4">
          <div v-for="skill in allSkills" :key="skill.name" :class="skillCardClasses">
            <div class="text-4xl mb-3 transition-all duration-300 group-hover:scale-115 group-hover:-translate-y-1">{{ skill.icon }}</div>
            <h3 :class="cardTitleClasses" class="text-base sm:text-lg font-bold transition-colors">{{ skill.name }}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, inject } from 'vue'
import { skillCategories } from '../main.config.js'

const isDark = inject('isDark')

const bgClasses = computed(() => isDark.value
  ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800'
  : 'bg-gradient-to-br from-slate-50 via-blue-50/80 to-indigo-100/60'
)

const headingClasses = computed(() => isDark.value ? 'text-slate-100' : 'text-slate-800')
const textClasses = computed(() => isDark.value ? 'text-slate-400' : 'text-slate-500')
const cardTitleClasses = computed(() => isDark.value ? 'text-slate-100' : 'text-slate-800')

const skillCardClasses = computed(() => isDark.value
  ? 'group bg-slate-800 rounded-2xl p-5 shadow-lg hover:shadow-2xl text-center border border-slate-700 hover:border-blue-500/40 hover:bg-gradient-to-b hover:from-slate-700 hover:to-slate-800 transition-all duration-300 hover:-translate-y-1.5'
  : 'group bg-white rounded-2xl p-5 shadow-lg hover:shadow-2xl text-center border border-slate-200 hover:border-blue-200 hover:bg-gradient-to-b hover:from-blue-50 hover:to-white transition-all duration-300 hover:-translate-y-1.5'
)

const allSkills = computed(() => {
  const skills = []
  skillCategories.forEach(category => {
    category.skills.forEach(skill => {
      skills.push({
        name: skill.name,
        icon: getSkillIcon(skill.name)
      })
    })
  })
  return skills
})

const getSkillIcon = (name) => {
  const icons = {
    'Python': '🐍',
    'FFmpeg': '⚙️',
    'Java': '☕',
    'LaTeX': '𝑥¹',
    'MATLAB': '📦',
    'Docker': '🐳',
    'Dify': '🧠',
    'Git': '🔀'
  }
  return icons[name] || '💡'
}
</script>

