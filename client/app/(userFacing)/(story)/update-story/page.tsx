"use client";

import { useMutation } from "@apollo/client";
import { StoryForm, Values } from "@app/_components/forms/StoryForms";
import { toast } from "sonner";
import { UPDATE_STORY, GET_STORIES } from "@app/_components/graphql/stories";
import { DifficultyToNumber } from "@app/_components/difficultyLevels";
import { useRouter, useSearchParams } from "next/navigation";
import { Story } from "../story/page";

const page = () => {
    const searchParams = useSearchParams();
    const [updateStory, { loading }] = useMutation(UPDATE_STORY, {
        refetchQueries: [{ query: GET_STORIES }],
        awaitRefetchQueries: true,
    });
    const param = searchParams.get("story");
    const router = useRouter();

    if (!param) {
        return <div>An unexpected error has occured!</div>;
    }

    const story: Story = JSON.parse(param);

    async function onSubmit(values: Values) {
        try {
            const response = await updateStory({
                variables: {
                    updateStoryId: story.id,
                    input: {
                        ...values,
                        description: values.description
                            ? values.description
                            : "",
                        difficulty: Number(
                            DifficultyToNumber[values.difficulty]
                        ),
                        tags: values.tags
                            ? values.tags.split(",").map((item) => item.trim())
                            : [],
                        isPublished: values.isPublished === "true",
                    },
                },
            });

            if (response.data) {
                console.log(response.data.updateStory);
            } else {
                console.error("No data returned from createStory mutation");
            }
            toast.success("Story has been successfully updated!");
            router.push("/story");
        } catch (e) {
            console.log(e);
            toast.error(
                "An unknown error occurred while updating the story. Please try again."
            );
        }
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    return <StoryForm onSubmit={onSubmit} story={story} />;
};

export default page;
