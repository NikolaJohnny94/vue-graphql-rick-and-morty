export type Character = {
  __typename: string
  id: string
  name: string
  status: string
  species: string
  gender: string
  image: string
  location: {
    __typename: string
    name: string
  }
}
