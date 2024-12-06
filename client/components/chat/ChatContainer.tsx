"use client";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { LanguageSelector } from "@components/selections/LanguageSelector";
import { DifficultySelector } from "@components/selections/DifficultySelector";
import { MessageList } from "@/components/chat/MessageList";
import { MessageInput } from "@/components/chat/MessageInput";
import { FlashcardModeSettings } from "@/components/chat/FlashcardModeSettings";
import { useLanguageTutor } from "@/lib/hooks/useLanguageTutor";

export function ChatContainer() {
    const {
        form,
        flashcardMode,
        selectedFlashcardSet,
        chatMode,
        messages,
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
    } = useLanguageTutor();

    return (
        <Card className="w-full bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 shadow-lg">
            <CardHeader className="border-b border-gray-200 dark:border-gray-700">
                <CardTitle className="text-2xl font-bold text-purple-700 dark:text-purple-400">
                    AI Language Tutor
                </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
                <Form {...form}>
                    <form className="grid gap-6 mb-6">
                        <div className="grid grid-cols-2 gap-4">
                            <LanguageSelector form={form} />
                            <DifficultySelector form={form} />
                        </div>
                        <FlashcardModeSettings
                            form={form}
                            flashcardMode={flashcardMode}
                            handleFlashcardModeChange={
                                handleFlashcardModeChange
                            }
                            selectedFlashcardSet={selectedFlashcardSet}
                            chatMode={chatMode}
                            handleFlashcardSetChange={handleFlashcardSetChange}
                            handleChatModeChange={handleChatModeChange}
                        />
                    </form>
                </Form>
                <MessageList
                    messages={messages}
                    isLoading={isLoading}
                    showRolePlayOptions={showRolePlayOptions}
                    onTextToSpeech={handleTextToSpeech}
                    onRolePlayResponse={handleRolePlayResponse}
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
