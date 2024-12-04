"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Volume2, Loader2 } from "lucide-react";
import { useEffect } from "react";

interface Message {
    role: "user" | "bot";
    content: string;
}

interface MessageListProps {
    messages: Message[];
    isLoading: boolean;
    onTextToSpeech: (text: string) => void;
}

export function MessageList({
    messages,
    isLoading,
    onTextToSpeech,
}: MessageListProps) {
    useEffect(() => {
        const scrollArea = document.querySelector(".scroll-area");
        if (scrollArea) {
            scrollArea.scrollTop = scrollArea.scrollHeight;
        }
    }, [messages]);

    return (
        <ScrollArea className="h-[400px] w-full rounded-md border border-gray-200 dark:border-gray-700 p-4 scroll-area">
            <AnimatePresence>
                {messages.map((message, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className={`flex ${
                            message.role === "user"
                                ? "justify-end"
                                : "justify-start"
                        } mb-4`}
                    >
                        <div
                            className={`rounded-lg p-3 max-w-[70%] ${
                                message.role === "user"
                                    ? "bg-purple-600 text-white"
                                    : "bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-md"
                            }`}
                        >
                            {message.content}
                            {message.role === "bot" && (
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="ml-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                                    onClick={() =>
                                        onTextToSpeech(message.content)
                                    }
                                >
                                    <Volume2 className="h-4 w-4" />
                                </Button>
                            )}
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>
            {isLoading && (
                <div className="flex justify-start mb-4">
                    <div className="rounded-lg p-3 bg-white dark:bg-gray-800 shadow-md">
                        <Loader2 className="h-5 w-5 animate-spin text-purple-600" />
                    </div>
                </div>
            )}
        </ScrollArea>
    );
}
