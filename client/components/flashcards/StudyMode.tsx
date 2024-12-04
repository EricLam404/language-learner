"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { Flashcard } from "@/lib/types";
import { capitalizeFirstLetter } from "@/lib/stringUtils";

interface StudyModeProps {
    cards: Flashcard[];
    updateStudiedCard: (id: string, level: number) => void;
    onExit: () => void;
}

export function StudyMode({
    cards,
    updateStudiedCard,
    onExit,
}: StudyModeProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [dueCards, setDueCards] = useState<Flashcard[]>(
        cards.filter(
            (card) => Date.parse(card.nextReviewAt!) <= new Date().getTime()
        ) || []
    );
    const [revealedFaces, setRevealedFaces] = useState<string[]>([]);
    const handleRecallResponse = (score: number) => {
        setRevealedFaces([]);
        if (currentIndex + 1 === dueCards.length) {
            onExit();
        }

        updateStudiedCard(dueCards[currentIndex].id, score);
        setCurrentIndex((prev) => prev + 1);
    };

    const toggleReveal = (face: string) => {
        setRevealedFaces((prev) =>
            prev.includes(face)
                ? prev.filter((f) => f !== face)
                : [...prev, face]
        );
    };

    if (dueCards.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center space-y-4">
                <Card className="w-full max-w-md">
                    <CardHeader>
                        <CardTitle>All caught up!</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>
                            You have no more flashcards due for review. Keep up
                            the good work!
                        </p>
                    </CardContent>
                    <CardFooter>
                        <Button variant="outline" onClick={onExit}>
                            Exit Study Mode
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center space-y-4">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle>
                        {
                            dueCards[currentIndex].faces!.find(
                                (face) => face.isFront
                            )?.content
                        }
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                    <AnimatePresence>
                        {revealedFaces.map((faceType) => (
                            <motion.div
                                key={faceType}
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <p>
                                    <strong>
                                        {capitalizeFirstLetter(faceType)}:
                                    </strong>{" "}
                                    {
                                        dueCards[currentIndex].faces!.find(
                                            (face) => face.type === faceType
                                        )?.content
                                    }
                                </p>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </CardContent>
                <CardFooter className="flex flex-wrap gap-2">
                    {dueCards[currentIndex]
                        .faces!.filter((face) => face.isFront)
                        .map((face) => (
                            <Button
                                key={face.type}
                                onClick={() => toggleReveal(face.type)}
                                variant="outline"
                            >
                                {revealedFaces.includes(face.type)
                                    ? `Hide ${capitalizeFirstLetter(face.type)}`
                                    : `Reveal ${capitalizeFirstLetter(
                                          face.type
                                      )}`}
                            </Button>
                        ))}
                </CardFooter>
            </Card>
            <div className="flex space-x-4">
                <Button
                    onClick={() => handleRecallResponse(1)}
                    variant="outline"
                >
                    Forgot
                </Button>
                <Button
                    onClick={() => handleRecallResponse(2)}
                    variant="outline"
                >
                    Familiar
                </Button>
                <Button
                    onClick={() => handleRecallResponse(3)}
                    variant="outline"
                >
                    Almost
                </Button>
                <Button
                    onClick={() => handleRecallResponse(5)}
                    variant="outline"
                >
                    Got it!
                </Button>
            </div>
            <Button variant="outline" onClick={onExit}>
                Exit Study Mode
            </Button>
        </div>
    );
}
