<template>
    <div>
      <div v-on:mouseover="itemHover" v-on:mouseleave="itemLeave" :class="{ 'bg-theme-lighter': isHovering }" class="py-4 px-6 rounded-md mb-2 grid grid-cols-12 items-center gap-8 mx-2 lg:mx-10 xl:mx-10 transition-all duration-300">
        <!-- <p class="col-span-9 truncate" :class="{ reserved: item.reserved.isReserved, purchased: item.purchased.isPurchased }">{{ item.link }}</p> -->
        <div class="col-span-8" :class="{ reserved: isReserved }">
          <p class="truncate text-sm text-gray-700">{{ props.item.link }}</p>
          <p class="">{{ props.item.comment }}</p>
        </div>
        <div v-if="isHovering" class="pt-1 col-span-4 flex justify-between">
          <ul class="flex gap-5 items-center">
            <!-- <li v-if="!isReserved"><button @click="submitReservation"><BookmarkIcon class="h-6 w-6 text-theme-dark hover:text-red-600 transition-colors" /></button></li> -->
            <li v-if="!isReserved"><button @click="submitReservation">Reserve this item</button></li>
            <li v-else-if="reservedBy === userStore.session.user.id"><button @click="submitUnreservation">Undo reservation</button></li>
            <li v-else><button>This item has been reserved</button></li>
          </ul>
          <button class="font-medium text-theme-dark hover:underline"><a class="flex gap-2 items-center" :href="item.link" target="_blank" rel="noopener noreferrer">View <ArrowTopRightOnSquareIcon class="h-6 w-6 text-theme-dark"/></a></button>
        </div>
      </div>
    </div>
</template>

<script setup>
import { BookmarkIcon } from "@heroicons/vue/24/outline/index.js"
import { ArrowTopRightOnSquareIcon } from "@heroicons/vue/24/outline/index.js"
import { useUserStore } from '../stores/UserStore'

const supabase = useSupabaseClient()
const supabaseAuth = useSupabaseAuthClient()

// initialize userStore
const userStore = useUserStore()

 const props = defineProps(['reservedItems', 'item'])


const isHovering = ref(false)

function itemHover() {
  isHovering.value = true
}

function itemLeave() {
  isHovering.value = false
}

// add error message
// insert new reservation into reservations table
async function submitReservation() {
    const { error } = await supabase.from('items')
      .update({
        reserved_by: userStore.session.user.id
      }).eq('id', props.item.id)
}

// remove item reservation
async function submitUnreservation() {
  const { error } = await supabase.from('items')
    .update({
      reserved_by: null
    }).eq('id', props.item.id)
}

const isReserved = ref(false)
const reservedBy = ref('')

const currentReservations = () => {
  props.reservedItems.forEach(element => {
    if (element.id === props.item.id && element.reserved_by) {
      isReserved.value = true
      reservedBy.value = element.reserved_by
    }
  }); 
}

currentReservations()

console.log(isReserved.value)
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