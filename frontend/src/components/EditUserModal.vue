<script setup lang="ts">
import IconClose from './icons/IconClose.vue';


</script>

<template>
  <section class="bg-ninja-70/40 fixed top-0 left-0 w-full h-full flex items-center justify-center">
    <div class="p-6 bg-white rounded-xl flex flex-col items-center">
      <button class="p-1.5 bg-ninja-50 rounded-lg cursor-pointer self-end">
        <IconClose />
      </button>
      <div class="mt-4 mb-6 text-center">
        <h3 class="font-bold text-ninja-70 text-3.5xl mb-2">Личные данные</h3>
        <p class="text-base font-medium text-ninja-100">
          Пользователь с таким номером телефона не <br> обнаружен. Пожалуйста введите ваши данные
        </p>
      </div>
      <form action="#" class="flex flex-col items-start gap-4 w-full">
        <fieldset class="flex flex-col items-start gap-1 w-full">
          <label class="text-sm text-ninja-60" for="change-name">Имя</label>
          <input id="change-name" type="text" class="w-full py-3 px-4 bg-ninja-50 rounded-xl text-ninja-70 border-none" placeholder="Ашот">
        </fieldset>
        <fieldset class="flex flex-col items-start gap-1 w-full">
          <label class="text-sm text-ninja-60" for="change-email">Email</label>
          <input id="change-email" type="email" class="w-full py-3 px-4 bg-ninja-50 rounded-xl text-ninja-70 border-none" placeholder="lifetv277@gmail.com">  
        </fieldset>
        <button class="w-full py-4 px-auto rounded-xl bg-ninja-250 text-base font-medium text-white" type="submit">Сохранить изменения</button>
        <button class="w-full py-4 px-auto rounded-xl bg-ninja-50 text-base font-medium text-ninja-250" type="reset">Отменить</button>
      </form>
    </div>
  </section>
</template>

<style scoped>

</style>
