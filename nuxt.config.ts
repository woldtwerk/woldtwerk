// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  experimental: {
    componentIslands: true,
  },
  ssr: true,
  modules: [
    '@nuxt/content',
    '@unocss/nuxt',
    '@nuxt/devtools',
    '@vueuse/nuxt',
  ],
  postcss: {
    plugins: {
      // '@unocss/postcss': {},
      '@ueberbit/postcss/stripcolor': {},
    },
  },
  css: [
    '@/assets/css/index.css',
    '@/assets/css/variables.css',
  ],
})
