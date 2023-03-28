<script setup lang="ts">
import ProfileSidebar from '@/components/ProfileSidebar.vue'
</script>

<template>
  <div class="flex mt-8 gap-36 mb-16">
    <ProfileSidebar />
    <router-view />
    </div>
</template>

<style scoped></style>
