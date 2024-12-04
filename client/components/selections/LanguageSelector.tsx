'use client'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"

interface LanguageSelectorProps {
  onLanguageChange: (language: string) => void;
}

export function LanguageSelector({ onLanguageChange }: LanguageSelectorProps) {
  return (
    <div>
      <Label htmlFor="language" className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 block">
        Language
      </Label>
      <Select onValueChange={onLanguageChange}>
        <SelectTrigger id="language" className="w-full">
          <SelectValue placeholder="Select a language" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="spanish">Spanish</SelectItem>
          <SelectItem value="french">French</SelectItem>
          <SelectItem value="german">German</SelectItem>
          <SelectItem value="italian">Italian</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}