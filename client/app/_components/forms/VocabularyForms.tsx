import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useMutation } from "@apollo/client";
import { GET_VOCABULARY, CREATE_VOCABULARY, DELETE_VOCABULARY, UPDATE_VOCABULARY } from "../graphql/vocabularies";
import { DialogClose, DialogHeader } from "@components/ui/dialog";
import { DialogTitle, DialogDescription } from "@radix-ui/react-dialog";
import { toast } from "sonner";
import { useState } from "react";
import {
    Select,
    SelectContent,
    SelectTrigger,
    SelectValue,
} from "@components/ui/select";
import Selections from "./Selections";

const formSchema = z.object({
    word: z.string().min(1, { message: "Word is required" }),
    meaning: z.string().min(1, { message: "Meaning is required" }),
    example: z.string().optional(),
});

interface CreateVocabularyFormProps {
    handleClose: (type: string) => void;
    defaultLanguage: string;
}

export function CreateVocabularyForm({
    handleClose,
    defaultLanguage,
}: CreateVocabularyFormProps) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            word: "",
            meaning: "",
            example: "",
        },
    });

    const [createVocabulary, { loading, error }] = useMutation(
        CREATE_VOCABULARY,
        {
            refetchQueries: [{ query: GET_VOCABULARY }],
            awaitRefetchQueries: true,
        }
    );
    const [selectedLanguage, setSelectedLanguage] = useState(defaultLanguage);

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            const response = await createVocabulary({
                variables: {
                    ...values,
                    languageName: selectedLanguage,
                },
            });

            if (response.data) {
                console.log(response.data.createVocabulary);
            } else {
                console.error(
                    "No data returned from createVocabulary mutation"
                );
            }
            toast.success("Vocabulary has been successfully created!");
            form.reset();
            handleClose("create");
        } catch (e) {
            console.log(e);
            toast.error(
                "An unknown error occurred while creating the vocabulary word. Please try again."
            );
        }
    }

    if (error) {
        return <div>Error! {error.message}</div>;
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <DialogHeader>
                    <DialogTitle>Add New Word</DialogTitle>
                    <DialogDescription>
                        <span className="mt-4">
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
                        </span>
                    </DialogDescription>
                </DialogHeader>
                <FormField
                    control={form.control}
                    name="word"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                Word{" "}
                                <span className="ml-[-2px] text-red-500">
                                    *
                                </span>
                            </FormLabel>
                            <FormControl>
                                <Input placeholder="word" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="meaning"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                Meaning{" "}
                                <span className="ml-[-2px] text-red-500">
                                    *
                                </span>
                            </FormLabel>
                            <FormControl>
                                <Input placeholder="meaning" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="example"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Example</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="example sentence"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" disabled={loading}>
                    Submit
                </Button>
            </form>
        </Form>
    );
}

interface UpdateVocabularyFormProps {
    handleClose: (type: string) => void;
    language: string;
    vocab: {
        __typename?: "Vocabulary";
        id: string;
        languageName: string;
        word: string;
        meaning: string;
        example?: string | null;
    };
}

export function UpdateVocabularyForm({
    handleClose,
    language,
    vocab,
}: UpdateVocabularyFormProps) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            word: vocab.word,
            meaning: vocab.meaning,
            example: vocab.example || "",
        },
    });

    const [updateVocabulary, { loading, error }] = useMutation(
        UPDATE_VOCABULARY,
        {
            refetchQueries: [{ query: GET_VOCABULARY }],
            awaitRefetchQueries: true,
        }
    );
    const [selectedLanguage, setSelectedLanguage] = useState(language);

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            const response = await updateVocabulary({
                variables: {
                    ...values,
                    languageName: selectedLanguage,
                    id: vocab.id,
                },
            });

            if (response.data) {
                console.log(response.data.updateVocabulary);
            } else {
                console.error(
                    "No data returned from updateVocabulary mutation"
                );
            }
            toast.success("Vocabulary has been successfully updated!");
            form.reset();
            handleClose("update");
        } catch (e) {
            console.log(e);
            toast.error(
                "An unknown error occurred while updating the vocabulary word. Please try again."
            );
        }
    }

    if (error) {
        return <div>Error! {error.message}</div>;
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <DialogHeader>
                    <DialogTitle>Update Word</DialogTitle>
                    <DialogDescription>
                        <span className="mt-4">
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
                        </span>
                    </DialogDescription>
                </DialogHeader>
                <FormField
                    control={form.control}
                    name="word"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                Word{" "}
                                <span className="ml-[-2px] text-red-500">
                                    *
                                </span>
                            </FormLabel>
                            <FormControl>
                                <Input placeholder="word" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="meaning"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                Meaning{" "}
                                <span className="ml-[-2px] text-red-500">
                                    *
                                </span>
                            </FormLabel>
                            <FormControl>
                                <Input placeholder="meaning" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="example"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Example</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="example sentence"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" disabled={loading}>
                    Submit
                </Button>
            </form>
        </Form>
    );
}

interface DeleteVocabularyFormProps {
    handleClose: (type: string) => void;
    vocab: {
        __typename?: "Vocabulary";
        id: string;
        languageName: string;
        word: string;
        meaning: string;
        example?: string | null;
    };
}

export function DeleteVocabularyForm({ handleClose, vocab }: DeleteVocabularyFormProps) {
    const [deleteVocabulary, { loading, error }] = useMutation(
        DELETE_VOCABULARY,
        {
            refetchQueries: [{ query: GET_VOCABULARY }],
            awaitRefetchQueries: true,
        }
    );

    async function onDelete() {
        try {
            const response = await deleteVocabulary({
                variables: {
                    id: vocab.id
                },
            });

            toast.success("Vocabulary has been successfully deleted!");
            handleClose("delete");
        } catch (e) {
            console.log(e);
            toast.error(
                "An unknown error occurred while deleting the vocabulary word. Please try again."
            );
        }
    }

    return (
        <>
            <DialogHeader>
                <DialogTitle className="font-bold text-xl sm:text-lg">
                    Are you sure you?
                </DialogTitle>
                <DialogDescription>
                    This action cannot be undone. This will permanently delete
                    the vocabulary word "{vocab.word}" from your list.
                </DialogDescription>
                <Button type="submit" variant="destructive" onClick={onDelete} disabled={loading}>
                    Delete
                </Button>
                <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                </DialogClose>
            </DialogHeader>
        </>
    );
}
