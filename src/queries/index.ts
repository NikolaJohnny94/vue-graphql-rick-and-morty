import { gql } from 'graphql-tag'
import type { DocumentNode } from 'graphql'

export const getCharacters: DocumentNode = gql`
  query getCharacters($page: Int!) {
    characters(page: $page) {
      info {
        count
      }
      results {
        id
        name
        status
        species
        gender
        image
        status
        location {
          name
        }
      }
    }
  }
`

export const getCharacter: DocumentNode = gql`
  query getCharacter($name: String!) {
    characters(filter: { name: $name }) {
      info {
        count
      }
      results {
        id
        name
        status
        species
        gender
        image
        status
        location {
          name
        }
      }
    }
  }
`
