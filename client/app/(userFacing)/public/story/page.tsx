"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SearchIcon, GlobeIcon, ChevronDownIcon } from "@/components/icons";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@components/ui/dropdown-menu";
import { useLanguages } from "@/lib/hooks/useLanguages";
import { useQuery } from "@apollo/client";
import { GET_PUBLIC_STORIES } from "@components/graphql/stories";
import { difficultyLevels, levels } from "@/lib/difficultyLevels";
import Link from "next/link";

export interface Story {
    __typename?: "Story";
    description: string;
    id: string;
    difficulty: number;
    imageUrl?: string | null;
    languageName: string;
    title: string;
    user?: {
        __typename?: "User";
        username: string;
    } | null;
    tags?: Array<{
        __typename?: "Tag";
        name: string;
    }> | null;
}

// TODO: Add search functionality with timeout
// TODO: Add search by tags
// Fix: Fetch only public stories with user languages

export default function Page() {
    const { data: languages, isLoading, isError } = useLanguages();
    const { data: stories, loading, error } = useQuery(GET_PUBLIC_STORIES);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
    const [selectedLevels, setSelectedLevels] = useState<string[]>(levels);
    const [filteredStories, setFilteredStories] = useState<Story[]>([]);
    // const [searchTimeout, setSearchTimeout] = useState(null);
    // const [searchedResults, setSearchedResults] = useState([]);
    useEffect(() => {
        if (!isLoading && !isError && languages) {
            setSelectedLanguages(languages);
        }
    }, [languages]);

    useEffect(() => {
        if (stories?.publicStories)
            setFilteredStories(stories.publicStories.stories);
    }, [stories]);

    // const handleSearchChange = (e) => {
    //     clearTimeout(searchTimeout);
    //     setSearchText(e.target.value);

    //     setSearchTimeout(
    //         setTimeout(() => {
    //             setSearchedResults("");
    //         }, 500)
    //     );
    // };

    const filterStories = () => {
        let filtered = stories?.publicStories.stories || [];
        if (searchTerm) {
            filtered = filtered.filter(
                (story) =>
                    story.title
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                    story.languageName
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
            );
        }
        filtered = filtered.filter((story) =>
            selectedLanguages.includes(story.languageName)
        );
        filtered = filtered.filter((story) =>
            selectedLevels.includes(difficultyLevels[story.difficulty])
        );
        setFilteredStories(filtered);
    };

    useEffect(() => {
        filterStories();
    }, [searchTerm, selectedLanguages, selectedLevels]);

    const handleLanguageChange = (value: string) => {
        if (value === "") {
            if (selectedLanguages.length === languages?.length) {
                setSelectedLanguages([]);
            } else {
                setSelectedLanguages(languages || []);
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
    const handleLevelChange = (value: string) => {
        if (value === "") {
            if (selectedLevels.length === levels.length) {
                setSelectedLevels([]);
            } else {
                setSelectedLevels(levels);
            }
        } else {
            if (selectedLevels.includes(value)) {
                setSelectedLevels(
                    selectedLevels.filter((level) => level !== value)
                );
            } else {
                setSelectedLevels([...selectedLevels, value]);
            }
        }
    };
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-6 flex flex-col sm:flex-row items-center justify-between">
                <div className="flex flex-col sm:flex-row items-center gap-4">
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
                                key="all-languages"
                                checked={
                                    selectedLanguages.length ===
                                    languages?.length
                                }
                                onCheckedChange={() => handleLanguageChange("")}
                            >
                                All Languages
                            </DropdownMenuCheckboxItem>
                            <DropdownMenuSeparator />
                            {languages?.map((lang) => (
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
                                key="all-levels"
                                checked={
                                    selectedLevels.length === levels.length
                                }
                                onCheckedChange={() => handleLevelChange("")}
                            >
                                All Difficulties
                            </DropdownMenuCheckboxItem>
                            <DropdownMenuSeparator />
                            {levels.map((level) => (
                                <DropdownMenuCheckboxItem
                                    key={level}
                                    checked={selectedLevels.includes(level)}
                                    onCheckedChange={() =>
                                        handleLevelChange(level)
                                    }
                                >
                                    {level}
                                </DropdownMenuCheckboxItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

                <div className="flex flex-col mt-4 sm:flex-row sm:mt-0 gap-4 items-center justify-center">
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
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredStories.map((story) => (
                    <Card
                        key={story.id}
                        className="relative h-full flex flex-col"
                    >
                        <CardContent className="p-4 space-y-2 flex-grow">
                            <Link
                                href={`/story/view/${story.id}`}
                                className="block"
                            >
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-medium">
                                        {story.title}
                                    </h3>
                                    <Badge
                                        variant={
                                            difficultyLevels[
                                                story.difficulty
                                            ].toLowerCase() as
                                                | "beginner"
                                                | "intermediate"
                                                | "advanced"
                                        }
                                    >
                                        {difficultyLevels[story.difficulty]}
                                    </Badge>
                                </div>
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <GlobeIcon className="h-4 w-4" />
                                    <span>{story.languageName}</span>
                                </div>
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <span>
                                        Author:{" "}
                                        {story.user
                                            ? story.user.username
                                            : "N/A"}
                                    </span>
                                </div>
                                <p className="text-muted-foreground">
                                    {story.description
                                        ? story.description
                                        : "No description"}
                                </p>
                            </Link>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
