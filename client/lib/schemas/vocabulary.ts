import { z } from "zod";

export const vocabularySchema = z.object({
    languageName: z.string().min(1, { message: "Language is required" }),
    word: z.string().min(1, { message: "Word is required" }),
    meaning: z.string().min(1, { message: "Meaning is required" }),
    example: z.string().optional(),
});

export type VocabularyFormValues = z.infer<typeof vocabularySchema>;