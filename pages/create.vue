<template>
  <div class="main-container">
    <div class="mx-2 lg:mx-12 xl:mx-24 mt-4 lg:mt-8 px-8 lg:px-12 xl:px-16 pb-10 pt-16 bg-white rounded-md">
      <div class="mb-14">
        <h1 class="mb-8 text-3xl font-bold"><span class="mr-3">📝</span>Create a new wish list</h1>
        <p class="text-sm lg:text-base">Lorem ipsum dolor sit amet consectetur. Morbi sed in fermentum leo. Gravida risus commodo dui accumsan dui. Maecenas elit eu sollicitudin amet ut.</p>
      </div>
      <form @submit.prevent="handleListSubmit" class="flex flex-col gap-6">
        <label class="font-semibold text-theme-dark" for="title">Title</label>
        <input name="title" type="text" v-model="newTitle" class="w-full md:w-2/3 h-10 pl-4 border border-theme-medium rounded-md" placeholder="i.e. “My 33rd birthday party! 🥳”">
           
        <h2 class="mt-10 font-semibold text-theme-dark">Pick a color theme</h2>
        <div class="flex gap-4">
          <div class="relative w-12 h-12 m-2 rounded-full leading-[6rem]">
            <input class="peer absolute w-full h-full inset-0 opacity-0" type="radio" id="swatch_1" value="green" v-model="colorTheme" />
            <label class="transition-colors peer-checked:bg-green-dark bg-green-light hover:bg-green-dark w-12 h-12 leading-[6rem] rounded-full text-center absolute" for="swatch_1"></label>
          </div>
          <div class="relative w-12 h-12 m-2 rounded-full leading-[6rem]">
            <input class="peer absolute w-full h-full inset-0 opacity-0" type="radio" id="swatch_2" value="purple" v-model="colorTheme" />
            <label class="transition-colors peer-checked:bg-purple-dark bg-purple-light hover:bg-purple-dark w-12 h-12 leading-[6rem] rounded-full text-center absolute" for="swatch_2"></label>
          </div>
          <div class="relative w-12 h-12 m-2 rounded-full leading-[6rem]">
            <input class="peer absolute w-full h-full inset-0 opacity-0" type="radio" id="swatch_3" value="berry" v-model="colorTheme" />
            <label class="transition-colors peer-checked:bg-berry-dark bg-berry-light hover:bg-berry-dark w-12 h-12 leading-[6rem] rounded-full text-center absolute" for="swatch_3"></label>
          </div>
        </div>

        <h2 class="mt-10 font-semibold text-theme-dark">Choose an icon for your list</h2>
        <div class="flex gap-4">
          <div class="relative w-12 h-12 m-2 rounded-full leading-[6rem]">
            <input class="peer absolute w-full h-full inset-0 opacity-0" type="radio" id="icon_1" value="🎁" v-model="listIcon" />
            <label class="transition-colors w-12 h-12 leading-[6rem] rounded-full text-center absolute" :class="iconTheme" for="icon_1"><p class="text-3xl leading-[3rem]">🎁</p></label>
          </div>
          <div class="relative w-12 h-12 m-2 rounded-full leading-[6rem]">
            <input class="peer absolute w-full h-full inset-0 opacity-0" type="radio" id="icon_2" value="🎄" v-model="listIcon" />
            <label class="transition-colors w-12 h-12 leading-[6rem] rounded-full text-center absolute" :class="iconTheme" for="icon_2"><p class="text-3xl leading-[3rem]">🎄</p></label>
          </div>
          <div class="relative w-12 h-12 m-2 rounded-full leading-[6rem]">
            <input class="peer absolute w-full h-full inset-0 opacity-0" type="radio" id="icon_3" value="🍾" v-model="listIcon" />
            <label class="transition-colors w-12 h-12 leading-[6rem] rounded-full text-center absolute" :class="iconTheme" for="icon_3"><p class="text-3xl leading-[3rem]">🍾</p></label>
          </div>
          <div class="relative w-12 h-12 m-2 rounded-full leading-[6rem]">
            <input class="peer absolute w-full h-full inset-0 opacity-0" type="radio" id="icon_4" value="☃️" v-model="listIcon" />
            <label class="transition-colors w-12 h-12 leading-[6rem] rounded-full text-center absolute" :class="iconTheme" for="icon_4"><p class="text-3xl leading-[3rem]">☃️</p></label>
          </div>
          <div class="relative w-12 h-12 m-2 rounded-full leading-[6rem]">
            <input class="peer absolute w-full h-full inset-0 opacity-0" type="radio" id="icon_5" value="🎂" v-model="listIcon" />
            <label class="transition-colors w-12 h-12 leading-[6rem] rounded-full text-center absolute" :class="iconTheme" for="icon_5"><p class="text-3xl leading-[3rem]">🎂</p></label>
          </div>
          <div class="relative w-12 h-12 m-2 rounded-full leading-[6rem]">
            <input class="peer absolute w-full h-full inset-0 opacity-0" type="radio" id="icon_6" value="❄️" v-model="listIcon" />
            <label class="transition-colors w-12 h-12 leading-[6rem] rounded-full text-center absolute" :class="iconTheme" for="icon_6"><p class="text-3xl leading-[3rem]">❄️</p></label>
          </div>
          <div class="relative w-12 h-12 m-2 rounded-full leading-[6rem]">
            <input class="peer absolute w-full h-full inset-0 opacity-0" type="radio" id="icon_7" value="💍" v-model="listIcon" />
            <label class="transition-colors w-12 h-12 leading-[6rem] rounded-full text-center absolute" :class="iconTheme" for="icon_7"><p class="text-3xl leading-[3rem]">💍</p></label>
          </div>
          <div class="relative w-12 h-12 m-2 rounded-full leading-[6rem]">
            <input class="peer absolute w-full h-full inset-0 opacity-0" type="radio" id="icon_8" value="🌈" v-model="listIcon" />
            <label class="transition-colors w-12 h-12 leading-[6rem] rounded-full text-center absolute" :class="iconTheme" for="icon_8"><p class="text-3xl leading-[3rem]">🌈</p></label>
          </div>
          <div class="relative w-12 h-12 m-2 rounded-full leading-[6rem]">
            <input class="peer absolute w-full h-full inset-0 opacity-0" type="radio" id="icon_9" value="🎈" v-model="listIcon" />
            <label class="transition-colors w-12 h-12 leading-[6rem] rounded-full text-center absolute" :class="iconTheme" for="icon_9"><p class="text-3xl leading-[3rem]">🎈</p></label>
          </div>
          <div class="relative w-12 h-12 m-2 rounded-full leading-[6rem]">
            <input class="peer absolute w-full h-full inset-0 opacity-0" type="radio" id="icon_10" value="🎓" v-model="listIcon" />
            <label class="transition-colors w-12 h-12 leading-[6rem] rounded-full text-center absolute" :class="iconTheme" for="icon_10"><p class="text-3xl leading-[3rem]">🎓</p></label>
          </div>
        </div>
    
        <label class="mt-10 font-semibold text-theme-dark" for="description">Description</label>
        <textarea name="description" v-model="newDescription" class="w-full h-24 pt-3.5 pl-4 border border-theme-medium rounded-md" placeholder="i.e. “Wish list for my birthday on the 27th”"></textarea>
        <button class="w-40 transition-colors bg-theme-medium hover:bg-theme-dark text-white px-3 py-2 rounded-md text-lg font-medium my-4">Create list</button>
      </form>
    </div>
  </div>
</template>

<script setup>
  const router = useRouter();
  const client = useSupabaseClient()
  const supabaseAuth = useSupabaseAuthClient()
  const user = (await supabaseAuth.auth.getUser()).data.user


  const newTitle = ref("")
  const newDescription = ref("")

  const colorTheme = ref('green')

  const listIcon = ref('🎁')

  const iconTheme = computed(() => ({
  'green-theme': colorTheme.value === 'green',
  'purple-theme': colorTheme.value === 'purple',
  'berry-theme': colorTheme.value === 'berry',
}))

  // async function handleListSubmit() {
  //   await $fetch('http://localhost:3000/lists', {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     method: 'POST',
  //     body: {
  //       title: newTitle.value,
  //       description: newDescription.value,
  //       colorTheme: colorTheme.value,
  //       listIcon: listIcon.value,
  //     }
  //   })
  //   router.push('lists')
  // }

  async function handleListSubmit() {
  const { error } = await client.from('lists')
    .insert({
      title: newTitle.value,
      description: newDescription.value,
      color_theme: colorTheme.value,
      list_icon: listIcon.value,
      owner_id: user.id,
    })
}

console.log(user.id)


</script>

<style scoped>

</style>