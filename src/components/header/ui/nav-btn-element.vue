<script setup>
defineProps({
  text: String
})
</script>

<template>
<button class='bg-orange-300 dark:bg-neutral-600 xl:px-5 xl:py-3 px-3 py-2 rounded-2xl shadow-md font-bold lg:text-2xl text-lg transition dark:hover:bg-amber-600 hover:bg-orange-300 hover:-translate-y-1'>
  {{ text }}
</button>
</template>

<style scoped>

</style>
