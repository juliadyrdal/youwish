import { defineStore } from 'pinia'

export const useItemStore = defineStore('itemStore', {
    state: () => ({
        items: [],
        isEditActive: false
    }),
    persist: true,
})