<script setup lang="ts">
import IconFacebook from '@/components/icons/IconFacebook.vue'
import IconInsta from '@/components/icons/IconInsta.vue'
import AppLogo from '@/components/UI/AppLogo.vue'
</script>

<template>
  <footer class="bg-white w-full py-16 rounded-t-3xl">
    <div class="container mx-auto flex <lg:(flex-col-reverse items-center) justify-between items-start">
      <div class="flex flex-col justify-center lg:justify-start gap-4">
        <AppLogo class="justify-center" />
        <div class="flex gap-3.5 <lg:hidden">
          <a href="https://apps.apple.com/ua/app/ninja-sushi/id1437544985" target="_blank" rel="noopener noreferrer">
            <img src="/app-store.png" alt="App store">
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.ninjasushi.ninjasushi">
            <img src="/google-play.png" alt="Google play">
          </a>
        </div>
        <div class="text-ninja-60 text-sm font-medium">
          © Ninja Sushi. All rights reserved.
        </div>
      </div>
      <div class="lg:(flex justify-between flex-grow-[0.6]) grid grid-cols-2 grid-rows-2 gap-y-8">
        <nav class="flex flex-col gap-2">
          <div class="text-ninja-100 font-normal text-sm">
            Навигация:
          </div>
          <router-link to="/" class="footer-item">
            Главная
          </router-link>
          <router-link to="" class="footer-item">
            Меню
          </router-link>
          <router-link to="" class="footer-item">
            Доставка
          </router-link>
          <router-link to="" class="footer-item">
            Вакансии
          </router-link>
          <router-link to="" class="footer-item">
            Новости
          </router-link>
        </nav>
        <div class="flex flex-col gap-2">
          <div class="text-ninja-100 font-normal text-sm">
            Оформить заказ:
          </div>
          <a href="tel:+38-067-436-61-27" class="footer-item">+38 (067) 436 61 27</a>
          <a href="tel:+38-066-031-76-30" class="footer-item">+38 (066) 031 76 30</a>
          <a href="tel:+38-093-924-98-28" class="footer-item">+38 (093) 924 98 28</a>
        </div>
        <div class="flex flex-col gap-2">
          <div class="text-ninja-100 font-normal text-sm">
            Время работы:
          </div>
          <b class="footer-item">с 11:00 до 22:45</b>
          <b class="footer-item">с 22.45 до 06.00</b>
          <div>Ночная доставка</div>
        </div>
        <div>
          <div class="text-ninja-100 mb-2 font-normal text-sm">
            Мы в соц. сетях:
          </div>
          <div class="flex gap-3 items-center">
            <button class="rounded-lg bg-ninja-60 w-7 h-7 flex items-end justify-center hover:bg-blue-700">
              <IconFacebook />
            </button>
            <button class="hover:bg-gradient-18 rounded-lg bg-ninja-60 w-7 h-7 flex items-center justify-center">
              <IconInsta />
            </button>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-3 w-min <xl:hidden">
        <strong class="text-ninja-70 text-4.5xl font-body">#NinjaSushi</strong>
        <div class="text-ninja-60 text-base">
          Ninja Sushi в фотографиях наших клиентов
        </div>
        <button class="text-ninja-250 font-medium py-4 bg-ninja-50 rounded-xl">
          Перейти в instagram
        </button>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-item {
@apply text-ninja-70 text-base font-medium hover:text-ninja-400
}
</style>
