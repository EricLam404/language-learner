import { gql } from "@apollo/client";

export const CREATE_USER = gql`
    mutation CreateUser($username: String!, $languages: [String!]!) {
        createUser(username: $username, languages: $languages) {
            username,
            languages{
                languageName
            }
        }
    }
`;