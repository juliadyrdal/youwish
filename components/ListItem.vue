<template>
    <div>
      <div v-on:mouseover="itemHover" v-on:mouseleave="itemLeave" :class="{ 'bg-theme-lighter': isHovering }" class="py-4 px-6 rounded-md mb-2 grid grid-cols-12 items-center gap-8 mx-2 lg:mx-10 xl:mx-10 transition-all duration-300">
        <!-- <p class="col-span-9 truncate" :class="{ reserved: item.reserved.isReserved, purchased: item.purchased.isPurchased }">{{ item.link }}</p> -->
        <div class="col-span-8">
          <p class="truncate text-sm text-gray-700">{{ item.link }}</p>
          <p class="">{{ item.comment }}</p>
        </div>
        <div v-if="isHovering" class="pt-1 col-span-4 flex justify-between">
          <ul class="flex gap-5 items-center">
            <li><button @click="editEvent"><PencilIcon class="h-6 w-6 text-theme-dark hover:text-theme-medium transition-colors"/></button></li>
            <li><button @click="openDeleteModal"><TrashIcon class="h-6 w-6 text-theme-dark hover:text-red-600 transition-colors"/></button></li>
          </ul>
          <button class="font-medium text-theme-dark hover:underline"><a class="flex gap-2 items-center" :href="item.link" target="_blank" rel="noopener noreferrer">View <ArrowTopRightOnSquareIcon class="h-6 w-6 text-theme-dark"/></a></button>
        </div>
      </div>
      <div v-if="isEditActive">
        <EditItem @handle-edit-submit="submitEdit" :item="item" />
      </div>
    </div>
</template>

<script setup>
import { PencilIcon } from "@heroicons/vue/24/solid/index.js"
import { TrashIcon } from "@heroicons/vue/24/solid/index.js"
import { ArrowTopRightOnSquareIcon } from "@heroicons/vue/24/outline/index.js"

const supabase = useSupabaseClient()

const { item } = defineProps(['item'])

const isHovering = ref(false)

function itemHover() {
  isHovering.value = true
}

function itemLeave() {
  isHovering.value = false
}

const isEditActive = ref(false)

function editEvent() {
  isEditActive.value = true
}

async function submitEdit(link, comment) {
      const { data, error } = await supabase.from('items').update({ link: link.value, comment: comment.value }).eq('id', item.id).select()
      if (data) {
        isEditActive.value = false
        refreshNuxtData()
      }
  }

const emit = defineEmits(["handleItemDelete"])

function openDeleteModal() {
  emit("handleItemDelete", item)
}
</script>

<style scoped>
  .reserved {
    color: #888;
  }
  .purchased {
    color: #888;
    text-decoration-line: line-through;
  }
</style>