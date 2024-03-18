<template>
  <div class='items-center flex flex-col text-center justify-center dark:bg-neutral-900 bg-neutral-100 rounded-xl pb-7 2xl:w-3/12 xl:w-4/12 lg:w-6/12 md:w-8/12 w-full rounded-b-xl'>
    <h2 class='bg-orange-400 font-bold w-full py-2 dark:bg-teal-600 rounded-t-xl'>base</h2>

    <div class='bg-white mb-4 dark:bg-neutral-600 relative w-full sm:h-48 h-28 flex flex-col justify-center items-end'>
      <p class='sm:text-7xl text-5xl max-w-full font-thin mr-4'>{{ displayedResult }}</p>
      <input
        v-model='calcText'
        class='bg-neutral-300 dark:bg-neutral-800 sm:text-2xl text-lg text-right sm:p-1 pr-1 font-thin w-full absolute bottom-0'>
    </div>
    <div class='flex flex-wrap-reverse items-center justify-center'>
      <button  @click="handleButtonClick(calcButton)" v-for='calcButton in calcButtons' :key='calcButton' :class='buttonClass(calcButton)'>
        {{ calcButton }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const calcButtons = ref(['(', 0, ')', '=', 1, 2, 3, '-', 4, 5, 6, '+', 7, 8, 9, '/', 'C', '<', '.', '*'])
const calcText = ref('')
const result = ref('')
const buttonClass = (button) => {
  if (button === '(' || button === ')') {
    return 'basis-1/5 bg-yellow-400 dark:bg-amber-500 shadow-lg font-thin lg:text-4xl sm:text-3xl text-2xl sm:py-4 py-2 sm:px-8 px-4 sm:rounded-3xl rounded-lg m-1'
  } else if (!isNaN(button)) {
    return 'basis-1/5 bg-white dark:bg-neutral-700 shadow-lg font-thin lg:text-4xl sm:text-3xl text-2xl sm:py-4 py-2 sm:px-8 px-4 sm:rounded-3xl rounded-lg m-1'
  }
  return 'basis-1/5 bg-teal-400 dark:bg-amber-700 shadow-lg font-thin lg:text-4xl sm:text-3xl text-2xl sm:py-4 py-2 sm:px-8 px-4 sm:rounded-3xl rounded-lg m-1'
}
const handleButtonClick = (button) => {
  if (button === 'C') {
    calcText.value = '';
    result.value = '';
  } else if (button === '<') {
    calcText.value = calcText.value.slice(0, -1);
  } else if (button === '=') {
    try {
      let evalResult = eval(calcText.value);
      result.value = evalResult.toString().substring(0, 13);
      if (evalResult.toString().length > 13) {
        result.value += '...';
      }
    } catch (error) {
      result.value = 'Error';
    }
  } else {
    calcText.value += button;
  }
}

const displayedResult = computed(() => {
  if (result.value.length > 14) {
    return result.value.substring(0, 13) + '...';
  } else {
    return result.value;
  }
});
</script>

<style scoped>

</style>
