<script setup lang="ts">
import ProductCard from './ProductCard.vue'
</script>

<template>
  <section class="my-12 sm:my-32 container p-4">
    <div class="flex justify-between mb-5 sm:mb-8">
      <h2 class="text-2xl lg:text-5xl font-bold text-ninja-70">
        Суши
      </h2>
      <button class="px-3 py-1.5 rounded-lg lg:px-6 lg:py-3 text-ninja-250 bg-white lg:rounded-xl lg:text-base font-medium text-xs">
        Смотреть все
      </button>
    </div>
    <div class="flex flex-wrap gap-5">
      <ProductCard v-for="i in 8" :key="i" />
    </div>
  </section>
</template>

<style scoped>

</style>
