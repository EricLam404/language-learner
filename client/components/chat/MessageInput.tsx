"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send, Mic } from "lucide-react";

type MessageInputProps = {
    inputMessage: string;
    onInputChange: (value: string) => void;
    onSendMessage: () => void;
    onSpeechRecognition: () => void;
};

export function MessageInput({
    inputMessage,
    onInputChange,
    onSendMessage,
    onSpeechRecognition,
}: MessageInputProps) {
    return (
        <div className="flex w-full items-center space-x-2">
            <Input
                type="text"
                placeholder="Type your message..."
                value={inputMessage}
                onChange={(e) => onInputChange(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && onSendMessage()}
                className="flex-grow"
            />
            <Button
                type="submit"
                onClick={onSendMessage}
                className="bg-purple-600 hover:bg-purple-700 text-white"
            >
                <Send className="h-4 w-4" />
            </Button>
            <Button
                type="button"
                variant="outline"
                onClick={onSpeechRecognition}
                className="border-purple-600 text-purple-600 hover:bg-purple-100 dark:hover:bg-purple-900"
            >
                <Mic className="h-4 w-4" />
            </Button>
        </div>
    );
}
