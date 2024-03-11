<script setup>
import { ref } from 'vue'

const powerNum = ref('')
const power = ref('')
const powerResult = ref('')

const rootNum = ref('')
const root = ref('')
const rootResult = ref('')

const calcPower = () => {
  if (power.value !== '' && powerNum.value !== '') {
    if (parseFloat(power.value) === 0) {
      powerResult.value = 1;
    } else if (parseFloat(powerNum.value) === 0) {
      powerResult.value = 0;
    } else if (parseFloat(power.value) < 0) {
      powerResult.value = 1 / Math.pow(parseFloat(powerNum.value), Math.abs(parseFloat(power.value)));
    } else {
      powerResult.value = Math.pow(parseFloat(power.value), parseFloat(powerNum.value));
    }
  } else {
    powerResult.value = '';
  }
}


const calcRoot = () => {
  if (root.value !== '' && rootNum.value !== '') {
    if (parseFloat(root.value) < 1) {
      rootResult.value = 'incorrect root'
    } else {
      rootResult.value = Math.pow(parseFloat(rootNum.value), 1 / parseFloat(root.value))
    }
  } else {
    rootResult.value = ''
  }
}
</script>

<template>
  <div class='items-center flex flex-col text-center justify-center max-w-fit shadow-2xl rounded-b-xl'>
    <h2 class='bg-orange-400 w-full py-2 dark:bg-teal-600 rounded-t-xl'>power/root</h2>
    <div class='flex flex-col items-center gap-4 sm:py-8 py-4 w-full bg-neutral-300 dark:bg-neutral-800'>
      <div class='flex flex-col gap-1 items-center justify-center'>
        <input type='number'
               v-model='power'
               class='dark:bg-amber-700 font-bold rounded-lg w-2/12 p-2 self-end mr-4'>
        <input type='number'
               v-model='powerNum'
               class='dark:bg-amber-700 font-bold rounded-lg w-3/6 p-6'>
      </div>
      <button
        @click='calcPower'
        class='bg-orange-400 dark:bg-neutral-600 w-3/12 p-2 rounded-lg'>calc
      </button>
    </div>
    <p class='bg-teal-400 dark:bg-teal-600 rounded-lg sm:my-8 my-4 sm:p-2 p-1 sm:px-12 px-7'>{{ powerResult }}</p>

    <div class='flex flex-col items-center gap-6 py-8 w-full bg-neutral-300 dark:bg-neutral-800'>

      <div class='flex gap-10 relative pt-8 items-center justify-center'>
        <img class='sm:w-full w-5/6' src='/src/assets/root.png' alt='root'>
        <input
          type='number'
          v-model='root'
          class='rootInp dark:bg-amber-700 font-bold absolute rounded-lg w-1/6 sm:p-4 p-2 sm:top-0 sm:left-3 left-10 top-4'>
        <input
          type='number'
          v-model='rootNum'
          class='rootNumInp dark:bg-amber-700 font-bold absolute rounded-lg sm:w-3/6 w-5/12 sm:p-8 p-5 bottom-4 sm:right-8 right-16'>

      </div>

      <button
        @click='calcRoot'
        class='bg-orange-400 dark:bg-neutral-600 w-1/6 p-2 rounded-lg'>calc
      </button>
    </div>
    <p class='bg-teal-400 dark:bg-teal-600 rounded-lg sm:my-8 my-4 sm:p-2 p-1 sm:px-12 px-7'>{{ rootResult }}</p>
  </div>
</template>

<style scoped>
@media (max-width: 460px) {
.rootNumInp {
  bottom: 0;
  right: 50px;
}
  .rootInp {
    top: 10px;
    left: 35px;
  }
}
@media (max-width: 370px) {
  .rootNumInp {
    top: 40px;
    right: 45px;
  }
  .rootInp {
    top: 6px;
    left: 28px;
  }
}
</style>
