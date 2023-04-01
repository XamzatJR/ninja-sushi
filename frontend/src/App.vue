<script setup lang="ts">
import TheFooter from '@/components/TheFooter.vue'
import TheHeader from '@/components/TheHeader.vue'
</script>

<template>
  <div class="container mx-auto pt-4">
    <TheHeader />
    <RouterView />
  </div>
  <TheFooter />
</template>

<style scoped></style>
