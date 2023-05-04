import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client/core'
import type { NormalizedCacheObject } from '@apollo/client/core'

export const httpLink: ApolloLink = createHttpLink({
  uri: 'https://rickandmortyapi.com/graphql',
})

export const cache: InMemoryCache = new InMemoryCache()

export const apolloClient: ApolloClient<NormalizedCacheObject> =
  new ApolloClient({
    link: httpLink,
    cache,
  })
