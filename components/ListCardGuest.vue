<template>
    <NuxtLink :to="`/gifts/${list.id}`">
      <div class="rounded-md bg-white shadow-md h-full text-center">
        <div class="h-32 w-full rounded-t-md" :class="colorThemePrimary"></div>
        <span class="rounded-full px-6 py-6 pb-6.5 -mt-32 inline-block text-5xl" :class="colorThemeSecondary">{{ list.list_icon }}</span>
        <div class="p-6">
          <h3 class="mb-2 text-2xl font-bold text-gray-900">{{ list.title }}</h3>
          <p class="mb-6 text-base text-gray-600 truncate">{{ list.description }}</p>
          <h4 class="mb-2 text-lg font-semibold">{{ list.owner_id }}</h4>  
        <button class="mt-4 mb-2 w-full text-gray-700 border border-gray-600 px-16 py-1 rounded-md text-sm">View list</button>
        </div>
      </div>
    </NuxtLink>
  </template>
  
  <script setup>
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