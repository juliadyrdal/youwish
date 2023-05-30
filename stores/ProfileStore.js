import { defineStore } from 'pinia'

export const useProfileStore = defineStore('profileStore', {
    state: () => ({
        profile: {}
    }),
    persist: true,
})