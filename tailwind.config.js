/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          lighter: '#E5E9F2',
          light: '#CFD5E2',
          medium: '#60729A',
          dark: '#364870'
        },
        green: {
          light: '#CFE0E2',
          medium: '#468D92',
          dark: '#2D6E72'
        },
        purple: {
          light: '#CFD5E2',
          medium: '#60729A',
          dark: '#364870'
        },
        berry: {
          light: '#E2CFD6',
          medium: '#B26477',
          dark: '#934457'
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
