import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue'
  ],
  theme: {
    extend: {
      colors: {
        bg: '#000000',
        text: '#ffffff',
        accent: '#a3163c'
      },
      fontFamily: {
        sans: ['Playfair Display', 'serif']
      }
    }
  },
  plugins: []
}
