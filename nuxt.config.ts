// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
          '@nuxtjs/tailwindcss',
          'nuxt-icons',
          'nuxt-headlessui',
          '@nuxtjs/supabase'
    ],
    css: ['~/assets/css/tailwind.css'],
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },  
})
