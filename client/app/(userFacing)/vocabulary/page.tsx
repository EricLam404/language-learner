"use client";
import { useState } from "react";
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
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
    DialogClose,
} from "@/components/ui/dialog";
import { GET_VOCABULARY } from "@app/_components/graphql/queries";
import { useQuery } from "@apollo/client";
import Skeleton from "react-loading-skeleton";
import { VocabularyForm } from "@app/_components/forms/CreateVocabulary";
import { useUser } from "@/lib/hooks/useUser";

// TODO: Add word to vocabulary list validation check
// FEATURE: Add radio button to select words for flashcards
// FEATURE: Add sort functionality for vocabulary list
// FEATURE: Add pagination for vocabulary list
// FEATURE: Add search functionality for vocabulary list
// FEATURE: Add import functionality for vocabulary list
// FEATURE: Add delete functionality for vocabulary list
// FEATURE: Add edit functionality for vocabulary list

// FUTURE FEATURE: Add export functionality for vocabulary list

export default function Component() {
    const { data: user, isLoading, error: userError } = useUser();
    const { data: vocabulary, loading, error } = useQuery(GET_VOCABULARY);
    const [selectedLanguage, setSelectedLanguage] = useState<string>();
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => {
        setShowModal(false);
    };

    if (userError || error) {
        return <div>An Unknown Error has occurred</div>;
    }

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
                        {isLoading ? (
                            <Skeleton height={40} width={40} />
                        ) : (
                            <Select
                                value={selectedLanguage}
                                onValueChange={setSelectedLanguage}
                            >
                                <SelectTrigger className="w-48">
                                    <SelectValue placeholder="Select Language" />
                                </SelectTrigger>
                                <SelectContent>
                                    {user?.app_metadata.profile.languages.map(
                                        (language: string) => (
                                            <SelectItem
                                                key={language}
                                                value={language}
                                            >
                                                {language}
                                            </SelectItem>
                                        )
                                    )}
                                </SelectContent>
                            </Select>
                        )}
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
                            {loading ? (
                                <>
                                    {Array.from({ length: 10 }).map(
                                        (_, index) => (
                                            <TableRow key={index}>
                                                {/* TODO: Fix Skeleton loading - width is at 0 */}
                                                <TableCell>
                                                    <Skeleton height={20} />
                                                </TableCell>
                                                <TableCell>
                                                    <Skeleton height={20} />
                                                </TableCell>
                                                <TableCell>
                                                    <Skeleton height={20} />
                                                </TableCell>
                                                <TableCell>
                                                    <div className="flex items-center gap-2">
                                                        <Skeleton
                                                            circle
                                                            height={20}
                                                        />
                                                        <Skeleton
                                                            circle
                                                            height={20}
                                                        />
                                                    </div>
                                                </TableCell>
                                            </TableRow>
                                        )
                                    )}
                                </>
                            ) : (
                                vocabulary &&
                                vocabulary.vocabularies
                                    .filter(
                                        (vocab) =>
                                            vocab.languageName ===
                                            selectedLanguage
                                    )
                                    .map((word, index) => (
                                        <TableRow key={index}>
                                            <TableCell className="font-medium">
                                                {word.word}
                                            </TableCell>
                                            <TableCell>
                                                {word.meaning}
                                            </TableCell>
                                            <TableCell>
                                                {word.example}
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex items-center gap-2">
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                    >
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
                                    ))
                            )}
                        </TableBody>
                    </Table>
                </div>
            </div>
            <Dialog open={showModal} onOpenChange={setShowModal}>
                <DialogContent className="sm:max-w-[425px]">
                    <VocabularyForm
                        handleClose={handleClose}
                        defaultLanguage={selectedLanguage || ""}
                    />
                </DialogContent>
            </Dialog>
        </section>
    );
}
