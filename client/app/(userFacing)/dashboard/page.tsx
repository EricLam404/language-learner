"use client";

import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@components/ui/badge";
import { Button } from "@components/ui/button";
import { FilePenIcon } from "@components/icons";
import { TrashIcon } from "lucide-react";
import { formatDate } from "@/lib/stringUtils";
import { useUser } from "@/lib/hooks/useUser";

export default function Page() {
    const { user: userInfo, isLoading, error } = useUser();

    if ((!userInfo && !isLoading) || error) {
        return <div>Error loading user info</div>;
    }

    return (
        <div className="flex min-h-screen w-full flex-col bg-background">
            <main className="flex-1 p-4 sm:p-6">
                <div className="mb-6">
                    <h1 className="text-2xl font-bold">
                        Welcome back, {userInfo?.username}!
                    </h1>
                    <p className="text-muted-foreground">
                        Let&apos;s continue your language learning journey.
                    </p>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <Card>
                        <CardHeader>
                            <CardTitle>Recent Stories</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-4">
                                {userInfo?.stories?.map((story) => (
                                    <Link
                                        href={`/story/view/${story.id}`}
                                        className="group grid gap-2 rounded-md bg-muted p-4 transition-colors hover:bg-slate-300"
                                        prefetch={false}
                                        key={story.id}
                                    >
                                        <div className="text-lg font-medium">
                                            {story.title}
                                        </div>
                                        <p className="text-sm text-muted-foreground">
                                            {story.description}
                                        </p>
                                    </Link>
                                ))}
                                <Link href="/create-story">
                                    <Button
                                        variant="outline"
                                        className="w-full"
                                    >
                                        New Story
                                    </Button>
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Flashcards</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-6">
                                <div className="grid gap-2 border rounded-lg p-4 bg-background">
                                    {userInfo?.flashcardSets?.map((set) => (
                                        <Link
                                            href={`/flashcard/${set.id}`}
                                            className="group grid gap-2 rounded-md bg-muted p-4 transition-colors hover:bg-slate-300"
                                            prefetch={false}
                                            key={set.id}
                                        >
                                            <div className="text-lg font-medium">
                                                {set.name}
                                            </div>
                                            <p className="text-sm text-muted-foreground">
                                                {set.description}
                                            </p>
                                            <Badge
                                                variant="outline"
                                                className="bg-muted text-muted-foreground"
                                            >
                                                {set.totalCards} cards
                                            </Badge>
                                        </Link>
                                    ))}
                                </div>
                                <Link href="/flashcard">
                                    <Button
                                        variant="outline"
                                        className="w-full"
                                    >
                                        New Flashcard Set
                                    </Button>
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Recent chats</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-4">
                                <div className="grid gap-2 border rounded-lg p-4 bg-background">
                                    {userInfo?.chatSessions?.map((chatSession) => (
                                        <Link
                                            href={`/chat/${chatSession.id}`}
                                            className="group grid gap-2 rounded-md bg-muted p-4 transition-colors hover:bg-slate-300"
                                            prefetch={false}
                                            key={chatSession.id}
                                        >
                                            <div className="text-lg font-medium">
                                                {chatSession.name}
                                            </div>
                                            <p className="text-sm text-muted-foreground">
                                                {formatDate(chatSession.updatedAt)}
                                            </p>
                                        </Link>
                                    ))}
                                    {/* <div className="flex items-center gap-2">
                                        <Button variant="ghost" size="icon">
                                            <FilePenIcon className="h-4 w-4" />
                                        </Button>
                                        <Button variant="ghost" size="icon">
                                            <TrashIcon className="h-4 w-4" />
                                        </Button>
                                    </div> */}
                                </div>
                                <Button variant="outline" className="w-full">
                                    New Chat
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
}
