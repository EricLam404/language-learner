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
import { CREATE_VOCABULARY } from "../graphql/mutations";
import { DialogHeader } from "@components/ui/dialog";
import { DialogTitle, DialogDescription } from "@radix-ui/react-dialog";
import { toast } from "sonner";
import { useState } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@components/ui/select";
import { GET_VOCABULARY } from "../graphql/queries";

const formSchema = z.object({
    word: z.string().min(1, { message: "Word is required" }),
    meaning: z.string().min(1, { message: "Meaning is required" }),
    example: z.string().optional(),
});

interface VocabularyFormProps {
    handleClose: () => void;
    defaultLanguage: string;
}

export function VocabularyForm({ handleClose, defaultLanguage }: VocabularyFormProps) {
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
            handleClose();
        } catch (e) {
            console.log(e);
            toast.error(
                "An unknown error occurred while creating your profile. Please try again."
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
                        <div className="mt-4">
                            <Select
                                value={selectedLanguage}
                                onValueChange={setSelectedLanguage}
                            >
                                <SelectTrigger className="w-48">
                                    <SelectValue placeholder="Select Language" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Spanish">
                                        Spanish
                                    </SelectItem>
                                    <SelectItem value="French">
                                        French
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
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
                <Button type="submit" disabled={loading}>Submit</Button>
            </form>
        </Form>
    );
}
