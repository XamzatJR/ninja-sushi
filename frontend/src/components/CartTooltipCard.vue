<script setup lang="ts">
import { ref } from 'vue'
import CounterBtn from './UI/CounterBtn.vue'
import IconClose from './icons/IconClose.vue'

const count = ref(1)

function handleCountChanged(newCount: number) {
  count.value = newCount
}
</script>

<template>
  <div class="py-3 pl-6 pr-4 relative flex items-center bg-ninja-50 rounded-xl">
    <img class="max-w-[58px] max-h-[47px]" src="/tooltipcard-img.png" alt="">
    <div class="ml-2.5">
      <b class="font-bold text-base text-ninja-70">Сет #1</b>
      <div class="font-medium text-sm text-ninja-400">
        Вес: 40 г
      </div>
    </div>
    <div class="ml-auto flex items-center gap-4">
      <div class="font-medium text-sm text-ninja-70">
        240 грн
      </div>
      <CounterBtn btn-class="tooltip-card" @count-changed="handleCountChanged" :count="count" />
    </div>
    <button class="group flex items-center justify-center absolute -left-3 p-1 bg-white rounded-lg hover:bg-ninja-400 active:bg-red-600">
      <IconClose class="fill-ninja-70 group-active:fill-white" />
    </button>
  </div>
</template>

<style scoped>

</style>
