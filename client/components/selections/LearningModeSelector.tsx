'use client'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"

interface LearningModeSelectorProps {
  onModeChange: (mode: string) => void;
}

export function LearningModeSelector({ onModeChange }: LearningModeSelectorProps) {
  return (
    <div>
      <Label htmlFor="mode" className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 block">
        Learning Mode
      </Label>
      <Select onValueChange={onModeChange}>
        <SelectTrigger id="mode" className="w-full">
          <SelectValue placeholder="Select a mode" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="conversation">Conversation</SelectItem>
          <SelectItem value="flashcards">Flashcards</SelectItem>
          <SelectItem value="pronunciation">Pronunciation Practice</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}