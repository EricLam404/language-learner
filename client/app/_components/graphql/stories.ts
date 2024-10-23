import { gql } from "@/__generated__";

export const GET_STORIES = gql(`
    query GetStories {
        stories {
            completedAt
            description
            id
            content
            difficulty
            imageUrl
            languageName
            title
            translatedTitle
            isPublished
            tags {
                name
                id
            }
            chapters {
                title,
                content
            }
        }
    }

`);

export const CREATE_STORY = gql(`
    mutation CreateStory($input: CreateStoryInput!) {
        createStory(input: $input) {
            completedAt
            description
            content
            id
            difficulty
            imageUrl
            languageName
            title
            translatedTitle
            isPublished
            tags {
                id
                name
            }
        }
    }
`);

export const UPDATE_STORY = gql(`
    mutation UpdateStory($updateStoryId: ID!, $input: UpdateStoryInput!) {
        updateStory(id: $updateStoryId, input: $input) {
            completedAt
            description
            content
            id
            difficulty
            imageUrl
            languageName
            title
            translatedTitle
            isPublished
            tags {
                id
                name
            }
        }
    }
`);

export const DELETE_STORY = gql(`
    mutation DeleteStory($id: ID!) {
        deleteStory(id: $id)
    }
`);

export const GET_PUBLIC_STORIES = gql(`
    query GetPublicStories($page: Int, $pageSize: Int, $filters: StoryFilters) {
        publicStories(page: $page, pageSize: $pageSize, filters: $filters) {
            hasNextPage
            stories {
                id
                title
                description
                difficulty
                languageName
                user {
                    username
                }
                tags {
                    name
                }
            }
            totalCount
        }
    }
`);

export const GET_STORY = gql(`
    query GetStory($storyId: ID!) {
        story(id: $storyId) {
            title,
            translatedTitle
            content
        }
    }
`);
