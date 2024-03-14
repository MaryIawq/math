<script setup>
import { ref } from 'vue'

import EmailIcon from '@/components/footer/ui/icons/email-icon.vue'
import GithubIcon from '@/components/footer/ui/icons/github-icon.vue'
import TelegramIcon from '@/components/footer/ui/icons/telegram-icon.vue'
import CopyIcon from '@/components/footer/ui/icons/copy-icon.vue'

const tgLink = '@marisvrja'
const copiedText = ref(false)
const copy = () => {
  try {
    navigator.clipboard.writeText(tgLink)
    setTimeout(() => {
      copiedText.value = true
      setTimeout(() => {
        copiedText.value = false
      }, 3000)
    }, 200)
  } catch (e) {
    throw e
  }
}
</script>
<template>
  <footer
    class='flex  relative mt-12 items-center justify-center gap-16 bg-neutral-300 dark:bg-neutral-800 px-5 py-3 shadow-lg'>
    <email-icon></email-icon>
    <a href='https://github.com/MaryIawq'>
      <github-icon></github-icon>
    </a>

    <div class='flex relative'>
      <telegram-icon class='hover:cursor-pointer' @click='copy'></telegram-icon>
      <p class='hidden'>{{ tgLink }}</p>
      <transition>
        <p class='absolute dark:bg-neutral-600 bg-neutral-100 p-1 rounded-lg sm:text-lg text-sm font-thin sm:ml-10 ml-7 bottom-4' v-if='copiedText'>copied</p>
      </transition>
    </div>
  </footer>
</template>

<style scoped>

</style>
