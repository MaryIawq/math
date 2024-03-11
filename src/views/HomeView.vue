<script setup>
import PowerCalcComponent from '@/components/calculators/power-calc-component.vue'

const props = defineProps({
  menuOptions: Object,
})

</script>

<template>
  <div class='flex justify-around sm:mt-8 mt-2 sm:mx-0 mx-2'>
    <div v-if='props.menuOptions.base.isVisible'>Base is active</div>
  </div>

  <div class='flex justify-around sm:mt-8 mt-2 sm:mx-0 mx-6'>
    <transition>
      <power-calc-component v-if='props.menuOptions.powersRoot.isVisible'></power-calc-component>
    </transition>
  </div>

  <div class='flex justify-around sm:mt-8 mt-2 sm:mx-0 mx-2'>
    <div v-if='props.menuOptions.logarithms.isVisible'>logarithms is active</div>
  </div>
</template>
<style scoped>

</style>
