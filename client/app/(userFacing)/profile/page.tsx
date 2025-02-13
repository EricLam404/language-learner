"use client";

import { useState } from "react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { toast } from "@/components/ui/use-toast";
import { useUser } from "@/lib/hooks/useUser";
import {
    Mail,
    Check,
    Globe,
    User,
    Clock,
    AlertCircle,
    Shield,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { UserLanguageSelector } from "@/components/selections/UserLanguageSelector";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function ProfilePage() {
    const { userAuthData, isLoading, error } = useUser();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error || !userAuthData) {
        return <div>An error has occurred</div>;
    }

    const handleVerifyEmail = async () => {
        console.log("Initiating email verification process");
        toast({
            title: "Verification Email Sent",
            description:
                "Please check your inbox and follow the instructions to verify your email.",
        });
    };

    const handleLanguagesChange = (newLanguages: string[]) => {
        console.log("Updating user languages", newLanguages);
        toast({
            title: "Languages Updated",
            description:
                "Your language preferences have been updated successfully.",
        });
    };

    return (
        <div className="mx-auto bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">
                    User Profile
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Card className="md:col-span-2">
                        <CardHeader>
                            <CardTitle>Personal Information</CardTitle>
                            <CardDescription>
                                Manage your personal details and preferences
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-8">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                                        <User className="h-6 w-6 text-gray-500" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">
                                            Username
                                        </p>
                                        <p className="text-lg font-semibold">
                                            {
                                                userAuthData.user_metadata.profile
                                                    .username
                                            }
                                        </p>
                                    </div>
                                </div>
                                <Separator />
                                <div>
                                    <div className="flex items-center space-x-2 mb-2">
                                        <Mail className="h-5 w-5 text-gray-500" />
                                        <p className="text-sm font-medium text-gray-500">
                                            Email
                                        </p>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <p className="text-lg">
                                            {userAuthData.email}
                                        </p>
                                        <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger>
                                                    {userAuthData.user_metadata
                                                        .email_verified ? (
                                                        <Check className="text-green-500 h-5 w-5" />
                                                    ) : (
                                                        <AlertCircle className="text-amber-500 h-5 w-5" />
                                                    )}
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>
                                                        {userAuthData.user_metadata
                                                            .email_verified
                                                            ? "Email verified"
                                                            : "Email not verified"}
                                                    </p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </div>
                                    {/* {!userAuthData.user_metadata.email_verified && (
                                        <Button
                                            onClick={handleVerifyEmail}
                                            variant="outline"
                                            size="sm"
                                            className="mt-2"
                                        >
                                            Verify Email
                                        </Button>
                                    )} */}
                                </div>
                                <Separator />
                                <div>
                                    <div className="flex items-center space-x-2 mb-2">
                                        <Globe className="h-5 w-5 text-gray-500" />
                                        <p className="text-sm font-medium text-gray-500">
                                            Languages
                                        </p>
                                    </div>
                                    <div className="flex flex-wrap gap-2 mb-2">
                                        {userAuthData.user_metadata.profile.languages.map(
                                            (
                                                language: string,
                                                index: number
                                            ) => (
                                                <Badge
                                                    key={index}
                                                    variant="secondary"
                                                >
                                                    {language}
                                                </Badge>
                                            )
                                        )}
                                    </div>
                                    <UserLanguageSelector
                                        selectedLanguages={
                                            userAuthData.user_metadata.profile
                                                .languages
                                        }
                                        onLanguagesChange={
                                            handleLanguagesChange
                                        }
                                    />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <div className="space-y-8">
                        <Card>
                            <CardHeader>
                                <CardTitle>Account Security</CardTitle>
                                <CardDescription>
                                    Manage your account&apos;s security settings
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                            <Shield className="h-5 w-5 text-gray-500" />
                                            <p className="text-sm font-medium">
                                                Phone Verification
                                            </p>
                                        </div>
                                        {userAuthData.user_metadata
                                            .phone_verified ? (
                                            <Badge variant="success">
                                                Verified
                                            </Badge>
                                        ) : (
                                            <Badge variant="destructive">
                                                Not Verified
                                            </Badge>
                                        )}
                                    </div>
                                    {!userAuthData.user_metadata.phone_verified && (
                                        <Button variant="outline" size="sm">
                                            Verify Phone
                                        </Button>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Identity Providers</CardTitle>
                                <CardDescription>
                                    Manage your connected accounts
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-4">
                                    {userAuthData.identities &&
                                        userAuthData.identities.map(
                                            (identity, index: number) => (
                                                <li
                                                    key={index}
                                                    className="flex items-center justify-between"
                                                >
                                                    <div className="flex items-center space-x-2">
                                                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                                                            <User className="h-4 w-4 text-gray-500" />
                                                        </div>
                                                        <div>
                                                            <p className="text-sm font-medium">
                                                                {
                                                                    identity.provider
                                                                }
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center text-xs text-gray-500">
                                                        <Clock className="mr-1 h-3 w-3" />
                                                        {new Date(
                                                            identity.last_sign_in_at ||
                                                                ""
                                                        ).toLocaleDateString()}
                                                    </div>
                                                </li>
                                            )
                                        )}
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
