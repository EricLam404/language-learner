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
import { type Flashcard } from "@/lib/types";
import { FaceType } from "@/__generated__/graphql";

interface FlashcardGridProps {
    cards: Flashcard[];
    isGridView: boolean;
    onEdit: (card: Flashcard) => void;
    onDelete: (id: string) => void;
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
                        <span>{card.faces!.find((face) => face.type === FaceType.Front)?.content}</span>
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
                                        onClick={() => onDelete(card.id.toString())}
                                    >
                                        Delete
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </CardTitle>
                        <CardDescription>{card.faces!.find((face) => face.type === FaceType.Back)?.content}</CardDescription>
                    </CardHeader>
                    <CardContent>
                    {card.faces!
                        .filter((face) => face.type !== FaceType.Front && face.type !== FaceType.Back)
                        .map((face) => (
                            <div key={face.type} className="mb-2">
                                <strong>{face.type}:</strong> {face.content}
                            </div>
                        ))}
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
