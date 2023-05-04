<template>
  <div
    @click="goToCharactersPage"
    class="max-w-sm rounded-md overflow-hidden shadow-lg mx-auto my-10 p-4 cursor-pointer h-[490px] transition-all ease-in-out duration-150 hover:shadow-xl hover:scale-105 sm:m-10 dark:hover:shadow-green-500"
    :title="`See ${character.name}'s details`"
  >
    <p
      class="text-center font-bold text-2xl p-3 h-28 flex flex-column justify-center items-center"
    >
      {{ character.name }}
    </p>
    <img class="rounded m-auto" v-lazy="character.image" />
    <div class="p-6">
      <p class="text-xl">
        <strong>Status</strong>:
        <strong
          :class="{
            'text-red-500': character.status === 'Dead',
            'text-green-500': character.status === 'Alive',
            'text-orange-500': character.status === 'unknown',
          }"
          >{{ characterStatus }}</strong
        >
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import type { ComputedRef } from 'vue'
  import { useRouter } from 'vue-router'
  import type { Router } from 'vue-router'
  import type { Character } from '@/types/Character.type'

  const router: Router = useRouter()

  const { character } = defineProps<{
    character: Character
  }>()

  const goToCharactersPage = (): void => {
    router.push({
      name: 'character',
      params: {
        slug: `${character.name.toLowerCase().replaceAll(' ', '-')}-no-${
          character.id
        }`,
      },
    })
  }

  const characterStatus: ComputedRef<string> = computed(() =>
    character.status === 'unknown'
      ? character.status.charAt(0).toLocaleUpperCase() +
        character.status.substring(1)
      : character.status
  )
</script>
