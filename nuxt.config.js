const isProduction = process.env.NODE_ENV === 'production';

export default defineNuxtConfig({
  app: {
    head: {
      title: 'learn-nuxt',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  css: ['@/assets/css/reset.css'],
  modules: ['@pinia/nuxt'],

  pinia: {
    autoImports: ['defineStore', 'acceptHMRUpdate'],
  },

  imports: {
    dirs: ['./stores'],
  },

  devtools: true,

  runtimeConfig: {
    public: {
      baseURL: isProduction
        ? 'https://my-json-server.typicode.com/joshua1988/nuxt-shopping-api'
        : 'http://localhost:5000',
    },
  },

  vite: {
    server: {
      port: 5000,
    },
  },

  compatibilityDate: '2025-04-07',
});
