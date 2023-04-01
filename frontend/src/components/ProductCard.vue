<script setup lang="ts">
import AddFavouriteBtn from './UI/AddFavouriteBtn.vue'
import AddItemBtn from './UI/AddItemBtn.vue'

interface ProductProp {
  img: string
  title: string
  content: string[]
  price: number
  weight: number
  status?: string[] | undefined
}
const product: ProductProp = {
  img: '/sushi-img.png',
  title: 'Гункан креветка',
  weight: 40,
  price: 190,
  content: ['Нори', 'рис', 'японский майонез', 'бальзамик', 'трюфельная сальса', 'кунжутное масло'],
  status: ['New', 'Hit'],
}
// let props = withDefaults(defineProps<ProductProp>(), {})
</script>

<template>
  <div>
    <div class="p-3 flex sm:(p-6 flex-col gap-4) rounded-xl hover:shadow-lg bg-white">
      <div class="relative">
        <img :src="product.img" class="w-24 h-24 sm:w-72 max-w-full sm:h-auto" :alt="product.title">
        <div class="absolute top-0 left-0 flex items-center gap-1">
          <span
            v-for="status in product.status"
            :key="status" class="py-0.5 px-2 font-medium text-sm rounded-lg sm:(py-1 px-2 text-base)" :class="status === 'Hit' ? 'bg-ninja-470 text-ninja-400' : 'bg-ninja-270 text-ninja-250'"
          >
            {{ status }}
          </span>
        </div>
      </div>
      <div class="flex flex-col gap-1.5">
        <div class="text-ninja-70 font-bold text-base sm:text-2.7xl">
          {{ product.title }}
        </div>
        <div>
          <div class="text-ninja-400 font-medium text-xs sm:text-lg">
            Вес: {{ product.weight }} г
          </div>
          <div class="text-ninja-100 text-xs sm:text-base font-normal max-w-60 sm:max-w-72">
            {{ product.content.join(', ') }}
          </div>
        </div>
        <div class="flex justify-between items-center">
          <strong class="text-ninja-70 font-bold text-2xl sm:text-[2.5rem]">
            {{ product.price }} <span class="text-ninja-100 text-2xl">грн</span>
          </strong>
          <AddFavouriteBtn />
          <AddItemBtn />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
