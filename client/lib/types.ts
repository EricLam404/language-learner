import { FlashcardSetQuery } from "@/__generated__/graphql";

export type FlashcardSet = NonNullable<FlashcardSetQuery["flashcardSet"]>;
export type Flashcard = NonNullable<FlashcardSet["cards"]>[number];