<script setup lang="ts">
import IconPlus from '@/components/icons/IconPlus.vue'
import IconMinus from '@/components/icons/IconMinus.vue'

const props = defineProps<{ count: number }>()
const emit = defineEmits<{
  (e: 'count-changed', value: number): void
}>()

const incrementCount = () => {
  emit('count-changed', props.count + 1)
}

const decrementCount = () => {
  emit('count-changed', props.count - 1)
}
</script>

<template>
  <div class="flex items-center gap-2">
    <button v-if="count < 1" class="group sm:(px-6 py-2.5) py-1.5 px-3.5  bg-ninja-270 rounded-xl hover:bg-ninja-250" @click="incrementCount">
      <IconPlus class="fill-ninja-250 group-hover:fill-white" />
    </button>
    <template v-else>
      <button class="p-1.5 rounded-xl bg-ninja-270 hover:bg-ninja-250 group" @click="decrementCount">
        <IconMinus class="fill-ninja-250 group-hover:fill-white" />
      </button>
      <strong class="font-semibold text-base text-ninja-70">{{ count }}</strong>
      <button class="p-1.5 rounded-xl bg-ninja-270 hover:bg-ninja-250 group" @click="incrementCount">
        <IconPlus class="fill-ninja-250 group-hover:fill-white" />
      </button>
    </template>
  </div>
</template>

<style scoped>

</style>
