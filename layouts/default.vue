<script setup>
import { useUserStore } from '~~/stores/UserStore';

const supabaseAuth = useSupabaseAuthClient()
const userStore = useUserStore()

supabaseAuth.auth.onAuthStateChange((event, session) => {
    console.log(event)
    userStore.session = session

//     if (event === 'SIGNED_OUT' || event === 'USER_DELETED') {
//     // delete cookies on sign out
//     const expires = new Date(0).toUTCString()
//     document.cookie = `my-access-token=; path=/; expires=${expires}; SameSite=Lax; secure`
//     document.cookie = `my-refresh-token=; path=/; expires=${expires}; SameSite=Lax; secure`
//   } else if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {
//     const maxAge = 100 * 365 * 24 * 60 * 60 // 100 years, never expires
//     document.cookie = `my-access-token=${session.access_token}; path=/; max-age=${maxAge}; SameSite=Lax; secure`
//     document.cookie = `my-refresh-token=${session.refresh_token}; path=/; max-age=${maxAge}; SameSite=Lax; secure`
//   }
})
  
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