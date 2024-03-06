<script setup>
defineProps({
  text: String
})
</script>

<template>
<button class='bg-orange-400 dark:bg-neutral-600 xl:px-6 xl:py-3 px-5 py-2 rounded-3xl shadow-md font-bold text-3xl transition dark:hover:bg-amber-600 hover:bg-orange-300 hover:-translate-y-1'>
  {{ text }}
</button>
</template>

<style scoped>

</style>
