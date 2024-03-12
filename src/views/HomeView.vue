<script setup>
import PowerCalcComponent from '@/components/calculators/power-calc-component.vue'
import LogarithmsCalcComponent from '@/components/calculators/logarithms-calc-component.vue'

const props = defineProps({
  menuOptions: Object
})

</script>

<template>
  <div class='flex justify-around sm:mt-8 mt-2 sm:mx-0'>
    <div v-if='props.menuOptions.base.isVisible'>Base is active</div>
  </div>

  <div class='flex justify-around items-center px-6 gap-6 lg:flex-row flex-col sm:mt-8 mt-2 sm:mx-0 mx-1'>
    <transition>
      <power-calc-component v-if='props.menuOptions.powersRoot.isVisible'></power-calc-component>
    </transition>
    <transition>
      <logarithms-calc-component v-if='props.menuOptions.logarithms.isVisible'></logarithms-calc-component>
    </transition>
  </div>


</template>
<style scoped>

</style>
