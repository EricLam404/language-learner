import { login, signup, loginWithGoogle } from "./actions";
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
                <form className="max-w-md mx-auto p-6 rounded-lg space-y-4">
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Email:
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Password:
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <button
                            type="submit"
                            formAction={login}
                            className="bg-indigo-600 text-white px-4 py-2 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Log in
                        </button>
                        <button
                            type="submit"
                            formAction={signup}
                            className="bg-gray-600 text-white px-4 py-2 rounded-md shadow hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                        >
                            Sign up
                        </button>
                    </div>
                    <Button
                        variant="outline"
                        className="w-full gap-2"
                        formAction={loginWithGoogle}
                        type="submit"
                    >
                        <Image
                            src={GoogleIcon}
                            alt="Google"
                            width={24}
                            height={24}
                        />
                        Sign in with Google
                    </Button>
                </form>
            </div>
        </div>
    );
}

// export default function LoginPage() {
//     return (
//         <>
//             <form>
//                 <label htmlFor="email">Email:</label>
//                 <input id="email" name="email" type="email" required />
//                 <label htmlFor="password">Password:</label>
//                 <input id="password" name="password" type="password" required />
//                 <button formAction={login}>Log in</button>
//                 <button formAction={signup}>Sign up</button>
//             </form>

//         </>
//     );
// }
