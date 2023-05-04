<template>
  <div class="flex justify-center mt-20">
    <span
      v-for="icon in icons"
      :key="uuidv4()"
      class="transition-all duration-300 ease-in-out hover:-translate-y-4 cursor-pointer"
    >
      <a :href="icon.url" :title="icon.title">
        <font-awesome-icon
          :icon="`fa-brands fa-${icon.name}`"
          :class="[
            {
              'text-twitter-color': icon.name === 'twitter',
              'text-linkedin-color': icon.name === 'linkedin-in',
            },
            'm-4 text-xl',
          ]"
        />
      </a>
    </span>
  </div>
</template>

<script setup lang="ts">
  import { v4 as uuidv4 } from 'uuid'
  import { icons } from '@/constants'
</script>
