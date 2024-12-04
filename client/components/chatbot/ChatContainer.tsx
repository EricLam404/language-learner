"use client";

import { useState } from "react";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { LanguageSelector } from "@/components/selections/LanguageSelector";
import { DifficultySelector } from "@/components/selections/DifficultySelector";
import { LearningModeSelector } from "@/components/selections/LearningModeSelector";
import { MessageList } from "@/components/chatbot/MessageList";
import { MessageInput } from "@/components/chatbot//MessageInput";
import { useChatMessages } from "@/lib/hooks/useChatMessages";

export function ChatContainer() {
    const [selectedLanguage, setSelectedLanguage] = useState("");
    const [difficulty, setDifficulty] = useState("beginner");
    const [mode, setMode] = useState("conversation");
    const [inputMessage, setInputMessage] = useState("");
    const { messages, isLoading, addMessage, simulateBotResponse } =
        useChatMessages();

    const handleSendMessage = () => {
        if (inputMessage.trim()) {
            addMessage({ role: "user", content: inputMessage });
            simulateBotResponse(inputMessage);
            setInputMessage("");
        }
    };

    const handleTextToSpeech = (text: string) => {
        console.log("Text-to-speech activated for:", text);
    };

    const handleSpeechRecognition = () => {
        console.log("Speech recognition activated");
    };

    return (
        <Card className="w-full bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 shadow-lg">
            <CardHeader className="border-b border-gray-200 dark:border-gray-700">
                <CardTitle className="text-2xl font-bold text-purple-700 dark:text-purple-400">
                    AI Language Tutor
                </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
                <div className="grid gap-6 mb-6">
                    <div className="grid grid-cols-2 gap-4">
                        <LanguageSelector
                            onLanguageChange={setSelectedLanguage}
                        />
                        <DifficultySelector
                            onDifficultyChange={setDifficulty}
                        />
                    </div>
                    <LearningModeSelector onModeChange={setMode} />
                </div>
                <MessageList
                    messages={messages}
                    isLoading={isLoading}
                    onTextToSpeech={handleTextToSpeech}
                />
            </CardContent>
            <CardFooter className="border-t border-gray-200 dark:border-gray-700 p-4">
                <MessageInput
                    inputMessage={inputMessage}
                    onInputChange={setInputMessage}
                    onSendMessage={handleSendMessage}
                    onSpeechRecognition={handleSpeechRecognition}
                />
            </CardFooter>
        </Card>
    );
}
