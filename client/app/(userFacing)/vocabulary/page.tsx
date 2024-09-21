"use client";
import { useState } from "react";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
    Table,
    TableHeader,
    TableRow,
    TableHead,
    TableBody,
    TableCell,
} from "@/components/ui/table";
import {
    UploadIcon,
    PlusIcon,
    FilePenIcon,
    TrashIcon,
} from "@app/_components/icons";
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
    DialogClose,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { data } from "@/public/dummydata/vocabulary";

type vocabularyList = {
    word: string;
    meaning: string;
    sentence: string;
}[];

// TODO: Add word to vocabulary list validation check
// FEATURE: Add radio button to select words for flashcards
// FEATURE: Add sort functionality for vocabulary list
// FEATURE: Add pagination for vocabulary list
// FEATURE: Add search functionality for vocabulary list
// FEATURE: Add import functionality for vocabulary list
// FEATURE: Add delete functionality for vocabulary list
// FEATURE: Add edit functionality for vocabulary list

// NOT IMPORTANT FEATURE: Add export functionality for vocabulary list

export default function Component() {
    let vocabularyList: vocabularyList = data;
    const [selectedLanguage, setSelectedLanguage] = useState("es");
    const [showModal, setShowModal] = useState(false);
    const [newWord, setNewWord] = useState("");
    const [newMeaning, setNewMeaning] = useState("");
    const [newExample, setNewExample] = useState("");
    const handleAddWord = () => {
        console.log("New word:", newWord);
        console.log("New meaning:", newMeaning);
        console.log("New example:", newExample);
        setShowModal(false);
    };
    return (
        <section>
            <div className="w-full max-w-4xl mx-auto py-12">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-3xl font-bold">Vocabulary List</h1>
                    <div className="flex items-center gap-4">
                        {/* TODO: Implement import csv functionality */}
                        <Button disabled>
                            <UploadIcon className="mr-2 h-4 w-4" />
                            Import CSV
                        </Button>
                        <Button onClick={() => setShowModal(true)}>
                            <PlusIcon className="mr-2 h-4 w-4" />
                            Add Word
                        </Button>
                        <Select
                            value={selectedLanguage}
                            onValueChange={setSelectedLanguage}
                        >
                            <SelectTrigger className="w-48">
                                <SelectValue placeholder="Select Language" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="es">Spanish</SelectItem>
                                <SelectItem value="fr">French</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div className="border rounded-lg overflow-hidden">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[200px]">
                                    Word
                                </TableHead>
                                <TableHead className="w-[200px]">
                                    Meaning
                                </TableHead>
                                <TableHead className="w-[400px]">
                                    Example Sentence
                                </TableHead>
                                <TableHead className="w-[100px]">
                                    Actions
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {vocabularyList.map((word, index) => (
                                <TableRow key={index}>
                                    <TableCell className="font-medium">
                                        {word.word}
                                    </TableCell>
                                    <TableCell>{word.meaning}</TableCell>
                                    <TableCell>{word.sentence}</TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-2">
                                            <Button variant="ghost" size="icon">
                                                <FilePenIcon className="h-4 w-4" />
                                                <span className="sr-only">
                                                    Edit
                                                </span>
                                            </Button>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="text-red-500"
                                            >
                                                <TrashIcon className="h-4 w-4" />
                                                <span className="sr-only">
                                                    Delete
                                                </span>
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
            <Dialog open={showModal} onOpenChange={setShowModal}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Add New Word</DialogTitle>
                        <DialogDescription>
                            Add a new word to the{" "}
                            {selectedLanguage === "es" ? "Spanish" : "French"}{" "}
                            vocabulary list.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid items-center grid-cols-4 gap-4">
                            <Label htmlFor="word" className="text-right">
                                Word
                            </Label>
                            <Input
                                id="word"
                                value={newWord}
                                onChange={(e) => setNewWord(e.target.value)}
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid items-center grid-cols-4 gap-4">
                            <Label htmlFor="meaning" className="text-right">
                                Meaning
                            </Label>
                            <Input
                                id="meaning"
                                value={newMeaning}
                                onChange={(e) => setNewMeaning(e.target.value)}
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid items-center grid-cols-4 gap-4">
                            <Label htmlFor="example" className="text-right">
                                Example
                            </Label>
                            <Input
                                id="example"
                                value={newExample}
                                onChange={(e) => setNewExample(e.target.value)}
                                className="col-span-3"
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button onClick={handleAddWord}>Save</Button>
                        <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </section>
    );
}
