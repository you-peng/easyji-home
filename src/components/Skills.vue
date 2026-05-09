<template>
  <section id="skills" class="pt-20 pb-14 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-10">
        <h2 :class="headingClasses" class="text-4xl md:text-6xl font-extrabold mb-2 tracking-tighter leading-none">{{ skills.pageTitle }}</h2>
        <p :class="textClasses" class="text-base mt-3">{{ skills.pageSubtitle }}</p>
        <div class="w-16 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mt-3"></div>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        <div 
          v-for="(skill, index) in allSkills" 
          :key="skill.name" 
          :class="skillCardClasses"
          :style="{ transitionDelay: `${index * 100}ms` }"
        >
          <div :class="iconContainerClasses" class="w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <img v-if="skill.icon.startsWith('http')" :src="skill.icon" :alt="skill.name" class="w-8 h-8 object-contain">
            <div v-else v-html="skill.icon" :class="iconClasses" class="w-6 h-6"></div>
          </div>
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
const iconClasses = computed(() => isDark.value ? 'text-blue-400' : 'text-blue-600')

const iconContainerClasses = computed(() => isDark.value
  ? 'bg-blue-500/10'
  : 'bg-blue-50'
)

const skillCardClasses = computed(() => isDark.value
  ? 'group bg-slate-800/60 backdrop-blur-xl rounded-[2.5rem] p-6 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.2)] text-center border border-slate-700/50 hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-1'
  : 'group bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-6 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.1)] text-center border border-slate-200/50 hover:border-blue-200 transition-all duration-300 hover:-translate-y-1'
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
