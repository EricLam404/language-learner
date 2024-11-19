"use client";

import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@components/ui/badge";
import { useUserInfo } from "@/lib/hooks/useUserInfo";
import { Button } from "@components/ui/button";

export default function page() {
    const { userInfo, loading, error } = useUserInfo();
    console.log(userInfo, loading, error);

    if ((!userInfo && !loading) || error) {
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
                        Let's continue your language learning journey.
                    </p>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <Card>
                        <CardHeader>
                            <CardTitle>Recent Stories</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-4">
                                {userInfo?.stories?.length ?? 0 > 0 ? (
                                    userInfo?.stories?.map((story) => (
                                        <Link
                                            href="#"
                                            className="group grid gap-2 rounded-md bg-muted p-4 transition-colors hover:bg-muted-foreground hover:text-background"
                                            prefetch={false}
                                            key={story.id}
                                        >
                                            <div className="text-lg font-medium group-hover:text-primary">
                                                {story.title}
                                            </div>
                                            <p className="text-sm text-muted-foreground group-hover:text-muted">
                                                {story.description}
                                            </p>
                                        </Link>
                                    ))
                                ) : (
                                    <div>
                                        <div className="font-medium">
                                            Don't have any stories yet.
                                        </div>
                                        <Button>
                                            <Link href="/create-story">
                                                Create a new story
                                            </Link>
                                        </Button>
                                    </div>
                                )}
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
                                    {userInfo?.flashcardSets?.length ?? 0 > 0 ? (
                                        userInfo?.flashcardSets?.map((set) => (
                                            <Link
                                                href={`/flashcard/${set.id}`}
                                                className="group grid gap-2 rounded-md bg-muted p-4 transition-colors hover:bg-muted-foreground hover:text-background"
                                                prefetch={false}
                                                key={set.id}
                                            >
                                                <div className="text-lg font-medium group-hover:text-primary">
                                                    {set.name}
                                                </div>
                                                <p className="text-sm text-muted-foreground group-hover:text-muted">
                                                    {set.description}
                                                </p>
                                                <Badge
                                                    variant="outline"
                                                    className="bg-muted text-muted-foreground"
                                                >
                                                    {set.totalCards} cards
                                                </Badge>
                                            </Link>
                                            
                                        ))
                                    ) : (
                                        <div>
                                            <div className="font-medium">
                                                Don't have any flashcard sets
                                                yet.
                                            </div>
                                            <Button>
                                                <Link href="/flashcard">
                                                    Create a new flashcard set
                                                </Link>
                                            </Button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>My Worksheets</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-4">
                                <div className="flex items-center justify-between">
                                    <div className="font-medium">
                                        Coming soon...
                                    </div>
                                    <div className="flex items-center gap-2">
                                        {/* <Button variant="ghost" size="icon">
                      <FilePenIcon className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <TrashIcon className="h-4 w-4" />
                    </Button> */}
                                    </div>
                                </div>
                                {/* <Button variant="outline" className="w-full">
                  Create New Worksheet
                </Button> */}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
}
