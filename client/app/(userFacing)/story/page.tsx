"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { stories } from "@/public/dummydata/stories";
import { SearchIcon, GlobeIcon, ChevronDownIcon } from "@/components/icons";
import Selections from "@app/_components/forms/Selections";
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select";

interface stories {
    id: number;
    title: string;
    language: string;
    difficulty: string;
    description: string;
}
[];

const difficultyLevels = ["Beginner", "Intermediate", "Advanced"];

export default function page() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedLanguage, setSelectedLanguage] = useState<string>();
    const [selectedDifficulty, setSelectedDifficulty] = useState<string>();
    const [filteredStories, setFilteredStories] = useState(stories);

    const filterStories = () => {
        let filtered = stories;

        if (searchTerm) {
            filtered = filtered.filter(
                (story) =>
                    story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    story.language.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        if (selectedLanguage) {
            filtered = filtered.filter((story) => story.language === selectedLanguage);
        }
        if (selectedDifficulty) {
            filtered = filtered.filter((story) => story.difficulty === selectedDifficulty);
        }

        setFilteredStories(filtered);
    };

    useEffect(() => {
        filterStories();
    }, [searchTerm, selectedLanguage, selectedDifficulty]);

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Select
                        value={selectedLanguage}
                        onValueChange={setSelectedLanguage}
                    >
                        <SelectTrigger className="w-48">
                            <SelectValue placeholder="Select Language" />
                        </SelectTrigger>
                        <SelectContent>
                            <Selections />
                        </SelectContent>
                    </Select>
                    <Select
                        value={selectedDifficulty}
                        onValueChange={setSelectedDifficulty}
                    >
                        <SelectTrigger className="w-48">
                            <SelectValue placeholder="Select Language" />
                        </SelectTrigger>
                        <SelectContent>
                            {difficultyLevels.map((difficulty: string) => (
                                <SelectItem key={difficulty} value={difficulty}>
                                    {difficulty}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
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
                                <Badge variant={story.difficulty.toLowerCase() as "beginner" | "intermediate" | "advanced"}>
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
                            <Button>
                                Mark as Read
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
