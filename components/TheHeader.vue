<script setup>
  import { useUserStore } from '../stores/UserStore'
  import { useProfileStore } from '../stores/ProfileStore'
  import { useInviteStore } from '../stores/InviteStore'
  import { useListsStore } from '~~/stores/ListsStore'
  import { PlusIcon } from "@heroicons/vue/24/solid/index.js"
  import { BellIcon } from "@heroicons/vue/24/outline/index.js"

  const client = useSupabaseAuthClient()

  // initialize stores
  const userStore = useUserStore()
  const profileStore = useProfileStore()
  const inviteStore = useInviteStore()
  const listsStore = useListsStore()


  async function signOutUser() {
    await client.auth.signOut()
  }

  const logout = async () => {
    await signOutUser()
    // reset states on logout
    userStore.session = null
    profileStore.profile = {}
    listsStore.lists = []
    inviteStore.invites = []
    inviteStore.lists = []
    await navigateTo('/login')
  }

</script>

<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex justify-between items-center">
          <div>
            <NuxtLink to="/" class="text-3xl font-bold">you wish.</NuxtLink>
          </div>
          <ul v-if="userStore.session" class="flex gap-7 text-gray-700 text-nav">
              <li class=""><NuxtLink to="/lists" class="px-[1rem] py-[.5rem]">Wish lists</NuxtLink></li>
              <li class=""><NuxtLink to="/gifts" class="px-[1rem] py-[.5rem]">Gift lists</NuxtLink></li>
          </ul>
          <ul class="flex gap-6 items-center">
            <li v-if="userStore.session" class="nav-btn"><NuxtLink to="/create" class="transition-colors flex items-center gap-2 text-[#364870] hover:bg-[#CFD5E2] border border-[#364870] hover:border-[#CFD5E2] rounded-md px-4 py-2 pr-6"><PlusIcon class="h-6 w-6 text-[#364870]"/>Create</NuxtLink></li>
            <!-- <li v-if="userStore.session"><button><BellIcon class="h-6 w-6 text-gray-500"/></button></li>
            <li v-if="userStore.session"><button class="transition-colors uppercase bg-gray-100 hover:bg-[#CFD5E2] py-3 px-3.5 rounded-full"><span class="mr-[1px]">j</span>d<span></span></button></li> -->
            <li><button v-if="userStore.session" @click="logout" class="transition-colors uppercase bg-gray-100 hover:bg-[#CFD5E2] py-3 px-3.5">Log out</button></li>
            <li><NuxtLink to="/login" v-if="!userStore.session" class="transition-colors uppercase border border-theme-dark rounded-sm text-theme-dark hover:bg-[#CFD5E2] py-3 px-3.5">Log in</NuxtLink></li>
            <li><NuxtLink to="/signup" v-if="!userStore.session" class="transition-colors uppercase bg-gray-100 hover:bg-[#CFD5E2] py-3 px-3.5">Create account</NuxtLink></li>
          </ul>
      </nav>
    </header>
  </div>
</template>

<style>
  .text-nav .router-link-active {
    color: #364870;
    background-color: #CFD5E2;
    /* padding: .5rem 1rem; */
    border-radius: 12px;
    font-weight: 600;
  }

  .nav-btn .router-link-active {
    background-color: #CFD5E2;
    border: none;
  }
</style>