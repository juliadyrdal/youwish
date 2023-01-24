<template>
    <div class="mb-14 flex flex-col gap-6">
        <!-- <slot name="header"></slot> -->
        <div v-if="list.owner_id === userStore.session.user.id">
          <ListHeaderOwner @refresh-new-item="refresh" :list="list" />
        </div> 
        <div v-else>
          <ListHeaderGuest :list="list" />
        </div>
     <div class="mt-16">
      <h2 class="mb-8 font-semibold text-theme-medium mx-2 lg:mx-10 xl:mx-16">My wishes</h2>
        <div class="flex flex-col gap-2">
          <div class="" v-for="item in items" :key="item.id">
            <div v-if="list.owner_id === userStore.session.user.id">
              <ListItem :item="item" />
            </div> 
            <div v-else>
              <ListItemGuest :reservedItems="reservedItems" :item="item" />
            </div> 
          </div> 
        </div>
     </div>
    </div>
</template>

<script setup>
import { useUserStore } from '../stores/UserStore'

const supabase = useSupabaseClient()
const supabaseAuth = useSupabaseAuthClient()

// initialize userStore
const userStore = useUserStore()

  const { list } = defineProps(['list'])


  // // fetch items from items table
  const client = useSupabaseClient()

  const { data: items } = await useAsyncData('items', async () => {
    const { data } = await client.from('items').select().eq('list_id', list.id).order('created_at', { ascending: false })

    return data
  })

  const refresh = () => {
    refreshNuxtData()
  }

  const { data: reservedItems } = await useAsyncData('reservedItems', async () => {
    const { data } = await supabase.from('items').select().eq('list_id', list.id)

    return data
  })
</script>

<style scoped>
  
</style>