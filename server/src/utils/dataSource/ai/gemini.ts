import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} from "@google/generative-ai";
import { GEMINI_API_KEY } from "../../config/config";


export const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

export const generationConfig = {
    temperature: 0.5,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
};
