import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],

  // Tailwind 직접 불러오기
  css: ['@/assets/css/tailwind.css'],

  devtools: { enabled: true },
  compatibilityDate: '2025-04-25',
})