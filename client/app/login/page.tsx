import { Button } from "@/components/ui/button";
import Image from "next/image";
import GoogleIcon from "@/public/icons/google.svg";

export default function Login() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-950">
            <div className="mx-auto max-w-md space-y-6 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-900">
                <div className="space-y-2 text-center">
                    <h1 className="text-3xl font-bold">Welcome back!</h1>
                    <p className="text-gray-500 dark:text-gray-400">
                        Sign in to your account to continue.
                    </p>
                </div>
                <Button variant="outline" className="w-full gap-2">
                    <Image
                        src={GoogleIcon}
                        alt="Google"
                        width={24}
                        height={24}
                    />
                    Sign in with Google
                </Button>
            </div>
        </div>
    );
}
