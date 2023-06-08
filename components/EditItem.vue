<template>
    <div class="absolute inset-x-20 inset-y-24 bg-slate-100">
      <h2 class="mt-10 mb-6 font-semibold text-theme-dark">Edit item here</h2>
      <form @submit.prevent="emitSubmit">
        <input name="link" type="text" v-model="link" class="w-full h-20 pt-2 pl-4 mb-6 border border-theme-medium rounded-md">
        <textarea name="description" v-model="comment" cols="30" rows="5" class="w-full h-24 pt-3.5 pl-4 border border-theme-medium rounded-md"></textarea>
        <button class="w-40 transition-colors bg-theme-medium hover:bg-theme-dark text-white px-3 py-2 rounded-md text-lg font-medium my-4">Save</button>
      </form>
    </div>
</template>

<script setup>
  const { id } = useRoute().params
  const { item } = defineProps(['item'])

  const link = ref(item.link)
  const comment = ref(item.comment)

  const emit = defineEmits(["handleEditSubmit"])

  function emitSubmit() {
    emit("handleEditSubmit", link, comment)
  }
</script>

<style scoped>

</style>