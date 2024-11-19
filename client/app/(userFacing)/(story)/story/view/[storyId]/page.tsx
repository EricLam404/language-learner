"use client";

import { useQuery } from "@apollo/client";
import { GET_STORY } from "@app/_components/graphql/stories";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@components/ui/card";
import { useParams } from "next/navigation";

const Page = () => {
    const { storyId } = useParams<{
        storyId: string;
    }>();

    const { data, loading, error } = useQuery(GET_STORY, {
        variables: { storyId },
        skip: !storyId,
    });

    const story = data?.story;

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!story) {
        return <div>Story not found</div>;
    }

    return (
        <div className="container mx-auto py-8">
            <Card>
                <CardHeader>
                    <CardTitle>{story.title}</CardTitle>
                    {story.translatedTitle && (
                        <CardDescription>
                            {story.translatedTitle}
                        </CardDescription>
                    )}
                </CardHeader>
                <CardContent>
                    <p>{story.content}</p>
                </CardContent>
            </Card>
        </div>
    );
};

export default Page;
