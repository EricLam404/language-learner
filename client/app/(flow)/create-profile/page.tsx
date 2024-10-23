"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
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
import { toast } from "sonner";
import { Checkbox } from "@/components/ui/checkbox";
import { useEffect } from "react";
import React from "react";
import { useQuery, useMutation, ApolloError } from "@apollo/client";
import { useUser } from "@/lib/hooks/useUser";
import { useRouter } from "next/navigation";
import { GET_LANGUAGE } from "../../_components/graphql/queries";
import { CREATE_USER } from "../../_components/graphql/users";

const FormSchema = z.object({
    username: z.string().min(3, {
        message: "Username must be at least 3 characters.",
    }),
    languages: z
        .array(z.string())
        .refine((value) => value.some((item) => item), {
            message: "You have to select at least one item.",
        }),
});

type Language = {
    id: string;
    name: string;
};

// TODO: Add a loading spinner
// TODO: Add Username check while user is typing username
export default function CreateProfile() {
    const { data: user, isLoading, error } = useUser();
    const router = useRouter();

    const {
        data: languageData,
        loading: languageLoading,
        error: languageError,
    } = useQuery(GET_LANGUAGE);

    const [createUser] = useMutation(CREATE_USER);

    useEffect(() => {
        if (user && user.app_metadata.profile_created) {
            console.log("Profile already created");
            router.push("/");
        }
    }, [user]);

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: "",
            languages: [],
        },
    });

    async function onSubmit(submitData: z.infer<typeof FormSchema>) {
        try {
            const response = await createUser({
                variables: {
                    username: submitData.username,
                    languages: submitData.languages,
                },
            });
            if (response.data) {
                console.log(response.data.createUser);
            } else {
                console.error("No data returned from createUser mutation");
            }
            toast.success("Your profile has been created!");

            router.push("/");
        } catch (e) {
            if (e instanceof ApolloError) {
                e.graphQLErrors.forEach((err) => {
                    if (
                        err.extensions?.code === "BAD_USER_INPUT" &&
                        err.message.includes("Username already exists")
                    ) {
                        form.setError("username", {
                            type: "manual",
                            message:
                                "This username is already taken. Please choose another.",
                        });
                    } else {
                        toast.error(`Error: ${err.message}`);
                    }
                });
            } else {
                console.log(e);
                toast.error(
                    "An unknown error occurred while creating your profile. Please try again."
                );
            }
        }
    }

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (user && user.app_metadata.profile_created) return null;

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-background">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8"
                >
                    <div className="font-bold text-2xl">
                        Create your Profile
                    </div>
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Enter a unique username"
                                        {...field}
                                    />
                                </FormControl>
                                <FormDescription>
                                    This is your public display name.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="languages"
                        render={() => (
                            <FormItem>
                                <div className="mb-4">
                                    <FormLabel className="text-base">
                                        Choose your languages
                                    </FormLabel>
                                    <FormDescription>
                                        Select your the languages you want to
                                        learn!
                                    </FormDescription>
                                </div>
                                {languageLoading ? (
                                    <Skeleton count={10} />
                                ) : languageError ? (
                                    <div>
                                        There was an error loading the languages
                                    </div>
                                ) : (
                                    languageData &&
                                    languageData.languages.map(
                                        (item: Language) => (
                                            <FormField
                                                key={item.name}
                                                control={form.control}
                                                name="languages"
                                                render={({ field }) => {
                                                    return (
                                                        <FormItem
                                                            key={item.name}
                                                            className="flex flex-row items-start space-x-3 space-y-0"
                                                        >
                                                            <FormControl>
                                                                <Checkbox
                                                                    checked={field.value?.includes(
                                                                        item.name
                                                                    )}
                                                                    onCheckedChange={(
                                                                        checked
                                                                    ) => {
                                                                        return checked
                                                                            ? field.onChange(
                                                                                  [
                                                                                      ...field.value,
                                                                                      item.name,
                                                                                  ]
                                                                              )
                                                                            : field.onChange(
                                                                                  field.value?.filter(
                                                                                      (
                                                                                          value
                                                                                      ) =>
                                                                                          value !==
                                                                                          item.name
                                                                                  )
                                                                              );
                                                                    }}
                                                                />
                                                            </FormControl>
                                                            <FormLabel className="font-normal">
                                                                {item.name}
                                                            </FormLabel>
                                                        </FormItem>
                                                    );
                                                }}
                                            />
                                        )
                                    )
                                )}
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </div>
    );
}
