import { useOptimistic, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { chatSchema, type ChatFormData } from "../schemas/chat";
import {
    CREATE_CHAT_MESSAGE,
    GET_CHAT_SESSION,
} from "@components/graphql/chat";
import { gql, useMutation, useQuery } from "@apollo/client";
import { delay } from "@/utils/delay";

export function useLanguageTutor(chatId: string) {
    const [inputMessage, setInputMessage] = useState("");
    const [showRolePlayOptions, setShowRolePlayOptions] = useState(false);
    const [isPending, startTransition] = useTransition();

    const {
        data: chatSession,
        loading: getChatSessionLoading,
        error,
    } = useQuery(GET_CHAT_SESSION, {
        variables: { chatSessionId: chatId },
    });

    // const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    //     chatSession?.chatSession?.messages || [],
    //     (state, newMessage) => [
    //         ...state,
    //         {
    //             content: newMessage as string,
    //             role: "user",
    //             sending: true,
    //         },
    //     ]
    // );

    const [createChatMessage, { loading: createChatMessageLoading }] =
        useMutation(CREATE_CHAT_MESSAGE, {
            update(cache, { data }) {
                const createChatMessage = data?.createChatMessage;
                if (!createChatMessage) return;

                cache.modify({
                    fields: {
                        chatSession(existingChatSession = {}) {
                            const newChatMessageRef = cache.writeFragment({
                                data: createChatMessage,
                                fragment: gql`
                                    fragment ChatMessage on ChatSession {
                                        messages {
                                            id
                                            role
                                            content
                                            sessionId
                                        }
                                    }
                                `,
                            });
                            console.log(newChatMessageRef);
                            console.log(existingChatSession)
                            return existingChatSession.messages.concat(
                                newChatMessageRef
                            );
                        },
                    },
                });
            },
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

    const handleSendMessage = async () => {
        if (inputMessage.trim()) {
            // startTransition(() => {
            //     addOptimisticMessage(inputMessage);
            // });

            // await delay(10000);

            createChatMessage({
                variables: {
                    sessionId: chatId,
                    role: "user",
                    content: inputMessage,
                },
                optimisticResponse: {
                    createChatMessage: [
                        {
                            __typename: "ChatMessage",
                            id: "temp-id",
                            role: "user",
                            content: inputMessage,
                            sessionId: chatId,
                        },
                    ],
                },
            });
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
        isLoading:
            getChatSessionLoading || createChatMessageLoading || isPending,
        inputMessage,
        showRolePlayOptions,
        setInputMessage,
        handleSendMessage,
        handleTextToSpeech,
        handleSpeechRecognition,
    };
}
