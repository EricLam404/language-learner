import { gql } from "@/__generated__";

export const GET_LANGUAGE = gql(`
    query GetLanguages {
        languages {
            id
            name
        }
    }
`);

export const GET_LANUAGE_FACE_CONFIG = gql(`
    query LanaguageFaceConfig($languageName: String!) {
        languageFaceConfig(languageName: $languageName) {
            languageName,
            config,
        }
    }
`);