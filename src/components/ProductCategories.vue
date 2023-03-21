<script setup lang="ts">
import IconRoll from '@/components/icons/IconRoll.vue'
import IconSushi from '@/components/icons/IconSushi.vue'
import IconSet from '@/components/icons/IconSet.vue'
import IconBowl from '@/components/icons/IconBowl.vue'
import IconDrink from '@/components/icons/IconDrink.vue'
import IconSauce from '@/components/icons/IconSauce.vue'
</script>

<template>
  <ul class="mx-auto my-2 sm:(mt-4 mb-8 px-4 bg-white) py-1.5 flex justify-between items-center rounded-xl w-max <sm:(w-full gap-1 overflow-x-scroll scrollbar-hide justify-start px-1)">
    <li class="<sm:(bg-white rounded-xl) sm:w-[91px] p-3 sm:py-1.5 cursor-pointer flex flex-col items-center justify-center group hover:(shadow-sm rounded-xl transition-shadow)">
      <IconRoll class="fill-ninja-60 group-hover:fill-ninja-400 <sm:(w-[2.375rem] h-[2.375rem])" />
      <div class="<sm:hidden text-base font-medium text-ninja-70">
        Роллы
      </div>
    </li>
    <li class="<sm:(bg-white rounded-xl) sm:w-[91px] p-3 sm:py-1.5 cursor-pointer flex flex-col items-center justify-center group hover:(shadow-sm rounded-xl transition-shadow)">
      <IconSushi class="fill-ninja-60 group-hover:fill-ninja-400 <sm:(w-[2.375rem] h-[2.375rem])" />
      <div class="<sm:hidden text-base font-medium text-ninja-70">
        Суши
      </div>
    </li>
    <li class="<sm:(bg-white rounded-xl) sm:w-[91px] p-3 sm:py-1.5 cursor-pointer flex flex-col items-center justify-center group hover:(shadow-sm rounded-xl transition-shadow)">
      <IconSet class="fill-ninja-60 group-hover:fill-ninja-400 <sm:(w-[2.375rem] h-[2.375rem])" />
      <div class="<sm:hidden text-base font-medium text-ninja-70">
        Сеты
      </div>
    </li>
    <li class="<sm:(bg-white rounded-xl) sm:w-[91px] p-3 sm:py-1.5 cursor-pointer flex flex-col items-center justify-center group hover:(shadow-sm rounded-xl transition-shadow)">
      <IconBowl class="fill-ninja-60 group-hover:fill-ninja-400 <sm:(w-[2.375rem] h-[2.375rem])" />
      <div class="<sm:hidden text-base font-medium text-ninja-70">
        Боулы
      </div>
    </li>
    <li class="<sm:(bg-white rounded-xl) sm:w-[91px] p-3 sm:py-1.5 cursor-pointer flex flex-col items-center justify-center group hover:(shadow-sm rounded-xl transition-shadow)">
      <IconDrink class="fill-ninja-60 group-hover:fill-ninja-400 <sm:(w-[2.375rem] h-[2.375rem])" />
      <div class="<sm:hidden text-base font-medium text-ninja-70">
        Напитки
      </div>
    </li>
    <li class="<sm:(bg-white rounded-xl) sm:w-[91px] p-3 sm:py-1.5 cursor-pointer flex flex-col items-center justify-center group hover:(shadow-sm rounded-xl transition-shadow)">
      <IconSauce class="fill-ninja-60 group-hover:fill-ninja-400 <sm:(w-[2.375rem] h-[2.375rem])" />
      <div class="<sm:hidden text-base font-medium text-ninja-70">
        Соусы
      </div>
    </li>
  </ul>
</template>

<style scoped>

</style>
