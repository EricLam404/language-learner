import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Libre_Franklin } from 'next/font/google'
import { Chivo } from 'next/font/google'
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@components/ui/sonner";
import { ApolloWrapper } from "./ApolloWrapper";
import Providers from "@/lib/providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const libre_franklin = Libre_Franklin({
  subsets: ['latin'],
  display: 'swap',
})

const chivo = Chivo({
  subsets: ['latin'],
  display: 'swap',
})
export const metadata: Metadata = {
    title: "Language Learner",
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
                <Providers>
                    <ApolloWrapper>
                        {children}
                        <Toaster richColors />
                    </ApolloWrapper>
                </Providers>
            </body>
        </html>
    );
}
