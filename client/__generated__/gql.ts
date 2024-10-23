/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n    query GetFlashcardSets {\n        flashcardSets {\n            description\n            id\n            name\n            languageName\n            userId\n        }\n    }\n": types.GetFlashcardSetsDocument,
    "\n    mutation CreateFlashcardSet($languageName: String!, $name: String!, $description: String) {\n        createFlashcardSet(languageName: $languageName, name: $name, description: $description) {\n            description\n            id\n            name\n            userId\n        }\n    }\n": types.CreateFlashcardSetDocument,
    "\n    mutation DeleteFlashcardSet($deleteFlashcardSetId: ID!) {\n        deleteFlashcardSet(id: $deleteFlashcardSetId)\n    }\n": types.DeleteFlashcardSetDocument,
    "\n    mutation CreateUser($username: String!, $languages: [String!]!) {\n        createUser(username: $username, languages: $languages) {\n            username\n            languages {\n                name\n            }\n        }\n    }\n": types.CreateUserDocument,
    "\n    mutation CreateVocabulary(\n        $word: String!\n        $meaning: String!\n        $example: String\n        $languageName: String!\n    ) {\n        createVocabulary(\n            word: $word\n            meaning: $meaning\n            example: $example\n            languageName: $languageName\n        ) {\n            example\n            id\n            meaning\n        }\n    }\n": types.CreateVocabularyDocument,
    "\n    mutation UpdateVocabulary(\n        $id: ID!\n        $word: String!\n        $meaning: String!\n        $example: String\n        $languageName: String!\n    ) {\n    updateVocabulary(\n        id: $id\n        word: $word\n        meaning: $meaning\n        example: $example\n        languageName: $languageName\n    ) {\n        id,\n        word,\n        meaning,\n        example,\n        languageName\n    }\n    }\n": types.UpdateVocabularyDocument,
    "\n    mutation DeleteVocabulary($id: ID!) {\n        deleteVocabulary(id: $id)\n    }\n": types.DeleteVocabularyDocument,
    "\n    query GetLanguages {\n        languages {\n            id\n            name\n        }\n    }\n": types.GetLanguagesDocument,
    "\n    query GET_VOCABULARIES {\n        vocabularies {\n            id\n            languageName\n            word\n            meaning\n            example\n        }\n    }\n": types.Get_VocabulariesDocument,
    "\n    query GET_STORIES {\n        stories {\n            completedAt\n            description\n            id\n            content\n            difficulty\n            imageUrl\n            languageName\n            title\n            translatedTitle\n            isPublished\n            tags {\n                name\n                id\n            }\n            chapters {\n                title,\n                content\n            }\n        }\n    }\n\n": types.Get_StoriesDocument,
    "\n    mutation CREATE_STORY($input: CreateStoryInput!) {\n        createStory(input: $input) {\n            completedAt\n            description\n            content\n            id\n            difficulty\n            imageUrl\n            languageName\n            title\n            translatedTitle\n            isPublished\n            tags {\n                id\n                name\n            }\n        }\n    }\n": types.Create_StoryDocument,
    "\n    mutation UPDATE_STORY($updateStoryId: ID!, $input: UpdateStoryInput!) {\n        updateStory(id: $updateStoryId, input: $input) {\n            completedAt\n            description\n            content\n            id\n            difficulty\n            imageUrl\n            languageName\n            title\n            translatedTitle\n            isPublished\n            tags {\n                id\n                name\n            }\n        }\n    }\n": types.Update_StoryDocument,
    "\n    mutation DELETE_STORY($id: ID!) {\n        deleteStory(id: $id)\n    }\n": types.Delete_StoryDocument,
    "\n    query GET_PUBLIC_STORIES($page: Int, $pageSize: Int, $filters: StoryFilters) {\n        publicStories(page: $page, pageSize: $pageSize, filters: $filters) {\n            hasNextPage\n            stories {\n                id\n                title\n                description\n                difficulty\n                languageName\n                user {\n                    username\n                }\n                tags {\n                    name\n                }\n            }\n            totalCount\n        }\n    }\n": types.Get_Public_StoriesDocument,
    "\n    query GET_STORY($storyId: ID!) {\n        story(id: $storyId) {\n            title,\n            translatedTitle\n            content\n        }\n    }\n": types.Get_StoryDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetFlashcardSets {\n        flashcardSets {\n            description\n            id\n            name\n            languageName\n            userId\n        }\n    }\n"): (typeof documents)["\n    query GetFlashcardSets {\n        flashcardSets {\n            description\n            id\n            name\n            languageName\n            userId\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation CreateFlashcardSet($languageName: String!, $name: String!, $description: String) {\n        createFlashcardSet(languageName: $languageName, name: $name, description: $description) {\n            description\n            id\n            name\n            userId\n        }\n    }\n"): (typeof documents)["\n    mutation CreateFlashcardSet($languageName: String!, $name: String!, $description: String) {\n        createFlashcardSet(languageName: $languageName, name: $name, description: $description) {\n            description\n            id\n            name\n            userId\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation DeleteFlashcardSet($deleteFlashcardSetId: ID!) {\n        deleteFlashcardSet(id: $deleteFlashcardSetId)\n    }\n"): (typeof documents)["\n    mutation DeleteFlashcardSet($deleteFlashcardSetId: ID!) {\n        deleteFlashcardSet(id: $deleteFlashcardSetId)\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation CreateUser($username: String!, $languages: [String!]!) {\n        createUser(username: $username, languages: $languages) {\n            username\n            languages {\n                name\n            }\n        }\n    }\n"): (typeof documents)["\n    mutation CreateUser($username: String!, $languages: [String!]!) {\n        createUser(username: $username, languages: $languages) {\n            username\n            languages {\n                name\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation CreateVocabulary(\n        $word: String!\n        $meaning: String!\n        $example: String\n        $languageName: String!\n    ) {\n        createVocabulary(\n            word: $word\n            meaning: $meaning\n            example: $example\n            languageName: $languageName\n        ) {\n            example\n            id\n            meaning\n        }\n    }\n"): (typeof documents)["\n    mutation CreateVocabulary(\n        $word: String!\n        $meaning: String!\n        $example: String\n        $languageName: String!\n    ) {\n        createVocabulary(\n            word: $word\n            meaning: $meaning\n            example: $example\n            languageName: $languageName\n        ) {\n            example\n            id\n            meaning\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation UpdateVocabulary(\n        $id: ID!\n        $word: String!\n        $meaning: String!\n        $example: String\n        $languageName: String!\n    ) {\n    updateVocabulary(\n        id: $id\n        word: $word\n        meaning: $meaning\n        example: $example\n        languageName: $languageName\n    ) {\n        id,\n        word,\n        meaning,\n        example,\n        languageName\n    }\n    }\n"): (typeof documents)["\n    mutation UpdateVocabulary(\n        $id: ID!\n        $word: String!\n        $meaning: String!\n        $example: String\n        $languageName: String!\n    ) {\n    updateVocabulary(\n        id: $id\n        word: $word\n        meaning: $meaning\n        example: $example\n        languageName: $languageName\n    ) {\n        id,\n        word,\n        meaning,\n        example,\n        languageName\n    }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation DeleteVocabulary($id: ID!) {\n        deleteVocabulary(id: $id)\n    }\n"): (typeof documents)["\n    mutation DeleteVocabulary($id: ID!) {\n        deleteVocabulary(id: $id)\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetLanguages {\n        languages {\n            id\n            name\n        }\n    }\n"): (typeof documents)["\n    query GetLanguages {\n        languages {\n            id\n            name\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GET_VOCABULARIES {\n        vocabularies {\n            id\n            languageName\n            word\n            meaning\n            example\n        }\n    }\n"): (typeof documents)["\n    query GET_VOCABULARIES {\n        vocabularies {\n            id\n            languageName\n            word\n            meaning\n            example\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GET_STORIES {\n        stories {\n            completedAt\n            description\n            id\n            content\n            difficulty\n            imageUrl\n            languageName\n            title\n            translatedTitle\n            isPublished\n            tags {\n                name\n                id\n            }\n            chapters {\n                title,\n                content\n            }\n        }\n    }\n\n"): (typeof documents)["\n    query GET_STORIES {\n        stories {\n            completedAt\n            description\n            id\n            content\n            difficulty\n            imageUrl\n            languageName\n            title\n            translatedTitle\n            isPublished\n            tags {\n                name\n                id\n            }\n            chapters {\n                title,\n                content\n            }\n        }\n    }\n\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation CREATE_STORY($input: CreateStoryInput!) {\n        createStory(input: $input) {\n            completedAt\n            description\n            content\n            id\n            difficulty\n            imageUrl\n            languageName\n            title\n            translatedTitle\n            isPublished\n            tags {\n                id\n                name\n            }\n        }\n    }\n"): (typeof documents)["\n    mutation CREATE_STORY($input: CreateStoryInput!) {\n        createStory(input: $input) {\n            completedAt\n            description\n            content\n            id\n            difficulty\n            imageUrl\n            languageName\n            title\n            translatedTitle\n            isPublished\n            tags {\n                id\n                name\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation UPDATE_STORY($updateStoryId: ID!, $input: UpdateStoryInput!) {\n        updateStory(id: $updateStoryId, input: $input) {\n            completedAt\n            description\n            content\n            id\n            difficulty\n            imageUrl\n            languageName\n            title\n            translatedTitle\n            isPublished\n            tags {\n                id\n                name\n            }\n        }\n    }\n"): (typeof documents)["\n    mutation UPDATE_STORY($updateStoryId: ID!, $input: UpdateStoryInput!) {\n        updateStory(id: $updateStoryId, input: $input) {\n            completedAt\n            description\n            content\n            id\n            difficulty\n            imageUrl\n            languageName\n            title\n            translatedTitle\n            isPublished\n            tags {\n                id\n                name\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation DELETE_STORY($id: ID!) {\n        deleteStory(id: $id)\n    }\n"): (typeof documents)["\n    mutation DELETE_STORY($id: ID!) {\n        deleteStory(id: $id)\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GET_PUBLIC_STORIES($page: Int, $pageSize: Int, $filters: StoryFilters) {\n        publicStories(page: $page, pageSize: $pageSize, filters: $filters) {\n            hasNextPage\n            stories {\n                id\n                title\n                description\n                difficulty\n                languageName\n                user {\n                    username\n                }\n                tags {\n                    name\n                }\n            }\n            totalCount\n        }\n    }\n"): (typeof documents)["\n    query GET_PUBLIC_STORIES($page: Int, $pageSize: Int, $filters: StoryFilters) {\n        publicStories(page: $page, pageSize: $pageSize, filters: $filters) {\n            hasNextPage\n            stories {\n                id\n                title\n                description\n                difficulty\n                languageName\n                user {\n                    username\n                }\n                tags {\n                    name\n                }\n            }\n            totalCount\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GET_STORY($storyId: ID!) {\n        story(id: $storyId) {\n            title,\n            translatedTitle\n            content\n        }\n    }\n"): (typeof documents)["\n    query GET_STORY($storyId: ID!) {\n        story(id: $storyId) {\n            title,\n            translatedTitle\n            content\n        }\n    }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;