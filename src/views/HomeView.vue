<script setup>
import PowerCalcComponent from '@/components/calculators/power-calc-component.vue'
defineProps({
  showRootCalc: Function,
  rootCalcVisible: Boolean,
})


</script>

<template>
    <div class='flex justify-around sm:mt-8 mt-2 sm:mx-0 mx-2'>
      <transition>
        <power-calc-component v-if='rootCalcVisible'></power-calc-component>
      </transition>
    </div>


</template>
<style scoped>

</style>
