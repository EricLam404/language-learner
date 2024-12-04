"use client";
import { useState } from "react";
import { FlashcardToolbar } from "./FlashcardToolbar";
import { FlashcardSearch } from "./FlashcardSearch";
import { FlashcardGrid } from "./FlashcardGrid";
import { StudyMode } from "./StudyMode";
import { useFlashcards } from "@/lib/hooks/useFlashcards";
import { type FlashcardSet, type Flashcard } from "@/lib/types";
import { FlashcardForm } from "@/components/flashcards/FlashcardForm";
import { FlashcardFormValues } from "@/lib/schemas/flashcard";
import FlashcardDeleteForm from "./FlashcardDeleteForm";
import { FlashcardMode } from "./FlashcardMode";

interface FlashcardContainerProps {
    refetch: () => void;
    flashcardSet: FlashcardSet;
}

export default function FlashcardContainer({
    refetch,
    flashcardSet,
}: FlashcardContainerProps) {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [currentEditCard, setCurrentEditCard] = useState<
        Flashcard | undefined
    >();
    const [isGridView, setIsGridView] = useState(true);
    const [isFlashcardMode, setIsFlashcardMode] = useState(false);
    const [isStudyMode, setIsStudyMode] = useState(false);
    const [deleteFlashcard, setDeleteFlashcard] = useState<Flashcard | null>(
        null
    );
    const {
        flashcards,
        searchTerm,
        setSearchTerm,
        sortBy,
        setSortBy,
        addCard,
        editCard,
        updateStudiedCard,
        deleteCard,
    } = useFlashcards(flashcardSet);

    if (isStudyMode) {
        return (
            <StudyMode
                cards={flashcards}
                updateStudiedCard={updateStudiedCard}
                onExit={async () => {
                    setIsStudyMode(false);
                    refetch();
                }}
            />
        );
    }

    if (isFlashcardMode) {
        return (
            <FlashcardMode
                cards={flashcards}
                onExit={() => setIsFlashcardMode(false)}
            />
        );
    }
    const handleEditCard = (card: Flashcard) => {
        setCurrentEditCard(card);
        setIsDialogOpen(true);
    };

    const handleAddCard = () => {
        setCurrentEditCard(undefined);
        setIsDialogOpen(true);
    };

    const handleCardSubmit = (cardData: FlashcardFormValues) => {
        if (currentEditCard) {
            editCard(cardData, currentEditCard.id);
        } else {
            addCard(cardData);
        }
    };

    return (
        <>
            <FlashcardToolbar
                isGridView={isGridView}
                setIsGridView={setIsGridView}
                onAddCard={handleAddCard}
                onStudyMode={() => setIsStudyMode(true)}
                onFlashcardMode={() => setIsFlashcardMode(true)}
            />
            <FlashcardSearch
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                sortBy={sortBy}
                onSortChange={setSortBy}
            />
            <FlashcardGrid
                cards={flashcards}
                isGridView={isGridView}
                onEdit={handleEditCard}
                onDelete={setDeleteFlashcard}
            />
            <FlashcardForm
                open={isDialogOpen}
                onOpenChange={setIsDialogOpen}
                onSubmit={handleCardSubmit}
                editCard={currentEditCard}
                languageName={flashcardSet.languageName}
                defaultFrontFace={flashcardSet.lastFrontFace}
            />
            <FlashcardDeleteForm
                open={!!deleteFlashcard}
                onOpenChange={(open) => !open && setDeleteFlashcard(null)}
                onDelete={deleteCard}
                card={deleteFlashcard!}
            />
        </>
    );
}
