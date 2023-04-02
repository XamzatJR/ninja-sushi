<script setup lang="ts">
import IconHeart from '@/components/icons/IconHeart.vue'
defineProps<{
  isFavorite: boolean
}>()
</script>

<template>
  <button 
  class="group p-2 sm:p-3 rounded-xl bg-ninja-50 ml-auto mr-3" 
  :class="{'bg-ninja-400': isFavorite }">
    <IconHeart 
    class="fill-ninja-50 stroke-ninja-400" 
    :class="{'fill-white stroke-white': isFavorite }" />
  </button>
</template>

<style scoped>

</style>
