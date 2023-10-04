<script setup lang="ts">
import IconClose from '@/components/icons/IconClose.vue'

defineProps<{ title: string }>()
defineEmits<{
  close: [value: boolean]
}>()
</script>

<template>
  <div
    class="fixed z-10 top-0 left-0 w-full h-full flex items-end justify-end md:(items-center justify-center) bg-ninja-70/40"
    @click.self="() => $emit('close', false)"
  >
    <section class="bg-white w-full flex flex-col gap-4 p-4 md:(p-6 max-w-sm rounded-xl) rounded-t-xl">
      <button
        class="p-1.5 bg-ninja-50 flex items-center justify-center rounded-lg self-end"
        @click="() => $emit('close', false)"
      >
        <IconClose class="fill-ninja-70" />
      </button>
      <h3 class="font-bold text-3.5xl text-ninja-70 text-center mb-2">
        {{ title }}
      </h3>

      <slot />
    </section>
  </div>
</template>

<style lang="scss" scoped>

</style>
