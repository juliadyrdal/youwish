<script setup>
const supabase = useSupabaseClient()
const user = useSupabaseUser()

const { data: lists } = await useAsyncData('lists', async () => {
  const { data } = await supabase.from('lists').select('id, title').order('created_at')

  return data
})

const { data: profiles} = await useAsyncData('profiles', async () => {
  const { data } = await supabase.from('profiles').select('first_name').eq('id', user.value.id)

  return data
})

const getCurrentUser = async () => {
        try {
            const { data: { user } } = await supabase.auth.getUser()
        } catch (error) {
            alert(error.error_description || error.message)
        } finally {
        }
        console.log('hello' + user.value)
    }
</script>

<template>
    <div class="main-container">
        <div v-if="profiles && user" class="mt-16 mb-14">
        <h1 v-for="profile in profiles" class="mb-8 text-3xl font-bold"><span class="mr-3">🤩</span> Welcome, {{ profile.first_name }}!</h1>
        <p class="w-9/12 text-lg">Lorem ipsum dolor sit amet consectetur. Morbi sed in fermentum leo. Gravida risus commodo dui accumsan dui. Maecenas elit eu sollicitudin amet ut.</p>
    </div>
      <div v-if="!user" class="mt-16 mb-14">
           <TheSignup /> 
      </div>

      <button @click="getCurrentUser">Get current user</button>
    </div>
</template>