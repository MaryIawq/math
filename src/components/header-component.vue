<script setup>
import { h, ref, watch, defineEmits } from 'vue'
import VueSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'
import NavBtnElement from '@/components/elements/nav-btn-element.vue'
import SunIcon from '@/components/icons/sun-icon.vue'
import MoonIcon from '@/components/icons/moon-icon.vue'
defineProps({
  changeTheme: Function,
  isDarkMode: Boolean,
  showRootCalc: Function,
  rootCalcVisible: Boolean
})
const selected = ref([])
const emit = defineEmits([
  'selectedOptions'
])
VueSelect.props.components.default = () => ({
  Deselect: {
    render: () => h('span', '❌')
  },
  OpenIndicator: {
    render: () => h('span', '🔽')
  }
})


watch(selected, (selectedOptions) => {
  emit('selectedOptions', selectedOptions)
})
</script>

<template>
  <header class='flex items-center justify-between bg-neutral-200 dark:bg-neutral-800 px-5 py-3 shadow-xl'>
    <div class='flex flex-col md:flex-row'>
      <div class='flex items-center md:m-0 mb-5'>
        <router-link to='/'>
          <img class='transition min-w-fit lg:mr-6 mr-1 brightness-90 min-w-26 min-h-26 hover:rotate-12'
               alt='math()logo'
               :src="isDarkMode ? '/src/assets/logo-dark.png' : '/src/assets/logo-light.png'" />
        </router-link>
        <div class='flex flex-col gap-1 justify-center lg:ml-3 sm:ml-6 lg:mr-5'>
          <h1 class='xl:text-5xl md:text-4xl text-3xl font-bold'>Math()</h1>
          <h2 class='xl:text-2xl md:text-xl hidden sm:block text-lg text-neutral-500 dark:text-neutral-400'>multifunctional calculator</h2>
        </div>
      </div>
      <div style='background: #f58849; padding: 0.4rem; border-radius: 1rem' class='md:hidden'>
        <vue-select
          class='bg-neutral-200 md:text-2xl text-lg dark:bg-neutral-600 rounded-xl md:m-0'
          multiple
          v-model='selected'
          placeholder='calculators'
          :options="['base','powers', 'logarithms']" />
      </div>
    </div>
    <div class='md:block hidden'>
      <div class='flex xl:gap-11 lg:gap-6 gap-3 xl:mx-6 lg:mx-2 mx-0'>
        <nav-btn-element :text='"base"'></nav-btn-element>
        <nav-btn-element @click='showRootCalc' :text='"powers/roots"'></nav-btn-element>
        <nav-btn-element :text='"logarithms"'></nav-btn-element>
      </div>
    </div>

    <div @click='changeTheme'
         class='relative md:mb-0 mb-20 shadow-lg lg:px-12 sm:px-8 px-6 lg:py-6 sm:py-4 py-3 ml-5 mr-1 border-2 border-orange-300 dark:border-neutral-600 bg-orange-300 dark:bg-neutral-500 rounded-full hover:cursor-pointer'>
      <div v-auto-animate class='absolute flex items-center justify-center lg:p-0 p-1 top-0 left-0 lg:dark:left-12 md:dark:left-8 sm:dark:left-8 dark:left-6 bg-white lg:h-12 lg:w-12 sm:h-8 sm:w-8 w-6 h-6 rounded-full transition hover:scale-105'>
          <moon-icon v-if='isDarkMode'></moon-icon>
          <sun-icon v-else></sun-icon>
      </div>
    </div>

  </header>
</template>

<style scoped>

>>> {
  --vs-border-style: none;
  --vs-border-radius: 10px;

  --vs-dropdown-bg: #f58849;
  --vs-dropdown-option-color: #464646;

  --vs-selected-bg: #e5e5e5;
  --vs-selected-color: #383838;

  --vs-search-input-color: #464646;

  --vs-dropdown-option--active-bg: #e5e5e5;
  --vs-dropdown-option--active-color: #464646;

  --vs-font-size: 0rem;
  --vs-controls-size: 1.5;
  --vs-controls--deselect-text-shadow: 0 0 0 #656565;

  --vs-selected-border-color: #f58849;
  --vs-selected-border-style: solid;
  --vs-selected-border-width: 4px;
  --vs-dropdown-box-shadow: 0px 3px 6px 0px #919191;

  --vs-dropdown-option-padding: 10px 20px;

}
</style>
