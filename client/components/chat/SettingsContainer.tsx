"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { BookOpen } from "lucide-react";
import {
    chatSelectionFormSchema,
    ChatSelectionFormValues,
} from "@/lib/schemas/chatSelection";
import { useMutation } from "@apollo/client";
import { CREATE_CHAT_SESSION } from "@components/graphql/chat";
import { DifficultyToNumber } from "@/lib/difficultyLevels";
import { toast } from "sonner";
import Selections from "@components/selections/LanguageSelections";

const flashcardSets = [
    { id: "1", name: "Basic Greetings" },
    { id: "2", name: "Numbers 1-100" },
    { id: "3", name: "Common Phrases" },
    { id: "4", name: "Food and Dining" },
    { id: "5", name: "Travel Vocabulary" },
];

export default function SettingsContainer() {
    const router = useRouter();
    const [flashcardMode, setFlashcardMode] = useState(false);

    const form = useForm<ChatSelectionFormValues>({
        resolver: zodResolver(chatSelectionFormSchema),
        defaultValues: {
            language: "",
            difficulty: "Beginner",
            flashcardMode: false,
            flashcardSet: undefined,
            chatMode: undefined,
        },
    });

    const [createChatSession, { loading }] = useMutation(CREATE_CHAT_SESSION);

    const onSubmit = async (data: ChatSelectionFormValues) => {
        try {
            const response = await createChatSession({
                variables: {
                    languageName: data.language,
                    difficulty: Number(DifficultyToNumber[data.difficulty]),
                    flashcardMode: data.flashcardMode,
                    chatMode: data.chatMode ?? "free",
                },
            });
            if (response.data && response.data.createChatSession) {
                console.log(response.data.createChatSession);
                router.push(`/chat/${response.data.createChatSession.id}`);
            } else {
                console.error(
                    "No data returned from createChatSession mutation"
                );
            }
            toast.success("Chat session has been successfully created!");
        } catch (e) {
            console.log(e);
            toast.error(
                "An unknown error occurred while creating the chat session. Please try again."
            );
        }
    };

    return (
        <div className="container mx-auto p-4 max-w-2xl">
            <Card className="w-full bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 shadow-lg">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-purple-700 dark:text-purple-400">
                        Language Learning Settings
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-6"
                        >
                            <FormField
                                control={form.control}
                                name="language"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Language</FormLabel>
                                        <Select
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                        >
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select a language" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <Selections />
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="difficulty"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Difficulty</FormLabel>
                                        <FormControl>
                                            <RadioGroup
                                                onValueChange={field.onChange}
                                                defaultValue={field.value}
                                                className="flex space-x-4"
                                            >
                                                <FormItem className="flex items-center space-x-2">
                                                    <FormControl>
                                                        <RadioGroupItem value="Beginner" />
                                                    </FormControl>
                                                    <FormLabel className="font-normal">
                                                        Beginner
                                                    </FormLabel>
                                                </FormItem>
                                                <FormItem className="flex items-center space-x-2">
                                                    <FormControl>
                                                        <RadioGroupItem value="Intermediate" />
                                                    </FormControl>
                                                    <FormLabel className="font-normal">
                                                        Intermediate
                                                    </FormLabel>
                                                </FormItem>
                                                <FormItem className="flex items-center space-x-2">
                                                    <FormControl>
                                                        <RadioGroupItem value="Advanced" />
                                                    </FormControl>
                                                    <FormLabel className="font-normal">
                                                        Advanced
                                                    </FormLabel>
                                                </FormItem>
                                            </RadioGroup>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {/* <FormField
                                control={form.control}
                                name="flashcardMode"
                                render={({ field }) => (
                                    <FormItem className="flex items-center space-x-2">
                                        <FormControl>
                                            <Switch
                                                checked={field.value}
                                                onCheckedChange={(checked) => {
                                                    field.onChange(checked);
                                                    setFlashcardMode(checked);
                                                }}
                                            />
                                        </FormControl>
                                        <FormLabel>Flashcard Mode</FormLabel>
                                        <BookOpen className="h-4 w-4 text-purple-600" />
                                    </FormItem>
                                )}
                            /> */}
                            {flashcardMode && (
                                <>
                                    <FormField
                                        control={form.control}
                                        name="flashcardSet"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    Flashcard Set
                                                </FormLabel>
                                                <Select
                                                    onValueChange={
                                                        field.onChange
                                                    }
                                                    value={field.value || ""}
                                                >
                                                    <FormControl>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Select a flashcard set" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        {flashcardSets.map(
                                                            (set) => (
                                                                <SelectItem
                                                                    key={set.id}
                                                                    value={
                                                                        set.id
                                                                    }
                                                                >
                                                                    {set.name}
                                                                </SelectItem>
                                                            )
                                                        )}
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
                                                    onValueChange={
                                                        field.onChange
                                                    }
                                                    value={field.value || ""}
                                                >
                                                    <FormControl>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Select chat mode" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectItem value="free">
                                                            Free Chat
                                                        </SelectItem>
                                                        <SelectItem value="roleplay">
                                                            Role Play
                                                        </SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </>
                            )}
                        </form>
                    </Form>
                </CardContent>
                <CardFooter>
                    <Button
                        onClick={form.handleSubmit(onSubmit)}
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                    >
                        Start Chat
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}
