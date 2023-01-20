<template>
  <div class="bg-white py-8 px-8">
<form class="" @submit.prevent="handleLogin">
  <div class="col-6 form-widget">
    <p>Log in to your account</p>
    <div class="flex flex-col gap-4 pt-4">
      <input class="inputField" type="email" placeholder="Your email" v-model="email" />
      <input class="inputField" type="password" placeholder="Your password" v-model="password" />
    </div>
    <div>
      <input
        type="submit"
        class="w-40 transition-colors bg-theme-medium hover:bg-theme-dark text-white px-3 py-2 rounded-md text-lg font-medium my-4"
        :value="loading ? 'Loading' : 'Log in'"
        :disabled="loading"
      />
    </div>
  </div>
</form>

  </div>
  </template>

<script setup>
import { useUserStore } from '../stores/UserStore'

 const supabase = useSupabaseClient()
 const client = useSupabaseAuthClient()
 const user = useSupabaseUser()

 // initialize userStore
 const userStore = useUserStore()

  const loading = ref(false)
  const email = ref('')
  const password = ref('')

  const handleLogin = async () => {
      try {
          loading.value = true
          const { data, error } = await client.auth.signInWithPassword({
          email: email.value,
          password: password.value,
          })
          if (error) throw error
      } catch (error) {
          alert(error.error_description || error.message)
      } finally {
          loading.value = false
          console.log(user.value)
          await navigateTo('/')
      }
  }
   
</script>

<style scoped>

</style>