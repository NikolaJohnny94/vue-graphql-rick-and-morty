<template>
  <Character :slug="slug" />
</template>

<script setup lang="ts">
  import Character from '@/components/Character/Character.vue'

  const { slug } = defineProps<{ slug: string }>()
</script>
