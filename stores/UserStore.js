import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', {
    state: () => ({
        session: null
    }),
    persist: true,
})