import { ref, watchEffect } from 'vue'
import type { Ref } from 'vue'
import type { UseDarkModeReturnType } from '@/types/UseDarkModeReturnType.type'
import useLocalStorage from './useLocalStorage'

const useDarkMode = (): UseDarkModeReturnType => {
  const { item } = useLocalStorage('darkMode')

  const darkMode: Ref<boolean> = ref(item)

  watchEffect(() => {
    if (darkMode.value === true) {
      document.querySelector('html')?.classList.add('dark')
      useLocalStorage('darkMode', true)
    } else {
      document.querySelector('html')?.classList.remove('dark')
      useLocalStorage('darkMode', false)
    }
  })
  return { darkMode }
}

export default useDarkMode
