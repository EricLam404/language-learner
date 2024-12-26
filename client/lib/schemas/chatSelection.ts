import { z } from "zod";

export const chatSelectionFormSchema = z.object({
    language: z.string().min(1, 'Please select a language'),
    difficulty: z.enum(['Beginner', 'Intermediate', 'Advanced']),
    flashcardMode: z.boolean(),
    flashcardSet: z.string().optional(),
    chatMode: z.enum(['free', 'roleplay']).optional(),
  }).superRefine((data, ctx) => {
    if (data.flashcardMode) {
      if (!data.flashcardSet) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Flashcard set is required when flashcard mode is enabled",
          path: ["flashcardSet"],
        });
      }
      if (!data.chatMode) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Chat mode is required when flashcard mode is enabled",
          path: ["chatMode"],
        });
      }
    }
  });
  
export type ChatSelectionFormValues = z.infer<typeof chatSelectionFormSchema>
  