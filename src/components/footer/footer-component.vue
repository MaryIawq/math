<script setup>
import { ref } from 'vue'

import EmailIcon from '@/components/footer/ui/icons/email-icon.vue'
import GithubIcon from '@/components/footer/ui/icons/github-icon.vue'
import TelegramIcon from '@/components/footer/ui/icons/telegram-icon.vue'
const myEmail = 'mary.iawq@gmail.com'
const tgLink = '@marisvrja'

const copiedMyEmail = ref(false)
const copiedTgLink = ref(false)
const copyTgLink = () => {
  try {
    navigator.clipboard.writeText(tgLink)
    setTimeout(() => {
      copiedTgLink.value = true
      setTimeout(() => {
        copiedTgLink.value = false
      }, 3000)
    }, 200)
  } catch (e) {
    throw e
  }
}
const copyMyEmail = () => {
  try {
    navigator.clipboard.writeText(myEmail)
    setTimeout(() => {
      copiedMyEmail.value = true
      setTimeout(() => {
        copiedMyEmail.value = false
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
    <div class='relative flex'>
      <email-icon class='hover:cursor-pointer hover:rotate-6 hover:scale-110 transition' @click='copyMyEmail'></email-icon>
      <p class='hidden'>{{ myEmail }}</p>
      <transition>
        <p class='absolute dark:bg-neutral-600 bg-neutral-100 p-1 rounded-lg sm:text-lg text-sm font-thin sm:ml-10 ml-7 bottom-4' v-if='copiedMyEmail'>copied</p>
      </transition>
    </div>
    <a href='https://github.com/MaryIawq'>
      <github-icon class='hover:cursor-pointer hover:rotate-6 hover:scale-110 transition'></github-icon>
    </a>
    <div class='flex relative'>
      <telegram-icon class='hover:cursor-pointer hover:rotate-6 hover:scale-110 transition' @click='copyTgLink'></telegram-icon>
      <p class='hidden'>{{ tgLink }}</p>
      <transition>
        <p class='absolute dark:bg-neutral-600 bg-neutral-100 p-1 rounded-lg sm:text-lg text-sm font-thin sm:ml-10 ml-7 bottom-4' v-if='copiedTgLink'>copied</p>
      </transition>
    </div>
  </footer>
</template>

<style scoped>

</style>
