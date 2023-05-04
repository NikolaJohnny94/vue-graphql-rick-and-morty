<template>
  <RouterView v-slot="{ Component }">
    <Layout>
      <component :is="Component" />
    </Layout>
  </RouterView>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import type { Router, RouteLocationNormalized } from 'vue-router'
  import Layout from './components/layout/Layout.vue'
  import useLocalStorage from './composables/useLocalStorage'
  import useDarkMode from '@/composables/useDarkMode'

  const { item: currentPage } = useLocalStorage('currentPage')

  const router: Router = useRouter()
  const route: RouteLocationNormalized = useRoute()

  useDarkMode()

  if (!currentPage) {
    useLocalStorage('currentPage', 1)
  }

  onMounted(async () => {
    await router.isReady()
    if (!route.query.page) {
      router.push({ query: { page: currentPage } })
    }
  })
</script>

<style>
  body {
    @apply bg-white text-black dark:bg-black dark:text-white transition-all duration-150 ease-linear;
  }
</style>
