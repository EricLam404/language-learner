'use client'

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

interface DifficultySelectorProps {
  onDifficultyChange: (difficulty: string) => void;
}

export function DifficultySelector({ onDifficultyChange }: DifficultySelectorProps) {
  return (
    <div>
      <Label htmlFor="difficulty" className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 block">
        Difficulty
      </Label>
      <RadioGroup id="difficulty" defaultValue="beginner" onValueChange={onDifficultyChange} className="flex space-x-4">
        <div className="flex items-center">
          <RadioGroupItem value="beginner" id="beginner" className="text-purple-600" />
          <Label htmlFor="beginner" className="ml-2 text-sm">Beginner</Label>
        </div>
        <div className="flex items-center">
          <RadioGroupItem value="intermediate" id="intermediate" className="text-purple-600" />
          <Label htmlFor="intermediate" className="ml-2 text-sm">Intermediate</Label>
        </div>
        <div className="flex items-center">
          <RadioGroupItem value="advanced" id="advanced" className="text-purple-600" />
          <Label htmlFor="advanced" className="ml-2 text-sm">Advanced</Label>
        </div>
      </RadioGroup>
    </div>
  )
}
