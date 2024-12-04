"use client";

import { useState } from "react";

interface Message {
    role: "user" | "bot";
    content: string;
}

export function useChatMessages() {
    const [messages, setMessages] = useState<Message[]>([
        {
            role: "bot",
            content:
                "Hello! I'm your AI language tutor. What would you like to practice today?",
        },
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
        simulateBotResponse,
    };
}
