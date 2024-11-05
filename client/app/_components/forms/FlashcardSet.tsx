import { Button } from "@components/ui/button";
import {
    FormField,
    FormItem,
    FormControl,
    FormMessage,
    FormLabel,
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
    UPDATE_FLASHCARD_SET,
} from "../graphql/flashcards";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@components/ui/dialog";
import { type FlashcardSet } from "@/lib/types";
import { useEffect, useState } from "react";
import { MoreHorizontal, Trash2 } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@components/ui/dropdown-menu";

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
            form.reset({
                name: "",
                description: "",
                languageName: values.languageName,
            });
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

interface DeleteFlashcardSetModalProps {
    flashcardSet: NonNullable<FlashcardSet>;
    showDeleteModal: boolean;
    setShowDeleteModal: (value: boolean) => void;
}

export function DeleteFlashcardSetModal({
    flashcardSet,
    showDeleteModal,
    setShowDeleteModal,
}: DeleteFlashcardSetModalProps) {
    const [deleteStory, { loading }] = useMutation(DELETE_FLASHCARD_SET, {
        refetchQueries: [{ query: GET_FLASHCARD_SETS }],
        awaitRefetchQueries: true,
    });

    async function onDelete() {
        try {
            const response = await deleteStory({
                variables: {
                    deleteFlashcardSetId: flashcardSet.id!,
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
        <Dialog open={showDeleteModal} onOpenChange={setShowDeleteModal}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="font-bold text-xl sm:text-lg">
                        Are you sure?
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
    );
}
interface UpdateFlashcardSetModalProps {
    flashcardSet: NonNullable<FlashcardSet>;
    showUpdateModal: boolean;
    setShowUpdateModal: (value: boolean) => void;
}

export function UpdateFlashcardSetModal({
    flashcardSet,
    showUpdateModal,
    setShowUpdateModal,
}: UpdateFlashcardSetModalProps) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: flashcardSet.name,
            description: flashcardSet.description || "",
            languageName: flashcardSet.languageName,
        },
    });

    useEffect(() => {
        form.reset({
            name: flashcardSet.name,
            description: flashcardSet.description || "",
            languageName: flashcardSet.languageName,
        });
    }, [flashcardSet, form]);

    const [updateFlashcardSet, { loading, error }] = useMutation(
        UPDATE_FLASHCARD_SET,
        {
            refetchQueries: [{ query: GET_FLASHCARD_SETS }],
            awaitRefetchQueries: true,
        }
    );

    const handleClose = () => {
        form.reset();
        setShowUpdateModal(false);
    };

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            const response = await updateFlashcardSet({
                variables: {
                    ...values,
                    updateFlashcardSetId: flashcardSet.id,
                },
            });

            if (response.data) {
                console.log(response.data.updateFlashcardSet);
            } else {
                console.error(
                    "No data returned from updateFlashcardSet mutation"
                );
            }
            toast.success("Flashcard Set has been successfully updated!");
            handleClose();
        } catch (e) {
            console.log(e);
            toast.error(
                "An unknown error occurred while updating the vocabulary word. Please try again."
            );
        }
    }

    return (
        <Dialog open={showUpdateModal} onOpenChange={handleClose}>
            <DialogContent className="sm:max-w-[425px]">
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-8"
                    >
                        <DialogHeader>
                            <DialogTitle>Edit Flashcard Set</DialogTitle>
                        </DialogHeader>
                        <FormField
                            control={form.control}
                            name="languageName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Language{" "}
                                        <span className="ml-[-2px] text-red-500">
                                            *
                                        </span>
                                    </FormLabel>
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
                                <FormItem>
                                    <FormLabel>
                                        Name{" "}
                                        <span className="ml-[-2px] text-red-500">
                                            *
                                        </span>
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="name..."
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
                                <FormItem>
                                    <FormLabel>Descripton</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="description..."
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
            </DialogContent>
        </Dialog>
    );
}

interface FlashcardSetProps {
    flashcardSet: NonNullable<FlashcardSet>;
}

export function FlashcardSetMenu({ flashcardSet }: FlashcardSetProps) {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    return (
        <>
            <DropdownMenu modal={false}>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuItem
                        onSelect={() => {
                            setShowUpdateModal(true);
                        }}
                    >
                        Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        onSelect={(e) => {
                            setShowDeleteModal(true);
                        }}
                    >
                        <div className="flex items-center">
                            <Trash2 className="mr-2 h-4 w-4" /> Delete
                        </div>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <DeleteFlashcardSetModal
                flashcardSet={flashcardSet}
                showDeleteModal={showDeleteModal}
                setShowDeleteModal={setShowDeleteModal}
            />
            <UpdateFlashcardSetModal
                flashcardSet={flashcardSet}
                showUpdateModal={showUpdateModal}
                setShowUpdateModal={setShowUpdateModal}
            />
        </>
    );
}
