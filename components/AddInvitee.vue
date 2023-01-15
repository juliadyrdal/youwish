<template>
    <div class="main-container">
      <div class="fixed top-24 inset-x-48 bg-theme-lighter px-12 py-12 rounded-md shadow-sm">
        <p class="pb-10 text-theme-dark text-2xl font-medium">Invite a new member to <span class="pl-1 font-bold">'{{ list.title }}'</span></p>
        <button @click="$emit('closeModal')" class="absolute top-4 right-4 text-theme-dark hover:bg-white rounded-md transition-colors"><XMarkIcon class="h-6 w-6 text-[#364870]"/></button>
        <form @submit.prevent="emitSubmit" class="flex flex-col gap-6">
          <label for="email" class="text-base">Email</label>
          <input name="email" type="email" v-model="newEmail" class="w-full h-12 pl-6 border">
          <button class="w-2/6 bg-theme-medium hover:bg-theme-dark transition-colors text-white px-3 py-2 rounded-md text-lg font-medium my-4">Invite to wish list</button>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
    import { XMarkIcon } from "@heroicons/vue/24/solid"
    const { list } = defineProps(['list'])
  
    const newEmail = ref("")
  
    const emit = defineEmits(["handleInviteSubmit", "closeModal"])
  
    function emitSubmit() {
      emit("handleInviteSubmit", newEmail)
    }
  </script>
  
  <style scoped>
  </style>