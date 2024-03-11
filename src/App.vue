<script setup>
import { RouterView } from 'vue-router'
import HeaderComponent from '@/components/header-component.vue'
import { ref, watch } from 'vue'
const isDarkMode = ref(false);
const selectedOptions = ref([])
const rootCalcVisible = ref(false)
const changeTheme = () => {
  isDarkMode.value = !isDarkMode.value;
  document.documentElement.classList.toggle('dark');
}
watch(selectedOptions, (newValue) => {
  rootCalcVisible.value = newValue && newValue.indexOf('powers') !== -1;
});
const showRootCalc = () => {
  rootCalcVisible.value = !rootCalcVisible.value
}

const handleSelectedOptions = (options) => {
  selectedOptions.value = options
  console.log('SФФФФФФФФ:', selectedOptions.value)
}
</script>

<template>
  <div class='text-neutral-600 dark:text-neutral-300 dark:bg-neutral-700 md:text-2xl text-xl min-h-lvh'>
    <header-component
      @selectedOptions="handleSelectedOptions"
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
