<script setup lang="ts">
import { ref, watch } from 'vue'

import { useRoute } from 'vue-router'
import type { User } from '@supabase/supabase-js'
import IconEdit from '@/components/icons/IconEdit.vue'
import IconArchive from '@/components/icons/IconArchive.vue'
import IconHeart from '@/components/icons/IconHeart.vue'
import IconLocation from '@/components/icons/IconLocation.vue'
import IconSun from '@/components/icons/IconSun.vue'

defineProps<User>()

const route = useRoute()

const activeTab = ref(route.name)
watch(
  () => route.name,
  (newName) => {
    activeTab.value = newName
  })
const tabs = [
  { id: 0, icon: IconArchive, text: 'История Заказов', name: 'history', styles: 'fill-ninja-70' },
  { id: 1, icon: IconHeart, text: 'Избранные товары', name: 'favorite', styles: 'stroke-ninja-70' },
  { id: 2, icon: IconLocation, text: 'Адрес доставки', name: 'shipping', styles: 'fill-ninja-70' },
  { id: 3, icon: IconSun, text: 'Тема сайта', name: undefined, styles: 'fill-ninja-70' },
]
</script>

<template>
  <aside class="flex flex-col gap-4">
    <div class="flex flex-col gap-3">
      <router-link v-for="{ icon, text, id, name, styles } in tabs" :key="id" :to="{ name }" class="py-2.5 pl-3 pr-5 bg-transparent flex items-center rounded-xl gap-3 group" :class="{ tab_active: name === activeTab, btn_mdfs: name !== activeTab }" @click="() => activeTab = name">
        <div class="p-2.5 rounded-xl bg-white border border-white" :class="{ 'group-hover:(bg-ninja-200 border-ninja-200)': name !== activeTab }">
          <component :is="icon" :class="styles" />
        </div>
        <div class="text-base font-semibold">
          {{ text }}
        </div>
      </router-link>
    </div>
    <div class="flex gap-3 rounded-xl bg-white p-4">
      <div class="">
        <img class="rounded-xl max-w-14" src="/user-photo.png" alt="User picture">
      </div>
      <div class="flex flex-col gap-1.5">
        <div class="flex items-center justify-between">
          <div class="font-medium text-base text-ninja-70">
            {{ 'username' }}
          </div>
          <div
            class="p-1 bg-ninja-50 rounded cursor-pointer"
            @click="() => $router.push('/profile/edit')"
          >
            <IconEdit class="fill-ninja-100" />
          </div>
        </div>
        <div class="text-sm text-ninja-60">
          {{ email }}
        </div>
        <div v-if="phone" class="font-medium text-sm text-ninja-70">
          {{ phone }}
        </div>
      </div>
    </div>
  </aside>
</template>

<style scoped>
.tab_active {
  @apply bg-ninja-400 text-white
}
.btn_mdfs {
  @apply active:(bg-ninja-470 text-white border-ninja-400) hover:(bg-white border-ninja-200 text-ninja-70)
}
</style>
