// https://nuxt.com/docs/api/configuration/nuxt-config
// 要seo要在這下方寫nuxt.config.ts寫
export default defineNuxtConfig({
  app: {
    head: {
      title: '記帳日記',

    }
  },
  devtools: { enabled: true },
  modules: ['@unocss/nuxt', '@vueuse/nuxt']
})
