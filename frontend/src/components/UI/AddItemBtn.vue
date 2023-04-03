<script setup lang="ts">
import IconPlus from '@/components/icons/IconPlus.vue'
import IconMinus from '@/components/icons/IconMinus.vue'
import { ref } from 'vue';

let count = ref(0)

const incrementCount = () => {
    count.value++;
  };

  const decrementCount = () => {
    count.value--;
  };
</script>

<template>
  <div class="flex items-center gap-2">
    <button v-if="count < 1" @click="incrementCount" class="py-1.5 px-3.5 group sm:(px-6 py-2.5)bg-ninja-270 rounded-xl hover:bg-ninja-250">
    <IconPlus class="fill-ninja-250 group-hover:fill-white" />
    </button>
    <template v-else>
      <button @click="decrementCount" class="p-1.5 rounded-xl bg-ninja-270 hover:bg-ninja-250 group">
        <IconMinus class="fill-ninja-250 group-hover:fill-white" />      
      </button>
      <strong class="font-semibold text-base text-ninja-70">{{ count }}</strong>
      <button @click="incrementCount" class="p-1.5 rounded-xl bg-ninja-270 hover:bg-ninja-250 group">
        <IconPlus class="fill-ninja-250 group-hover:fill-white"  />
      </button>
    </template>
  </div>
</template>

<style scoped>

</style>
