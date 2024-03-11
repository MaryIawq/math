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
    } else {
      powerResult.value = Math.pow(parseFloat(power.value), parseFloat(powerNum.value))
    }
    if (parseFloat(powerNum.value) === 0) {
      powerResult.value = 0;
    }
  } else {
    powerResult.value = ''
  }
}

const calcRoot = () => {
  if (root.value !== '' && rootNum.value !== '') {
    if (parseFloat(root.value) < 1) {
      rootResult.value = 'incorrect root';
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
    <div class='flex flex-col items-center gap-4 py-8 w-full bg-neutral-300 dark:bg-neutral-800'>
      <div class='flex flex-col gap-1 items-center justify-center'>
        <input type='number'
               v-model='power'
               class='dark:bg-amber-700 font-bold rounded-lg w-1/6 p-2 self-end mr-4'>
        <input type='number'
               v-model='powerNum'
               class='dark:bg-amber-700 font-bold rounded-lg w-3/6 p-6'>
      </div>
      <button
        @click='calcPower'
        class='bg-orange-400 dark:bg-neutral-600 w-1/6 p-2 rounded-lg'>calc
      </button>
    </div>
    <p class='bg-teal-400 dark:bg-teal-600 rounded-lg my-8 p-2 px-12'>{{ powerResult }}</p>

    <div class='flex flex-col items-center gap-6 py-8 w-full bg-neutral-300 dark:bg-neutral-800'>

      <div class='flex gap-10 relative pt-8 items-center justify-center'>
        <img class='' src='/src/assets/root.png' alt='root'>
        <input
          type='number'
          v-model='root'
          class='dark:bg-amber-700 font-bold absolute rounded-lg w-1/6 p-4 top-0 left-3'>
        <input
          type='number'
          v-model='rootNum'
          class='dark:bg-amber-700 font-bold absolute rounded-lg w-3/6 p-8 bottom-4 right-8'>
      </div>

      <button
        @click='calcRoot'
        class='bg-orange-400 dark:bg-neutral-600 w-1/6 p-2 rounded-lg'>calc
      </button>
    </div>
    <p class='bg-teal-400 dark:bg-teal-600 rounded-lg my-8 p-2 px-12'>{{ rootResult }}</p>
  </div>
</template>

<style scoped>

</style>
