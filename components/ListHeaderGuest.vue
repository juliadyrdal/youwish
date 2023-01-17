<template>
    <div>
      <div class="flex gap-5 justify-between px-8 lg:px-12 xl:px-16">
        <h1 class="text-3xl font-bold">{{ list.title }}</h1>
      </div>
      <div class="flex gap-5 justify-between px-8 lg:px-12 xl:px-16">
        <p class="text-sm lg:text-base">{{ list.description }}</p>
      </div>
      
      <div class="mt-10 pb-10 flex gap-6 border-b border-theme-light mx-8 lg:mx-12 xl:mx-16">
        
      </div>
    </div>
</template>

<script setup>

    const { list } = defineProps(['list'])

    const client = useSupabaseClient()

    
</script>

<style scoped>

</style>