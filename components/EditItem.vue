<template>
    <div class="absolute inset-x-20 inset-y-24 bg-slate-100">
      <p>Edit item here</p>
      <form @submit.prevent="handleSubmit">
        <input name="link" type="text" v-model="link" class="w-full h-12 pl-6">
        <textarea name="description" v-model="comment" cols="30" rows="10"></textarea>
        <button>Save</button>
      </form>
    </div>
</template>

<script setup>
  const { id } = useRoute().params
  const { item } = defineProps(['item'])

  const link = ref("paste link here")
  const comment = ref("paste comment here")


  async function handleSubmit() {
    await $fetch('http://localhost:3000/items/' + item.id, {
      headers: {
        "Content-Type": "application/json",
      },
      method: 'PATCH',
      body: {
        link: link.value,
        comment: comment.value
      }
    } )
  }

</script>

<style scoped>

</style>