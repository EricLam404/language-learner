"use client";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Edit, Volume2 } from "lucide-react";
import { Flashcard } from "@/lib/types";

interface FlashcardGridProps {
    cards: Flashcard[];
    isGridView: boolean;
    onEdit: (card: Flashcard) => void;
    onDelete: (id: number) => void;
}

export function FlashcardGrid({
    cards,
    isGridView,
    onEdit,
    onDelete,
}: FlashcardGridProps) {
    return (
        <div
            className={`grid gap-4 ${
                isGridView
                    ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                    : "grid-cols-1"
            }`}
        >
            {cards.map((card) => (
                <Card key={card.id} className="flex flex-col">
                    <CardHeader>
                        <CardTitle className="flex justify-between items-center">
                            <span>{card.front}</span>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        className="h-8 w-8 p-0"
                                    >
                                        <span className="sr-only">
                                            Open menu
                                        </span>
                                        <Edit className="h-4 w-4" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem
                                        onClick={() => onEdit(card)}
                                    >
                                        Edit
                                    </DropdownMenuItem>
                                    <DropdownMenuItem
                                        onClick={() => onDelete(card.id)}
                                    >
                                        Delete
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </CardTitle>
                        <CardDescription>{card.back}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>
                            <strong>Pinyin:</strong> {card.pinyin}
                        </p>
                        <p>
                            <strong>Character:</strong> {card.character}
                        </p>
                        <p>
                            <strong>Example:</strong> {card.example}
                        </p>
                    </CardContent>
                    <CardFooter className="mt-auto">
                        <Button variant="outline" className="w-full">
                            <Volume2 className="w-4 h-4 mr-2" />
                            Listen
                        </Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
}
