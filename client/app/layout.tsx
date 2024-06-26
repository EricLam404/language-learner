import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@components/ui/sonner";
import { ApolloWrapper } from "./ApolloWrapper";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
    title: "Language Leaner",
    description:
        "An app to help you learn a new language through traditional techniques and Generative AI.",
};

export const dynamic = "force-dynamic";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={cn(
                    "min-h-screen bg-background font-sans antialiased",
                    inter.variable
                )}
            >
                <ApolloWrapper>
                    {children}
                    <Toaster richColors />
                </ApolloWrapper>
            </body>
        </html>
    );
}
