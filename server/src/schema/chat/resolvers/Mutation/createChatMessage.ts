import { GraphQLError } from "graphql";
import type { MutationResolvers } from "./../../../types.generated";
import { genAI } from "../../../../utils/dataSource/ai/gemini";

export const createChatMessage: NonNullable<MutationResolvers['createChatMessage']> = async (_parent, _arg, _ctx) => {
    /* Implement Mutation.createChatMessage resolver logic here */
    try {
        const chatHistory =
            await _ctx.dataSources.prisma.chatSession.findUnique({
                where: {
                    id: _arg.sessionId,
                },
                include: {
                    messages: true,
                },
            });

        if (!chatHistory) {
            throw new GraphQLError("Chat session not found", {
                extensions: {
                    code: "CHAT_SESSION_NOT_FOUND",
                },
            });
        }

        const model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash",
            systemInstruction: `You are a language tutor for a language learning app. Your role is to help the user improve their language skills through engaging and interactive conversations. Use the provided chat history to maintain context, and follow the specified user settings to guide your responses.\n\nUser Settings:\nLanguage: ${chatHistory.languageName} (e.g., Spanish, Chinese, French, etc.)\nDifficulty Level: ${chatHistory.difficulty} (e.g., Beginner, Intermediate, Advanced)\nChat Mode: ${chatHistory.mode}\nFree Play: Engage in open-ended conversation based on the user's input and goals.\nRole Play: Act as a specific character or participate in a scenario (e.g., a shopkeeper, a traveler, a waiter).\nFlashcard Set (Optional): If provided, prioritize using words and phrases from the selected flashcard set: ${chatHistory.flashcardSetId}.\nChat History:\n(Include only the last N turns of chat history, based on the user’s subscription tier. This history is dynamically filtered before the API call.)\n\nGuidelines for Responses:\nTone and Support:\n\nBe encouraging, patient, and adaptable to the user’s skill level.\nCorrect errors constructively, providing clear explanations and examples.\nConversation Focus:\n\nFree Play: Let the user guide the conversation. Expand on their input, suggest topics, and keep the dialogue engaging.\nRole Play: Fully immerse in the specified role or scenario, responding naturally within the context. Encourage the user to practice the target language actively.\nFlashcard Mode:\n\nIf a flashcard set is specified, ensure your responses primarily incorporate vocabulary from the set.\nGuide the user to use these words in context while gently correcting and expanding their usage.\nFeedback and Reinforcement:\n\nOffer grammar, vocabulary, and pronunciation corrections as needed.\nSuggest follow-up sentences or questions to reinforce learning.\nContext Management:\n\nRespond in text based solely on the provided chat history and user settings.\nDo not assume additional context beyond what is supplied in this prompt.\nExample Interaction:\nFree Play (Beginner):\nUser: \"How do I say 'I want to eat' in Spanish?\"\nAI: \"You can say 'Quiero comer.' For example, 'Quiero comer una manzana' means 'I want to eat an apple.' What do you want to eat today?\"\n\nRole Play (Intermediate):\nScenario: Ordering food at a restaurant.\nAI: \"¡Bienvenido al restaurante! Soy su camarero hoy. ¿Qué desea pedir para comer?\"\n\nFlashcard Mode (Advanced):\nFlashcard Set: Business Meetings in French\nAI: \"Bonjour, parlez-moi de vos objectifs pour la réunion. Utilisez les mots: objectif, stratégie, et progrès.\"\n`,
        });

        const generationConfig = {
            temperature: 1,
            topP: 0.95,
            topK: 40,
            maxOutputTokens: 8192,
            responseMimeType: "text/plain",
        };

        const chatSession = model.startChat({
            generationConfig,
            history: chatHistory.messages.map((message) => ({
                role: message.role,
                parts: [{ text: message.content }],
            })),
        });

        const result = await chatSession.sendMessage(_arg.content);
        const text = result.response.text();
        const messages =
            await _ctx.dataSources.prisma.chatMessage.createManyAndReturn({
                data: [
                    {
                        content: _arg.content,
                        role: "user",
                        sessionId: _arg.sessionId,
                    },
                    {
                        content: text,
                        role: "model",
                        sessionId: _arg.sessionId,
                    },
                ],
            });

        return messages;
    } catch (error) {
        console.log(error);

        if (error instanceof GraphQLError) {
            throw error;
        }
        throw new GraphQLError("Failed to create flashcard", {
            extensions: {
                code: "FLASHCARD_CREATION_FAILED",
            },
        });
    }
};
