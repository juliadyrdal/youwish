<template>
    <div>
      <NuxtLink to="/create">
      <div class="flex flex-col gap-16 items-center justify-center rounded-md h-full bg-[#2D6E72]">
        <span class="bg-[#CFE0E2] rounded-full px-6 py-6 pb-6.5 inline-block"><PlusIcon class="h-12 w-12 text-[#2D6E72]"/></span>
        <p class="text-3xl font-bold text-[#CFE0E2]">Create new</p>
      </div>
      </NuxtLink>
    </div>
</template>

<script setup>
  import { PlusIcon } from "@heroicons/vue/24/solid/index.js"
</script>

<style scoped>

</style>