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

export const GET_FLASHCARD_SET = gql(`
    query FlashcardSet($flashcardSetId: ID!) {
        flashcardSet(id: $flashcardSetId) {
            name
            languageName
            id
            description
            lastFrontFace
            cards {
                id
                setId
                nextReviewAt
                interval
                faces {
                    id
                    order
                    type
                    content
                    isFront
                }
            }
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

export const UPDATE_FLASHCARD_SET = gql(`
    mutation UpdateFlashcardSet($updateFlashcardSetId: ID!, $languageName: String, $name: String, $description: String){
        updateFlashcardSet(id: $updateFlashcardSetId, languageName: $languageName, name: $name, description: $description) {
            id,
            description,
            name,
            languageName
        }
    }
`);

export const GET_FLASHCARD = gql(`
    query GetFlashcard($flashcardId: ID!) {
        flashcard(id: $flashcardId) {
            id
            faces {
                id
                type
                content
            }
        }
    }
`);

export const CREATE_FLASHCARD = gql(`
    mutation CreateFlashcard($setId: ID!, $faces: [FlashcardFaceInput!]!){
        createFlashcard(setId: $setId, faces: $faces) {
            id
            setId
            nextReviewAt
            interval
            faces {
                id
                order
                type
                content
                isFront
            }
        }
    }
`);

export const UPDATE_FLASHCARD = gql(`
    mutation UpdateFlashcard($updateFlashcardId: ID!, $faces: [FlashcardFaceInput!]!){
        updateFlashcard(id: $updateFlashcardId, faces: $faces) {
            id
            faces {
                id
                type
                content
            }
        }
    }
`);

export const DELETE_FLASHCARD = gql(`
    mutation DeleteFlashcard($deleteFlashcardId: ID!) {
        deleteFlashcard(id: $deleteFlashcardId)
    }
`);

export const GENERATE_FLASHCARD_FACE = gql(`
    mutation GenerateFlashcardFaces($input: generateFlashcardFacesInput!) {
        generateFlashcardFaces(input: $input) {
            content
            faceType
        }
    }
`);

export const UPDATE_STUDIED_FLASHCARD = gql(`
    mutation UpdateStudiedFlashcard($id: ID!, $score: Int!) {
        updateStudiedFlashcard(id: $id, score: $score) {
            id
            nextReviewAt
        }
    }
`);
