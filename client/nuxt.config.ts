export default defineNuxtConfig({
  modules: ['@nuxtjs/apollo', '@nuxtjs/strapi', '@nuxt/image'],

  runtimeConfig: {
    public: {
      strapiUrl: process.env.NUXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'
    }
  },

  strapi: {
    url: process.env.NUXT_PUBLIC_STRAPI_URL || 'http://localhost:1337',
    prefix: '/api'
  }
})