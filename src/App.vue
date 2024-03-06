<script setup>
import { RouterView } from 'vue-router'
import HeaderComponent from '@/components/header-component.vue'
import { ref } from 'vue'
const isDarkMode = ref(false);
const changeTheme = () => {
  isDarkMode.value = !isDarkMode.value;
  document.documentElement.classList.toggle('dark');
}
</script>

<template>
  <div class='text-neutral-600 dark:text-neutral-300 text-2xl'>
    <header-component :change-theme='changeTheme' :is-dark-mode='isDarkMode'></header-component>
    <RouterView />
  </div>
</template>

<style scoped>

</style>
