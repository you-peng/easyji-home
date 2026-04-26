<template>
  <section id="skills" class="pt-20 pb-14 px-4 sm:px-6 lg:px-8">
    <div class="max-w-5xl mx-auto">
      <div class="text-center mb-10">
        <h2 :class="headingClasses" class="text-3xl sm:text-4xl font-bold mb-2">{{ skills.pageTitle }}</h2>
        <p :class="textClasses" class="text-base">{{ skills.pageSubtitle }}</p>
        <div class="w-16 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mt-3"></div>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-4">
        <div v-for="skill in allSkills" :key="skill.name" :class="skillCardClasses">
          <img v-if="skill.icon.startsWith('http')" :src="skill.icon" :alt="skill.name" class="w-12 h-12 mx-auto mb-3 transition-all duration-300 group-hover:scale-115 group-hover:-translate-y-1">
          <div v-else class="text-4xl mb-3 transition-all duration-300 group-hover:scale-115 group-hover:-translate-y-1">{{ skill.icon }}</div>
          <h3 :class="cardTitleClasses" class="text-base sm:text-lg font-bold transition-colors text-center">{{ skill.name }}</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, inject } from 'vue'
import { skillCategories, skills } from '../main.config.js'

const isDark = inject('isDark')

const headingClasses = computed(() => isDark.value ? 'text-slate-100' : 'text-slate-800')
const textClasses = computed(() => isDark.value ? 'text-slate-400' : 'text-slate-500')
const cardTitleClasses = computed(() => isDark.value ? 'text-slate-100 group-hover:text-blue-400' : 'text-slate-800 group-hover:text-blue-600')

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
  return skills.skillIcons[name] || skills.defaultIcon
}
</script>

