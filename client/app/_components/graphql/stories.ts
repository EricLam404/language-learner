import { gql } from "@/__generated__";

export const GET_STORIES = gql(`
    query GET_STORIES{
        stories {
            completedAt
            description
            content
            id
            difficulty
            imageUrl
            languageName
            title
            tags {
                name
                id
            }
        }
    }
`);


export const CREATE_STORY = gql(`
    mutation CREATE_STORY($input: CreateStoryInput!) {
        createStory(input: $input) {
            completedAt
            description
            content
            id
            difficulty
            imageUrl
            languageName
            title
            tags {
                id
                name
            }
        }
    }
`);

export const UPDATE_STORY = gql(`
    mutation UPDATE_STORY($updateStoryId: ID!, $input: UpdateStoryInput!) {
        updateStory(id: $updateStoryId, input: $input) {
            completedAt
            description
            content
            id
            difficulty
            imageUrl
            languageName
            title
            tags {
                id
                name
            }
        }
    }
`);

export const DELETE_STORY = gql(`
    mutation DELETE_STORY($id: ID!) {
        deleteStory(id: $id)
    }
`);
