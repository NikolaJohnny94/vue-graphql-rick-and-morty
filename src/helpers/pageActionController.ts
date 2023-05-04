import type { Ref } from 'vue'
import type { Router } from 'vue-router'
import type { PageEmits } from '@/types/PageEmits.type'
import useLocalStorage from '@/composables/useLocalStorage'

const pageActionController = (
  page: Ref<number>,
  action: string,
  emits: PageEmits,
  router: Router,
  pageInput?: Ref<HTMLInputElement>,
  maxPageInputValue?: number
): void => {
  switch (action) {
    case 'nextPage':
      page.value++
      emits('emitPageValue', page.value)
      useLocalStorage('currentPage', page.value)
      router.push({ query: { page: page.value } })
      break
    case 'previousPage':
      if (page.value > 0) {
        page.value--
        emits('emitPageValue', page.value)
        useLocalStorage('currentPage', page.value)
        router.push({ query: { page: page.value } })
      }
      break
    case 'getSpecificPage':
      if (pageInput) {
        if (+pageInput.value.value > maxPageInputValue) {
          page.value = maxPageInputValue
        } else {
          page.value = +pageInput.value.value
          emits('emitPageValue', page.value)
          useLocalStorage('currentPage', +pageInput.value.value)
          router.push({ query: { page: page.value } })
        }
      }
      break
  }
}

export default pageActionController
