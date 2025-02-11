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
    "\n    mutation CreateChatSession($languageName: String!, $difficulty: Int!, $flashcardMode: Boolean!, $chatMode: String!) {\n        createChatSession(languageName: $languageName, difficulty: $difficulty, flashcardMode: $flashcardMode, chatMode: $chatMode) {\n            updatedAt\n            name\n            languageName\n            id\n            flashcardSetId\n            difficulty\n            createdAt\n        }\n    }\n": types.CreateChatSessionDocument,
    "\n    mutation CreateChatMessage($sessionId: ID!, $role: String!, $content: String!) {\n        createChatMessage(sessionId: $sessionId, role: $role, content: $content) {\n            content\n            id\n            role\n            sessionId\n        }\n    }\n": types.CreateChatMessageDocument,
    "\n    query ChatSession($chatSessionId: ID!) {\n        chatSession(id: $chatSessionId) {\n            messages {\n                id\n                content\n                role\n                sessionId\n            }\n            name\n            languageName\n            difficulty\n        }\n    }\n": types.ChatSessionDocument,
    "\n    query GetFlashcardSets {\n        flashcardSets {\n            description\n            id\n            name\n            languageName\n            userId\n        }\n    }\n": types.GetFlashcardSetsDocument,
    "\n    query FlashcardSet($flashcardSetId: ID!) {\n        flashcardSet(id: $flashcardSetId) {\n            name\n            languageName\n            id\n            description\n            lastFrontFace\n            cards {\n                id\n                setId\n                nextReviewAt\n                interval\n                faces {\n                    id\n                    order\n                    type\n                    content\n                    isFront\n                }\n            }\n        }\n    }\n": types.FlashcardSetDocument,
    "\n    mutation CreateFlashcardSet($languageName: String!, $name: String!, $description: String) {\n        createFlashcardSet(languageName: $languageName, name: $name, description: $description) {\n            description\n            id\n            name\n            userId\n        }\n    }\n": types.CreateFlashcardSetDocument,
    "\n    mutation DeleteFlashcardSet($deleteFlashcardSetId: ID!) {\n        deleteFlashcardSet(id: $deleteFlashcardSetId)\n    }\n": types.DeleteFlashcardSetDocument,
    "\n    mutation UpdateFlashcardSet($updateFlashcardSetId: ID!, $languageName: String, $name: String, $description: String){\n        updateFlashcardSet(id: $updateFlashcardSetId, languageName: $languageName, name: $name, description: $description) {\n            id,\n            description,\n            name,\n            languageName\n        }\n    }\n": types.UpdateFlashcardSetDocument,
    "\n    query GetFlashcard($flashcardId: ID!) {\n        flashcard(id: $flashcardId) {\n            id\n            faces {\n                id\n                type\n                content\n            }\n        }\n    }\n": types.GetFlashcardDocument,
    "\n    mutation CreateFlashcard($setId: ID!, $faces: [FlashcardFaceInput!]!){\n        createFlashcard(setId: $setId, faces: $faces) {\n            id\n            setId\n            nextReviewAt\n            interval\n            faces {\n                id\n                order\n                type\n                content\n                isFront\n            }\n        }\n    }\n": types.CreateFlashcardDocument,
    "\n    mutation UpdateFlashcard($updateFlashcardId: ID!, $faces: [FlashcardFaceInput!]!){\n        updateFlashcard(id: $updateFlashcardId, faces: $faces) {\n            id\n            setId\n            nextReviewAt\n            interval\n            faces {\n                id\n                order\n                type\n                content\n                isFront\n            }\n        }\n    }\n": types.UpdateFlashcardDocument,
    "\n    mutation DeleteFlashcard($deleteFlashcardId: ID!) {\n        deleteFlashcard(id: $deleteFlashcardId)\n    }\n": types.DeleteFlashcardDocument,
    "\n    mutation GenerateFlashcardFaces($input: generateFlashcardFacesInput!) {\n        generateFlashcardFaces(input: $input) {\n            content\n            faceType\n        }\n    }\n": types.GenerateFlashcardFacesDocument,
    "\n    mutation UpdateStudiedFlashcard($id: ID!, $score: Int!) {\n        updateStudiedFlashcard(id: $id, score: $score) {\n            id\n            nextReviewAt\n        }\n    }\n": types.UpdateStudiedFlashcardDocument,
    "\n    query GetLanguages {\n        languages {\n            id\n            name\n        }\n    }\n": types.GetLanguagesDocument,
    "\n    query LanaguageFaceConfig($languageName: String!) {\n        languageFaceConfig(languageName: $languageName) {\n            languageName,\n            config,\n        }\n    }\n": types.LanaguageFaceConfigDocument,
    "\n    query GetStories {\n        stories {\n            completedAt\n            description\n            id\n            content\n            difficulty\n            imageUrl\n            languageName\n            title\n            translatedTitle\n            isPublished\n            tags {\n                name\n                id\n            }\n            chapters {\n                title,\n                content\n            }\n        }\n    }\n\n": types.GetStoriesDocument,
    "\n    mutation CreateStory($input: CreateStoryInput!) {\n        createStory(input: $input) {\n            completedAt\n            description\n            content\n            id\n            difficulty\n            imageUrl\n            languageName\n            title\n            translatedTitle\n            isPublished\n            tags {\n                id\n                name\n            }\n        }\n    }\n": types.CreateStoryDocument,
    "\n    mutation UpdateStory($updateStoryId: ID!, $input: UpdateStoryInput!) {\n        updateStory(id: $updateStoryId, input: $input) {\n            completedAt\n            description\n            content\n            id\n            difficulty\n            imageUrl\n            languageName\n            title\n            translatedTitle\n            isPublished\n            tags {\n                id\n                name\n            }\n        }\n    }\n": types.UpdateStoryDocument,
    "\n    mutation DeleteStory($id: ID!) {\n        deleteStory(id: $id)\n    }\n": types.DeleteStoryDocument,
    "\n    query GetPublicStories($page: Int, $pageSize: Int, $filters: StoryFilters) {\n        publicStories(page: $page, pageSize: $pageSize, filters: $filters) {\n            hasNextPage\n            stories {\n                id\n                title\n                description\n                difficulty\n                languageName\n                user {\n                    username\n                }\n                tags {\n                    name\n                }\n            }\n            totalCount\n        }\n    }\n": types.GetPublicStoriesDocument,
    "\n    query GetStory($storyId: ID!) {\n        story(id: $storyId) {\n            title,\n            translatedTitle\n            content\n        }\n    }\n": types.GetStoryDocument,
    "\n    mutation CreateUser($username: String!, $languages: [String!]!) {\n        createUser(username: $username, languages: $languages) {\n            username\n            languages {\n                name\n            }\n        }\n    }\n": types.CreateUserDocument,
    "\n    query GetUser($userId: ID!) {\n        user(userId: $userId) {\n            username\n            userId\n            stories {\n                id\n                languageName\n                title\n                tags {\n                    id\n                    name\n                }\n                difficulty\n                description\n            }\n            flashcardSets {\n                id\n                name\n                description\n                totalCards\n                languageName\n            }\n            chatSessions {\n                id\n                name\n                updatedAt\n            }\n        }\n    }\n": types.GetUserDocument,
    "\n    query GetVocabularies {\n        vocabularies {\n            id\n            languageName\n            word\n            meaning\n            example\n        }\n    }\n": types.GetVocabulariesDocument,
    "\n    mutation CreateVocabulary(\n        $word: String!\n        $meaning: String!\n        $example: String\n        $languageName: String!\n    ) {\n        createVocabulary(\n            word: $word\n            meaning: $meaning\n            example: $example\n            languageName: $languageName\n        ) {\n            example\n            id\n            meaning\n        }\n    }\n": types.CreateVocabularyDocument,
    "\n    mutation UpdateVocabulary(\n        $id: ID!\n        $word: String!\n        $meaning: String!\n        $example: String\n        $languageName: String!\n    ) {\n    updateVocabulary(\n        id: $id\n        word: $word\n        meaning: $meaning\n        example: $example\n        languageName: $languageName\n    ) {\n        id,\n        word,\n        meaning,\n        example,\n        languageName\n    }\n    }\n": types.UpdateVocabularyDocument,
    "\n    mutation DeleteVocabulary($id: ID!) {\n        deleteVocabulary(id: $id)\n    }\n": types.DeleteVocabularyDocument,
    "\n                                fragment Flashcard on Flashcard {\n                                    id\n                                    nextReviewAt\n                                    interval\n                                    faces {\n                                        id\n                                        order\n                                        type\n                                        content\n                                        isFront\n                                    }\n                                }\n                            ": types.FlashcardFragmentDoc,
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
export function gql(source: "\n    mutation CreateChatSession($languageName: String!, $difficulty: Int!, $flashcardMode: Boolean!, $chatMode: String!) {\n        createChatSession(languageName: $languageName, difficulty: $difficulty, flashcardMode: $flashcardMode, chatMode: $chatMode) {\n            updatedAt\n            name\n            languageName\n            id\n            flashcardSetId\n            difficulty\n            createdAt\n        }\n    }\n"): (typeof documents)["\n    mutation CreateChatSession($languageName: String!, $difficulty: Int!, $flashcardMode: Boolean!, $chatMode: String!) {\n        createChatSession(languageName: $languageName, difficulty: $difficulty, flashcardMode: $flashcardMode, chatMode: $chatMode) {\n            updatedAt\n            name\n            languageName\n            id\n            flashcardSetId\n            difficulty\n            createdAt\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation CreateChatMessage($sessionId: ID!, $role: String!, $content: String!) {\n        createChatMessage(sessionId: $sessionId, role: $role, content: $content) {\n            content\n            id\n            role\n            sessionId\n        }\n    }\n"): (typeof documents)["\n    mutation CreateChatMessage($sessionId: ID!, $role: String!, $content: String!) {\n        createChatMessage(sessionId: $sessionId, role: $role, content: $content) {\n            content\n            id\n            role\n            sessionId\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query ChatSession($chatSessionId: ID!) {\n        chatSession(id: $chatSessionId) {\n            messages {\n                id\n                content\n                role\n                sessionId\n            }\n            name\n            languageName\n            difficulty\n        }\n    }\n"): (typeof documents)["\n    query ChatSession($chatSessionId: ID!) {\n        chatSession(id: $chatSessionId) {\n            messages {\n                id\n                content\n                role\n                sessionId\n            }\n            name\n            languageName\n            difficulty\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetFlashcardSets {\n        flashcardSets {\n            description\n            id\n            name\n            languageName\n            userId\n        }\n    }\n"): (typeof documents)["\n    query GetFlashcardSets {\n        flashcardSets {\n            description\n            id\n            name\n            languageName\n            userId\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query FlashcardSet($flashcardSetId: ID!) {\n        flashcardSet(id: $flashcardSetId) {\n            name\n            languageName\n            id\n            description\n            lastFrontFace\n            cards {\n                id\n                setId\n                nextReviewAt\n                interval\n                faces {\n                    id\n                    order\n                    type\n                    content\n                    isFront\n                }\n            }\n        }\n    }\n"): (typeof documents)["\n    query FlashcardSet($flashcardSetId: ID!) {\n        flashcardSet(id: $flashcardSetId) {\n            name\n            languageName\n            id\n            description\n            lastFrontFace\n            cards {\n                id\n                setId\n                nextReviewAt\n                interval\n                faces {\n                    id\n                    order\n                    type\n                    content\n                    isFront\n                }\n            }\n        }\n    }\n"];
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
export function gql(source: "\n    mutation UpdateFlashcardSet($updateFlashcardSetId: ID!, $languageName: String, $name: String, $description: String){\n        updateFlashcardSet(id: $updateFlashcardSetId, languageName: $languageName, name: $name, description: $description) {\n            id,\n            description,\n            name,\n            languageName\n        }\n    }\n"): (typeof documents)["\n    mutation UpdateFlashcardSet($updateFlashcardSetId: ID!, $languageName: String, $name: String, $description: String){\n        updateFlashcardSet(id: $updateFlashcardSetId, languageName: $languageName, name: $name, description: $description) {\n            id,\n            description,\n            name,\n            languageName\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetFlashcard($flashcardId: ID!) {\n        flashcard(id: $flashcardId) {\n            id\n            faces {\n                id\n                type\n                content\n            }\n        }\n    }\n"): (typeof documents)["\n    query GetFlashcard($flashcardId: ID!) {\n        flashcard(id: $flashcardId) {\n            id\n            faces {\n                id\n                type\n                content\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation CreateFlashcard($setId: ID!, $faces: [FlashcardFaceInput!]!){\n        createFlashcard(setId: $setId, faces: $faces) {\n            id\n            setId\n            nextReviewAt\n            interval\n            faces {\n                id\n                order\n                type\n                content\n                isFront\n            }\n        }\n    }\n"): (typeof documents)["\n    mutation CreateFlashcard($setId: ID!, $faces: [FlashcardFaceInput!]!){\n        createFlashcard(setId: $setId, faces: $faces) {\n            id\n            setId\n            nextReviewAt\n            interval\n            faces {\n                id\n                order\n                type\n                content\n                isFront\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation UpdateFlashcard($updateFlashcardId: ID!, $faces: [FlashcardFaceInput!]!){\n        updateFlashcard(id: $updateFlashcardId, faces: $faces) {\n            id\n            setId\n            nextReviewAt\n            interval\n            faces {\n                id\n                order\n                type\n                content\n                isFront\n            }\n        }\n    }\n"): (typeof documents)["\n    mutation UpdateFlashcard($updateFlashcardId: ID!, $faces: [FlashcardFaceInput!]!){\n        updateFlashcard(id: $updateFlashcardId, faces: $faces) {\n            id\n            setId\n            nextReviewAt\n            interval\n            faces {\n                id\n                order\n                type\n                content\n                isFront\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation DeleteFlashcard($deleteFlashcardId: ID!) {\n        deleteFlashcard(id: $deleteFlashcardId)\n    }\n"): (typeof documents)["\n    mutation DeleteFlashcard($deleteFlashcardId: ID!) {\n        deleteFlashcard(id: $deleteFlashcardId)\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation GenerateFlashcardFaces($input: generateFlashcardFacesInput!) {\n        generateFlashcardFaces(input: $input) {\n            content\n            faceType\n        }\n    }\n"): (typeof documents)["\n    mutation GenerateFlashcardFaces($input: generateFlashcardFacesInput!) {\n        generateFlashcardFaces(input: $input) {\n            content\n            faceType\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation UpdateStudiedFlashcard($id: ID!, $score: Int!) {\n        updateStudiedFlashcard(id: $id, score: $score) {\n            id\n            nextReviewAt\n        }\n    }\n"): (typeof documents)["\n    mutation UpdateStudiedFlashcard($id: ID!, $score: Int!) {\n        updateStudiedFlashcard(id: $id, score: $score) {\n            id\n            nextReviewAt\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetLanguages {\n        languages {\n            id\n            name\n        }\n    }\n"): (typeof documents)["\n    query GetLanguages {\n        languages {\n            id\n            name\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query LanaguageFaceConfig($languageName: String!) {\n        languageFaceConfig(languageName: $languageName) {\n            languageName,\n            config,\n        }\n    }\n"): (typeof documents)["\n    query LanaguageFaceConfig($languageName: String!) {\n        languageFaceConfig(languageName: $languageName) {\n            languageName,\n            config,\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetStories {\n        stories {\n            completedAt\n            description\n            id\n            content\n            difficulty\n            imageUrl\n            languageName\n            title\n            translatedTitle\n            isPublished\n            tags {\n                name\n                id\n            }\n            chapters {\n                title,\n                content\n            }\n        }\n    }\n\n"): (typeof documents)["\n    query GetStories {\n        stories {\n            completedAt\n            description\n            id\n            content\n            difficulty\n            imageUrl\n            languageName\n            title\n            translatedTitle\n            isPublished\n            tags {\n                name\n                id\n            }\n            chapters {\n                title,\n                content\n            }\n        }\n    }\n\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation CreateStory($input: CreateStoryInput!) {\n        createStory(input: $input) {\n            completedAt\n            description\n            content\n            id\n            difficulty\n            imageUrl\n            languageName\n            title\n            translatedTitle\n            isPublished\n            tags {\n                id\n                name\n            }\n        }\n    }\n"): (typeof documents)["\n    mutation CreateStory($input: CreateStoryInput!) {\n        createStory(input: $input) {\n            completedAt\n            description\n            content\n            id\n            difficulty\n            imageUrl\n            languageName\n            title\n            translatedTitle\n            isPublished\n            tags {\n                id\n                name\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation UpdateStory($updateStoryId: ID!, $input: UpdateStoryInput!) {\n        updateStory(id: $updateStoryId, input: $input) {\n            completedAt\n            description\n            content\n            id\n            difficulty\n            imageUrl\n            languageName\n            title\n            translatedTitle\n            isPublished\n            tags {\n                id\n                name\n            }\n        }\n    }\n"): (typeof documents)["\n    mutation UpdateStory($updateStoryId: ID!, $input: UpdateStoryInput!) {\n        updateStory(id: $updateStoryId, input: $input) {\n            completedAt\n            description\n            content\n            id\n            difficulty\n            imageUrl\n            languageName\n            title\n            translatedTitle\n            isPublished\n            tags {\n                id\n                name\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation DeleteStory($id: ID!) {\n        deleteStory(id: $id)\n    }\n"): (typeof documents)["\n    mutation DeleteStory($id: ID!) {\n        deleteStory(id: $id)\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetPublicStories($page: Int, $pageSize: Int, $filters: StoryFilters) {\n        publicStories(page: $page, pageSize: $pageSize, filters: $filters) {\n            hasNextPage\n            stories {\n                id\n                title\n                description\n                difficulty\n                languageName\n                user {\n                    username\n                }\n                tags {\n                    name\n                }\n            }\n            totalCount\n        }\n    }\n"): (typeof documents)["\n    query GetPublicStories($page: Int, $pageSize: Int, $filters: StoryFilters) {\n        publicStories(page: $page, pageSize: $pageSize, filters: $filters) {\n            hasNextPage\n            stories {\n                id\n                title\n                description\n                difficulty\n                languageName\n                user {\n                    username\n                }\n                tags {\n                    name\n                }\n            }\n            totalCount\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetStory($storyId: ID!) {\n        story(id: $storyId) {\n            title,\n            translatedTitle\n            content\n        }\n    }\n"): (typeof documents)["\n    query GetStory($storyId: ID!) {\n        story(id: $storyId) {\n            title,\n            translatedTitle\n            content\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation CreateUser($username: String!, $languages: [String!]!) {\n        createUser(username: $username, languages: $languages) {\n            username\n            languages {\n                name\n            }\n        }\n    }\n"): (typeof documents)["\n    mutation CreateUser($username: String!, $languages: [String!]!) {\n        createUser(username: $username, languages: $languages) {\n            username\n            languages {\n                name\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetUser($userId: ID!) {\n        user(userId: $userId) {\n            username\n            userId\n            stories {\n                id\n                languageName\n                title\n                tags {\n                    id\n                    name\n                }\n                difficulty\n                description\n            }\n            flashcardSets {\n                id\n                name\n                description\n                totalCards\n                languageName\n            }\n            chatSessions {\n                id\n                name\n                updatedAt\n            }\n        }\n    }\n"): (typeof documents)["\n    query GetUser($userId: ID!) {\n        user(userId: $userId) {\n            username\n            userId\n            stories {\n                id\n                languageName\n                title\n                tags {\n                    id\n                    name\n                }\n                difficulty\n                description\n            }\n            flashcardSets {\n                id\n                name\n                description\n                totalCards\n                languageName\n            }\n            chatSessions {\n                id\n                name\n                updatedAt\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetVocabularies {\n        vocabularies {\n            id\n            languageName\n            word\n            meaning\n            example\n        }\n    }\n"): (typeof documents)["\n    query GetVocabularies {\n        vocabularies {\n            id\n            languageName\n            word\n            meaning\n            example\n        }\n    }\n"];
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
export function gql(source: "\n                                fragment Flashcard on Flashcard {\n                                    id\n                                    nextReviewAt\n                                    interval\n                                    faces {\n                                        id\n                                        order\n                                        type\n                                        content\n                                        isFront\n                                    }\n                                }\n                            "): (typeof documents)["\n                                fragment Flashcard on Flashcard {\n                                    id\n                                    nextReviewAt\n                                    interval\n                                    faces {\n                                        id\n                                        order\n                                        type\n                                        content\n                                        isFront\n                                    }\n                                }\n                            "];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;