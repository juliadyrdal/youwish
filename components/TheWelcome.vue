<script setup>
    import { useProfileStore } from '~~/stores/ProfileStore';
    import { useUserStore } from '../stores/UserStore'

    import { storeToRefs } from 'pinia'

    // initialize userStore
    const profileStore = useProfileStore()
    const userStore = useUserStore()

    const { first_name } = storeToRefs(profileStore)
</script>

<template>
    <div>
        <h1 class="mb-8 text-3xl font-bold"><span class="mr-3">🤩</span> Welcome, {{ profileStore.profile.first_name }}!</h1>
        <p class="w-9/12 text-lg">Lorem ipsum dolor sit amet consectetur. Morbi sed in fermentum leo. Gravida risus commodo dui accumsan dui. Maecenas elit eu sollicitudin amet ut.</p>
    </div>
</template>


<style lang="scss" scoped>

</style>