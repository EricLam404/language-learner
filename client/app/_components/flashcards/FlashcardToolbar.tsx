"use client";
import { Button } from "@/components/ui/button";
import { Grid, List, Plus, BookOpen, WalletCardsIcon } from "lucide-react";
import FlashcardIcon from "../icons";

interface FlashcardToolbarProps {
    isGridView: boolean;
    setIsGridView: (value: boolean) => void;
    onAddCard: () => void;
    onFlashcardMode: () => void;
    onStudyMode: () => void;
}

export function FlashcardToolbar({
    isGridView,
    setIsGridView,
    onAddCard,
    onFlashcardMode,
    onStudyMode,
}: FlashcardToolbarProps) {
    return (
        <div className="flex justify-between items-center mb-4">
            <div className="flex space-x-2">
                <Button
                    onClick={() => setIsGridView(true)}
                    variant={isGridView ? "default" : "outline"}
                >
                    <Grid className="w-4 h-4 mr-2" />
                    Grid
                </Button>
                <Button
                    onClick={() => setIsGridView(false)}
                    variant={!isGridView ? "default" : "outline"}
                >
                    <List className="w-4 h-4 mr-2" />
                    List
                </Button>
            </div>
            <div className="flex space-x-2">
                <Button onClick={onAddCard}>
                    <Plus className="w-4 h-4 mr-2" />
                    Add Flashcard
                </Button>
                <Button onClick={onFlashcardMode} >
                    {/* <FlashcardIcon className="w-8! h-8! mr-2" /> */}
                    <WalletCardsIcon className="w-4 h-4 mr-2" />
                    Flashcards
                </Button>
                <Button onClick={onStudyMode}>
                    <BookOpen className="w-4 h-4 mr-2" />
                    Study
                </Button>
            </div>
        </div>
    );
}
