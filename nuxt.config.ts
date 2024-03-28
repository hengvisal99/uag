// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ['@nuxt/ui-pro'],
  modules: [
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    'nuxt-icon'],
  colorMode: {
    preference: 'light'
  },
  css: [
    '~/assets/css/style.css'
  ]
})

