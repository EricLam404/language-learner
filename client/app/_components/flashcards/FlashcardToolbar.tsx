"use client";
import { Button } from "@/components/ui/button";
import { Grid, List, Plus, BookOpen } from "lucide-react";

interface FlashcardToolbarProps {
    isGridView: boolean;
    setIsGridView: (value: boolean) => void;
    onAddCard: () => void;
    onStudyMode: () => void;
}

export function FlashcardToolbar({
    isGridView,
    setIsGridView,
    onAddCard,
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
                <Button onClick={onStudyMode}>
                    <BookOpen className="w-4 h-4 mr-2" />
                    Study Flashcards
                </Button>
            </div>
        </div>
    );
}
