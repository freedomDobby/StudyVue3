import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  css: ['@/assets/css/tailwind.css'],
  devtools: { enabled: true },
  compatibilityDate: '2025-04-25',
  app: {
    head: {
      title: 'Nuxt3 course',
      meta: [
        { name: 'description', content: 'This is a Nuxt3 course project' }
      ]
    }
  }
})
