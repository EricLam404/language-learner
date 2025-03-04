"use client";

import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@components/ui/card";
import { CardContent } from "@/components/ui/card";
import FlashcardContainer from "@components/flashcards/FlashcardContainer";
import { GET_FLASHCARD_SET } from "@components/graphql/flashcards";
import { useQuery } from "@apollo/client";
import { LoadingState } from "@components/LoadingState";

export default function Page({ params }: { params: { id: string } }) {
    const { data, loading, error, refetch } = useQuery(GET_FLASHCARD_SET, {
        variables: { flashcardSetId: params.id },
    });

    console.log(data);

    if (loading) {
        return <LoadingState />;
    }

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
                                {data.flashcardSet.name}
                            </CardTitle>
                            <CardDescription>
                                {data.flashcardSet.description}
                            </CardDescription>
                        </div>
                        <div className="text-lg font-semibold">
                            Language: {data.flashcardSet.languageName}
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    {loading ? (
                        <div>Loading flashcards...</div>
                    ) : (
                        <FlashcardContainer refetch={refetch} flashcardSet={data.flashcardSet} />
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
