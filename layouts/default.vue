<script setup>
import { useUserStore } from '~~/stores/UserStore';
import { useProfileStore } from '~~/stores/ProfileStore';
import { useListsStore } from '~~/stores/ListsStore';

const supabase = useSupabaseClient()
const supabaseAuth = useSupabaseAuthClient()
const userStore = useUserStore()
const profileStore = useProfileStore()
const listsStore = useListsStore()

supabaseAuth.auth.onAuthStateChange((event, session) => {
    console.log(event)
    userStore.session = session
})

    // get profile of current user
    async function getProfile() {
        const { data } = await supabase.from('profiles').select().eq('id', userStore.session.user.id).single()
        profileStore.profile = data
    }
    // initialize 
    getProfile()

    async function getLists() {
        const { data } = await supabase.from('lists').select().eq('owner_id', userStore.session.user.id).order('created_at', { ascending: false })
        listsStore.lists = data
    }
    getLists()
  
</script>

<template>
    <div>
      <TheHeader />
      <div class="container mx-auto p-4">
          <slot />
      </div>
      <TheFooter />
      </div>
</template>