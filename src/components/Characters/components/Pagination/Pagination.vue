<template>
  <div class="flex justify-center mt-24">
    <Button
      :buttonText="PREVIOUS_BUTTON_TEXT"
      @onClick="previousPage"
      class="bg-green-500 mr-3 p-1 rounded-md text-white w-[70px]"
    />
    <div>
      <input
        ref="pageInput"
        type="number"
        min="1"
        :max="totalNumberOfPages"
        :value="page"
        class="w-10 border text-center rounded-md select-none dark:bg-black dark:text-white"
        @keyup.enter="getDesiredPage"
        title="Press enter to go to specified page"
      />
      <span class="ml-2">/</span>
      <span class="ml-3"> {{ totalNumberOfPages }}</span>
    </div>
    <Button
      :buttonText="NEXT_BUTTON_TEXT"
      @onClick="nextPage"
      class="bg-green-500 ml-7 p-1 rounded-md text-white w-[70px]"
    />
  </div>
</template>

<script setup lang="ts">
  import { ref, computed, onMounted } from 'vue'
  import type { Ref, ComputedRef } from 'vue'
  import { useRouter, useRoute } from 'vue-router'
  import type { Router, RouteLocationNormalized } from 'vue-router'
  import useLocalStorage from '@/composables/useLocalStorage'
  import pageActionController from '@/helpers/pageActionController'
  import type { PageEmits } from '@/types/PageEmits.type'
  import Button from '@/components/common/Button/Button.vue'
  import { NEXT_BUTTON_TEXT, PREVIOUS_BUTTON_TEXT } from '@/constants'

  const router: Router = useRouter()
  const route: RouteLocationNormalized = useRoute()

  const { item: currentPage } = useLocalStorage('currentPage')

  const page: Ref<number> = ref(currentPage)
  const pageInput: Ref<HTMLInputElement> = ref({} as HTMLInputElement)

  const { totalNumberOfCharacters } = defineProps<{
    totalNumberOfCharacters: number
  }>()

  const totalNumberOfPages: ComputedRef<number> = computed(() =>
    Math.ceil(totalNumberOfCharacters / 20)
  )

  const emits: PageEmits = defineEmits(['emitPageValue'])

  const nextPage = (): void => {
    pageActionController(page, 'nextPage', emits, router)
  }

  const previousPage = (): void => {
    pageActionController(page, 'previousPage', emits, router)
  }

  const getDesiredPage = (): void => {
    pageActionController(
      page,
      'getSpecificPage',
      emits,
      router,
      pageInput,
      totalNumberOfPages.value
    )
  }

  onMounted((): void => {
    if (+route.query.page > totalNumberOfPages.value) {
      router.push({ query: { page: currentPage } })
    }
  })
</script>
