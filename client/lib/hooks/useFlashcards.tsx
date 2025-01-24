"use client";
import { useEffect, useState } from "react";
import { type FlashcardSet } from "../types";
import { gql, useApolloClient, useMutation } from "@apollo/client";
import {
    CREATE_FLASHCARD,
    DELETE_FLASHCARD,
    GET_FLASHCARD_SET,
    UPDATE_FLASHCARD,
    UPDATE_STUDIED_FLASHCARD,
} from "@components/graphql/flashcards";
import { toast } from "sonner";
import { FlashcardFormValues } from "../schemas/flashcard";
import { FaceType } from "@/__generated__/graphql";

export const useFlashcards = (set: FlashcardSet) => {
    const [flashcards, setFlashcards] = useState(set.cards || []);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortBy, setSortBy] = useState("recent");

    useEffect(() => {
        setFlashcards(set.cards || []);
    }, [set.cards]);

    const filteredCards = flashcards.filter((card) =>
        card.faces!.some((face) =>
            face.content.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    const sortedCards = [...filteredCards].sort((a, b) => {
        if (sortBy === "recent") return Number(b.id) - Number(a.id);
        return 0;
    });

    const [createFlashcard] = useMutation(CREATE_FLASHCARD, {
        refetchQueries: [
            { query: GET_FLASHCARD_SET, variables: { flashcardSetId: set.id } },
        ],
        awaitRefetchQueries: true,
        // update(cache, { data }) {
        //     const createFlashcard = data?.createFlashcard;
        //     if (!createFlashcard) return;
        //     cache.modify({
        //         fields: {
        //             flashcardSet(existingFlashcardSet = {}) {
        //                 const newFlashcardRef = cache.writeFragment({
        //                     data: createFlashcard,
        //                     fragment: gql`
        //                         fragment Flashcard on Flashcard {
        //                             id
        //                             nextReviewAt
        //                             interval
        //                             faces {
        //                                 id
        //                                 order
        //                                 type
        //                                 content
        //                                 isFront
        //                             }
        //                         }
        //                     `,
        //                 });

        //                 console.log(existingFlashcardSet);
        //                 console.log(newFlashcardRef);

        //                 return {
        //                     ...existingFlashcardSet,
        //                     cards: [
        //                         ...(existingFlashcardSet.cards ?? []),
        //                         newFlashcardRef,
        //                     ],
        //                 };
        //             },
        //         },
        //     });
        // },
    });

    const [updateFlashcard] = useMutation(UPDATE_FLASHCARD, {
        refetchQueries: [
            { query: GET_FLASHCARD_SET, variables: { flashcardSetId: set.id } },
        ],
        awaitRefetchQueries: true,
    });

    const [deleteFlashcard] = useMutation(DELETE_FLASHCARD, {
        refetchQueries: [
            { query: GET_FLASHCARD_SET, variables: { flashcardSetId: set.id } },
        ],
        awaitRefetchQueries: true,
    });

    const [updateStudiedFlashcard] = useMutation(UPDATE_STUDIED_FLASHCARD);

    const addCard = async (newCard: FlashcardFormValues) => {
        try {
            // Filter out empty fields and map to the correct format
            const faces = Object.keys(newCard)
                .filter(
                    (key) =>
                        key != "frontFace" &&
                        newCard[key as keyof FlashcardFormValues] !== ""
                )
                .map((key, index) => ({
                    type: key.toUpperCase() as FaceType,
                    content: newCard[key as keyof FlashcardFormValues] || "",
                    order: index,
                    isFront: key === newCard.frontFace,
                }));

            let response = await createFlashcard({
                variables: {
                    setId: set.id,
                    faces: faces,
                },
                optimisticResponse: {
                    createFlashcard: {
                        __typename: "Flashcard",
                        id: "temp-id",
                        setId: set.id,
                        nextReviewAt: new Date().toISOString(),
                        interval: 0,
                        faces: faces.map((face, index) => ({
                            __typename: "FlashcardFace",
                            id: `temp-id-${index}`,
                            ...face,
                        })),
                    },
                },
            });
            if (response.data && response.data.createFlashcard) {
                console.log(response.data.createFlashcard);
            } else {
                console.error(
                    "No data returned from create flashcard mutation"
                );
            }
            toast.success("Flashcard has been successfully created!");
        } catch (e) {
            console.log(e);
            toast.error(
                "An unknown error occurred while creating the flashcard. Please try again."
            );
        }
    };

    const editCard = async (updatedCard: FlashcardFormValues, id: string) => {
        try {
            // Filter out empty fields and map to the correct format
            const faces = Object.keys(updatedCard)
                .filter(
                    (key) =>
                        key != "frontFace" &&
                        updatedCard[key as keyof FlashcardFormValues] !== ""
                )
                .map((key, index) => ({
                    type: key.toUpperCase() as FaceType,
                    content:
                        updatedCard[key as keyof FlashcardFormValues] || "",
                    order: index,
                    isFront: key === updatedCard.frontFace,
                }));

            let response = await updateFlashcard({
                variables: {
                    updateFlashcardId: id,
                    faces: faces,
                },
            });
            if (response.data && response.data.updateFlashcard) {
                console.log(response.data.updateFlashcard);
            } else {
                console.error(
                    "No data returned from update flashcard mutation"
                );
            }
            toast.success("Flashcard has been successfully updated!");
        } catch (e) {
            console.log(e);
            toast.error(
                "An unknown error occurred while updating the flashcard. Please try again."
            );
        }
    };

    const updateStudiedCard = async (id: string, score: number) => {
        try {
            let response = await updateStudiedFlashcard({
                variables: {
                    id,
                    score,
                },
            });
            if (response.data && response.data.updateStudiedFlashcard) {
                console.log(response.data.updateStudiedFlashcard);
            } else {
                console.error(
                    "No data returned from update flashcard mutation"
                );
            }
            toast.success("Flashcard has been successfully updated!");
        } catch (e) {
            console.log(e);
            toast.error(
                "An unknown error occurred while updating the flashcard. Please try again."
            );
        }
    };

    const deleteCard = async (id: string) => {
        try {
            let response = await deleteFlashcard({
                variables: {
                    deleteFlashcardId: id,
                },
            });
            toast.success("Flashcard has been successfully deleted!");
        } catch (e) {
            console.log(e);
            toast.error(
                "An unknown error occurred while deleting the flashcard. Please try again."
            );
        }
    };

    return {
        flashcards: sortedCards,
        searchTerm,
        setSearchTerm,
        sortBy,
        setSortBy,
        addCard,
        editCard,
        updateStudiedCard,
        deleteCard,
    };
};
