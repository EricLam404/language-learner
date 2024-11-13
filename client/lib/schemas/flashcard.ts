import { z } from "zod";
import { LanguageConfig } from "../hooks/useLanguageFaceConfig";
import { replaceUnderscoreAndCapitalize } from "../stringUtils";

export const createFlashcardSchema = (config: LanguageConfig) => {
    const requiredFaces = config.required.reduce((acc, face) => {
        acc[face.toLowerCase()] = z
            .string()
            .min(1, `${replaceUnderscoreAndCapitalize(face)} is required`)
            .max(200, `${face} must be less than 200 characters`)
            .default("a");
        return acc;
    }, {} as { [key: string]: z.ZodDefault<z.ZodString> });
    const optionalFaces = config.optional.reduce((acc, face) => {
        acc[face.toLowerCase()] = z
            .string()
            .max(
                200,
                `${replaceUnderscoreAndCapitalize(
                    face
                )} must be less than 200 characters`
            )
            .default("b")
            .optional();
        return acc;
    }, {} as { [key: string]: z.ZodOptional<z.ZodDefault<z.ZodString>> });
    return z.object({
        ...requiredFaces,
        ...optionalFaces,
    });
};

export type FlashcardFormValues = z.infer<
    ReturnType<typeof createFlashcardSchema>
>;

export const generateFlashcardFacesSchema = z.object({
    wordToGenerate: z.string().min(1, { message: "Word is required" }),
});

export type GenerateFlashcardFacesFormValues = z.infer<
    typeof generateFlashcardFacesSchema
>;

/**
 * import { z } from "zod";

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
  other: z.string()
    .max(500, "Other must be less than 500 characters")
    .optional()
    .default("")
});

export type FlashcardFormValues = z.infer<typeof flashcardSchema>;
 * const shared = z.object( {
    firstName: z.string(),
    lastName: z.string(),
} )

const schema = z.discriminatedUnion( 'schoolId', [
    shared.extend( {
        schoolId: z.literal( 'State U' ),
        state: z.string(),
        gpa: z.number(),
    } ),
    shared.extend( {
        schoolId: z.literal( 'Ivy U' ),
        gpa: z.number(),
        isLegacy: z.boolean(),
    } ),
] )

 *  */
