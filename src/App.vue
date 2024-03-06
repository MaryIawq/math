<script setup>
import { RouterView } from 'vue-router'
import HeaderComponent from '@/components/header-component.vue'

</script>

<template>
  <div class='text-neutral-700 text-2xl'>
    <header-component></header-component>
    <RouterView />
  </div>
</template>

<style scoped>

</style>
