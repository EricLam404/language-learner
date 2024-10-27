import { z } from "zod";

export const flashcardSchema = z.object({
  front: z.string()
    .min(1, "Front text is required")
    .max(200, "Front text must be less than 200 characters"),
  back: z.string()
    .min(1, "Back text is required")
    .max(200, "Back text must be less than 200 characters"),
  pinyin: z.string()
    .max(100, "Pinyin must be less than 100 characters")
    .optional()
    .default(""),
  character: z.string()
    .max(100, "Character must be less than 100 characters")
    .optional()
    .default(""),
  example: z.string()
    .max(500, "Example must be less than 500 characters")
    .optional()
    .default("")
});

export type FlashcardFormValues = z.infer<typeof flashcardSchema>;