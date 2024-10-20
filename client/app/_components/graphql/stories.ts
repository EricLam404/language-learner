import { gql } from "@/__generated__";

export const GET_STORIES = gql(`
    query GET_STORIES {
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
    mutation DELETE_STORY($id: ID!) {
        deleteStory(id: $id)
    }
`);

export const GET_PUBLIC_STORIES = gql(`
    query GET_PUBLIC_STORIES($page: Int, $pageSize: Int, $filters: StoryFilters) {
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
    query GET_STORY($storyId: ID!) {
        story(id: $storyId) {
            title,
            translatedTitle
            content
        }
    }
`);
