<script setup>
import { useUserStore } from '../stores/UserStore'
import { useProfileStore } from '~~/stores/ProfileStore';

const supabase = useSupabaseClient()
const supabaseAuth = useSupabaseAuthClient()

// initialize userStore
const userStore = useUserStore()


const { data: lists } = await useAsyncData('lists', async () => {
  const { data } = await supabase.from('lists').select('id, title').order('created_at')

  return data
})

// const { data: profiles} = await useAsyncData('profiles', async () => {
//   const { data } = await supabase.from('profiles').select('first_name').eq('id', userStore.session.user.id)

//   return data
// })

// const getCurrentUser = async () => {
//         try {
//             const { data: { user } } = await supabaseAuth.auth.getUser()
//         } catch (error) {
//             alert(error.error_description || error.message)
//         } finally {
//         }
//         console.log('hello again' + user.value)
//     }
// const getCurrentUser = async () => {
//   const usernow = (await supabaseAuth.auth.getUser()).data.user
//   console.log(usernow.id)
// }
</script>

<template>
    <div class="main-container">
        <div v-if="userStore.session" class="mt-16 mb-14">
          <TheWelcome />
        </div>
        <div v-else class="mt-16 mb-14">
           <TheSignup /> 
        </div>
        <!-- <div v-if="profileStore.profile">
          <p>{{ profileStore.profile.first_name }}</p>
        </div> -->
        <div v-if="userStore.session">
          <p>{{ userStore.session.user.id }}</p>
        </div>
        <!-- <div v-if="profileStore.profile">
          <p>{{ profileStore.profile.last_name }}</p>
        </div> -->
    </div>
</template>