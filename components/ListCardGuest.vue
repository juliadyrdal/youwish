<template>
    <NuxtLink :to="`/gifts/${list.id}`">
      <div class="rounded-md bg-white shadow-md h-full text-center">
        <div class="h-32 w-full rounded-t-md" :class="colorThemePrimary"></div>
        <span class="rounded-full px-6 py-6 pb-6.5 -mt-32 inline-block text-5xl" :class="colorThemeSecondary">{{ list.list_icon }}</span>
        <div class="p-6">
          <h3 class="mb-2 text-2xl font-bold text-gray-900">{{ list.title }}</h3>
          <p class="mb-6 text-base text-gray-600 truncate">{{ list.description }}</p>
          <!-- <div v-if="ownerName" class="mb-2 flex gap-2 items-center justify-center text-theme-dark hover:text-theme-medium transition-colors"><UserCircleIcon class="h-6 w-6"/><button class="text-lg font-medium">{{ `${ownerName.first_name} ${ownerName.last_name}` }}</button></div>   -->
        <button class="mt-4 mb-2 w-full text-gray-700 border border-gray-600 px-16 py-1 rounded-md text-sm">View list</button>
        </div>
      </div>
    </NuxtLink>
  </template>
  
  <script setup>
  import { useUserStore } from '../stores/UserStore'
  import { UserCircleIcon } from "@heroicons/vue/24/outline/index.js"


  const supabase = useSupabaseClient()
  const supabaseAuth = useSupabaseAuthClient()

  // initialize userStore
  const userStore = useUserStore()

    const { list } = defineProps(['list'])
  
    const colorThemePrimary = computed(() => ({
      'green-primary': list.color_theme === 'green',
      'purple-primary': list.color_theme === 'purple',
      'berry-primary': list.color_theme === 'berry',
  }))
  
  const colorThemeSecondary = computed(() => ({
      'green-secondary': list.color_theme === 'green',
      'purple-secondary': list.color_theme === 'purple',
      'berry-secondary': list.color_theme === 'berry',
  }))

  // WHY ERROR IN CONSOLE?
//   const { data: ownerName} = await useAsyncData('profiles', async () => {
//   const { data } = await supabase.from('profiles').select('first_name, last_name').eq('id', list.owner_id).single()

//   return data
// })
  </script>
  
  <style scoped>
  .green-primary {
    background-color: #2D6E72;
  }
  .green-secondary {
    background-color: #CFE0E2;
  }
  .purple-primary {
    background-color: #364870;
  }
  .purple-secondary {
    background-color: #CFD5E2;
  }
  .berry-primary {
    background-color: #934457;
  }
  .berry-secondary {
    background-color: #E2CFD6;
  }
  
  </style>