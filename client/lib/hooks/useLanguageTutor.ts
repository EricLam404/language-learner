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
        messages,
        isLoading,
        addMessage,
        setMessages,
        simulateBotResponse,
    } = useChatMessages(chatId);

    const {
        data: chatSession,
        loading,
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

    console.log(chatSession);

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

    const handleRolePlayResponse = (answer: "yes" | "no") => {
        setShowRolePlayOptions(false);
        addMessage({
            role: "user",
            content:
                answer === "yes"
                    ? "Yes, let's roleplay."
                    : "No, not right now.",
        });
        addMessage({
            role: "bot",
            content:
                answer === "yes"
                    ? "Great! Let's start our roleplay. I'll begin with a scenario..."
                    : "Alright, no problem. What would you like to talk about instead?",
        });
    };

    const handleTextToSpeech = (text: string) => {
        console.log("Text-to-speech activated for:", text);
    };

    const handleSpeechRecognition = () => {
        console.log("Speech recognition activated");
    };

    const handleFlashcardModeChange = (checked: boolean) => {
        setValue("flashcardMode", checked);
        if (checked) {
            setMessages([
                ...messages,
                {
                    role: "bot",
                    content:
                        "Flashcard mode activated. Please select a flashcard set to begin.",
                },
            ]);
        } else {
            setMessages([
                ...messages,
                {
                    role: "bot",
                    content:
                        "Flashcard mode deactivated. We can now have a free-form conversation.",
                },
            ]);
            setValue("flashcardSet", "");
            setValue("chatMode", "none");
        }
    };

    const handleFlashcardSetChange = (setId: string) => {
        setValue("flashcardSet", setId);
        const selectedSet = flashcardSets.find((set) => set.id === setId);
        if (selectedSet) {
            setMessages([
                ...messages,
                {
                    role: "bot",
                    content: `Great! Let's practice with the "${selectedSet.name}" flashcard set.`,
                },
            ]);
        }
    };

    const handleChatModeChange = (mode: "free" | "roleplay") => {
        setValue("chatMode", mode);
        const selectedSet = flashcardSets.find(
            (set) => set.id === selectedFlashcardSet
        );
        if (selectedSet) {
            if (mode === "free") {
                setMessages([
                    ...messages,
                    {
                        role: "bot",
                        content: `I see you are learning ${selectedSet.name}! What would you like to talk about?`,
                    },
                ]);
            } else if (mode === "roleplay") {
                setMessages([
                    ...messages,
                    {
                        role: "bot",
                        content: `Would you like me to roleplay a scenario based on ${selectedSet.name}?`,
                    },
                ]);
                setShowRolePlayOptions(true);
            }
        }
    };

    return {
        form,
        flashcardMode,
        selectedFlashcardSet,
        chatMode,
        messages: chatSession?.chatSession?.messages || [],
        isLoading,
        inputMessage,
        showRolePlayOptions,
        setInputMessage,
        handleSendMessage,
        handleRolePlayResponse,
        handleTextToSpeech,
        handleSpeechRecognition,
        handleFlashcardModeChange,
        handleFlashcardSetChange,
        handleChatModeChange,
    };
}
