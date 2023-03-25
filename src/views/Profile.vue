<template>
    <div>
        <aside class="flex flex-col gap-4">
            <div class="flex flex-col gap-3">
                <button v-for="{icon, text} in tabs" class="py-2.5 pl-3 bg-transparent flex items-center rounded-xl gap-3 hover:(bg-ninja-400 text-white)">
                    <div class="p-2.5 rounded-xl bg-white">
                        <component :is="icon" class="fill-ninja-70" />
                    </div>
                    <div class="text-base font-semibold">{{ text }}</div>
                </button>
            </div>
            <div class="flex rounded-xl bg-white p-4">
                <img src="/user-photo.png" alt="User picture">
                <div>
                    <div class="">
                        <div class="font-medium text-base text-ninja-70">Ашот</div>
                        <div class="">Ред. </div>
                    </div>
                    <div class="text-sm text-ninja-60">Lifetv277@gmaIl.com</div>
                    <div class="font-medium text-sm text-ninja-70">+380976986848</div>
                </div>
            </div>
        </aside>
        <section>
            <component :is="currentTabComponent" />
        </section>
    </div>
</template>

<script setup lang="ts">
import IconArchive from '@/components/icons/IconArchive.vue';
import IconHeart from '@/components/icons/IconHeart.vue';
import IconLocation from '@/components/icons/IconLocation.vue';
import IconSun from '@/components/icons/IconSun.vue';
import { computed, ref } from 'vue';

const tabs = [{icon: IconArchive, text: 'История Заказов'}, {icon: IconHeart, text: 'Избранные товары'}, {icon: IconLocation, text: 'Адрес доставки'}, {icon: IconSun, text: 'Тема сайта'}]
let activeTab = ref(0)
const tabComponents = ['OrderHistory', 'FavouriteProducts', 'Delivery/shipping address']
let currentTabComponent = computed(() => tabComponents[activeTab.value])
</script>

<style scoped>

</style>