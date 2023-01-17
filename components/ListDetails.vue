<template>
    <div class="mb-14 flex flex-col gap-6">
      <div class="flex gap-5 justify-between px-8 lg:px-12 xl:px-16">
        <h1 v-if="!isEditTitleActive" class="text-3xl font-bold">{{ list.title }}</h1>
        <button v-if="!isEditTitleActive" @click="editTitle" class=""><PencilIcon class="h-6 w-6 text-theme-dark"/></button>
      </div>
      <!-- <form v-if="isEditTitleActive" @submit.prevent="handleTitleSubmit">
        <input type="text" v-model="updatedTitle" class="w-full h-12 pl-6">
        <button class="bg-theme-dark px-3 py-2 rounded-md text-sm text-white my-4">Save</button>
     </form> -->
     <div class="flex gap-5 justify-between px-8 lg:px-12 xl:px-16">
       <p v-if="!isEditDescActive" class="text-sm lg:text-base">{{ list.description }}</p>
       <button v-if="!isEditDescActive" @click="editDesc" class=""><PencilIcon class="h-6 w-6 text-theme-dark"/></button>
     </div>
     <!-- <form v-if="isEditDescActive" @submit.prevent="handleDescSubmit">
        <input type="text" v-model="updatedDescription" class="w-full h-12 pl-6">
        <button class="bg-theme-dark px-3 py-2 rounded-md text-sm text-white my-4">Save</button>
     </form> -->
     <div class="mt-10 pb-10 flex gap-6 border-b border-theme-light mx-8 lg:mx-12 xl:mx-16">
       <button @click="openModal" class="transition-colors flex items-center gap-2 text-white bg-theme-medium hover:bg-theme-dark border border-theme-medium hover:border-theme-dark rounded-md px-4 py-2 pr-6"><BookmarkIcon class="h-6 w-6 text-white"/>Add item</button>
       <button @click="openInviteModal" class="transition-colors flex items-center gap-2 text-[#364870] hover:bg-[#CFD5E2] border border-[#364870] hover:border-[#CFD5E2] rounded-md px-4 py-2 pr-6"><UserPlusIcon class="h-6 w-6 text-[#364870]"/>Invite members</button>
     </div>
     <div class="mt-16">
      <h2 class="mb-8 font-semibold text-theme-medium mx-2 lg:mx-10 xl:mx-16">My wishes</h2>
          <div class="flex flex-col gap-2">
          <div class="" v-for="item in items" :key="item.id">
            <ListItem :item="item" />  
          </div> 
        </div>
     </div>
     <div> 
      <AddItem @handle-item-submit="submitItem" @close-modal="closeAddItem" v-if="isModalOpen" :list="list" />
     </div>
     <div> 
      <AddInvitee @handle-invite-submit="submitInvite" @close-modal="closeAddInvitee" v-if="isInviteModalOpen" :list="list" />
     </div>
    </div>
</template>

<script setup>
  import { PencilIcon } from "@heroicons/vue/24/outline/index.js"
  import { UserPlusIcon } from "@heroicons/vue/24/solid/index.js"
  import { BookmarkIcon } from "@heroicons/vue/24/solid/index.js"
  const { list } = defineProps(['list'])

  const isEditDescActive = ref(false)
  const isEditTitleActive = ref(false)

  // const updatedDescription = ref(list.description)
  // const updatedTitle = ref(list.title)

  // function editDesc() {
  //   isEditDescActive.value = true
  // }

  // function editTitle() {
  //   isEditTitleActive.value = true
  // }

  const isModalOpen = ref(false)

  function openModal() {
    isModalOpen.value = true
  }

  function closeAddItem() {
    isModalOpen.value = false
  }

  const isInviteModalOpen = ref(false)

  function openInviteModal() {
    isInviteModalOpen.value = true
  }

  function closeAddInvitee() {
    isInviteModalOpen.value = false
  }

  // async function handleDescSubmit() {
  //   await $fetch('http://localhost:3000/lists/' + list.id, {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     method: 'PATCH',
  //     body: {
  //       description: updatedDescription.value  
  //     }
  //   } )
  // }

  // async function handleTitleSubmit() {
  //   await $fetch('http://localhost:3000/lists/' + list.id, {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     method: 'PATCH',
  //     body: {
  //       title: updatedTitle.value  
  //     }
  //   })
  // }

  // // fetch items from items table
  const client = useSupabaseClient()

  const { data: items } = await useAsyncData('items', async () => {
    const { data } = await client.from('items').select().eq('list_id', list.id).order('created_at')

    return data
  })


  // insert new item into items table
  async function submitItem(newLink, newComment) {
    // wrap in if statement to prevent empty items
    if (newLink.value && newComment.value !== "") {
    // before request: close addItem modal
    isInviteModalOpen.value = false
    // insert new item to items table
    const { error } = await client.from('items')
      .insert({
        link: newLink.value,
        comment: newComment.value,
        list_id: list.id,
        owner_id: list.owner_id,
      })
    }
  refreshNuxtData('items')
}

// const { data: profiles} = await useAsyncData('profiles', async () => {
//   const { data } = await supabase.from('profiles').select('first_name').eq('id', user.value.id)

//   return data
// })

// get user id of submitted email
async function getUserId(email) {
  const { data: newUserId} = await useAsyncData('profiles', async () => {
    const { data } = await client.from('profiles').select('id').eq('email', email.value).limit(1).single()
    return data
  })
  return newUserId
}

// insert new invitee into list table
async function submitInvite(newEmail) {
    // wrap in if statement to prevent empty items
    if (newEmail.value !== "") {
    // before request: close addInvitee modal
    isInviteModalOpen.value = false
    // console.log(userId[0].id)
    const userId = await getUserId(newEmail)
    console.log(userId.value.id)
    // insert new item to items table
    const { error } = await client.from('invites')
      .insert({
        invitee_id: userId.value.id,
        list_id: list.id,
      })
    }
}
</script>

<style scoped>
  
</style>