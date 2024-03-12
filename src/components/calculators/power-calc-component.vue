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
      powerResult.value = 1
      return
    }
    if (parseFloat(powerNum.value) === 0) {
      powerResult.value = 0
      return
    }
    if (parseFloat(power.value) < 0) {
      powerResult.value = 1 / Math.pow(parseFloat(powerNum.value), Math.abs(parseFloat(power.value)))
      return
    }
    powerResult.value = Math.pow(parseFloat(powerNum.value), parseFloat(power.value))
    return
  }
  powerResult.value = ''
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
  <div
    class='items-center flex flex-col text-center justify-center dark:bg-neutral-600 bg-neutral-100 rounded-xl pb-7  2xl:w-4/12 xl:w-5/12 lg:w-6/12 md:w-8/12 w-full rounded-b-xl'>
    <h2 class='bg-orange-400 font-bold w-full py-2 dark:bg-teal-600 rounded-t-xl'>power/root</h2>
    <div
      class='flex flex-col items-center rounded-b-lg gap-4 sm:py-8 py-4 w-full bg-white shadow-lg dark:bg-neutral-800'>
      <div class='flex flex-col gap-1 items-center justify-center'>
        <input type='number'
               v-model='power'
               class='dark:bg-amber-700 bg-teal-400 font-bold rounded-lg w-2/12 p-2 self-end mr-4'>
        <input type='number'
               v-model='powerNum'
               class='dark:bg-amber-700 bg-teal-400 font-bold rounded-lg w-3/6 p-6'>
      </div>
      <button
        @click='calcPower'
        class='bg-orange-400 dark:bg-neutral-600 w-3/12 p-2 rounded-lg'>calc
      </button>
    </div>
    <transition>
      <p v-if='powerResult' class='bg-teal-400 dark:bg-teal-600 rounded-lg my-4 sm:p-2 p-1 sm:px-12 px-7'>{{ powerResult
        }}</p>
    </transition>

    <div class='flex flex-col items-center rounded-lg gap-6 py-8 mt-6 w-full bg-white shadow-lg dark:bg-neutral-800'>
      <div class='relative px-2 flex flex-col gap-1 items-center justify-center'>
        <img class='absolute top-7 px-1' src='/src/assets/root.svg' alt='root'>
        <input
          type='number'
          v-model='root'
          class='inpRoot z-10 dark:bg-amber-700 bg-teal-400 font-bold rounded-lg w-2/12 p-2 self-start'>
        <input
          type='number'
          v-model='rootNum'
          class='inpNum z-10 dark:bg-amber-700 bg-teal-400 font-bold rounded-lg self-end mr-4 w-3/6 p-5'>
      </div>
      <button
        @click='calcRoot'
        class='bg-orange-400 dark:bg-neutral-600 w-1/6 p-2 rounded-lg'>calc
      </button>
    </div>
    <transition>
      <p v-if='rootResult' class='bg-teal-400 dark:bg-teal-600 rounded-lg my-4 sm:p-2 p-1 sm:px-12 px-7'>{{ rootResult
        }}</p>
    </transition>
  </div>
</template>

<style scoped>
@media (max-width: 430px) {
  .inpNum {
    height: 50px;
  }
  .inpRoot {
    margin-top: 10px;
    height: 40px
  }
  img {
    top: 38px;
    padding-right: 20px;
  }
}
</style>
