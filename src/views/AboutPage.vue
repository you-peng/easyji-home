<template>
  <div class="min-h-screen bg-transparent">
    <div :class="bgClasses" class="fixed inset-0 z-0"></div>
    <div class="relative z-10 pt-20 pb-10">
      <AboutSection />
    </div>
    <FooterSection />
  </div>
</template>

<script setup>
import { computed, inject } from 'vue'
import AboutSection from '../components/AboutSection.vue'
import FooterSection from '../components/Footer.vue'

const isDark = inject('isDark')

const bgClasses = computed(() => isDark.value
  ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800'
  : 'bg-gradient-to-br from-slate-50 via-blue-50/80 to-indigo-100/60'
)
</script>

