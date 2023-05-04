import type { GetNameAndIdFromUrlReturnType } from '@/types/getNameAndIdFromUrlReturnType.type'

const getNameAndIdFromUrl = (slug: string): GetNameAndIdFromUrlReturnType => {
  const characterName: string = slug.split('no')[0].replaceAll('-', ' ')
  const characterId: string = slug.split('no')[1].replace('-', ' ')

  return { characterName, characterId }
}

export default getNameAndIdFromUrl
