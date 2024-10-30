import { z } from "zod";
import { levels } from "../difficultyLevels";

export const storySchema = z.object({
    languageName: z.string().min(1, { message: "Language is required" }),
    title: z.string().min(1, { message: "Title is required" }),
    translatedTitle: z.string().min(1, { message: "Translated Title is required" }),
    description: z.string().optional(),
    content: z.string().min(1, { message: "Content is required" }),
    difficulty: z.enum(levels as [string, ...string[]]),
    isPublished: z.string(),
    tags: z.string().optional(),
});

export type StoryFormValues = z.infer<typeof storySchema>;