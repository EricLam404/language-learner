"use client";

import { useState } from "react";
import { Mail, Check, X, Globe, User, Clock, AlertCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { toast } from "@/components/ui/use-toast";
import { useUser } from "@/lib/hooks/useUser";

interface UserData {
    email: string;
    email_verified: boolean;
    phone_verified: boolean;
    profile: {
        languages: string[];
        username: string;
    };
    identities: {
        provider: string;
        last_sign_in_at: string;
        email: string;
    }[];
}

export default function ProfilePage() {
    const { data: userData, isLoading, error } = useUser();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error || !userData) {
        return <div>An error has occurred</div>;
    }
    const handleVerifyEmail = async () => {
        // This would typically be an API call to initiate email verification
        // console.log("Initiating email verification process")

        // Simulating an API call
        // await new Promise((resolve) => setTimeout(resolve, 1000))

        toast({
            title: "Verification Email Sent",
            description:
                "Please check your inbox and follow the instructions to verify your email.",
        });

        // In a real application, you wouldn't set this to true until the user actually verifies their email
        // This is just for demonstration purposes
        // setUserData((prevData) => ({ ...prevData, email_verified: true }))
    };

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
                <div className="px-4 py-5 sm:px-6 bg-gray-50">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                        User Profile
                    </h3>
                </div>
                <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
                    <dl className="space-y-6">
                        <div>
                            <dt className="text-sm font-medium text-gray-500 flex items-center mb-1">
                                <User className="mr-2 h-5 w-5" />
                                Username
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                                {userData.user_metadata.profile.username}
                            </dd>
                        </div>
                        <div>
                            <dt className="text-sm font-medium text-gray-500 flex items-center mb-1">
                                <Mail className="mr-2 h-5 w-5" />
                                Email
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 flex items-center">
                                {userData.email}
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            {userData.user_metadata.email_verified ? (
                                                <Check className="text-green-500 h-5 w-5 ml-2" />
                                            ) : (
                                                <AlertCircle className="text-amber-500 h-5 w-5 ml-2" />
                                            )}
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>
                                                {userData.user_metadata.email_verified
                                                    ? "Email verified"
                                                    : "Email not verified"}
                                            </p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </dd>
                            {!userData.user_metadata.email_verified && (
                                <div className="mt-2">
                                    <Button
                                        onClick={handleVerifyEmail}
                                        variant="outline"
                                        size="sm"
                                    >
                                        Verify Email
                                    </Button>
                                </div>
                            )}
                        </div>
                        {/* <div>
                            <dt className="text-sm font-medium text-gray-500 mb-1">
                                Phone Verified
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 flex items-center">
                                {userData.user_metadata.phone_verified ? (
                                    <>
                                        <Check className="text-green-500 h-5 w-5 mr-2" />{" "}
                                        Yes
                                    </>
                                ) : (
                                    <>
                                        <X className="text-red-500 h-5 w-5 mr-2" />{" "}
                                        No
                                    </>
                                )}
                            </dd>
                        </div> */}
                        <div>
                            <dt className="text-sm font-medium text-gray-500 flex items-center mb-1">
                                <Globe className="mr-2 h-5 w-5" />
                                Languages
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                                <div className="flex flex-wrap gap-2">
                                    {userData.user_metadata.profile.languages.map(
                                        (language: string, index: number) => (
                                            <Badge
                                                key={index}
                                                variant="secondary"
                                            >
                                                {language}
                                            </Badge>
                                        )
                                    )}
                                </div>
                            </dd>
                        </div>
                        <div>
                            <dt className="text-sm font-medium text-gray-500 mb-1">
                                Identity Provider
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                                <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                                    {userData.identities && userData.identities.map(
                                        (identity, index) => (
                                            <li
                                                key={index}
                                                className="pl-3 pr-4 py-3 flex items-center justify-between text-sm"
                                            >
                                                <div className="w-0 flex-1 flex items-center">
                                                    <span className="ml-2 flex-1 w-0 truncate">
                                                        {identity.provider}
                                                    </span>
                                                </div>
                                                <div className="ml-4 flex-shrink-0 flex items-center">
                                                    <Clock className="mr-1 h-4 w-4 text-gray-400" />
                                                    <span className="text-gray-500">
                                                        {new Date(
                                                            identity.last_sign_in_at ? new Date(identity.last_sign_in_at).toLocaleDateString() : "N/A"
                                                        ).toLocaleDateString()}
                                                    </span>
                                                </div>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    );
}
