export const useGetLists = () => {
    const listsStore = useListsStore()
    const { data } = await supabase.from('lists').select().eq('owner_id', userStore.session.user.id).order('created_at', { ascending: false })
    listsStore.lists = data
}