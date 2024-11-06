"use client";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import RequiredText from "@/components/RequiredText";
import { Flashcard } from "@/lib/types";
import {
    createFlashcardSchema,
    type FlashcardFormValues,
} from "@/lib/schemas/flashcard";
import { FaceType, LanaguageFaceConfigQuery } from "@/__generated__/graphql";
import {
    useLanguageFaceConfig,
    type LanguageConfig,
} from "@/lib/hooks/useLanguageFaceConfig";
import Skeleton from "react-loading-skeleton";
import { replaceUnderscoreAndCapitalize } from "@/lib/stringUtils";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@components/ui/select";

interface FlashcardFormProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onSubmit: (card: FlashcardFormValues) => void;
    editCard?: Flashcard;
    languageName: string;
}

export function FlashcardForm({
    open,
    onOpenChange,
    onSubmit,
    editCard,
    languageName,
}: FlashcardFormProps) {
    const [showOptionalFields, setShowOptionalFields] = useState(!!editCard);
    const [optionalFaces, setOptionalFaces] = useState([] as FaceType[]);
    const { languageFaceConfig, loading, error } =
        useLanguageFaceConfig(languageName);
    const config: LanguageConfig = languageFaceConfig?.languageFaceConfig
        ?.config ?? { required: [], optional: [], typeMetadata: {} };

    const flashcardSchema = createFlashcardSchema(config);

    const defaultRequiredFaces = config.required.reduce((acc, face) => {
        acc[face.toLowerCase()] =
            editCard?.faces!.find((editFace) => editFace.type === face)
                ?.content || "";
        return acc;
    }, {} as { [key: string]: string });
    const defaultOptionalFaces = config.optional.reduce((acc, face) => {
        acc[face.toLowerCase()] =
            editCard?.faces!.find((editFace) => editFace.type === face)
                ?.content || "";
        return acc;
    }, {} as { [key: string]: string });
    const defaultValues = useMemo(
        () => ({
            ...defaultRequiredFaces,
            ...defaultOptionalFaces,
        }),
        [config.required, config.optional]
    );

    const form = useForm<FlashcardFormValues>({
        resolver: zodResolver(flashcardSchema),
        defaultValues,
    });

    useEffect(() => {
        form.reset(defaultValues);
    }, [editCard, defaultValues]);

    const handleSubmit = (values: FlashcardFormValues) => {
        console.log(values);
        onSubmit(values);
        onOpenChange(false);
        setOptionalFaces([]);
        form.reset();
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[425px] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>
                        {editCard ? "Edit Flashcard" : "Add New Flashcard"}
                    </DialogTitle>
                    <DialogDescription>
                        {editCard
                            ? "Edit the flashcard details below."
                            : "Create a new flashcard for your set."}
                    </DialogDescription>
                </DialogHeader>
                {loading ? (
                    <Skeleton count={5} />
                ) : (
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(handleSubmit)}
                            className="space-y-4"
                        >
                            <div className="overflow-y-scroll max-h-[50vh] px-4 pb-4 flex gap-2 flex-col">
                                {config.required.map((faceType) => (
                                    <FormField
                                        key={faceType}
                                        control={form.control}
                                        name={faceType.toLowerCase()}
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    <RequiredText>
                                                        {replaceUnderscoreAndCapitalize(
                                                            faceType
                                                        )}
                                                    </RequiredText>
                                                </FormLabel>
                                                <FormControl>
                                                    <Input {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                ))}

                                {optionalFaces.map((faceType) => (
                                    <FormField
                                        key={faceType}
                                        control={form.control}
                                        name={faceType.toLowerCase()}
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    {replaceUnderscoreAndCapitalize(
                                                        faceType
                                                    )}
                                                </FormLabel>
                                                <FormControl>
                                                    <Input {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                ))}
                            </div>

                            {config.optional.length - optionalFaces.length >
                                0 && (
                                <div className="flex items-center space-x-2 px-4">
                                    <Select
                                        onValueChange={(value) =>
                                            setOptionalFaces([
                                                ...optionalFaces,
                                                value as FaceType,
                                            ])
                                        }
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Add more fields...">
                                                Add more fields...
                                            </SelectValue>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>
                                                    Optional fields
                                                </SelectLabel>
                                                {config.optional
                                                    .filter(
                                                        (faceType) =>
                                                            !optionalFaces.includes(
                                                                faceType
                                                            )
                                                    )
                                                    .map((faceType) => (
                                                        <SelectItem
                                                            key={faceType}
                                                            value={faceType}
                                                        >
                                                            {replaceUnderscoreAndCapitalize(
                                                                faceType
                                                            )}
                                                        </SelectItem>
                                                    ))}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                            )}

                            <DialogFooter>
                                <Button type="submit">
                                    {editCard
                                        ? "Save Changes"
                                        : "Add Flashcard"}
                                </Button>
                            </DialogFooter>
                        </form>
                    </Form>
                )}
            </DialogContent>
        </Dialog>
    );
}
