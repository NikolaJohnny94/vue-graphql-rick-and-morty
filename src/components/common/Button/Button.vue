<template>
  <button @click="$emit('onClick')" class="active:scale-95 shadow-lg">
    {{ buttonText }}
  </button>
</template>

<script setup lang="ts">
  const { buttonText } = defineProps<{
    buttonText: string
  }>()
</script>
