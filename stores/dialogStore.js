import { defineStore } from 'pinia'

export const useDialogStore = defineStore('DialogStore', {
    state: () => ({
        isEditActive: false
    })
})