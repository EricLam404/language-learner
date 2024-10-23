import { gql } from "@/__generated__";

export const GET_FLASHCARD_SETS = gql(`
    query GetFlashcardSets {
        flashcardSets {
            description
            id
            name
            languageName
            userId
        }
    }
`);

export const CREATE_FLASHCARD_SET = gql(`
    mutation CreateFlashcardSet($languageName: String!, $name: String!, $description: String) {
        createFlashcardSet(languageName: $languageName, name: $name, description: $description) {
            description
            id
            name
            userId
        }
    }
`);

export const DELETE_FLASHCARD_SET = gql(`
    mutation DeleteFlashcardSet($deleteFlashcardSetId: ID!) {
        deleteFlashcardSet(id: $deleteFlashcardSetId)
    }
`);