<script setup>
import PowerCalcComponent from '@/components/calculators/power-calc-component.vue'
defineProps({
  showRootCalc: Function,
  rootCalcVisible: Boolean
})
</script>

<template>
    <div class='flex justify-around mt-8'>
      <transition>
        <power-calc-component v-if='rootCalcVisible'></power-calc-component>
      </transition>
    </div>


</template>
<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
