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
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
        }
      ]
    }
  },

  site: {
    url: 'https://www.inspiration-music.com',
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
