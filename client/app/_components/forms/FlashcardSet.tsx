import { Button } from "@components/ui/button";
import {
    FormField,
    FormItem,
    FormControl,
    FormMessage,
} from "@components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
} from "@components/ui/select";
import { Input } from "@components/ui/input";
import { Form } from "@/components/ui/form";
import { z, infer as zInfer } from "zod";
import Selections from "./Selections";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { toast } from "sonner";
import {
    CREATE_FLASHCARD_SET,
    DELETE_FLASHCARD_SET,
    GET_FLASHCARD_SETS,
} from "../graphql/flashcards";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@components/ui/dialog";
import { FlashcardSet } from "@app/(userFacing)/flashcard/page";
import { useState } from "react";
import { Trash2 } from "lucide-react";

export type FlashcardSetValues = zInfer<typeof formSchema>;
const formSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    description: z.string().optional(),
    languageName: z.string().min(1, { message: "Language is required" }),
});

export function FlashcardSetForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            description: "",
            languageName: "",
        },
    });
    const [createFlashcardSet, { loading }] = useMutation(
        CREATE_FLASHCARD_SET,
        {
            refetchQueries: [{ query: GET_FLASHCARD_SETS }],
            awaitRefetchQueries: true,
        }
    );

    const onSubmit = async (values: FlashcardSetValues) => {
        try {
            let response = await createFlashcardSet({
                variables: {
                    name: values.name,
                    description: values.description,
                    languageName: values.languageName,
                },
            });
            if (response.data) {
                console.log(response.data.createFlashcardSet);
            } else {
                console.error(
                    "No data returned from create flashcard set mutation"
                );
            }
            toast.success("Flashcard set has been successfully created!");
            form.reset();
        } catch (e) {
            console.log(e);
            toast.error(
                "An unknown error occurred while creating the flashcard set. Please try again."
            );
        }
    };

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 items-center"
            >
                <div className="flex space-x-4 justify-evenly w-full">
                    <FormField
                        control={form.control}
                        name="languageName"
                        render={({ field }) => (
                            <FormItem className="flex-1">
                                <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                >
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a language" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <Selections />
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem className="flex-1">
                                <FormControl>
                                    <Input
                                        placeholder="New set name"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem className="flex-1">
                                <FormControl>
                                    <Input
                                        placeholder="Description(optional)"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Add Set</Button>
                </div>
            </form>
        </Form>
    );
}

interface DeleteFlashcardSetProps {
    flashcardSet: FlashcardSet;
}

export function DeleteFlashcardSet({
    flashcardSet,
}: DeleteFlashcardSetProps) {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [deleteStory, { loading }] = useMutation(DELETE_FLASHCARD_SET, {
        refetchQueries: [{ query: GET_FLASHCARD_SETS }],
        awaitRefetchQueries: true,
    });

    async function onDelete() {
        try {
            const response = await deleteStory({
                variables: {
                    deleteFlashcardSetId: flashcardSet.id,
                },
            });

            toast.success("Flashcard set has been successfully deleted!");
        } catch (e) {
            console.log(e);
            toast.error(
                "An unknown error occurred while deleting the flashcard set. Please try again."
            );
        }
    }

    return (
        <>
            <Button
                variant="destructive"
                onClick={() => setShowDeleteModal(true)}
            >
                <Trash2 className="mr-2 h-4 w-4" /> Delete
            </Button>
            <Dialog open={showDeleteModal} onOpenChange={setShowDeleteModal}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle className="font-bold text-xl sm:text-lg">
                            Are you sure you?
                        </DialogTitle>
                        <DialogDescription>
                            This action cannot be undone. This will permanently
                            delete the set "{flashcardSet.name}" from your list.
                        </DialogDescription>
                        <Button
                            type="submit"
                            variant="destructive"
                            onClick={onDelete}
                            disabled={loading}
                        >
                            Delete
                        </Button>
                        <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogClose>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </>
    );
}
