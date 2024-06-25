"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import { use, useEffect, useState } from "react";
import React from "react";
import { useLazyQuery, gql } from "@apollo/client";
import { API_URL, API_KEY } from "@app/(userFacing)/_components/API_URLS";

const FormSchema = z.object({
    username: z.string().min(4, {
        message: "Username must be at least 2 characters.",
    }),
    languages: z
        .array(z.string())
        .refine((value) => value.some((item) => item), {
            message: "You have to select at least one item.",
        }),
});

type Languages = {
    id: string;
    label: string;
}[];

const query = gql`
    query GetBooks {
        books {
            title
            author
        }
    }
`;

export default function CreateProfile() {
    const [languages, setLanguages] = useState<Languages | null>(null);
    const [getBooks, { loading, error, data }] = useLazyQuery(query);

    useEffect(() => {
        const fetchLanguages = async () => {
            const query = `
            {
                languageCollection {
                edges {
                    node {
                    name
                    }
                }
                }
            }
            `;
            const req = await fetch(API_URL, {
                method: "POST",
                headers: {
                    apiKey: API_KEY,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ query }),
            });
            const res = await req.json();
            const edges = res.data.languageCollection.edges;
            setLanguages(
                edges.map((item: { node: { name: string } }) => {
                    return {
                        id: item.node.name.toLocaleLowerCase(),
                        label: item.node.name,
                    };
                })
            );
        };

        fetchLanguages();
        getBooks();
    }, []);

    useEffect(() => {
        console.log(data);
    }, [data]);

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: "",
            languages: [],
        },
    });

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        const query = `
                query CheckUsername($username: String!) {
                    userCollection(filter: { username: { eq: $username } }) {
                        edges {
                            node {
                                id
                            }
                        }
                    }
                }
            `;

        const variables = { username: data.username };

        try {
            const req = await fetch(API_URL, {
                method: "POST",
                headers: {
                    apiKey: API_KEY,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ query, variables }),
            });

            const res = await req.json();
            const userExists = res.data.userCollection.edges.length > 0;

            if (userExists) {
                toast.error(
                    "Username already exists. Please choose a different username."
                );
            } else {
                const mutation = `
                        mutation CreateUser($username: String!, $languages: [String!]!) {
                            insertUser(username: $username, languages: $languages) {
                                user {
                                    id
                                    username
                                    languages
                                }
                            }
                        }
                    `;

                const createVariables = {
                    username: data.username,
                    languages: data.languages,
                };

                const createUserReq = await fetch(API_URL, {
                    method: "POST",
                    headers: {
                        apiKey: API_KEY,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        query: mutation,
                        variables: createVariables,
                    }),
                });

                const createUserRes = await createUserReq.json();
                console.log(createUserRes);
                if (createUserRes.data.insertUser) {
                    toast.success("Your profile has been created!");
                } else {
                    toast.error(
                        "An error occurred while creating your profile. Please try again."
                    );
                }
            }
        } catch (error) {
            console.error("Error creating profile:", error);
            toast.error(
                "An error occurred while creating your profile. Please try again."
            );
        }
    }

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
                                {languages &&
                                    languages.map((item) => (
                                        <FormField
                                            key={item.id}
                                            control={form.control}
                                            name="languages"
                                            render={({ field }) => {
                                                return (
                                                    <FormItem
                                                        key={item.id}
                                                        className="flex flex-row items-start space-x-3 space-y-0"
                                                    >
                                                        <FormControl>
                                                            <Checkbox
                                                                checked={field.value?.includes(
                                                                    item.id
                                                                )}
                                                                onCheckedChange={(
                                                                    checked
                                                                ) => {
                                                                    return checked
                                                                        ? field.onChange(
                                                                              [
                                                                                  ...field.value,
                                                                                  item.id,
                                                                              ]
                                                                          )
                                                                        : field.onChange(
                                                                              field.value?.filter(
                                                                                  (
                                                                                      value
                                                                                  ) =>
                                                                                      value !==
                                                                                      item.id
                                                                              )
                                                                          );
                                                                }}
                                                            />
                                                        </FormControl>
                                                        <FormLabel className="font-normal">
                                                            {item.label}
                                                        </FormLabel>
                                                    </FormItem>
                                                );
                                            }}
                                        />
                                    ))}
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
