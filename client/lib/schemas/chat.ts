import { z } from "zod";

export const chatSchema = z.object({
    language: z.string().min(1, "Please select a language"),
    difficulty: z.enum(["beginner", "intermediate", "advanced"]),
    flashcardMode: z.boolean(),
    flashcardSet: z.string().optional(),
    chatMode: z.enum(["none", "free", "roleplay"]),
});

export type ChatFormData = z.infer<typeof chatSchema>;
