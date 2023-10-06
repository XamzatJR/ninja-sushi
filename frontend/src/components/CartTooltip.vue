<script setup lang="ts">
import CartTooltipCard from './CartTooltipCard.vue'
import IconClose from './icons/IconClose.vue'

defineEmits<{
  (e: 'closeTooltip'): void
}>()
</script>

<template>
  <section class="p-7 z-10 bg-white rounded-xl absolute right-0 top-full mt-4 w-2/5 shadow-lg">
    <div class="flex items-center justify-between w-full">
      <h4 class="text-ninja-70 font-bold text-2.7xl">
        Ваш заказ
      </h4>
      <button
        class="group p-1.5 bg-ninja-50 rounded-lg flex items-center justify-center hover:bg-ninja-400 active:bg-red-600"
        @click="() => $emit('closeTooltip', false)"
      >
        <IconClose class="fill-ninja-70 group-active:fill-white" />
      </button>
    </div>
    <div class="mt-6 flex flex-col gap-3">
      <CartTooltipCard v-for="card in 3" />
    </div>
  </section>
</template>

<style scoped>

</style>
