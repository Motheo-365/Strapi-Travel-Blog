// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      strapiUrl: import.meta.env.STRAPI_URL || 'http://localhost:1337'
    }
  }
})