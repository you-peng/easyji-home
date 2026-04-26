<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="show" class="fixed inset-0 z-50 flex items-center justify-center p-4" @click.self="close">
        <div class="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        <div :class="modalClasses" class="relative bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-6 max-w-sm w-full transform transition-all">
          <button @click="close" class="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors">
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>

          <div v-if="type === 'email'">
            <h3 class="text-xl font-bold mb-4 text-slate-800 dark:text-slate-100">发送邮件</h3>
            <p class="text-slate-600 dark:text-slate-400 mb-4">点击下方按钮复制邮箱地址</p>
            <div class="flex items-center gap-3 bg-slate-100 dark:bg-slate-700 rounded-xl p-4">
              <span class="flex-1 text-slate-800 dark:text-slate-200 font-mono text-sm break-all">{{ contact.email }}</span>
              <button @click="copyEmail" class="flex-shrink-0 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all">
                {{ copied ? '已复制!' : '复制' }}
              </button>
            </div>
          </div>

          <div v-else-if="type === 'wechat'">
            <h3 class="text-xl font-bold mb-4 text-slate-800 dark:text-slate-100">扫描二维码</h3>
            <p class="text-slate-600 dark:text-slate-400 mb-4">使用微信扫描下方二维码</p>
            <div class="flex justify-center bg-slate-100 dark:bg-slate-700 rounded-xl p-4">
              <img :src="contact.wechatQrCode" alt="微信二维码" class="w-48 h-48 object-contain">
            </div>
          </div>

          <div v-else-if="type === 'qq'">
            <h3 class="text-xl font-bold mb-4 text-slate-800 dark:text-slate-100">扫描二维码</h3>
            <p class="text-slate-600 dark:text-slate-400 mb-4">使用QQ扫描下方二维码</p>
            <div class="flex justify-center bg-slate-100 dark:bg-slate-700 rounded-xl p-4">
              <img :src="contact.qqQrCode" alt="QQ二维码" class="w-48 h-48 object-contain">
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { contact } from '../main.config.js'

const props = defineProps({
  show: Boolean,
  type: String
})

const emit = defineEmits(['close'])

const copied = ref(false)

const modalClasses = computed(() => '')

const close = () => {
  emit('close')
  copied.value = false
}

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(contact.email)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    console.error('复制失败:', err)
  }
}

watch(() => props.show, (newVal) => {
  if (newVal) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from > div:last-child,
.modal-leave-to > div:last-child {
  transform: scale(0.95);
}
</style>