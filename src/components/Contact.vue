<template>
  <section id="contact" :class="sectionBgClasses" class="pt-20 pb-14 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-10">
        <h2 :class="headingClasses" class="text-3xl sm:text-4xl font-bold mb-2">{{ contact.pageTitle }}</h2>
        <p :class="textClasses" class="text-base max-w-md mx-auto">{{ contact.pageSubtitle }}</p>
        <div class="w-16 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mt-3"></div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
        <button v-for="method in contact.methods" :key="method.title" @click="openModal(method.title)"
           :class="['group', 'bg-gradient-to-br', method.gradient, 'text-white', 'rounded-2xl', 'p-5', 'text-center', 'shadow-lg', 'hover:shadow-xl', 'transform', 'hover:-translate-y-2', 'transition-all', 'duration-300', 'relative', 'overflow-hidden', 'cursor-pointer', 'border-0', 'w-full']">
          <div class="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-indigo-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <img v-if="method.icon.startsWith('http')" :src="method.icon" :alt="method.title" class="w-12 h-12 mx-auto mb-3 transition-transform duration-300 group-hover:scale-115 relative z-10">
          <div v-else class="text-4xl mb-3 transition-transform duration-300 group-hover:scale-115 relative z-10">{{ method.icon }}</div>
          <div class="text-base sm:text-lg font-bold relative z-10">{{ method.title }}</div>
        </button>
      </div>
    </div>
  </section>

  <ContactModal :show="showModal" :type="modalType" @close="closeModal" />
</template>

<script setup>
import { ref, computed, inject } from 'vue'
import { contact } from '../main.config.js'
import ContactModal from './ContactModal.vue'

const isDark = inject('isDark')

const showModal = ref(false)
const modalType = ref('')

const openModal = (title) => {
  if (title === '邮件') {
    modalType.value = 'email'
  } else if (title === '微信') {
    modalType.value = 'wechat'
  } else if (title === 'QQ') {
    modalType.value = 'qq'
  }
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
  modalType.value = ''
}

const sectionBgClasses = computed(() => isDark.value ? 'bg-slate-900/40' : 'bg-white/60')
const headingClasses = computed(() => isDark.value ? 'text-slate-100' : 'text-slate-800')
const textClasses = computed(() => isDark.value ? 'text-slate-400' : 'text-slate-500')
</script>

