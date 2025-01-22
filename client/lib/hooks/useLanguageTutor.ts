import { useState } from "react";
import { useChatMessages } from "./useChatMessages";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { chatSchema, type ChatFormData } from "../schemas/chat";
import {
    CREATE_CHAT_MESSAGE,
    GET_CHAT_SESSION,
} from "@components/graphql/chat";
import { useMutation, useQuery } from "@apollo/client";

// Mock data for flashcard sets
const flashcardSets = [
    { id: "1", name: "Basic Greetings" },
    { id: "2", name: "Numbers 1-100" },
    { id: "3", name: "Common Phrases" },
    { id: "4", name: "Food and Dining" },
    { id: "5", name: "Travel Vocabulary" },
];

export function useLanguageTutor(chatId: string) {
    const [inputMessage, setInputMessage] = useState("");
    const [showRolePlayOptions, setShowRolePlayOptions] = useState(false);

    const {
        data: chatSession,
        loading: getChatSessionLoading  ,
        error,
    } = useQuery(GET_CHAT_SESSION, {
        variables: { chatSessionId: chatId },
    });

    const [createChatMessage, { loading: createChatMessageLoading }] =
        useMutation(CREATE_CHAT_MESSAGE, {
            refetchQueries: [
                {
                    query: GET_CHAT_SESSION,
                    variables: { chatSessionId: chatId },
                },
            ],
        });

    const form = useForm<ChatFormData>({
        resolver: zodResolver(chatSchema),
        defaultValues: {
            language: "",
            difficulty: "beginner",
            flashcardMode: false,
            flashcardSet: "",
            chatMode: "none",
        },
    });

    const { watch, setValue } = form;
    const flashcardMode = watch("flashcardMode");
    const selectedFlashcardSet = watch("flashcardSet");
    const chatMode = watch("chatMode");

    const handleSendMessage = () => {
        if (inputMessage.trim()) {
            createChatMessage({
                variables: {
                    sessionId: chatId,
                    role: "user",
                    content: inputMessage,
                },
            });
            // simulateBotResponse(inputMessage);
            setInputMessage("");
        }
    };

    const handleTextToSpeech = (text: string) => {
        console.log("Text-to-speech activated for:", text);
    };

    const handleSpeechRecognition = () => {
        console.log("Speech recognition activated");
    };


    return {
        form,
        flashcardMode,
        selectedFlashcardSet,
        chatMode,
        messages: chatSession?.chatSession?.messages || [],
        isLoading: getChatSessionLoading || createChatMessageLoading,
        inputMessage,
        showRolePlayOptions,
        setInputMessage,
        handleSendMessage,
        handleTextToSpeech,
        handleSpeechRecognition,
    };
}
