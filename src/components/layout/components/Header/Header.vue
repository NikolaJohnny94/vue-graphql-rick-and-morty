<template>
  <div class="flex justify-end mt-8 mr-10">
    <DarkMode :dark-mode="darkMode" @toggle-dark-mode="toggleDarkMode" />
  </div>
  <h1 class="text-5xl text-center my-16 text-blue-500">Rick and Morty</h1>
</template>

<script setup lang="ts">
  import DarkMode from './components/DarkModeToggle/DarkModeToggle.vue'
  import useDarkMode from '@/composables/useDarkMode'

  const { darkMode } = useDarkMode()

  const toggleDarkMode = (): void => {
    darkMode.value = !darkMode.value
  }
</script>
