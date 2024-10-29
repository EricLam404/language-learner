"use client";

import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@components/ui/card";
import { CardContent } from "@/components/ui/card";
import FlashcardContainer from "@/app/_components/flashcards/FlashcardContainer";
import { GET_FLASHCARD_SET } from "@app/_components/graphql/flashcards";
import { useQuery } from "@apollo/client";

export default function Page({ params }: { params: { id: string } }) {
    const { data, loading, error } = useQuery(GET_FLASHCARD_SET, {
        variables: { flashcardSetId: params.id },
    });

    if (!data || !data.flashcardSet) {
        return <div>Error 404: Not found</div>;
    }

    return (
        <div className="container mx-auto p-4 space-y-8">
            <Card>
                <CardHeader>
                    <div className="flex justify-between items-center">
                        <div>
                            <CardTitle className="text-3xl font-bold">
                                Basic Chinese Phrases
                            </CardTitle>
                            <CardDescription>
                                Essential phrases for everyday conversations
                            </CardDescription>
                        </div>
                        <div className="text-lg font-semibold">
                            Language: Chinese
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    {loading ? (
                        <div>Loading flashcards...</div>
                    ) : (
                        <FlashcardContainer flashcardSet={data.flashcardSet} />
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
