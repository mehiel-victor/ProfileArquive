/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app.vue',
    './pages/**/*.{vue,js,ts}',
    './components/**/*.{vue,js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E25352',
        neutralLight: '#F4F4F4',
        neutralDark: '#222222',
        neutralMedium: '#A1A1A1',
        secondary: {
          orange: '#FFA07A',
          blue: '#4A90E2',
          yellow: '#FCD34D'
        }
      }
    }
  },
  plugins: []
}
