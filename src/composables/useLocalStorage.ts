import type { UseLocalStorageReturnType } from '@/types/UseLocalStorageReturnType.type'

const useLocalStorage = (
  key: string,
  newValue?: any
): UseLocalStorageReturnType => {
  const item: any = getItemFromLocalStorage(key)

  if (newValue !== undefined) {
    localStorage.setItem(
      key,
      typeof newValue == 'string' ? JSON.stringify(newValue) : newValue
    )
  }
  return { item }
}

function getItemFromLocalStorage(key: string): any {
  return JSON.parse(localStorage.getItem(key) as string)
}

export default useLocalStorage
