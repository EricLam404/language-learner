"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { Flashcard } from "@/lib/types";

interface StudyModeProps {
  cards: Flashcard[];
  onExit: () => void;
}

export function StudyMode({ cards, onExit }: StudyModeProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [revealedFaces, setRevealedFaces] = useState<string[]>([]);

  const handleNext = () => {
    setRevealedFaces([]);
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const handlePrev = () => {
    setRevealedFaces([]);
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const toggleReveal = (face: string) => {
    setRevealedFaces(prev =>
      prev.includes(face) ? prev.filter(f => f !== face) : [...prev, face]
    );
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>{cards[currentIndex].front}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <AnimatePresence>
            {revealedFaces.includes('back') && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p><strong>Back:</strong> {cards[currentIndex].back}</p>
              </motion.div>
            )}
            {/* Similar motion.div blocks for pinyin, character, and example */}
          </AnimatePresence>
        </CardContent>
        <CardFooter className="flex flex-wrap gap-2">
          <Button onClick={() => toggleReveal('back')} variant="outline">
            {revealedFaces.includes('back') ? 'Hide' : 'Reveal'} Back
          </Button>
          {/* Similar buttons for other faces */}
        </CardFooter>
      </Card>
      <div className="flex space-x-4">
        <Button onClick={handlePrev}>Previous</Button>
        <Button onClick={handleNext}>Next</Button>
      </div>
      <Button variant="outline" onClick={onExit}>Exit Study Mode</Button>
    </div>
  );
}