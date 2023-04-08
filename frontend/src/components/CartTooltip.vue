<template>
    <section class="p-7 bg-white rounded-xl absolute right-0 top-full mt-4 w-2/5 shadow-lg">
        <div class="flex items-center justify-between w-full">
            <h4 class="text-ninja-70 font-bold text-2.7xl">
                Ваш заказ
            </h4>
            <button @click="() => $emit('closeTooltip', false)" class="p-1.5 bg-ninja-50 rounded-lg">
                <IconClose class="fill-ninja-70" />
            </button>
        </div>
    </section>
</template>

<script setup lang="ts">
import IconClose from './icons/IconClose.vue';

defineEmits<{
    (e: 'closeTooltip', value: false): void
}>()

</script>

<style scoped>

</style>