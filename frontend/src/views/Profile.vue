<script setup lang="ts">
import ProfileSidebar from '@/components/ProfileSidebar.vue'
import { useUserStore } from '@/stores/user';
import { storeToRefs } from 'pinia';
const { user } = storeToRefs(useUserStore())
</script>

<template>
  <div class="flex mt-8 gap-36 mb-16">
    <ProfileSidebar v-bind="user" />
    <router-view />
  </div>
</template>

<style scoped></style>
