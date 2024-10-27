"use client";
import { useState } from "react";
import { Flashcard } from "../types";

export const useFlashcards = (initialCards: Flashcard[]) => {
    const [flashcards, setFlashcards] = useState(initialCards);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortBy, setSortBy] = useState("recent");

    const filteredCards = flashcards.filter(
        (card) =>
            card.front.toLowerCase().includes(searchTerm.toLowerCase()) ||
            card.back.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sortedCards = [...filteredCards].sort((a, b) => {
        if (sortBy === "recent") return b.id - a.id;
        return 0;
    });

    const addCard = (newCard: Omit<Flashcard, "id">) => {
        setFlashcards([
            ...flashcards,
            { id: flashcards.length + 1, ...newCard },
        ]);
    };

    const editCard = (updatedCard: Flashcard) => {
        setFlashcards(
            flashcards.map((card) =>
                card.id === updatedCard.id ? updatedCard : card
            )
        );
    };

    const deleteCard = (id: number) => {
        setFlashcards(flashcards.filter((card) => card.id !== id));
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
