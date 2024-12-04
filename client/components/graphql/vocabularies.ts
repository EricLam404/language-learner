import { gql } from "@/__generated__";

export const GET_VOCABULARY = gql(`
    query GetVocabularies {
        vocabularies {
            id
            languageName
            word
            meaning
            example
        }
    }
`);

export const CREATE_VOCABULARY = gql(`
    mutation CreateVocabulary(
        $word: String!
        $meaning: String!
        $example: String
        $languageName: String!
    ) {
        createVocabulary(
            word: $word
            meaning: $meaning
            example: $example
            languageName: $languageName
        ) {
            example
            id
            meaning
        }
    }
`);

export const UPDATE_VOCABULARY = gql(`
    mutation UpdateVocabulary(
        $id: ID!
        $word: String!
        $meaning: String!
        $example: String
        $languageName: String!
    ) {
    updateVocabulary(
        id: $id
        word: $word
        meaning: $meaning
        example: $example
        languageName: $languageName
    ) {
        id,
        word,
        meaning,
        example,
        languageName
    }
    }
`);

export const DELETE_VOCABULARY = gql(`
    mutation DeleteVocabulary($id: ID!) {
        deleteVocabulary(id: $id)
    }
`);

