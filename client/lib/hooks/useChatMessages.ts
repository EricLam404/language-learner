"use client";

import { useState } from "react";

interface Message {
    role: "user" | "bot";
    content: string;
}

export function useChatMessages(chatId: string) {
    const [messages, setMessages] = useState<Message[]>([
    ]);
    const [isLoading, setIsLoading] = useState(false);

    const addMessage = (message: Message) => {
        setMessages((prev) => [...prev, message]);
    };

    const simulateBotResponse = (userMessage: string) => {
        setIsLoading(true);
        setTimeout(() => {
            addMessage({ role: "bot", content: `You said: ${userMessage}` });
            setIsLoading(false);
        }, 1000);
    };


    return {
        messages,
        isLoading,
        addMessage,
        setMessages,
        simulateBotResponse,
    };
}
