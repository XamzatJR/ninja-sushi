<script setup lang="ts">

</script>

<template>
  <div class="container my-11 px-4 sm:(my-8 px-0)">
    <div class="w-full flex flex-col items-center bg-white py-12 rounded-xl">
      <img src="/error-img.png" alt="404 error page">
      <div class="text-center mb-6 sm:mb-8">
        <h2 class="font-bold text-ninja-70 text-xl sm:text-3xl">
          Ошибка 404. <br>Что-то пошло не так.
        </h2>
        <div class="text-ninja-100 <sm:hidden text-base mt-4">
          Страница, которую вы ищите, временно <br> не доступна или ее еже нет
        </div>
      </div>
      <router-link to="/" class="py-4 px-15 sm:px-28 bg-ninja-250 text-white font-medium text-base rounded-xl">
        Вернуться на главную
      </router-link>
    </div>
  </div>
</template>

<style scoped>

</style>
