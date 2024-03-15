<template>
  <div class='items-center flex flex-col text-center justify-center dark:bg-neutral-900 bg-neutral-100 rounded-xl pb-7 2xl:w-4x/12 xl:w-4/12 lg:w-6/12 md:w-8/12 w-full rounded-b-xl'>
    <h2 class='bg-orange-400 font-bold w-full py-2 dark:bg-teal-600 rounded-t-xl'>base</h2>

    <div class='bg-white mb-4 dark:bg-neutral-600 relative w-full sm:h-48 h-36 flex flex-col justify-center items-end'>
      <p class='sm:text-7xl text-5xl font-thin mr-4'>32443,43</p>
      <input class='bg-neutral-300 dark:bg-neutral-800 sm:text-2xl text-lg text-right sm:p-1 pr-1 font-thin w-full absolute bottom-0'>
    </div>
    <div class='flex flex-wrap-reverse items-center justify-center'>
      <button v-for='calcButton in calcButtons' :key='calcButton' :class='buttonClass(calcButton)'>
        {{ calcButton }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const calcButtons = ref(['(', 0, ')', '=', 1, 2, 3, '-', 4, 5, 6, '+', 7, 8, 9, '/', 'C', '<', '.', '*'])

const buttonClass = (button) => {
  if (button === '(' || button === ')') {
    return 'basis-1/5 bg-yellow-400 dark:bg-amber-500 shadow-lg font-thin sm:text-5xl text-3xl sm:py-4 py-2 sm:px-8 px-4 sm:rounded-3xl rounded-lg m-1'
  } else if (!isNaN(button)) {
    return 'basis-1/5 bg-white dark:bg-neutral-700 shadow-lg font-thin sm:text-5xl text-3xl sm:py-4 py-2 sm:px-8 px-4 sm:rounded-3xl rounded-lg m-1'
  }
  return 'basis-1/5 bg-teal-400 dark:bg-amber-700 shadow-lg font-thin sm:text-5xl text-3xl sm:py-4 py-2 sm:px-8 px-4 sm:rounded-3xl rounded-lg m-1'
}
</script>

<style scoped>

</style>
