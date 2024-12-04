"use client";

import { useState, useEffect } from "react";
import { signUp, login, loginWithGoogle } from "@app/login/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check, X, Loader2 } from "lucide-react";
import { ChromeIcon } from "./icons";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useFormState } from "react-dom";

export function SignUpForm() {
    const [isLoginMode, setIsLoginMode] = useState(false);
    const [state, formAction, isPending] = useFormState(
        isLoginMode ? login : signUp,
        null
    );
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRequirements, setPasswordRequirements] = useState({
        length: false,
        lowercase: false,
        uppercase: false,
        number: false,
        symbol: false,
    });
    const router = useRouter();

    useEffect(() => {
        setPasswordRequirements({
            length: password.length >= 6,
            lowercase: /[a-z]/.test(password),
            uppercase: /[A-Z]/.test(password),
            number: /[0-9]/.test(password),
            symbol: /[^a-zA-Z0-9]/.test(password),
        });
    }, [password]);

    const toggleMode = () => {
        setIsLoginMode(!isLoginMode);
        setPassword("");
    };

    useEffect(() => {
        if (state) {
            if (state.error) {
                console.log(state.error);
                toast.error(state.error);
            } else if (state.success) {
                toast.success(
                    isLoginMode
                        ? "Logged in successfully"
                        : "Signed up successfully"
                );
                router.push("/");
            }
        }
    }, [state]);

    const RequirementIcon = ({ met }: { met: boolean }) =>
        met ? (
            <Check className="h-4 w-4 text-green-500" />
        ) : (
            <X className="h-4 w-4 text-red-500" />
        );

    return (
        <div className="mx-auto max-w-sm space-y-6">
            <div className="space-y-2 text-center">
                <h1 className="text-3xl font-bold">
                    {isLoginMode ? "Log In" : "Sign Up"}
                </h1>
                <p className="text-gray-500 dark:text-gray-400">
                    {isLoginMode
                        ? "Enter your credentials to access your account"
                        : "Enter your information to create an account"}
                </p>
            </div>
            <form action={formAction} className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        name="email"
                        placeholder="m@example.com"
                        required
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                        id="password"
                        name="password"
                        required
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {!isLoginMode && (
                    <div className="space-y-1 text-sm">
                        <div className="flex items-center space-x-2">
                            <RequirementIcon
                                met={passwordRequirements.length}
                            />
                            <span
                                className={
                                    passwordRequirements.length
                                        ? "text-green-500"
                                        : "text-gray-500"
                                }
                            >
                                At least 6 characters
                            </span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RequirementIcon
                                met={passwordRequirements.lowercase}
                            />
                            <span
                                className={
                                    passwordRequirements.lowercase
                                        ? "text-green-500"
                                        : "text-gray-500"
                                }
                            >
                                At least one lowercase letter
                            </span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RequirementIcon
                                met={passwordRequirements.uppercase}
                            />
                            <span
                                className={
                                    passwordRequirements.uppercase
                                        ? "text-green-500"
                                        : "text-gray-500"
                                }
                            >
                                At least one uppercase letter
                            </span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RequirementIcon
                                met={passwordRequirements.number}
                            />
                            <span
                                className={
                                    passwordRequirements.number
                                        ? "text-green-500"
                                        : "text-gray-500"
                                }
                            >
                                At least one number
                            </span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RequirementIcon
                                met={passwordRequirements.symbol}
                            />
                            <span
                                className={
                                    passwordRequirements.symbol
                                        ? "text-green-500"
                                        : "text-gray-500"
                                }
                            >
                                At least one symbol
                            </span>
                        </div>
                    </div>
                )}
                <Button
                    className="w-full"
                    type="submit"
                    disabled={
                        isPending ||
                        (!isLoginMode &&
                            !Object.values(passwordRequirements).every(Boolean))
                    }
                >
                    {isPending && (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    {isLoginMode ? "Log In" : "Sign Up"}
                </Button>
            </form>
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                        Or continue with
                    </span>
                </div>
            </div>
            <form>
                <Button
                    variant="outline"
                    type="button"
                    className="w-full"
                    formAction={loginWithGoogle}
                >
                    <ChromeIcon className="mr-2 h-4 w-4" />
                    Google
                </Button>
            </form>
            <div className="text-center">
                <Button variant="link" onClick={toggleMode}>
                    {isLoginMode
                        ? "Don't have an account? Sign Up"
                        : "Already have an account? Log In"}
                </Button>
            </div>
        </div>
    );
}
