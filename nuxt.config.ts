// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  ssr: true,
  modules: [
    '@nuxt/content',
    '@unocss/nuxt',
    '@nuxt/devtools',
    '@vueuse/nuxt',
  ],
  css: [
    '@/assets/css/index.css',
    '@/assets/css/variables.css',
  ],
})
