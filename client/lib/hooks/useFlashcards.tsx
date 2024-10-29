"use client";
import { useState } from "react";
import { type Flashcard, type FlashcardSet } from "../types";

export const useFlashcards = (set: FlashcardSet) => {
    const [flashcards, setFlashcards] = useState(set.cards || []);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortBy, setSortBy] = useState("recent");

    const filteredCards = flashcards.filter(
        (card) =>
            card.faces!.some(face => face.content.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    const sortedCards = [...filteredCards].sort((a, b) => {
        if (sortBy === "recent") return Number(b.id) - Number(a.id);
        return 0;
    });

    const addCard = (newCard: Omit<Flashcard, "id">) => {
        setFlashcards([
            ...flashcards,
            { id: (flashcards.length + 1).toString(), ...newCard },
        ]);
    };

    const editCard = (updatedCard: Flashcard) => {
        setFlashcards(
            flashcards.map((card) =>
                card.id === updatedCard.id ? updatedCard : card
            )
        );
    };

    const deleteCard = (id: string) => {
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
