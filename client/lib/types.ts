import { GetFlashcardSetsQuery } from "@/__generated__/graphql";

export interface Flashcard {
    id: number;
    front: string;
    back: string;
    pinyin: string;
    character: string;
    example: string;
}

export type FlashcardSet = GetFlashcardSetsQuery["flashcardSets"][number];