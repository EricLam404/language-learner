import { gql } from "@/__generated__";

export const GET_LANGUAGE = gql(`
    query GetLanguages {
        languages {
            id
            name
        }
    }
`);

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
