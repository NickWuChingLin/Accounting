// https://nuxt.com/docs/api/configuration/nuxt-config
// 要seo要在這下方寫nuxt.config.ts寫
export default defineNuxtConfig({
  app: {
    head: {
      title: '水哥彭湃',

    }
  },
  devtools: { enabled: true },
  modules: ['@unocss/nuxt', '@vueuse/nuxt']
})
