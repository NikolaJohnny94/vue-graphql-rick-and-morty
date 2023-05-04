<template>
  <font-awesome-icon
    class="block cursor-pointer text-yellow-400"
    @click="$emit('toggleDarkMode')"
    :icon="`fa-solid fa-${darkMode ? 'sun' : 'moon'}`"
    size="2xl"
    :title="darkMode ? 'Light Mode' : 'Dark Mode'"
  ></font-awesome-icon>
</template>

<script setup lang="ts">
  const { darkMode } = defineProps<{
    darkMode: boolean
  }>()
</script>
