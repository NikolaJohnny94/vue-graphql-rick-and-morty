<template>
  <Spinner v-if="loading" />
  <template v-else>
    <div class="grid m-auto lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
      <div v-for="character in characters" :key="character.id">
        <Card :character="character" />
      </div>
    </div>
    <Pagination
      v-model="page"
      :totalNumberOfCharacters="result?.characters.info?.count"
      @emitPageValue="(emittedPageValue:number) => (page = emittedPageValue)"
    />
  </template>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue'
  import type { Ref, ComputedRef } from 'vue'
  import { useQuery } from '@vue/apollo-composable'
  import Card from '@/components/common/Card/Card.vue'
  import Spinner from '@/components/common/Spinner/Spinner.vue'
  import Pagination from './components/Pagination/Pagination.vue'
  import { getCharacters } from '@/queries/index'
  import type { Character } from '@/types/Character.type'
  import useLocalStorage from '@/composables/useLocalStorage'

  const { item: currentPage } = useLocalStorage('currentPage')

  const page: Ref<number | undefined> = ref(currentPage)

  const { result, loading } = useQuery(getCharacters, { page })

  const characters: ComputedRef<Character[]> = computed(
    () => result.value?.characters.results
  )
</script>

<style scoped>
  input[type='number']::-webkit-outer-spin-button,
  input[type='number']::-webkit-inner-spin-button,
  input[type='number'] {
    -webkit-appearance: none;
  }
</style>
