<template>
    <div class="container bg-white py-12 my-8 rounded-xl">
        <div class="flex flex-col items-center">
            <img src="/error-img.png" alt="404 error page">
            <div class="text-center">
                <h2 class="font-bold text-ninja-70 text-3xl">Ошибка 404. <br>Что-то пошло не так.</h2 >
                <div class="text-ninja-100 text-base mt-4 mb-8">Страница, которую вы ищите, временно <br> не доступна или ее еже нет</div>
            </div>
            <router-link to="/" class="py-4 px-28 bg-ninja-250 text-white font-medium text-base rounded-xl">Вернуться на главную</router-link>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>