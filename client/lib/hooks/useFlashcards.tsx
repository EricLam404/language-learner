"use client";
import { useEffect, useState } from "react";
import { type FlashcardSet } from "../types";
import { useMutation } from "@apollo/client";
import {
    CREATE_FLASHCARD,
    DELETE_FLASHCARD,
    GET_FLASHCARD_SET,
    UPDATE_FLASHCARD,
} from "@app/_components/graphql/flashcards";
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

    const filteredCards = flashcards.filter((card) =>
        card.faces!.some((face) =>
            face.content.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    const sortedCards = [...filteredCards].sort((a, b) => {
        if (sortBy === "recent") return Number(b.id) - Number(a.id);
        return 0;
    });

    const [createFlashcard, { loading }] = useMutation(CREATE_FLASHCARD, {
        refetchQueries: [
            { query: GET_FLASHCARD_SET, variables: { flashcardSetId: set.id } },
        ],
        awaitRefetchQueries: true,
    });

    const [updateFlashcard] = useMutation(UPDATE_FLASHCARD, {
        refetchQueries: [
            { query: GET_FLASHCARD_SET, variables: { flashcardSetId: set.id } },
        ],
        awaitRefetchQueries: true,
    });

    const [deleteFlashcard] = useMutation(DELETE_FLASHCARD, {
        refetchQueries: [
            { query: GET_FLASHCARD_SET, variables: { flashcardSetId: set.id } },
        ],
        awaitRefetchQueries: true,
    });

    const addCard = async (newCard: FlashcardFormValues) => {
        try {
            // Filter out empty fields and map to the correct format
            const faces = Object.keys(newCard)
                .filter(
                    (key) => newCard[key as keyof FlashcardFormValues] !== ""
                )
                .map((key, index) => ({
                    type: key.toUpperCase() as FaceType,
                    content: newCard[key as keyof FlashcardFormValues] || "",
                    order: index,
                }));

            let response = await createFlashcard({
                variables: {
                    setId: set.id,
                    faces: faces,
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

    const editCard = async (updatedCard: FlashcardFormValues, id: string) => {
        try {
            // Filter out empty fields and map to the correct format
            const faces = Object.keys(updatedCard)
                .filter(
                    (key) => updatedCard[key as keyof FlashcardFormValues] !== ""
                )
                .map((key, index) => ({
                    type: key.toUpperCase() as FaceType,
                    content: updatedCard[key as keyof FlashcardFormValues] || "",
                    order: index,
                }));

            let response = await updateFlashcard({
                variables: {
                    updateFlashcardId: id,
                    faces: faces,
                },
            });
            if (response.data && response.data.updateFlashcard) {
                console.log(response.data.updateFlashcard);
            } else {
                console.error(
                    "No data returned from update flashcard mutation"
                );
            }
            toast.success("Flashcard has been successfully created!");
        } catch (e) {
            console.log(e);
            toast.error(
                "An unknown error occurred while updating the flashcard. Please try again."
            );
        }
    };

    const deleteCard = async (id: string) => {
        try {
            let response = await deleteFlashcard({
                variables: {
                    deleteFlashcardId: id,
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
