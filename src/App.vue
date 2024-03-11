<script setup>
import { RouterView } from 'vue-router'
import HeaderComponent from '@/components/header-component.vue'
import { ref } from 'vue'
const isDarkMode = ref(false);
const changeTheme = () => {
  isDarkMode.value = !isDarkMode.value;
  document.documentElement.classList.toggle('dark');
}
const rootCalcVisible = ref(true)
const showRootCalc = () => {
  rootCalcVisible.value = !rootCalcVisible.value
}
</script>

<template>
  <div class='text-neutral-600 dark:text-neutral-300 dark:bg-neutral-700 md:text-2xl text-xl min-h-lvh'>
    <header-component
      :root-calc-visible='rootCalcVisible'
      :show-root-calc='showRootCalc'
      :change-theme='changeTheme'
      :is-dark-mode='isDarkMode'></header-component>
    <RouterView
      :root-calc-visible='rootCalcVisible'
      :show-root-calc='showRootCalc' />

  </div>
</template>

<style scoped>

</style>
