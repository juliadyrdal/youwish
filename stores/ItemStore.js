import { defineStore } from 'pinia'

export const useItemStore = defineStore('itemStore', {
    state: () => ({
        items: []
    }),
    persist: true,
})