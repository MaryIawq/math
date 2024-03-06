<script setup>
defineProps({
  text: String
})
</script>

<template>
<button class='bg-orange-400 px-6 py-3 rounded-3xl shadow-md font-bold text-3xl transition hover:bg-orange-300 hover:-translate-y-1'>
  {{ text }}
</button>
</template>

<style scoped>

</style>
