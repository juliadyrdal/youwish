import { useUserStore } from '../stores/UserStore'

export default defineNuxtRouteMiddleware((to) => {
    // initialize userStore
    const userStore = useUserStore()

    if (!userStore.session.user.id && to.path === '/lists') {
        navigateTo('/')
    } else if (!userStore.session.user.id && to.path === '/gifts') {
        navigateTo('/')
    } else if (!userStore.session.user.id && to.path === '/create') {
        navigateTo('/')
    } 
})