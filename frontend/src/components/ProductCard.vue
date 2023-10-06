<script setup lang="ts">
import { ref } from 'vue'
import CounterBtn from './UI/CounterBtn.vue'

export interface Dish {
  dish_id: number
  food_type_id: number
  img: string
  ingredients: string[] | null
  name: string
  price: number | null
  quantity: number | null
  volume: number | null
}

const product = defineProps<Dish>()
const count = ref(0)

function handleCountChanged(newCount: number) {
  count.value = newCount
}
function addToFavorite() {
  // add to favorite db
  // product.value.isFavorite = !product.value.isFavorite
}
</script>

<template>
  <article class="p-3 flex w-full sm:(p-6 flex-col gap-4 w-[calc(25%-24px)]) rounded-xl hover:shadow-lg bg-white">
    <div class="relative">
      <img :src="product.img" loading="lazy" class="w-24 h-24 cursor-pointer sm:(w-full h-[245px])" :alt="product.name">
      <!-- <div class="absolute top-0 left-0 flex items-center gap-1">
        <span
          v-for="status in product.status"
          :key="status" class="py-0.5 px-2 font-medium text-sm rounded-lg sm:(py-1 px-2 text-base)" :class="status === 'Hit' ? 'bg-ninja-470 text-ninja-400' : 'bg-ninja-270 text-ninja-250'"
        >
          {{ status }}
        </span>
      </div> -->
    </div>
    <div class="flex flex-col gap-1.5">
      <div class="text-ninja-70 font-bold text-base sm:text-2.7xl cursor-pointer">
        {{ product.name }}
      </div>
      <div>
        <div v-if="product.quantity" class="text-ninja-400 font-medium text-xs sm:text-lg">
          Вес: {{ product.quantity }} г
        </div>
        <div v-else-if="product.volume" class="text-ninja-400 font-medium text-xs sm:text-lg">
          Объем: {{ product.volume }} л
        </div>
        <div v-if="product.ingredients" class="text-ninja-100 text-xs sm:text-base font-normal max-w-60 sm:max-w-72">
          {{ product?.ingredients.join(',') }}
        </div>
      </div>
      <div class="flex justify-between items-center">
        <strong class="text-ninja-70 font-bold text-2xl sm:text-[2.5rem]">
          {{ product.price }} <span class="text-ninja-100 text-2xl">руб</span>
        </strong>
        <AddFavouriteBtn v-show="count < 1" :is-favorite="true" @click="addToFavorite" />
        <CounterBtn btn-class="card" :count="count" @count-changed="handleCountChanged" />
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>

</style>
