import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@components/ui/badge";

export default function page() {
    return (
        <div className="flex min-h-screen w-full flex-col bg-background">
            <main className="flex-1 p-4 sm:p-6">
                <div className="mb-6">
                    <h1 className="text-2xl font-bold">Welcome back, John!</h1>
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
                                <Link
                                    href="#"
                                    className="group grid gap-2 rounded-md bg-muted p-4 transition-colors hover:bg-muted-foreground hover:text-background"
                                    prefetch={false}
                                >
                                    <div className="text-lg font-medium group-hover:text-primary">
                                        My First Adventure
                                    </div>
                                    <p className="text-sm text-muted-foreground group-hover:text-muted">
                                        A short story about my first trip to a
                                        new country.
                                    </p>
                                </Link>
                                <Link
                                    href="#"
                                    className="group grid gap-2 rounded-md bg-muted p-4 transition-colors hover:bg-muted-foreground hover:text-background"
                                    prefetch={false}
                                >
                                    <div className="text-lg font-medium group-hover:text-primary">
                                        Exploring the City
                                    </div>
                                    <p className="text-sm text-muted-foreground group-hover:text-muted">
                                        A story about discovering the hidden
                                        gems of a new city.
                                    </p>
                                </Link>
                                <Link
                                    href="#"
                                    className="group grid gap-2 rounded-md bg-muted p-4 transition-colors hover:bg-muted-foreground hover:text-background"
                                    prefetch={false}
                                >
                                    <div className="text-lg font-medium group-hover:text-primary">
                                        A Day in the Life
                                    </div>
                                    <p className="text-sm text-muted-foreground group-hover:text-muted">
                                        A glimpse into a typical day in my life
                                        as a language learner.
                                    </p>
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Vocabulary List</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-6">
                                <div className="grid gap-2 border rounded-lg p-4 bg-background">
                                    <div className="flex items-center justify-between">
                                        <h2 className="text-lg font-semibold">
                                            Spanish Vocabulary
                                        </h2>
                                        <Badge
                                            variant="outline"
                                            className="bg-muted text-muted-foreground"
                                        >
                                            10 words
                                        </Badge>
                                    </div>
                                    <div className="grid gap-4">
                                        <div className="grid grid-cols-[1fr_1fr] gap-x-6 gap-y-2">
                                            <div className="font-medium">
                                                Hello
                                            </div>
                                            <div className="text-muted-foreground">
                                                <span className="font-medium">
                                                    Español:
                                                </span>{" "}
                                                Hola
                                            </div>
                                            <div className="font-medium">
                                                Thank you
                                            </div>
                                            <div className="text-muted-foreground">
                                                <span className="font-medium">
                                                    Español:
                                                </span>{" "}
                                                Gracias
                                            </div>
                                            <div className="font-medium">
                                                Excuse me
                                            </div>
                                            <div className="text-muted-foreground">
                                                <span className="font-medium">
                                                    Español:
                                                </span>{" "}
                                                Perdón
                                            </div>
                                            <div className="font-medium">
                                                Good morning
                                            </div>
                                            <div className="text-muted-foreground">
                                                <span className="font-medium">
                                                    Español:
                                                </span>{" "}
                                                Buenos días
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid gap-2 border rounded-lg p-4 bg-background">
                                    <div className="flex items-center justify-between">
                                        <h2 className="text-lg font-semibold">
                                            French Vocabulary
                                        </h2>
                                        <Badge
                                            variant="outline"
                                            className="bg-muted text-muted-foreground"
                                        >
                                            15 words
                                        </Badge>
                                    </div>
                                    <div className="grid gap-4">
                                        <div className="grid grid-cols-[1fr_1fr] gap-x-6 gap-y-2">
                                            <div className="font-medium">
                                                Airport
                                            </div>
                                            <div className="text-muted-foreground">
                                                <span className="font-medium">
                                                    Français:
                                                </span>{" "}
                                                Aéroport
                                            </div>
                                            <div className="font-medium">
                                                Hotel
                                            </div>
                                            <div className="text-muted-foreground">
                                                <span className="font-medium">
                                                    Français:
                                                </span>{" "}
                                                Hôtel
                                            </div>
                                            <div className="font-medium">
                                                Train
                                            </div>
                                            <div className="text-muted-foreground">
                                                <span className="font-medium">
                                                    Français:
                                                </span>{" "}
                                                Train
                                            </div>
                                            <div className="font-medium">
                                                Taxi
                                            </div>
                                            <div className="text-muted-foreground">
                                                <span className="font-medium">
                                                    Français:
                                                </span>{" "}
                                                Taxi
                                            </div>
                                        </div>
                                    </div>
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
