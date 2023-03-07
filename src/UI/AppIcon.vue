<template>
    <div class="hover:(bg-ninja-200 border-ninja-200 text-ninja-400) active:(bg-ninja-400 text-white border-ninja-400) p-4 rounded-xl border border-ninja-300 flex justify-center items-center text-ninja-100">
        <slot name="title" class="font-medium text-base" />
        <slot />
    </div>
</template>

<script setup lang="ts"></script>
<!-- font-family: 'Inter' -->