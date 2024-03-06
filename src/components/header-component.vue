<script setup>

import NavBtnElement from '@/components/elements/nav-btn-element.vue'
</script>

<template>
  <header class='flex items-center justify-between bg-neutral-200 px-5 py-3 shadow-xl'>
    <div class='flex gap-4'>
      <img src="/src/assets/logo.png" alt="logo" class='w-20 h-20'/>
      <div>
        <h1 class='text-5xl font-bold'>Math()</h1>
        <h2 class='text-2xl text-neutral-500'>multifunctional calculator</h2>
      </div>
    </div>
    <div class='flex gap-8'>
      <nav-btn-element :text='"base"'></nav-btn-element>
      <nav-btn-element :text='"powers"'></nav-btn-element>
      <nav-btn-element :text='"logarithms"'></nav-btn-element>
    </div>
  </header>
</template>

<style scoped>

</style>
