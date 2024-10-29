"use client";
import { useEffect, useState } from "react";
import { type Flashcard, type FlashcardSet } from "../types";
import { useMutation } from "@apollo/client";
import { CREATE_FLASHCARD, DELETE_FLASHCARD, GET_FLASHCARD_SET } from "@app/_components/graphql/flashcards";
import { toast } from "sonner";
import { FlashcardFormValues } from "../schemas/flashcard";
import { FaceType } from "@/__generated__/graphql";

export const useFlashcards = (set: FlashcardSet) => {
    const [flashcards, setFlashcards] = useState(set.cards || []);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortBy, setSortBy] = useState("recent");

    useEffect(() => {
        setFlashcards(set.cards || []);
    }, [set.cards]);

    const filteredCards = flashcards.filter(
        (card) =>
            card.faces!.some(face => face.content.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    const sortedCards = [...filteredCards].sort((a, b) => {
        if (sortBy === "recent") return Number(b.id) - Number(a.id);
        return 0;
    });

    const [createFlashcard, { loading }] = useMutation(
        CREATE_FLASHCARD,
        {
            refetchQueries: [{ query: GET_FLASHCARD_SET, variables: { flashcardSetId: set.id } }],
            awaitRefetchQueries: true,
        }
    );

    const [deleteFlashcard] = useMutation(
        DELETE_FLASHCARD,
        {
            refetchQueries: [{ query: GET_FLASHCARD_SET, variables: { flashcardSetId: set.id } }],
            awaitRefetchQueries: true,
        }
    );

    const addCard = async (newCard: FlashcardFormValues) => {
        try {
            const faces = Object.keys(newCard)
            .filter((key) => newCard[key as keyof FlashcardFormValues] !== "")
            .map((key, index) => ({
                type: key.toUpperCase() as FaceType,
                content: newCard[key as keyof FlashcardFormValues],
                order: index
            }));

            let response = await createFlashcard({
                variables: {
                    setId: set.id,
                    faces: faces
                },
            });
            if (response.data && response.data.createFlashcard) {
                console.log(response.data.createFlashcard);
            } else {
                console.error(
                    "No data returned from create flashcard mutation"
                );
            }
            toast.success("Flashcard has been successfully created!");
        } catch (e) {
            console.log(e);
            toast.error(
                "An unknown error occurred while creating the flashcard. Please try again."
            );
        }
    };

    const editCard = (updatedCard: Flashcard) => {
        setFlashcards(
            flashcards.map((card) =>
                card.id === updatedCard.id ? updatedCard : card
            )
        );
    };

    const deleteCard = async (id: string) => {
        try {

            let response = await deleteFlashcard({
                variables: {
                    deleteFlashcardId: id
                },
            });
            toast.success("Flashcard has been successfully deleted!");
        } catch (e) {
            console.log(e);
            toast.error(
                "An unknown error occurred while deleting the flashcard. Please try again."
            );
        }
    };

    return {
        flashcards: sortedCards,
        searchTerm,
        setSearchTerm,
        sortBy,
        setSortBy,
        addCard,
        editCard,
        deleteCard,
    };
};
