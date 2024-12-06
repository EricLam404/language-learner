import { ChatFormData } from "@/lib/schemas/chat";
import {
    FormField,
    FormItem,
    FormControl,
    FormLabel,
    FormMessage,
} from "@components/ui/form";
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@components/ui/select";
import { BookOpen, MessageSquare, Users } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { Switch } from "@/components/ui/switch";

type FlashcardModeSettingsProps = {
    form: UseFormReturn<ChatFormData>;
    flashcardMode: boolean;
    handleFlashcardModeChange: (checked: boolean) => void;
    handleFlashcardSetChange: (value: string) => void;
    handleChatModeChange: (value: "free" | "roleplay") => void;
    selectedFlashcardSet?: string;
    chatMode: string;
};

// Mock data for flashcard sets
const flashcardSets = [
    { id: "1", name: "Basic Greetings" },
    { id: "2", name: "Numbers 1-100" },
    { id: "3", name: "Common Phrases" },
    { id: "4", name: "Food and Dining" },
    { id: "5", name: "Travel Vocabulary" },
];

export function FlashcardModeSettings({
    form,
    flashcardMode,
    handleFlashcardModeChange,
    selectedFlashcardSet,
    chatMode,
    handleFlashcardSetChange,
    handleChatModeChange,
}: FlashcardModeSettingsProps): JSX.Element {
    return (
        <>
            <FormField
                control={form.control}
                name="flashcardMode"
                render={({ field }) => (
                    <FormItem className="flex items-center space-x-2">
                        <FormControl>
                            <Switch
                                checked={field.value}
                                onCheckedChange={handleFlashcardModeChange}
                            />
                        </FormControl>
                        <FormLabel>Flashcard Mode</FormLabel>
                        <BookOpen className="h-4 w-4 text-purple-600" />
                    </FormItem>
                )}
            />
            {flashcardMode && (
                <>
                    <FormField
                        control={form.control}
                        name="flashcardSet"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Flashcard Set</FormLabel>
                                <Select
                                    onValueChange={handleFlashcardSetChange}
                                    value={field.value}
                                >
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a flashcard set" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {flashcardSets.map((set) => (
                                            <SelectItem
                                                key={set.id}
                                                value={set.id}
                                            >
                                                {set.name}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="chatMode"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Chat Mode</FormLabel>
                                <Select
                                    onValueChange={(value) =>
                                        handleChatModeChange(
                                            value as "free" | "roleplay"
                                        )
                                    }
                                    value={field.value}
                                >
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select chat mode" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="free">
                                            <div className="flex items-center">
                                                <MessageSquare className="mr-2 h-4 w-4" />
                                                Free Chat
                                            </div>
                                        </SelectItem>
                                        <SelectItem value="roleplay">
                                            <div className="flex items-center">
                                                <Users className="mr-2 h-4 w-4" />
                                                Role Play
                                            </div>
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </>
            )}
        </>
    );
}
