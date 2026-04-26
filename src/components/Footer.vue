<template>
  <footer :class="footerClasses" class="py-6 px-4 sm:px-6 lg:px-8 border-t">
    <div class="max-w-5xl mx-auto text-center">
      <p :class="textClasses" class="text-sm sm:text-base">
        {{ homePage.footer.copyright.replace('{siteConfig.name}', siteConfig.name) }}
      </p>
    </div>
  </footer>
</template>

<script setup>
import { computed, inject } from 'vue'
import { siteConfig, homePage } from '../main.config.js'

const isDark = inject('isDark')

const textClasses = computed(() => isDark.value ? 'text-slate-400' : 'text-slate-500')

const footerClasses = computed(() => isDark.value ? 'border-slate-700 bg-slate-900/70' : 'border-slate-200 bg-white/70')
</script>