import { gql } from "@apollo/client";

export const GET_LANGUAGE = gql`
    query GetLanguages {
        languages {
            id
            name
        }
    }
`;