<script setup lang="ts">
import IconRoll from '@/components/icons/IconRoll.vue'
import IconSushi from '@/components/icons/IconSushi.vue'
import IconSet from '@/components/icons/IconSet.vue'
import IconBowl from '@/components/icons/IconBowl.vue'
import IconDrink from '@/components/icons/IconDrink.vue'
import IconSauce from '@/components/icons/IconSauce.vue'
</script>

<template>
  <ul class="mx-auto mt-4 mb-8 py-1.5 px-4 flex justify-between items-center bg-white rounded-xl w-max">
    <li class="w-[91px] py-1.5 cursor-pointer flex flex-col items-center justify-center group hover:(shadow-sm rounded-xl transition-shadow)">
      <IconRoll class="fill-ninja-60 group-hover:fill-ninja-400" />
      <div class="text-base font-medium text-ninja-70">
        Роллы
      </div>
    </li>
    <li class="w-[91px] py-1.5 cursor-pointer flex flex-col items-center justify-center group hover:(shadow-sm rounded-xl transition-shadow)">
      <IconSushi class="fill-ninja-60 group-hover:fill-ninja-400" />
      <div class="text-base font-medium text-ninja-70">
        Суши
      </div>
    </li>
    <li class="w-[91px] py-1.5 cursor-pointer flex flex-col items-center justify-center group hover:(shadow-sm rounded-xl transition-shadow)">
      <IconSet class="fill-ninja-60 group-hover:fill-ninja-400" />
      <div class="text-base font-medium text-ninja-70">
        Сеты
      </div>
    </li>
    <li class="w-[91px] py-1.5 cursor-pointer flex flex-col items-center justify-center group hover:(shadow-sm rounded-xl transition-shadow)">
      <IconBowl class="fill-ninja-60 group-hover:fill-ninja-400" />
      <div class="text-base font-medium text-ninja-70">
        Боулы
      </div>
    </li>
    <li class="w-[91px] py-1.5 cursor-pointer flex flex-col items-center justify-center group hover:(shadow-sm rounded-xl transition-shadow)">
      <IconDrink class="fill-ninja-60 group-hover:fill-ninja-400" />
      <div class="text-base font-medium text-ninja-70">
        Напитки
      </div>
    </li>
    <li class="w-[91px] py-1.5 cursor-pointer flex flex-col items-center justify-center group hover:(shadow-sm rounded-xl transition-shadow)">
      <IconSauce class="fill-ninja-60 group-hover:fill-ninja-400" />
      <div class="text-base font-medium text-ninja-70">
        Соусы
      </div>
    </li>
  </ul>
</template>

<style scoped>

</style>
