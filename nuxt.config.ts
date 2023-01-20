// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
          '@nuxtjs/tailwindcss',
          'nuxt-icons',
          'nuxt-headlessui',
          '@nuxtjs/supabase',
          '@pinia/nuxt',
          '@pinia-plugin-persistedstate/nuxt',
    ],
    css: ['~/assets/css/tailwind.css'],
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },  
})
