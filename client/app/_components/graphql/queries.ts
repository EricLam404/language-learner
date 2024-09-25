import { gql } from "@/__generated__";

export const GET_LANGUAGE = gql(`
    query GetLanguages {
        languages {
            id
            name
        }
    }
`);

export const GET_VOCABULARY = gql(`
    query GET_VOCABULARIES {
        vocabularies {
            id
            languageName
            word
            meaning
            example
        }
    }
`);
