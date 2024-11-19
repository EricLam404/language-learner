"use client";

import { useMutation } from "@apollo/client";
import { StoryForm } from "@app/_components/forms/StoryForms";
import { toast } from "sonner";
import { CREATE_STORY, GET_STORIES } from "@app/_components/graphql/stories";
import { DifficultyToNumber } from "@/lib/difficultyLevels";
import { useRouter } from "next/navigation";
import { StoryFormValues } from "@/lib/schemas/story";


const Page = () => {
    const router = useRouter();
    const [createStory, { loading }] = useMutation(
        CREATE_STORY,
        {
            refetchQueries: [{ query: GET_STORIES }],
            awaitRefetchQueries: true,
        }
    );

    async function onSubmit(values: StoryFormValues) {
        try {
            const response = await createStory({
                variables: {
                    input:  {
                        ...values,
                        description: values.description ? values.description : "",
                        difficulty: Number(DifficultyToNumber[values.difficulty]),
                        tags: values.tags ? values.tags.split(',').map(item => item.trim()) : [],
                        isPublished: values.isPublished === "true",
                    }
                },
            });

            if (response.data) {
                console.log(response.data.createStory);
            } else {
                console.error("No data returned from createStory mutation");
            }
            toast.success("Story has been successfully created!");
            router.push("/story");
        } catch (e) {
            console.log(e);
            toast.error(
                "An unknown error occurred while creating the story. Please try again."
            );
        }
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <StoryForm
            onSubmit={onSubmit}
        />
    );
};

export default Page;
