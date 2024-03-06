<script setup>
import { h, ref } from 'vue'
import VueSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';
import NavBtnElement from '@/components/elements/nav-btn-element.vue'
import SunIcon from '@/components/icons/sun-icon.vue'
import MoonIcon from '@/components/icons/moon-icon.vue'
VueSelect.props.components.default = () => ({
  Deselect: {
    render: () => h('span', '❌'),
  },
  OpenIndicator: {
    render: () => h('span', '🔽'),
  },
});
defineProps({
  changeTheme: Function,
  isDarkMode: Boolean
})

const selected = ref(null);
</script>

<template>
  <header class='flex items-center justify-between bg-neutral-200 dark:bg-neutral-800 px-5 py-3 shadow-xl'>
    <div class='flex gap-4'>
      <router-link to='/'>
        <img class='transition brightness-90 hover:rotate-12' :src="isDarkMode ? '/src/assets/logo-dark.png' : '/src/assets/logo-light.png'" />
      </router-link>
      <div class='flex flex-col gap-1 justify-center'>
        <h1 class='text-5xl font-bold'>Math()</h1>
        <h2 class='xl:text-2xl text-xl text-neutral-500 dark:text-neutral-400'>multifunctional calculator</h2>
      </div>
    </div>
    <div class='lg:hidden'>
      <vue-select
        class='bg-orange-400 dark:text-neutral-600 font-bold transition dark:bg-neutral-600 shadow-md dark:hover:bg-amber-500 hover:bg-orange-300 min-w-48 max-w-96'
        multiple
        v-model="selected"
        placeholder="calculators"
        :options="['base','powers', 'logarithms']" />
    </div>
    <div class='lg:block hidden'>
      <div class='flex gap-7 mx-4'>
        <nav-btn-element :text='"base"'></nav-btn-element>
        <nav-btn-element :text='"powers"'></nav-btn-element>
        <nav-btn-element :text='"logarithms"'></nav-btn-element>
      </div>
    </div>
    <div @click='changeTheme'
         class='relative shadow-lg px-12 py-6 border-2 border-orange-300 dark:border-neutral-600 bg-orange-300 dark:bg-neutral-500 rounded-full hover:cursor-pointer'>
      <div v-auto-animate class='absolute flex items-center justify-center top-0 left-0 dark:left-12 bg-white h-12 w-12 rounded-full transition hover:scale-105'>
        <moon-icon v-if='isDarkMode'></moon-icon>
        <sun-icon v-else></sun-icon>
      </div>
    </div>
  </header>
</template>

<style scoped>

</style>
