"use client";

import { z, infer as zInfer } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@components/ui/select";
import Selections from "../selections/LanguageSelections";
import { difficultyLevels, levels } from "@/lib/difficultyLevels";
import { Textarea } from "@components/ui/textarea";
import { Story } from "@app/(userFacing)/(story)/story/page";
import { useMutation } from "@apollo/client";
import { DELETE_STORY, GET_STORIES } from "../graphql/stories";
import { toast } from "sonner";
import { DialogClose, DialogDescription, DialogHeader, DialogTitle } from "@components/ui/dialog";
import { StoryFormValues, storySchema } from "@/lib/schemas/story";

interface StoryFormProps {
    onSubmit: (values: StoryFormValues) => void;
    story?: Story;
}

export function StoryForm({ onSubmit, story }: StoryFormProps) {
    let defaultValues = {
        languageName: "",
        title: "",
        translatedTitle: "",
        description: "",
        content: "",
        difficulty: levels[0],
        isPublished: "false",
        tags: "",
    };
    if (story) {
        defaultValues = {
            languageName: story.languageName,
            title: story.title,
            translatedTitle: story.translatedTitle,
            description: story.description,
            content: story.content,
            difficulty: difficultyLevels[story.difficulty],
            isPublished: story.isPublished.toString(),
            tags: story.tags ? story.tags.map((tag) => tag.name).join(", ") : "",
        };
    }
    const form = useForm<StoryFormValues>({
        resolver: zodResolver(storySchema),
        defaultValues,
    });

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <h1 className="text-xl font-bold">Add New Story</h1>
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
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                Title{" "}
                                <span className="ml-[-2px] text-red-500">
                                    *
                                </span>
                            </FormLabel>
                            <FormControl>
                                <Input placeholder="title" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="translatedTitle"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                Translated Title{" "}
                                <span className="ml-[-2px] text-red-500">
                                    *
                                </span>
                            </FormLabel>
                            <FormControl>
                                <Input placeholder="translated title" {...field} />
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
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Input placeholder="description" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="difficulty"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                Difficulty level{" "}
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
                                        <SelectValue placeholder="Select a difficuly level" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {levels.map((level) => (
                                        <SelectItem key={level} value={level}>
                                            {level}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="tags"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Tags</FormLabel>
                            <FormControl>
                                <Input placeholder="tags" {...field} />
                            </FormControl>
                            <FormDescription>
                                Please seperate each tag by a comma
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="isPublished"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Publish Story{" "}
                                <span className="ml-[-2px] text-red-500">
                                    *
                                </span></FormLabel>
                            <FormControl>
                                <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                >
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a choice" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="true">Yes</SelectItem>
                                        <SelectItem value="false">No</SelectItem>
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormDescription>
                                Do you want to make your story public?
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="content"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                Content{" "}
                                <span className="ml-[-2px] text-red-500">
                                    *
                                </span>
                            </FormLabel>
                            <FormControl>
                                <Textarea placeholder="content" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    );

}
interface DeleteStoryFormProps {
    handleClose: () => void;
    story: Story;
}

export function DeleteStoryForm({ handleClose, story }: DeleteStoryFormProps) {
    const [deleteStory, { loading }] = useMutation(
        DELETE_STORY,
        {
            refetchQueries: [{ query: GET_STORIES }],
            awaitRefetchQueries: true,
        }
    );

    async function onDelete() {
        try {
            const response = await deleteStory({
                variables: {
                    id: story.id
                },
            });

            toast.success("Story has been successfully deleted!");
            handleClose();
        } catch (e) {
            console.log(e);
            toast.error(
                "An unknown error occurred while deleting the story. Please try again."
            );
        }
    }

    return (
        <>
            <DialogHeader>
                <DialogTitle className="font-bold text-xl sm:text-lg">
                    Are you sure you?
                </DialogTitle>
                <DialogDescription>
                    This action cannot be undone. This will permanently delete
                    the story &quot;{story.title}&quot; from your list.
                </DialogDescription>
                <Button type="submit" variant="destructive" onClick={onDelete} disabled={loading}>
                    Delete
                </Button>
                <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                </DialogClose>
            </DialogHeader>
        </>
    );
}
