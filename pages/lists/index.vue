<template>
  <div class="main-container">
    <div class="mt-16 mb-20">
      <h1 class="mb-8 text-3xl font-bold"><span class="mr-3">🎁</span> Wish lists</h1>
      <p class="w-9/12 text-base">Lorem ipsum dolor sit amet consectetur. Morbi sed in fermentum leo. Gravida risus commodo dui accumsan dui. Maecenas elit eu sollicitudin amet ut. Pellentesque rutrum a felis viverra.</p>
    </div>
    <h2 class="pb-8 text-sm uppercase underline">Wish lists you have been invited to</h2>
    <div v-if="userStore.session">
      <div v-if="lists" class="grid grid-cols-2 xl:grid-cols-3 gap-8">
      <CreateListCard />
      <div v-for="l in lists" :key="l.id">
        <ListCard :list="l" />
      </div>
    </div>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '../../stores/UserStore'

// initialize userStore
const userStore = useUserStore()

// Fetch wish lists from supabase
const supabase = useSupabaseClient()
const supabaseAuth = useSupabaseAuthClient()


const { data: lists } = await useAsyncData('lists', async () => {
  const { data } = await supabase.from('lists').select().eq('owner_id', userStore.session.user.id).order('created_at', { ascending: false })

  return data
})
</script>

<style scoped>

</style>