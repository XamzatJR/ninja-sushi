<template>
    <section class="flex-grow">
        <div class="flex justify-between items-center mb-6">
            <h2 class="font-bold text-5xl text-ninja-70">Адрес доставки</h2>
            <button class="flex items-center gap-2 py-4 px-6 bg-ninja-250 text-white font-medium text-base rounded-xl">
                Новый адрес<IconPlus class="fill-white w-6 h-6" />
            </button>
        </div>
        <div class="bg-white p-10 flex items-center gap-8 rounded-xl">
            <img src="/shipping-address.png" alt="Shipping address picture">
            <div class="">
                <div class="font-medium text-3.5xl text-ninja-70 mb-2">У вас нет<br>сохраненных адресов</div>
                <p class="text-ninja-100 text-sm">Переходите в интересующую вас категорию<br>и сделайте свой первый заказ и адрес сохранится автоматически</p>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import IconPlus from '@/components/icons/IconPlus.vue'

</script>

<style scoped>

</style>