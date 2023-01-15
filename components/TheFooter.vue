<template>
    <div class="mt-32 bg-white">
        <footer class="container mx-auto py-8">
            <div class="flex justify-between items-end mt-8">
                <NuxtLink to="/" class="text-3xl text-theme-medium font-bold">you wish.</NuxtLink>
                <ul class="flex gap-10">
                    <li><NuxtLink class="text-sm text-gray-400" to="/">About</NuxtLink></li>
                    <li><NuxtLink class="text-sm text-gray-400" to="/">Privacy Policy</NuxtLink></li>
                </ul>
            </div>
            <div class="mt-12">
                <hr />
            </div>
            <div class="mt-16 mb-6 flex gap-12 justify-center items-start">
                <p class="text-sm font-medium text-gray-400">Created by <a href="https://www.linkedin.com/in/juliadyrdal/" target="_blank" class="transition-all underline hover:text-theme-medium">Julia Dyrdal</a></p>
                <ul>
                    <li><a href="https://github.com/juliadyrdal" target="_blank"><nuxt-icon name="github" class="transition-all duration-300 text-gray-400 hover:text-theme-medium text-xl" /></a></li>
                </ul>
            </div>
        </footer>
    </div>
</template>

<script setup>

</script>

<style scoped>

</style>