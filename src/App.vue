<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import HeaderComponent from '@/components/header/header-component.vue'

const isDarkMode = ref(false);
const changeTheme = () => {
  isDarkMode.value = !isDarkMode.value;
  document.documentElement.classList.toggle('dark');
}

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
</script>

<template>
  <div class='text-neutral-600 dark:text-neutral-300 dark:bg-neutral-700 md:text-2xl text-xl min-h-lvh'>
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
  </div>
</template>

<style scoped>

</style>
