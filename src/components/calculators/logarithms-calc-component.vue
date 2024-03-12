<script setup>
import { ref, inject } from 'vue'
import EqualIcon from '@/components/calculators/ui/icons/equal-icon.vue'

const base = ref('')
const num = ref('')
const logResult = ref('')

const calcLog = () => {
  if (num.value !== '' && base.value !== '') {
    if (num.value < 0 || base.value < 0) {
      logResult.value = '-'
      return
    }
    if (num.value === 1) {
      logResult.value = '0'
      return
    }
    if (num.value === base.value) {
      logResult.value = 1
      return
    }
    logResult.value = Math.log(num.value) / Math.log(base.value)
    return
  }
  logResult.value = ''
}
const isDarkMode = inject('isDarkMode')
</script>

<template>
  <div
    class='items-center flex flex-col text-center justify-center dark:bg-neutral-600 bg-neutral-100 rounded-xl pb-7 2xl:w-4/12 xl:w-5/12 lg:w-6/12 md:w-8/12 w-full rounded-b-xl'>
    <h2 class='bg-orange-400 font-bold w-full py-2 dark:bg-teal-600 rounded-t-xl'>logarithms</h2>
    <div
      class='flex flex-col items-center rounded-b-lg gap-12 sm:py-8 py-4 w-full bg-white shadow-lg dark:bg-neutral-800'>
      <div class='flex gap-1 mt-6 items-center justify-center mx-2'>
        <span class='md:text-6xl sm:text-4xl text-3xl font-bold'>log</span>
        <input type='number'
               v-model='base'
               class='dark:bg-amber-700 bg-teal-400 text-xl font-bold rounded-lg sm:w-1/12 w-8 sm:h-9 h-6 sm:mt-20 p-2 self-end'>
        <input type='number'
               v-model='num'
               class='dark:bg-amber-700 bg-yellow-400 w-4/12 sm:h-20 h-10 pt-5 text-xl font-bold rounded-lg p-3'>

        <equal-icon class='w-8'></equal-icon>
        <transition>
          <p v-if='logResult' class='bg-teal-400 font-bold dark:bg-teal-600 rounded-lg mx-2 sm:py-4 py-1 sm:px-8 px-4'>
            {{ logResult }}</p>
        </transition>
      </div>
      <button
        @click='calcLog'
        class='bg-orange-400 dark:bg-neutral-600 w-3/12 sm:p-2 rounded-lg'>calc
      </button>
    </div>


    <div class='flex flex-col items-center rounded-lg gap-6 py-8 mt-6 w-full bg-white shadow-lg dark:bg-neutral-800'>
      <h2 class='bg-teal-300 dark:bg-teal-600 px-3 py-1 rounded-lg font-bold'>formulas</h2>
      <div class='dark:bg-amber-700 bg-teal-400 p-3  rounded-lg'>
        <img alt='logarithms formulas ' :src="isDarkMode? 'formulas-dark.png' : 'formulas.png'">
      </div>
    </div>

  </div>
</template>

<style scoped>

</style>
