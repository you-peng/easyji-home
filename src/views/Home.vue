<template>
  <div class="min-h-screen relative">
    <div :class="bgClasses" class="absolute inset-0"></div>
    <div class="relative z-10">
      <section id="home" class="min-h-[85vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div class="max-w-5xl mx-auto w-full">
          <div class="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12">
            <div class="flex-1 text-center lg:text-left">
              <div class="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-5 border border-blue-200 dark:border-blue-800">
                <span class="mr-2">👋</span>
                欢迎来到我的个人网站
              </div>
              <h1 :class="titleClasses" class="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight tracking-tight">
                你好，我是 <span class="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">{{ siteConfig.name }}</span>
              </h1>
              <p :class="subtitleClasses" class="text-lg sm:text-xl mb-5 max-w-xl mx-auto lg:mx-0">
                {{ siteConfig.subtitle }}
              </p>
              <p :class="textClasses" class="text-base sm:text-lg mb-6 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                If I never see you again, good morning, good afternoon and good night.
              </p>
              <div class="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <a href="#projects" class="group inline-flex items-center justify-center px-7 py-3.5 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-indigo-600 transform hover:-translate-y-1 transition-all duration-300">
                  查看我的项目
                  <svg class="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                  </svg>
                </a>
                <a href="#articles" :class="secondaryButtonClasses" class="inline-flex items-center justify-center px-7 py-3.5 font-bold rounded-2xl border-2 shadow-sm hover:shadow-md transform hover:-translate-y-1 transition-all duration-300">
                  我写的网站
                </a>
                <a href="https://gitee.com" target="_blank" :class="secondaryButtonClasses" class="inline-flex items-center justify-center px-7 py-3.5 font-bold rounded-2xl border-2 shadow-sm hover:shadow-md transform hover:-translate-y-1 transition-all duration-300">
                  访问 Gitee
                </a>
              </div>
            </div>
            <div class="flex-shrink-0 flex justify-center lg:justify-end">
              <div :class="avatarClasses" class="w-36 h-36 sm:w-48 sm:h-48 lg:w-52 lg:h-52 rounded-full overflow-hidden shadow-2xl flex items-center justify-center relative">
                <div class="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-indigo-400/30 rounded-full animate-pulse"></div>
                <span class="text-8xl sm:text-9xl lg:text-10xl relative z-10">🐑</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="social" :class="sectionBgClasses" class="pt-20 pb-14 px-4 sm:px-6 lg:px-8">
        <div class="max-w-5xl mx-auto">
          <div class="text-center mb-10">
            <h2 :class="headingClasses" class="text-3xl sm:text-4xl font-bold mb-3">我的频道</h2>
            <p :class="textClasses" class="text-base max-w-md mx-auto">找到我在不同平台上的身影</p>
            <div class="w-16 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mt-3"></div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            <a v-for="(social, index) in socialLinks" :key="social.name" :href="social.url" target="_blank" 
               :class="getSocialCardClasses(index)"> 
              <div class="text-4xl mb-4 transition-all duration-300 group-hover:scale-115 group-hover:-translate-y-1">{{ social.icon }}</div>
              <h3 :class="cardTitleClasses" class="text-lg sm:text-xl font-bold mb-2 transition-colors">{{ social.name }}</h3>
              <p :class="textClasses" class="text-sm">{{ social.description }}</p>
            </a>
          </div>
        </div>
      </section>

      <section id="projects" class="pt-20 pb-14 px-4 sm:px-6 lg:px-8">
        <div class="max-w-5xl mx-auto">
          <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-10">
            <div>
              <h2 :class="headingClasses" class="text-3xl sm:text-4xl font-bold mb-2">我的项目</h2>
              <p :class="textClasses" class="text-base">探索我最近完成的一些作品</p>
            </div>
            <a href="#" :class="linkClasses" class="mt-3 sm:mt-0 inline-flex items-center text-sm font-semibold transition-colors hover:underline">
              查看全部仓库
              <svg class="ml-1.5 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5">
            <div v-for="project in projects" :key="project.name" :class="projectCardClasses">
              <div class="h-32 sm:h-36 bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500 flex items-center justify-center relative overflow-hidden group/img">
                <div class="absolute inset-0 bg-black/0 group-hover/img:bg-black/15 transition-colors duration-300"></div>
                <div class="text-5xl sm:text-6xl font-bold text-white group-hover/img:scale-115 transition-transform duration-500">{{ project.emoji || '💻' }}</div>
              </div>
              <div :class="projectCardContentClasses" class="p-5">
                <div class="flex justify-between items-start mb-2.5">
                  <h3 :class="cardTitleClasses" class="text-lg sm:text-xl font-bold transition-colors">{{ project.name }}</h3>
                  <span :class="tagClasses" class="px-2.5 py-0.5 rounded-full text-xs font-bold">Public</span>
                </div>
                <p :class="textClasses" class="text-sm mb-4 leading-relaxed">{{ project.description }}</p>
                <div :class="projectFooterClasses" class="flex justify-between items-center pt-3 border-t">
                  <div class="flex items-center gap-1.5">
                    <span :class="textClasses" class="text-sm font-medium">{{ project.tags?.[0] || 'Code' }}</span>
                  </div>
                  <div :class="textClasses" class="flex items-center">
                    <svg class="w-4 h-4 mr-1.5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    <span class="text-sm font-bold">{{ project.stars || 0 }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="articles" :class="sectionBgClasses" class="pt-20 pb-14 px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-10">
            <h2 :class="headingClasses" class="text-3xl sm:text-4xl font-bold mb-2">我的文章</h2>
            <p :class="textClasses" class="text-base">分享我的技术见解与学习笔记</p>
            <div class="w-16 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mt-3"></div>
          </div>
          <div class="space-y-3.5 lg:space-y-4">
            <article v-for="article in articles" :key="article.id" :class="articleCardClasses">
              <div class="flex flex-col md:flex-row gap-5">
                <div class="w-full md:w-32 h-24 bg-gradient-to-br from-blue-500 via-indigo-500 to-violet-500 rounded-2xl flex items-center justify-center flex-shrink-0 group/thumb">
                  <span class="text-5xl group-hover/thumb:scale-115 transition-transform duration-300">📝</span>
                </div>
                <div class="flex-1 flex flex-col justify-center">
                  <h3 :class="cardTitleClasses" class="text-lg sm:text-xl font-bold mb-3 transition-colors">{{ article.title }}</h3>
                  <p :class="textClasses" class="text-sm mb-4 leading-relaxed line-clamp-2">{{ article.excerpt }}</p>
                  <a href="#" class="inline-flex items-center text-blue-500 hover:text-blue-400 font-bold text-sm group-hover:underline transition-colors">
                    跳转阅读全文
                    <svg class="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          </div>
          <div class="mt-8 text-center">
            <button :class="secondaryButtonClasses" class="inline-flex items-center px-6 py-3 font-bold rounded-2xl shadow-sm hover:shadow-md border-2 transition-all duration-300 transform hover:-translate-y-1">
              查看所有文章
            </button>
          </div>
        </div>
      </section>

      <section id="skills" class="pt-20 pb-14 px-4 sm:px-6 lg:px-8">
        <div class="max-w-5xl mx-auto">
          <div class="text-center mb-10">
            <h2 :class="headingClasses" class="text-3xl sm:text-4xl font-bold mb-2">我的技能</h2>
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
      </section>

      <section id="contact" :class="sectionBgClasses" class="pt-20 pb-14 px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-10">
            <h2 :class="headingClasses" class="text-3xl sm:text-4xl font-bold mb-2">联系我</h2>
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
      </section>

      <footer :class="footerClasses" class="py-6 px-4 sm:px-6 lg:px-8 border-t">
        <div class="max-w-5xl mx-auto text-center">
          <p :class="textClasses" class="text-sm sm:text-base">
            © 2026 {{ siteConfig.name }}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { computed, inject } from 'vue'
import { siteConfig, socialLinks, projects, articles, skillCategories } from '../main.config.js'

const isDark = inject('isDark')

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

const bgClasses = computed(() => isDark.value
  ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800'
  : 'bg-gradient-to-br from-slate-50 via-blue-50/80 to-indigo-100/60'
)

const titleClasses = computed(() => isDark.value ? 'text-slate-100' : 'text-slate-800')
const headingClasses = computed(() => isDark.value ? 'text-slate-100' : 'text-slate-800')
const subtitleClasses = computed(() => isDark.value ? 'text-slate-300' : 'text-slate-600')
const textClasses = computed(() => isDark.value ? 'text-slate-400' : 'text-slate-500')
const cardTitleClasses = computed(() => isDark.value ? 'text-slate-100 group-hover:text-blue-400' : 'text-slate-800 group-hover:text-blue-600')
const linkClasses = computed(() => isDark.value ? 'text-slate-400 hover:text-blue-400' : 'text-slate-600 hover:text-blue-600')

const secondaryButtonClasses = computed(() => isDark.value
  ? 'bg-slate-800 text-white border-slate-700 hover:border-blue-500/50 hover:text-blue-400'
  : 'bg-white text-slate-700 border-slate-200 hover:border-blue-300 hover:text-blue-600'
)

const sectionBgClasses = computed(() => isDark.value ? 'bg-slate-900/40' : 'bg-white/60')

const avatarClasses = computed(() => isDark.value
  ? 'border-4 border-slate-700 bg-gradient-to-br from-emerald-400 via-teal-400 to-cyan-400'
  : 'border-4 border-white bg-gradient-to-br from-emerald-400 via-teal-400 to-cyan-400'
)

const projectCardClasses = computed(() => isDark.value
  ? 'group bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden border border-slate-700 hover:border-blue-500/40 hover:bg-slate-800/90 transition-all duration-300 hover:-translate-y-1.5'
  : 'group bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden border border-slate-200 hover:border-blue-200 hover:bg-white/90 transition-all duration-300 hover:-translate-y-1.5'
)

const projectCardContentClasses = computed(() => isDark.value ? '' : '')
const projectFooterClasses = computed(() => isDark.value ? 'border-t border-slate-700' : 'border-t border-slate-200')
const tagClasses = computed(() => isDark.value ? 'bg-slate-700/80 text-slate-300' : 'bg-slate-100 text-slate-600')

const articleCardClasses = computed(() => isDark.value
  ? 'group bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl p-6 border border-slate-700 hover:border-blue-500/40 hover:bg-slate-800/90 transition-all duration-300 hover:-translate-y-1.5'
  : 'group bg-white rounded-2xl shadow-lg hover:shadow-2xl p-6 border border-slate-200 hover:border-blue-200 hover:bg-white/90 transition-all duration-300 hover:-translate-y-1.5'
)

const skillCardClasses = computed(() => isDark.value
  ? 'group bg-slate-800 rounded-2xl p-5 shadow-lg hover:shadow-2xl text-center border border-slate-700 hover:border-blue-500/40 hover:bg-gradient-to-b hover:from-slate-700 hover:to-slate-800 transition-all duration-300 hover:-translate-y-1.5'
  : 'group bg-white rounded-2xl p-5 shadow-lg hover:shadow-2xl text-center border border-slate-200 hover:border-blue-200 hover:bg-gradient-to-b hover:from-blue-50 hover:to-white transition-all duration-300 hover:-translate-y-1.5'
)

const footerClasses = computed(() => isDark.value ? 'border-slate-700 bg-slate-900/70' : 'border-slate-200 bg-white/70')

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

const getSocialCardClasses = (index) => {
  const base = isDark.value
    ? 'group bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-slate-700 hover:border-blue-500/40 hover:bg-slate-800/90 transition-all duration-300 hover:-translate-y-1.5'
    : 'group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-slate-200 hover:border-blue-200 hover:bg-white/90 transition-all duration-300 hover:-translate-y-1.5'
  const highlight = index === 1 && !isDark.value ? 'ring-2 ring-blue-300/50' : ''
  return highlight ? `${base} ${highlight}` : base
}
</script>

