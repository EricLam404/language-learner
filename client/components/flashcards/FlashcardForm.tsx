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
    GenerateFlashcardFacesFormValues,
    generateFlashcardFacesSchema,
    type FlashcardFormValues,
} from "@/lib/schemas/flashcard";
import { FaceType } from "@/__generated__/graphql";
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
import { Loader2, Wand2 } from "lucide-react";
import { z } from "zod";
import { useMutation } from "@apollo/client";
import { GENERATE_FLASHCARD_FACE } from "../graphql/flashcards";

interface FlashcardFormProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onSubmit: (card: FlashcardFormValues) => void;
    editCard?: Flashcard;
    languageName: string;
    defaultFrontFace?: FaceType | null;
}

export function FlashcardForm({
    open,
    onOpenChange,
    onSubmit,
    editCard,
    languageName,
    defaultFrontFace,
}: FlashcardFormProps) {
    const [optionalFaces, setOptionalFaces] = useState([] as FaceType[]);
    const {
        languageFaceConfig,
        loading: configLoading,
        error: configError,
    } = useLanguageFaceConfig(languageName);
    const config: LanguageConfig = useMemo(() => {
        return (
            languageFaceConfig?.languageFaceConfig?.config ?? {
                required: [FaceType.Word, FaceType.Translation],
                optional: Object.values(FaceType).filter(
                    (face) =>
                        face !== FaceType.Word && face !== FaceType.Translation
                ),
                typeMetadata: {},
            }
        );
    }, [languageFaceConfig]);

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
            frontFace:
                editCard
                    ?.faces!.find((face) => face.isFront)
                    ?.type.toLowerCase() || defaultFrontFace?.toLowerCase(),
            ...defaultRequiredFaces,
            ...defaultOptionalFaces,
        }),
        [config, editCard]
    );

    const [
        generateFlashcardFaces,
        {
            data: generateFaceData,
            loading: generateFaceLoading,
            error: generateFaceError,
        },
    ] = useMutation(GENERATE_FLASHCARD_FACE);

    const form = useForm<FlashcardFormValues>({
        resolver: zodResolver(flashcardSchema),
        defaultValues,
    });

    const generateForm = useForm<z.infer<typeof generateFlashcardFacesSchema>>({
        resolver: zodResolver(generateFlashcardFacesSchema),
        defaultValues: {
            wordToGenerate: "",
        },
    });

    useEffect(() => {
        form.reset(defaultValues);
    }, [editCard, defaultValues]);

    useEffect(() => {
        if (generateFaceData) {
            const faces = generateFaceData.generateFlashcardFaces;
            faces.forEach((face) => {
                form.setValue(
                    face.faceType.toLowerCase() as keyof FlashcardFormValues,
                    face.content
                );
            });
        }
    }, [generateFaceData]);

    useEffect(() => {
        if (editCard && editCard.faces) {
            const optionalFieldsInEditCard = editCard.faces
                .map((face) => face.type)
                .filter((faceType) => !config.required.includes(faceType));
            setOptionalFaces(optionalFieldsInEditCard);
        }
    }, [editCard]);

    const handleSubmit = (values: FlashcardFormValues) => {
        onSubmit(values);
        onOpenChange(false);
        setOptionalFaces([]);
        form.reset();
        generateForm.reset();
    };

    const generateFaces = async ({
        wordToGenerate,
    }: GenerateFlashcardFacesFormValues) => {
        generateFlashcardFaces({
            variables: {
                input: {
                    languageName,
                    word: wordToGenerate,
                    faces: config.required.concat(optionalFaces),
                },
            },
        });
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
                {configLoading ? (
                    <Skeleton count={5} />
                ) : (
                    <>
                        {!editCard && (
                            <Form {...generateForm}>
                                <form
                                    onSubmit={generateForm.handleSubmit(
                                        generateFaces
                                    )}
                                    className="space-y-4"
                                >
                                    <div className="px-4 flex items-center">
                                        <FormField
                                            control={generateForm.control}
                                            name="wordToGenerate"
                                            render={({ field }) => (
                                                <FormItem className="flex-grow">
                                                    <FormLabel>
                                                        Generate Fields
                                                    </FormLabel>
                                                    <div className="flex">
                                                        <FormControl>
                                                            <Input
                                                                {...field}
                                                                placeholder="Add word to generate fields"
                                                            />
                                                        </FormControl>
                                                        <Button
                                                            type="submit"
                                                            variant="outline"
                                                            className="ml-2"
                                                            disabled={
                                                                generateFaceLoading
                                                            }
                                                        >
                                                            {generateFaceLoading ? (
                                                                <Loader2 className="h-4 w-4 animate-spin" />
                                                            ) : (
                                                                <Wand2 className="h-4 w-4" />
                                                            )}
                                                        </Button>
                                                    </div>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                </form>
                            </Form>
                        )}
                        <Form {...form}>
                            <form
                                onSubmit={form.handleSubmit(handleSubmit)}
                                className="space-y-4"
                            >
                                <div className="overflow-y-scroll max-h-[50vh] px-4 pb-4 flex gap-2 flex-col">
                                    <FormField
                                        control={form.control}
                                        name="frontFace"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    Front Face
                                                </FormLabel>
                                                <Select
                                                    onValueChange={
                                                        field.onChange
                                                    }
                                                    defaultValue={
                                                        defaultFrontFace?.toLowerCase() ??
                                                        field.value
                                                    }
                                                >
                                                    <FormControl>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Select a front face" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        {config.required.map(
                                                            (face) => (
                                                                <SelectItem
                                                                    key={face.toLowerCase()}
                                                                    value={face.toLowerCase()}
                                                                >
                                                                    {replaceUnderscoreAndCapitalize(
                                                                        face
                                                                    )}
                                                                </SelectItem>
                                                            )
                                                        )}
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    {config.required.map((faceType) => (
                                        <FormField
                                            key={faceType}
                                            control={form.control}
                                            name={
                                                faceType.toLowerCase() as keyof FlashcardFormValues
                                            }
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
                                                        <Input
                                                            {...field}
                                                            disabled={
                                                                generateFaceLoading
                                                            }
                                                        />
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
                                            name={
                                                faceType.toLowerCase() as keyof FlashcardFormValues
                                            }
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>
                                                        {replaceUnderscoreAndCapitalize(
                                                            faceType
                                                        )}
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            {...field}
                                                            disabled={
                                                                generateFaceLoading
                                                            }
                                                        />
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
                    </>
                )}
            </DialogContent>
        </Dialog>
    );
}
