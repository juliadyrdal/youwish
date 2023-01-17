<template>
  <div class="main-container">
    <div class="mx-2 lg:mx-12 xl:mx-24 mt-4 lg:mt-8 pb-10 pt-16 bg-white rounded-md">
      <ListDetails :list="list">
        <template #header>
          <ListHeaderOwner :list="list" />
        </template>
      </ListDetails>
    </div>
  </div>
</template>

<script setup>
// var name must match page name (in square brackets)
const { id } = useRoute().params
// const uri = 'http://localhost:3000/lists/' + id

// fetch list
// add key to send new request to server
// const { data: list } = await useFetch(uri, { key: id })

const client = useSupabaseClient()

const { data: list } = await useAsyncData('lists', async () => {
const { data } = await client.from('lists').select().eq('id', id).limit(1).single()

return data
})
</script>

<style scoped>

</style>