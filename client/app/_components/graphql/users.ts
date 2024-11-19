import { gql } from "@/__generated__";

export const CREATE_USER = gql(`
    mutation CreateUser($username: String!, $languages: [String!]!) {
        createUser(username: $username, languages: $languages) {
            username
            languages {
                name
            }
        }
    }
`);

export const GET_USER = gql(`
    query GetUser($userId: ID!) {
        user(userId: $userId) {
        username
        userId
        stories {
            id
            languageName
            title
            tags {
                id
                name
        }
        difficulty
        description
        }
        flashcardSets {
            id
            name
            description
            totalCards
            languageName
            }
        }
    }
`);