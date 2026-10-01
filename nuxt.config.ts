export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  srcDir: '.',
  ssr: true,
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/seo',
    '@nuxt/icon'
  ],

  css: ['~/assets/css/main.css'],

  runtimeConfig: {
    public: {
      instagramApiUrl: process.env.NUXT_PUBLIC_INSTAGRAM_API_URL || 'http://localhost:4000'
    }
  },

  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
      ]
    }
  },

  site: {
    name: 'Vip Orchestra'
  },

  ogImage: {
    enabled: false
  },

  robots: {
    robotsTxt: process.env.NUXT_APP_BASE_URL === '/' || !process.env.NUXT_APP_BASE_URL
  },

  typescript: {
    strict: true
  }
})
