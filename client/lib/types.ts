import { type ChatSessionQuery, type FlashcardSetQuery } from "@/__generated__/graphql";

export type FlashcardSet = NonNullable<FlashcardSetQuery["flashcardSet"]>;
export type Flashcard = NonNullable<FlashcardSet["cards"]>[number];
export type ChatSession = NonNullable<ChatSessionQuery["chatSession"]>;
export type ChatMessage = NonNullable<ChatSession["messages"]>[number];