import { gql } from "@/__generated__";

export const CREATE_USER = gql(`
    mutation CreateUser($username: String!, $languages: [String!]!) {
        createUser(username: $username, languages: $languages) {
            username
            languages {
                languageName
            }
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
