import { gql } from "@apollo/client";

export const CREATE_USER = gql`
    mutation CreateUser($email: String!, $username: String!) {
        createUser(email: $email, username: $username) {
            email
            username
        }
    }
`;