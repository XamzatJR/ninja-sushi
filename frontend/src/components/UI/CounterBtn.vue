<script setup lang="ts">
import IconPlus from '@/components/icons/IconPlus.vue'
import IconMinus from '@/components/icons/IconMinus.vue'

const props = defineProps<{ count: number; btnClass: 'card' | 'tooltip-card' }>()
const emit = defineEmits<{
  (e: 'countChanged', value: number): void
}>()

const incrementCount = () => {
  emit('countChanged', props.count + 1)
}

const decrementCount = () => {
  emit('countChanged', props.count - 1)
}
</script>

<template>
  <div class="flex items-center gap-2">
    <button v-if="count < 1" class="group sm:(px-6 py-2.5) py-1.5 px-3.5  bg-ninja-270 rounded-xl hover:bg-ninja-250" @click="incrementCount">
      <IconPlus class="fill-ninja-250 group-hover:fill-white" />
    </button>
    <template v-else>
      <button class="group flex items-center justify-center" :class="[btnClass]" @click="decrementCount">
        <IconMinus :class="[`${btnClass}-svg`]" />
      </button>
      <strong class="font-semibold text-base text-ninja-70">{{ count }}</strong>
      <button class="group flex items-center justify-center" :class="[btnClass]" @click="incrementCount">
        <IconPlus :class="[`${btnClass}-svg`]" />
      </button>
    </template>
  </div>
</template>

<style scoped>
.card {
  @apply p-1.5 rounded-xl bg-ninja-270 hover:bg-ninja-250
}
.card-svg {
  @apply fill-ninja-250 group-hover:fill-white
}
.tooltip-card {
  @apply p-1.5 bg-white rounded-lg hover:bg-ninja-400 active:bg-red-600
}
.tooltip-card-svg {
  @apply w-[18px] h-[18px] fill-ninja-70 group-hover:fill-white
}
</style>
