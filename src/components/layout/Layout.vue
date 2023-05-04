<template>
  <Header />
  <slot></slot>
  <Footer />
</template>

<script setup lang="ts">
  import Header from './components/Header/Header.vue'
  import Footer from './components/Footer/Footer.vue'
</script>
