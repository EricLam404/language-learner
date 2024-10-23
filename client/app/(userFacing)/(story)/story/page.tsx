"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SearchIcon, GlobeIcon, ChevronDownIcon } from "@/components/icons";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@components/ui/dropdown-menu";
import { useLanguages } from "@/lib/hooks/useLanguage";
import { useQuery } from "@apollo/client";
import { GET_STORIES } from "@app/_components/graphql/stories";
import Link from "next/link";
import { difficultyLevels, levels } from "@app/_components/difficultyLevels";
import { DeleteStoryForm } from "@app/_components/forms/StoryForms";
import { Dialog, DialogContent } from "@components/ui/dialog";
import { GetStoriesQuery } from "@/__generated__/graphql";

export type Story = GetStoriesQuery["stories"][number];

export default function page() {
    const { data: languages, isLoading, isError } = useLanguages();
    const { data: stories, loading, error } = useQuery(GET_STORIES);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
    const [selectedLevels, setSelectedLevels] = useState<string[]>(levels);
    const [filteredStories, setFilteredStories] = useState<Story[]>([]);
    const [deleteModal, setDeleteModal] = useState(false);
    const [deleteStory, setDeleteStory] = useState<Story | null>(null);
    useEffect(() => {
        if (!isLoading && !isError && languages) {
            setSelectedLanguages(languages);
        }
    }, [languages]);

    useEffect(() => {
        if (stories?.stories) setFilteredStories(stories.stories);
    }, [stories]);

    const handleDeleteClick = (story: Story) => {
        setDeleteStory(story);
        setDeleteModal(true);
    };

    const filterStories = () => {
        let filtered = stories?.stories || [];
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
                    <Link href="/create-story">
                        <Button>Add Story</Button>
                    </Link>
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
                                <p className="text-muted-foreground">
                                    {story.description
                                        ? story.description
                                        : "No description"}
                                </p>
                            </Link>
                        </CardContent>
                        <CardFooter className="flex flex-col gap-2 auto">
                            <Link
                                href={{
                                    pathname: "/update-story",
                                    query: {
                                        story: JSON.stringify(story),
                                    },
                                }}
                                className="w-full"
                            >
                                <Button variant="outline" className="w-full">
                                    Edit
                                </Button>
                            </Link>
                            <Button
                                variant="destructive"
                                className="w-full"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleDeleteClick(story);
                                }}
                            >
                                Delete
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
            {deleteStory && (
                <Dialog open={deleteModal} onOpenChange={setDeleteModal}>
                    <DialogContent className="sm:max-w-[425px]">
                        <DeleteStoryForm
                            handleClose={() => setDeleteModal(false)}
                            story={deleteStory}
                        />
                    </DialogContent>
                </Dialog>
            )}
        </div>
    );
}
