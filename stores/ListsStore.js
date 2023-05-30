import { defineStore } from 'pinia'

export const useListsStore = defineStore('ListsStore', {
    state: () => ({
        lists: []
    }),
    persist: true,
})