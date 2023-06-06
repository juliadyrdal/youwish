import { defineStore } from 'pinia'

export const useInviteStore = defineStore('InviteStore', {
    state: () => ({
        invites: [],
        lists: [],
    }),
    persist: true,
})