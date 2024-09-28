"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { stories } from "@/public/dummydata/stories";
import { SearchIcon, GlobeIcon, ChevronDownIcon } from "@/components/icons";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@components/ui/dropdown-menu";

interface stories {
    id: number;
    title: string;
    language: string;
    difficulty: string;
    description: string;
}
[];

const difficultyLevels = ["Beginner", "Intermediate", "Advanced"];
const languages = [
    "English",
    "French",
    "Chinese",
    "German",
    "Spanish",
    "Russian",
];

export default function page() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedLanguages, setSelectedLanguages] = useState<string[]>(
        stories.map((story) => story.language)
    );
    const [selectedDifficulties, setSelectedDifficulties] = useState<string[]>(
        stories.map((story) => story.difficulty)
    );
    const [filteredStories, setFilteredStories] = useState(stories);

    const filterStories = () => {
        let filtered = stories;
        if (searchTerm) {
            filtered = filtered.filter(
                (story) =>
                    story.title
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                    story.language
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
            );
        }
        filtered = filtered.filter((story) =>
            selectedLanguages.includes(story.language)
        );
        filtered = filtered.filter((story) =>
            selectedDifficulties.includes(story.difficulty)
        );
        setFilteredStories(filtered);
    };

    useEffect(() => {
        filterStories();
    }, [searchTerm, selectedLanguages, selectedDifficulties]);

    const handleLanguageChange = (value: string) => {
        if (value === "") {
            const allLanguages = stories.map((story) => story.language);
            if (selectedLanguages.length === allLanguages.length) {
                setSelectedLanguages([]);
            } else {
                setSelectedLanguages(stories.map((story) => story.language));
            }
        } else {
            if (selectedLanguages.includes(value)) {
                setSelectedLanguages(
                    selectedLanguages.filter((lang) => lang !== value)
                );
            } else {
                setSelectedLanguages([...selectedLanguages, value]);
            }
        }
    };
    const handleDifficultyChange = (value: string) => {
        if (value === "") {
            const allDifficulties = stories.map((story) => story.difficulty);
            if (selectedDifficulties.length === allDifficulties.length) {
                setSelectedDifficulties([]);
            } else {
                setSelectedDifficulties(
                    stories.map((story) => story.difficulty)
                );
            }
        } else {
            if (selectedDifficulties.includes(value)) {
                setSelectedDifficulties(
                    selectedDifficulties.filter((diff) => diff !== value)
                );
            } else {
                setSelectedDifficulties([...selectedDifficulties, value]);
            }
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="w-48">
                                <span className="flex items-center justify-between">
                                    Filter by Language
                                    <ChevronDownIcon className="h-4 w-4" />
                                </span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-48">
                            <DropdownMenuCheckboxItem
                                checked={
                                    selectedLanguages.length === stories.length
                                }
                                onCheckedChange={() => handleLanguageChange("")}
                            >
                                All Languages
                            </DropdownMenuCheckboxItem>
                            <DropdownMenuSeparator />
                            {languages.map((lang) => (
                                <DropdownMenuCheckboxItem
                                    key={lang}
                                    checked={selectedLanguages.includes(lang)}
                                    onCheckedChange={() =>
                                        handleLanguageChange(lang)
                                    }
                                >
                                    {lang}
                                </DropdownMenuCheckboxItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="w-48">
                                <span className="flex items-center justify-between">
                                    Filter by Difficulty
                                    <ChevronDownIcon className="h-4 w-4" />
                                </span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-48">
                            <DropdownMenuCheckboxItem
                                checked={
                                    selectedDifficulties.length ===
                                    stories.map((story) => story.difficulty)
                                        .length
                                }
                                onCheckedChange={() =>
                                    handleDifficultyChange("")
                                }
                            >
                                All Difficulties
                            </DropdownMenuCheckboxItem>
                            <DropdownMenuSeparator />
                            {difficultyLevels.map((diff) => (
                                <DropdownMenuCheckboxItem
                                    key={diff}
                                    checked={selectedDifficulties.includes(
                                        diff
                                    )}
                                    onCheckedChange={() =>
                                        handleDifficultyChange(diff)
                                    }
                                >
                                    {diff}
                                </DropdownMenuCheckboxItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <SearchIcon className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <Input
                        type="text"
                        placeholder="Search stories..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 pr-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredStories.map((story) => (
                    <Card key={story.id} className="relative">
                        <CardContent className="p-4 space-y-2">
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg font-medium">
                                    {story.title}
                                </h3>
                                <Badge
                                    variant={
                                        story.difficulty.toLowerCase() as
                                            | "beginner"
                                            | "intermediate"
                                            | "advanced"
                                    }
                                >
                                    {story.difficulty}
                                </Badge>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                                <GlobeIcon className="h-4 w-4" />
                                <span>{story.language}</span>
                            </div>
                            <p className="text-muted-foreground">
                                {story.description}
                            </p>
                        </CardContent>
                        <CardFooter className="px-4 pb-4">
                            {/* <Button
                                variant={
                                    readStories.includes(story.id)
                                        ? "secondary"
                                        : "primary"
                                }
                                onClick={() => handleMarkAsRead(story.id)}
                                className="w-full"
                            >
                                {readStories.includes(story.id)
                                    ? "Marked as Read"
                                    : "Mark as Read"}
                            </Button> */}
                            <Button>Mark as Read</Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
