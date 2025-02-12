"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

const languages = [
    "English",
    "Spanish",
    "French",
    "German",
    "Italian",
    "Chinese",
    "Japanese",
    "Korean",
    "Arabic",
    "Hindi",
    "Russian",
    "Portuguese",
    "Dutch",
    "Swedish",
    "Greek",
    "Turkish",
    "Polish",
    "Vietnamese",
    "Thai",
    "Indonesian",
];

interface LanguageSelectorProps {
    selectedLanguages: string[];
    onLanguagesChange: (languages: string[]) => void;
}

export function UserLanguageSelector({
    selectedLanguages,
    onLanguagesChange,
}: LanguageSelectorProps) {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(selectedLanguages);

    const handleSelect = (language: string) => {
        const newValue = value.includes(language)
            ? value.filter((l) => l !== language)
            : [...value, language];
        setValue(newValue);
    };

    const handleSave = () => {
        onLanguagesChange(value);
        setOpen(false);
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="outline" size="sm">
                    Update Languages
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Select Languages</DialogTitle>
                </DialogHeader>
                <Command>
                    <CommandList>
                        <CommandEmpty>No languages found.</CommandEmpty>
                        <CommandGroup>
                            {languages.map((language) => (
                                <CommandItem
                                    key={language}
                                    onSelect={() => handleSelect(language)}
                                >
                                    <Check
                                        className={`mr-2 h-4 w-4 ${
                                            value.includes(language)
                                                ? "opacity-100"
                                                : "opacity-0"
                                        }`}
                                    />
                                    {language}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
                <Button onClick={handleSave} className="mt-4">
                    Save
                </Button>
            </DialogContent>
        </Dialog>
    );
}
