<script setup lang="ts">
import { computed, ref } from 'vue'
import IconArchive from '@/components/icons/IconArchive.vue'
import IconHeart from '@/components/icons/IconHeart.vue'
import IconLocation from '@/components/icons/IconLocation.vue'
import IconSun from '@/components/icons/IconSun.vue'

const tabs = [
    { id: 0, icon: IconArchive, text: 'История Заказов' }, 
    { id: 1, icon: IconHeart, text: 'Избранные товары' }, 
    { id: 2, icon: IconLocation, text: 'Адрес доставки' }, 
    { id: 3, icon: IconSun, text: 'Тема сайта' }
    ]
const activeTab = ref(0)
const tabComponents = ['OrderHistory', 'FavouriteProducts', 'Delivery/shipping address', 'ThemeChanger']
const currentTabComponent = computed(() => tabComponents[activeTab.value])
</script>

<template>
  <div>
    <aside class="flex flex-col gap-4">
      <div class="flex flex-col gap-3">
        <button @click="() => activeTab = id" v-for="{ icon, text, id } in tabs" :key="id" class="py-2.5 pl-3 bg-transparent flex items-center rounded-xl gap-3 group" :class="{tab_active: id === activeTab, btn_mdfs: id !== activeTab}">
          <div class="p-2.5 rounded-xl bg-white border border-white" :class="{'group-hover:(bg-ninja-200 border-ninja-200)': id !== activeTab}">
            <component :is="icon" class="fill-ninja-70" />
          </div>
          <div class="text-base font-semibold">
            {{ text }}
          </div>
        </button>
      </div>
      <div class="flex rounded-xl bg-white p-4">
        <img src="/user-photo.png" alt="User picture">
        <div>
          <div class="">
            <div class="font-medium text-base text-ninja-70">
              Ашот
            </div>
            <div class="">
              Ред.
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
    <section>
      <!-- <component :is="currentTabComponent" /> -->
      <h2>{{ currentTabComponent }}</h2>
    </section>
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
