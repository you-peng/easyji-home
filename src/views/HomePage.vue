<template>
  <div class="min-h-screen relative">
    <div :class="bgClasses" class="absolute inset-0"></div>
    <div class="relative z-10">
      <HeroSection />

      <SocialSection />
      <ProjectsSection />
      <ArticlesSection />
      <SkillsSection />
      <ContactSection />

      <FooterSection />
    </div>
  </div>
</template>

<script setup>
import { computed, inject } from 'vue'
import HeroSection from '../components/HeroSection.vue'
import SocialSection from '../components/Social.vue'
import ProjectsSection from '../components/Projects.vue'
import ArticlesSection from '../components/Articles.vue'
import SkillsSection from '../components/Skills.vue'
import ContactSection from '../components/Contact.vue'
import FooterSection from '../components/Footer.vue'

const isDark = inject('isDark')

const bgClasses = computed(() => isDark.value
  ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800'
  : 'bg-gradient-to-br from-slate-50 via-blue-50/80 to-indigo-100/60'
)
</script>

