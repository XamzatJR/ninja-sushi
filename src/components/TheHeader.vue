<script setup lang="ts">
import AppLogo from '@/UI/AppLogo.vue'
import IconBell from '@/assets/icons/IconBell.vue'
import IconUser from '@/assets/icons/IconUser.vue'
import IconCard from '@/assets/icons/IconCard.vue'
import IconHeart from '@/assets/icons/IconHeart.vue'
import IconPhone from '@/assets/icons/IconPhone.vue'
import IconMenu from '@/assets/icons/IconMenu.vue'
</script>

<template>
  <header class="bg-white w-full rounded-xl">
    <div class="container mx-auto px-4 <sm:px-2 h-full flex items-center justify-between">
      <AppLogo />
      <nav class="<lg:hidden flex justify-between flex-grow-[0.5] items-center">
        <router-link to="/" class="tab-item">
          Главная
        </router-link>
        <router-link to="" class="tab-item">
          Доставка
        </router-link>
        <router-link to="/about" class="tab-item">
          О нас
        </router-link>
        <router-link to="" class="tab-item">
          Новости
        </router-link>
        <a href="tel:+38-097-699-34-38" class="tab-item <xl:hidden flex items-center gap-3">
          <IconPhone />
          +38 097 699 34 38
        </a>
      </nav>
      <div class="flex justify-between gap-2 sm:gap-4  lg:gap-3 py-2 lg:py-3">
        <button class="group header-btn header-btn_mdfs">
          <IconBell class="<sm:(w-5 h-5) fill-ninja-100 group-hover:fill-ninja-400 group-active:fill-white" />
        </button>
        <button class="group header-btn header-btn_mdfs">
          <IconHeart class="<sm:(w-5 h-5) fill-ninja-100 group-hover:fill-ninja-400 group-active:fill-white" />
        </button>
        <button class="group header-btn header-btn_mdfs">
          <IconUser class="<sm:(w-5 h-5) fill-ninja-100 group-hover:fill-ninja-400 group-active:fill-white" />
        </button>
        <button class="!<lg:hidden group header-btn header-btn_mdfs">
          <IconCard class="<sm:(w-5 h-5) fill-ninja-100 group-hover:fill-ninja-400 group-active:fill-white" />
          <div class="font-medium text-base">
            Корзина
          </div>
        </button>
        <button class="!lg:hidden space-y-2 bg-ninja-50 header-btn border-ninja-50">
          <IconMenu class="<sm:(w-5 h-5) fill-ninja-100 group-hover:fill-ninja-400" />
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.tab-item {
  @apply py-5 px-4 active:(bg-ninja-400/15 rounded-xl text-ninja-400) hover:text-ninja-400
}
.header-btn {
  @apply p-2.5 rounded-lg lg:(p-4) sm:rounded-xl border border-ninja-300 flex justify-center items-center gap-2 cursor-pointer shadow-sm
}
.header-btn_mdfs {
    @apply hover:(bg-ninja-200 border-ninja-200 text-ninja-400 fill-white) active:(bg-ninja-400 text-white border-ninja-400 fill-ninja-400)
}
</style>
