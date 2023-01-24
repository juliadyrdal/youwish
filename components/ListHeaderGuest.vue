<template>
    <div class="">
      <div class="px-8 pb-2 lg:px-12 xl:px-16">
        <h1 class="text-3xl font-bold">{{ list.title }}</h1>
      </div>
      <div class="px-8 pb-10 lg:px-12 xl:px-16">
        <p class="text-sm lg:text-base">{{ list.description }}</p>
      </div>
      <div v-if="profiles" class="px-8 lg:px-12 xl:px-16">
        <p class="text-sm lg:text-base">By <span class="font-semibold text-theme-dark">{{ `${ profiles.first_name } ${ profiles.last_name }` }}</span></p>
      </div>
      
      <div class="mt-5 pb-2 flex gap-6 border-b border-theme-light mx-8 lg:mx-12 xl:mx-16">
        
      </div>
    </div>
</template>

<script setup>

    const { list } = defineProps(['list'])

    const supabase = useSupabaseClient()

    // why console error at gifts/[id].vue ?
    const { data: profiles} = await useAsyncData('profiles', async () => {
      const { data } = await supabase.from('profiles').select().eq('id', list.owner_id).single()

      return data
    })

    
</script>

<style scoped>

</style>