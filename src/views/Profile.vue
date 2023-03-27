<script setup lang="ts">
import { computed, ref } from 'vue'
import IconArchive from '@/components/icons/IconArchive.vue'
import IconHeart from '@/components/icons/IconHeart.vue'
import IconLocation from '@/components/icons/IconLocation.vue'
import IconSun from '@/components/icons/IconSun.vue'
import OrderHistory from '@/components/OrderHistory.vue'
import FavoriteProducts from '@/components/FavoriteProducts.vue'
import ShippingAddress from '@/components/ShippingAddress.vue'
import IconEdit from '@/components/icons/IconEdit.vue'

const tabs = [
    { id: 0, icon: IconArchive, text: 'История Заказов', link: '/profile?tab=history' }, 
    { id: 1, icon: IconHeart, text: 'Избранные товары', link: '/profile?tab=favorite' }, 
    { id: 2, icon: IconLocation, text: 'Адрес доставки', link: '/profile?tab=shipping' }, 
    { id: 3, icon: IconSun, text: 'Тема сайта', link: '/profile/tab=theme' }
    ]
const activeTab = ref(0)
const tabComponents = [OrderHistory, FavoriteProducts, ShippingAddress]
const currentTabComponent = computed(() => tabComponents[activeTab.value])
</script>

<template>
  <div class="flex mt-8 gap-36 mb-16">
    <aside class="flex flex-col gap-4">
      <div class="flex flex-col gap-3">
        <button @click="() => {activeTab = id, $router.push(link)}" v-for="{ icon, text, id, link } in tabs" :key="id" class="py-2.5 pl-3 pr-5 bg-transparent flex items-center rounded-xl gap-3 group" :class="{tab_active: id === activeTab, btn_mdfs: id !== activeTab}">
          <div class="p-2.5 rounded-xl bg-white border border-white" :class="{'group-hover:(bg-ninja-200 border-ninja-200)': id !== activeTab}">
            <component :is="icon" class="fill-ninja-70" />
          </div>
          <div class="text-base font-semibold">
            {{ text }}
          </div>
        </button>
      </div>
      <div class="flex gap-3 rounded-xl bg-white p-4">
        <div class="">
          <img class="rounded-xl max-w-14" src="/user-photo.png" alt="User picture">
        </div>
        <div class="flex flex-col gap-1.5">
          <div class="flex items-center justify-between">
            <div class="font-medium text-base text-ninja-70">
              Ашот
            </div>
            <div class="p-1 bg-ninja-50 rounded cursor-pointer">
              <IconEdit class="fill-ninja-100" />
            </div>
          </div>
          <div class="text-sm text-ninja-60">
            Lifetv277@gmaIl.com
          </div>
          <div class="font-medium text-sm text-ninja-70">
            +380976986848
          </div>
        </div>
      </div>
    </aside>
      <component :is="currentTabComponent" />
  </div>
</template>

<style scoped>
.tab_active {
  @apply bg-ninja-400 text-white
}
.btn_mdfs {
  @apply active:(bg-ninja-470 text-white border-ninja-400) hover:(bg-white border-ninja-200 text-ninja-70)
}
</style>
