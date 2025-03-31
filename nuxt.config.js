const isProduction = process.env.NODE_ENV === 'production'

export default {
  head: {
    title: 'learn-nuxt',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: ['@/assets/css/reset.css'],
  plugins: [],
  components: true,

  buildModules: ['@nuxtjs/eslint-module'],

  modules: [],
  build: {},

  server: {
    port: 5000,
  },

  env: {
    baseURL: isProduction
      ? 'https://my-json-server.typicode.com/joshua1988/nuxt-shopping-api'
      : 'http://localhost:5000',
  },

  compatibilityDate: '2025-03-28',
}
