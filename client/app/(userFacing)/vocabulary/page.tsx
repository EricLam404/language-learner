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
} from "@/components/ui/select";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { GET_VOCABULARY } from "@app/_components/graphql/vocabularies";
import { useQuery } from "@apollo/client";
import Skeleton from "react-loading-skeleton";
import {
    CreateVocabularyForm,
    DeleteVocabularyForm,
    UpdateVocabularyForm,
} from "@app/_components/forms/VocabularyForms";
import Selections from "@app/_components/forms/Selections";

// TODO: Add word to vocabulary list validation check
// FEATURE: Add radio button to select words for flashcards
// FEATURE: Add sort functionality for vocabulary list
// FEATURE: Add pagination for vocabulary list
// FEATURE: Add search functionality for vocabulary list
// FEATURE: Add import functionality for vocabulary list
// FEATURE: Add delete functionality for vocabulary list
// FEATURE: Add edit functionality for vocabulary list

// FUTURE FEATURE: Add export functionality for vocabulary list

interface Vocabulary {
    __typename?: "Vocabulary";
    id: string;
    languageName: string;
    word: string;
    meaning: string;
    example?: string | null;
}
export default function Component() {
    const { data: vocabulary, loading, error } = useQuery(GET_VOCABULARY);
    const [selectedLanguage, setSelectedLanguage] = useState<string>();
    const [createModal, setCreateModal] = useState(false);
    const [updateModal, setUpdateModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [deleteVocab, setDeleteVocab] = useState<Vocabulary>();
    const [selectedVocab, setSelectedVocab] = useState<Vocabulary>();

    const handleClose = (type: string) => {
        if (type === "create") {
            setCreateModal(false);
        } else if (type === "update") {
            setUpdateModal(false);
        } else if (type === "delete") {
            setDeleteModal(false);
        }
    };

    const handleEditClick = (vocab: Vocabulary) => {
        setSelectedVocab(vocab);
        setUpdateModal(true);
    };

    const handleDeleteClick = (vocab: Vocabulary) => {
        setDeleteVocab(vocab);
        setDeleteModal(true);
    };

    if (error) {
        return <div>An unknown error has occurred</div>;
    }

    return (
        <section>
            <div className="w-full max-w-4xl mx-auto py-12">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-3xl font-bold">Vocabulary List</h1>
                    <div className="flex items-center gap-4">
                        {/* TODO: Implement import csv functionality */}
                        {/* <Button disabled>
                            <UploadIcon className="mr-2 h-4 w-4" />
                            Import CSV
                        </Button>
                        <Button
                            onClick={() => setCreateModal(true)}
                            disabled={!selectedLanguage}
                        >
                            <PlusIcon className="mr-2 h-4 w-4" />
                            Add Word
                        </Button> */}

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
                                    .map((vocab) => (
                                        <TableRow key={vocab.id}>
                                            <TableCell className="font-medium">
                                                {vocab.word}
                                            </TableCell>
                                            <TableCell>
                                                {vocab.meaning}
                                            </TableCell>
                                            <TableCell>
                                                {vocab.example}
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex items-center gap-2">
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        onClick={() =>
                                                            handleEditClick(
                                                                vocab
                                                            )
                                                        }
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
                                                        onClick={() =>
                                                            handleDeleteClick(
                                                                vocab
                                                            )
                                                        }
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
            <Dialog open={createModal} onOpenChange={setCreateModal}>
                <DialogContent className="sm:max-w-[425px]">
                    <CreateVocabularyForm
                        handleClose={handleClose}
                        defaultLanguage={selectedLanguage || ""}
                    />
                </DialogContent>
            </Dialog>

            {selectedVocab && (
                <Dialog open={updateModal} onOpenChange={setUpdateModal}>
                    <DialogContent className="sm:max-w-[425px]">
                        <UpdateVocabularyForm
                            handleClose={handleClose}
                            vocab={selectedVocab}
                        />
                    </DialogContent>
                </Dialog>
            )}

            {deleteVocab && (
                <Dialog open={deleteModal} onOpenChange={setDeleteModal}>
                    <DialogContent className="sm:max-w-[425px]">
                        <DeleteVocabularyForm
                            handleClose={handleClose}
                            vocab={deleteVocab}
                        />
                    </DialogContent>
                </Dialog>
            )}
        </section>
    );
}
