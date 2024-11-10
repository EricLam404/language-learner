import { FaceType } from "@prisma/client";
import {
    genAI,
    generationConfig,
} from "../../../../utils/dataSource/ai/gemini";
import type { MutationResolvers } from "./../../../types.generated";
import { GraphQLError } from "graphql";

interface Payload {
    faceType: FaceType;
    content: string;
}

export const generateFlashcardFaces: NonNullable<MutationResolvers['generateFlashcardFaces']> = async (_parent, _arg, _ctx) => {
    /* Implement Mutation.generateFlashcardFaces resolver logic here */
    try {
        const model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash",
            systemInstruction:
                'API Prompt:\n\nGiven the following inputs:\n\nlanguageName: The language of the requested translations (e.g., "Chinese").\nword: The native or foreign word/phrase to be converted into different formats.\nfaceTypes: An array of face types that specifies how the word should be formatted or represented (e.g., "FRONT", "PINYIN", "CHARACTER").\nYour task is to:\n\nFor each faceType, generate the appropriate content that corresponds to languageName and word.\nPopulate each faceType with its respective content and return as an array of objects, where each object contains:\nfaceType: The specified type (e.g., "FRONT", "PINYIN", "CHARACTER").\ncontent: The generated representation or translation of the word for that faceType.\nInput Example:\n\njson\nCopy code\n{\n  "languageName": "Chinese",\n  "word": "Hello",\n  "faceTypes": ["FRONT", "PINYIN", "CHARACTER"]\n}\nExpected Output Format:\n\njson\nCopy code\n[\n  {\n    "faceType": "FRONT",\n    "content": "Hello"\n  },\n  {\n    "faceType": "PINYIN",\n    "content": "Nǐ hǎo"\n  },\n  {\n    "faceType": "CHARACTER",\n    "content": "你好"\n  }\n]\nEnsure that the content is accurate for each faceType given the specified languageName and word.',
        });

        const chatSession = model.startChat({
            generationConfig,
            history: [],
        });

        const result = await chatSession.sendMessage(
            JSON.stringify({
                languageName: _arg.input.languageName,
                word: _arg.input.word,
                faceTypes: _arg.input.faces,
            })
        );
        validateFlashcardFaces(result.response.text());
        const content = JSON.parse(result.response.text()) as Payload[];
        console.log(result.response.text());

        return content;
    } catch (error) {
        console.log(error);

        if (error instanceof GraphQLError) {
            throw error;
        }
        throw new GraphQLError("Failed to generate flashcard faces", {
            extensions: {
                code: "FLASHCARD_FACES_GENERATION_FAILED",
            },
        });
    }
};

function validateFlashcardFaces(response: string) {
    try {
        const content = JSON.parse(response);
        if (!Array.isArray(content)) {
            throw new Error("Response is not an array");
        }

        content.forEach((item) => {
            if (
                typeof item !== "object" ||
                !item.hasOwnProperty("faceType") ||
                !item.hasOwnProperty("content")
            ) {
                throw new Error("Invalid format in response");
            }
        });
    } catch (e) {
        throw new Error("Invalid response from AI model");
    }
}
