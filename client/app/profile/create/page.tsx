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
import { toast } from "@/components/ui/use-toast";
import { Checkbox } from "@/components/ui/checkbox";
import { useEffect, useState } from "react";
import React from "react";
import { API_URL, API_KEY } from "@app/_components/API_URLS";

const FormSchema = z.object({
    username: z.string().min(4, {
        message: "Username must be at least 2 characters.",
    }),
    languages: z.array(z.string()).refine((value) => value.some((item) => item), {
        message: "You have to select at least one item.",
    }),
});

type Languages = {
    id: string;
    label: string;
}[];

export default function CreateProfile() {
    const [languages, setLanguages] = useState<Languages | null>(null);
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
            const req = await fetch(
                API_URL,
                {
                    method: "POST",
                    headers: {
                        apiKey: API_KEY,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ query }),
                }
            );
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
    }, []);

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: "",
            languages: []
        },
    });

    function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log(data);
        toast({
          title: "You submitted the following values:",
          description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              <code className="text-white">{JSON.stringify(data, null, 2)}</code>
            </pre>
          ),
        })
      }

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-background">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8"
                >
                    <div className="font-bold text-2xl">Create your Profile</div>
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter a unique username" {...field} />
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
                                        Select your
                                        the languages you want to learn!
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

// export default async function Page() {
//     const languages = await fetchLanguages();
//     function createProfile(e: React.FormEvent<HTMLFormElement>) {
//         // Create profile
//         e.preventDefault();
//         console.log(e)

//     }
//     return (
//         <div className="flex flex-col items-center justify-center h-screen bg-background">
//             <form className="w-full max-w-md p-6 bg-card rounded-lg shadow-lg" onSubmit={createProfile}>
//                 <h1 className="text-2xl font-bold mb-6 text-center">
//                     Create Your Profile
//                 </h1>
//                 <div className="mb-6">
//                     <Label
//                         htmlFor="username"
//                         className="block mb-2 font-medium"
//                         aria-required="true"
//                     >
//                         Username<span className="text-red-500">*</span>
//                     </Label>
//                     <Input
//                         id="username"
//                         type="text"
//                         placeholder="Enter your username"
//                         className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
//                     />
//                 </div>
//                 <div>
//                     <Label className="block mb-2 font-medium">
//                         Select your languages
//                         <span className="text-red-500">*</span>
//                     </Label>
//                     <div className="grid grid-cols-3 gap-4">
//                         {languages.map((lang: { node: { name: string } }) => (
//                             <div key={lang.node.name} className="flex gap-2">
//                                 <input
//                                     type="checkbox"
//                                     id={lang.node.name}
//                                     name={lang.node.name}
//                                     value={lang.node.name}
//                                 />
//                                 <label htmlFor={lang.node.name}>
//                                     {lang.node.name}
//                                 </label>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//                 <div className="mt-6 flex justify-end">
//                     <Button className="bg-primary text-primary-foreground hover:bg-primary/90" type="submit">
//                         Create Profile
//                     </Button>
//                 </div>
//             </form>
//         </div>
//     );

//     async function fetchLanguages() {
//         const query = `
//         {
//             languageCollection {
//             edges {
//                 node {
//                 name
//                 }
//             }
//             }
//         }
//         `;

//         const req = await fetch(
//             process.env.SUPABASE_GRAPHQL_ENDPOINT as string,
//             {
//                 method: "POST",
//                 headers: {
//                     apiKey: process.env.API_KEY as string,
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({ query }),
//             }
//         );
//         const res = await req.json();
//         return res.data.languageCollection.edges;
//     }
// }

