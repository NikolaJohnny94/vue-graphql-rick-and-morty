<template>
  <Spinner v-if="loading" />
  <div
    v-else
    class="max-w-sm m-auto mt-[5%] p-4 cursor-pointer"
    :title="character?.name"
  >
    <p class="text-center font-bold text-2xl p-3">{{ character?.name }}</p>
    <img class="rounded m-auto" :src="character?.image" />
    <div class="p-6">
      <p class="text-xl">
        <strong>Status</strong>:
        <strong
          :class="{
            'text-red-500': character?.status === 'Dead',
            'text-green-500': character?.status === 'Alive',
            'text-orange-500': character?.status === 'unknown',
          }"
          >{{ character?.status }}</strong
        >
      </p>
      <p class="text-xl">
        <strong>Location</strong>: {{ character?.location?.name }}
      </p>
      <p class="text-xl"><strong>Species</strong>: {{ character?.species }}</p>
      <p class="text-xl"><strong>Gender</strong>: {{ character?.gender }}</p>
      <p class="text-xl">
        <strong>Location</strong>: {{ character?.location?.name }}
      </p>
    </div>
  </div>
  <Button
    :buttonText="GO_BACK_BUTTON_TEXT"
    @onClick="goBack"
    class="w-20 bg-red-500 p-3 rounded-md text-white block mt-6 mx-auto"
  />
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { useRouter } from 'vue-router'
  import type { ComputedRef } from 'vue'
  import type { Router } from 'vue-router'
  import { useQuery } from '@vue/apollo-composable'
  import type { Character } from '@/types/Character.type'
  import Button from '@/components/common/Button/Button.vue'
  import Spinner from '@/components/common/Spinner/Spinner.vue'
  import { getCharacter } from '@/queries/index'
  import getNameAndIdFromUrl from '@/helpers/getNameAndIdFromUrl'
  import { GO_BACK_BUTTON_TEXT } from '@/constants'

  const router: Router = useRouter()

  const { slug } = defineProps<{ slug: string }>()

  const { characterName, characterId } = getNameAndIdFromUrl(slug)

  const { result, loading } = useQuery(getCharacter, {
    name: characterName,
  })

  const goBack = (): void => {
    router.push({ name: 'home' })
  }

  const character: ComputedRef<Character> = computed(() =>
    result.value?.characters.results.find(
      (character: Character) => +character.id === +characterId
    )
  )
</script>
