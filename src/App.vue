<script setup>
import { ref, provide, onMounted } from 'vue'
import { RouterView } from 'vue-router'
import HeaderComponent from '@/components/header/header-component.vue'
import FooterComponent from '@/components/footer/footer-component.vue'

const isDarkMode = ref(false);
const changeTheme = () => {
  isDarkMode.value = !isDarkMode.value;
  document.documentElement.classList.toggle('dark');
  localStorage.setItem('isDarkMode', isDarkMode.value);
}
onMounted(() => {
  const savedTheme = localStorage.getItem('isDarkMode');
  if (savedTheme !== null) {
    isDarkMode.value = savedTheme === 'true'; // Преобразуем строку в булево значение
    if (isDarkMode.value) {
      document.documentElement.classList.add('dark');
    }
  }
});
const menuOptions = ref({
  base:       {name: 'base', isVisible: false},
  powersRoot: {name: 'powers/root', isVisible: false},
  logarithms: {name: 'logarithms', isVisible: false},
});
const selectedOptions = ref([]);

const handleToggleMenuOption = (optionName, isSelecting) => {
  const option = Object.values(menuOptions.value).find(option => option.name === optionName);
  if (option) {
    option.isVisible = !option.isVisible;
  }

  if (isSelecting) {
    if (!selectedOptions.value.includes(optionName)) {
      selectedOptions.value.push(optionName);
    }
  } else {
    const index = selectedOptions.value.indexOf(optionName);
    if (index !== -1) {
      selectedOptions.value.splice(index, 1);
    }
  }
}
provide('isDarkMode', isDarkMode)
</script>

<template>
  <div class='flex flex-col justify-between text-neutral-700 dark:text-neutral-300 bg-neutral-200 dark:bg-neutral-700 md:text-2xl text-xl min-h-lvh'>
    <header-component
      @toggleMenuOption="handleToggleMenuOption"
      :change-theme='changeTheme'
      :is-dark-mode='isDarkMode'
      :menu-options='menuOptions'
      :selected-options='selectedOptions'
    >
    </header-component>
    <RouterView
      :menu-options='menuOptions'
    />
    <footer-component></footer-component>
  </div>
</template>

<style scoped>

</style>
