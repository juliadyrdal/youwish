<template>
  <div class="main-container">
    <div class="fixed top-24 inset-x-48 bg-theme-lighter px-12 py-12 rounded-md shadow-sm">
      <p class="pb-10 text-theme-dark text-2xl font-medium">Add a new item to <span class="pl-1 font-bold">'{{ list.title }}'</span></p>
      <button @click="$emit('closeModal')" class="absolute top-4 right-4 text-theme-dark hover:bg-white rounded-md transition-colors"><XMarkIcon class="h-6 w-6 text-[#364870]"/></button>
      <form @submit.prevent="emitSubmit" class="flex flex-col gap-6">
        <label for="link" class="text-base">Link</label>
        <input name="ink" type="text" v-model="newLink" class="w-full h-12 pl-6 border">
        <label for="comment" class="text-base">Comment</label>
        <textarea name="comment" v-model="newComment" class="w-full h-24 p-4 pl-6 border"></textarea>
        <button class="w-2/6 bg-theme-medium hover:bg-theme-dark transition-colors text-white px-3 py-2 rounded-md text-lg font-medium my-4">Add new item</button>
      </form>
    </div>
  </div>
</template>

<script setup>
  import { XMarkIcon } from "@heroicons/vue/24/solid"
  const { list } = defineProps(['list'])

  const newLink = ref("")
  const newComment = ref("")

  const emit = defineEmits(["handleItemSubmit", "closeModal"])

  function emitSubmit() {
    emit("handleItemSubmit", newLink, newComment)
  }
</script>

<style scoped>
</style>