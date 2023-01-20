<template>
  <div class="bg-white py-8 px-8">
  <form class="" @submit.prevent="handleSignup">
  <div class="col-6 form-widget">
    <p class="text-theme-dark text-2xl font-medium">Sign up to create an account</p>
    <div class="flex gap-6 pt-10">
      <input class="inputField" type="text" placeholder="First name" v-model="firstName" />
      <input class="inputField" type="text" placeholder="Last name" v-model="lastName" />
    </div>
    <div class="flex flex-col gap-6 pt-10 pb-8">
      <input class="inputField" type="email" placeholder="Your email" v-model="email" />
      <input class="inputField" type="password" placeholder="Your password" v-model="password" />
    </div>
    <div>
      <input
        type="submit"
        class="w-40 transition-colors bg-theme-medium hover:bg-theme-dark text-white px-3 py-2 rounded-md text-lg font-medium my-4"
        :value="loading ? 'Loading' : 'Sign up'"
        :disabled="loading"
      />
    </div>
  </div>
</form>
  </div>
  </template>

<script setup>
 const supabase = useSupabaseClient()
 const client = useSupabaseAuthClient()
 const user = useSupabaseUser()

  const loading = ref(false)
  const firstName = ref('')
  const lastName = ref('')
  const email = ref('')
  const password = ref('')
  const handleSignup = async () => {
      try {
          loading.value = true
          const { data, error } = await supabase.auth.signUp({
          email: email.value,
          password: password.value,
          options: {
              data: {
                  first_name: firstName.value,
                  last_name: lastName.value,
              }
          }
          })
          if (error) throw error
          alert('Check your email for the login link!')
      } catch (error) {
          alert(error.error_description || error.message)
      } finally {
          loading.value = false
      }
  }
   
</script>

<style scoped>

</style>