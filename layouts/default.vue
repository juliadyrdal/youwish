<script setup>
import { useUserStore } from '~~/stores/UserStore';
import { useProfileStore } from '~~/stores/ProfileStore';
import { useListsStore } from '~~/stores/ListsStore';
import { useInviteStore } from '~~/stores/InviteStore';

const supabase = useSupabaseClient()
const supabaseAuth = useSupabaseAuthClient()
const userStore = useUserStore()
const profileStore = useProfileStore()
const listsStore = useListsStore()
const inviteStore = useInviteStore()

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
    if (userStore.session) {
        getProfile()
    } 

    async function getLists() {
        const { data } = await supabase.from('lists').select().eq('owner_id', userStore.session.user.id).order('created_at', { ascending: false })
        listsStore.lists = data
    }
    
    if (userStore.session) {
        getLists()
    }


    // get profile of current user
    async function getInvites() {
        const { data } = await supabase.from('invites').select('list_id').eq('invitee_id', userStore.session.user.id).single()
        inviteStore.invites = data
    }
    // initialize 
    if (userStore.session) {
        getInvites()
    } 

    async function getInviteLists() {
        const { data } = await supabase.from('lists').select().eq('id', inviteStore.invites.list_id).order('created_at', { ascending: false })
        inviteStore.lists = data
    }

    if (userStore.session) {
        getInviteLists()
    }
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