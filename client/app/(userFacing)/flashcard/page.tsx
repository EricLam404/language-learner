"use client";

import { useEffect, useState } from "react";
import { ChevronDownIcon, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@components/ui/dropdown-menu";
import { useLanguages } from "@/lib/hooks/useLanguages";
import { useQuery } from "@apollo/client";
import { GET_FLASHCARD_SETS } from "@components/graphql/flashcards";
import { SearchIcon } from "@components/icons";
import {
    FlashcardSetMenu,
    FlashcardSetForm,
} from "@components/forms/FlashcardSet";
import Link from "next/link";
import { type FlashcardSet } from "@/lib/types";

export default function Page() {
    const { data: languages, isLoading, isError } = useLanguages();
    const {
        data: flashcardSets,
        loading,
        error,
    } = useQuery(GET_FLASHCARD_SETS);
    const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
    const [filteredSets, setFilteredSets] = useState<FlashcardSet[]>([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        if (flashcardSets?.flashcardSets)
            setFilteredSets(flashcardSets.flashcardSets);
    }, [flashcardSets]);

    useEffect(() => {
        if (!isLoading && !isError && languages) {
            setSelectedLanguages(languages);
        }
    }, [languages]);

    const filterFlashcardSets = () => {
        let filtered = flashcardSets?.flashcardSets || [];
        if (searchTerm) {
            filtered = filtered.filter(
                (set) =>
                    set.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    set.languageName
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                    set?.description
                        ?.toLowerCase()
                        .includes(searchTerm.toLowerCase())
            );
        }
        filtered = filtered.filter((set) =>
            selectedLanguages.includes(set.languageName)
        );
        setFilteredSets(filtered);
    };

    useEffect(() => {
        filterFlashcardSets();
    }, [searchTerm, selectedLanguages]);

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

    return (
        <div className="container mx-auto p-4 space-y-8 h-auto">
            <Card className="h-full">
                <CardHeader>
                    <CardTitle className="flex justify-between items-center">
                        <p>Flashcard Sets</p>
                        <div className="flex flex-col mt-4 sm:flex-row sm:mt-0 gap-4 items-center justify-center">
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <SearchIcon className="h-5 w-5 text-muted-foreground" />
                                </div>
                                <Input
                                    type="text"
                                    placeholder="Search sets..."
                                    value={searchTerm}
                                    onChange={(e) =>
                                        setSearchTerm(e.target.value)
                                    }
                                    className="pl-10 pr-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-1 focus:ring-primary"
                                />
                            </div>
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
                                        onCheckedChange={() =>
                                            handleLanguageChange("")
                                        }
                                    >
                                        All Languages
                                    </DropdownMenuCheckboxItem>
                                    <DropdownMenuSeparator />
                                    {languages?.map((lang) => (
                                        <DropdownMenuCheckboxItem
                                            key={lang}
                                            checked={selectedLanguages.includes(
                                                lang
                                            )}
                                            onCheckedChange={() =>
                                                handleLanguageChange(lang)
                                            }
                                        >
                                            {lang}
                                        </DropdownMenuCheckboxItem>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </CardTitle>
                    <CardDescription>
                        Create and manage your flashcard sets
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <FlashcardSetForm />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {filteredSets.map((set) => (
                            <Card key={set.id} className="flex flex-col">
                                <Link
                                    href={`/flashcard/${set.id}`}
                                    className="block h-full"
                                >
                                    <CardHeader className="flex-grow">
                                        <CardTitle className="flex justify-between">
                                            {set.name}
                                            <span className="text-sm text-muted-foreground">{set.languageName}</span>
                                        </CardTitle>
                                        <CardDescription>
                                            {set.description}
                                        </CardDescription>
                                    </CardHeader>
                                </Link>
                                <CardFooter className="justify-end">
                                    <FlashcardSetMenu flashcardSet={set} />
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* <Card>
                <CardHeader>
                    <CardTitle>Add New Flashcard</CardTitle>
                    <CardDescription>
                        Create a new flashcard and optionally assign it to a set
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="front">Front</Label>
                            <Input
                                id="front"
                                placeholder="Front of card"
                                value={newCardFront}
                                onChange={(e) =>
                                    setNewCardFront(e.target.value)
                                }
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="back">Back</Label>
                            <Input
                                id="back"
                                placeholder="Back of card"
                                value={newCardBack}
                                onChange={(e) => setNewCardBack(e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="pinyin">Pinyin (optional)</Label>
                            <Input
                                id="pinyin"
                                placeholder="Pinyin"
                                value={newCardPinyin}
                                onChange={(e) =>
                                    setNewCardPinyin(e.target.value)
                                }
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="translation">
                                Translation (optional)
                            </Label>
                            <Input
                                id="translation"
                                placeholder="Translation"
                                value={newCardTranslation}
                                onChange={(e) =>
                                    setNewCardTranslation(e.target.value)
                                }
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="set">Assign to Set (optional)</Label>
                        <Select onValueChange={setSelectedSet}>
                            <SelectTrigger id="set">
                                <SelectValue placeholder="Select a set" />
                            </SelectTrigger>
                            <SelectContent>
                                {flashcardSets.map((set) => (
                                    <SelectItem
                                        key={set.id}
                                        value={set.id.toString()}
                                    >
                                        {set.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button onClick={handleAddCard}>
                        <Plus className="mr-2 h-4 w-4" /> Add Flashcard
                    </Button>
                </CardFooter>
            </Card> */}
        </div>
    );
}
