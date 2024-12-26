import { gql } from "@/__generated__";

export const CREATE_CHAT_SESSION = gql(`
    mutation CreateChatSession($languageName: String!, $difficulty: Int!, $flashcardMode: Boolean!, $chatMode: String!) {
        createChatSession(languageName: $languageName, difficulty: $difficulty, flashcardMode: $flashcardMode, chatMode: $chatMode) {
            updatedAt
            name
            languageName
            id
            flashcardSetId
            difficulty
            createdAt
        }
    }
`);

export const CREATE_CHAT_MESSAGE = gql(`
    mutation CreateChatMessage($sessionId: ID!, $role: String!, $content: String!) {
        createChatMessage(sessionId: $sessionId, role: $role, content: $content) {
            content
            id
            role
            sessionId
        }
    }
`);

export const GET_CHAT_SESSION = gql(`
    query ChatSession($chatSessionId: ID!) {
        chatSession(id: $chatSessionId) {
            messages {
                content
                role
            }
            name
            languageName
            difficulty
        }
    }
`);
