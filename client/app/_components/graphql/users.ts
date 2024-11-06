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
