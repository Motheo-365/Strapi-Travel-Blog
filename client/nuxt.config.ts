export default defineNuxtConfig({
  modules: ['@nuxt/image'],

  runtimeConfig: {
    public: {
      strapiUrl: process.env.NUXT_PUBLIC_STRAPI_URL
    }
  }
})