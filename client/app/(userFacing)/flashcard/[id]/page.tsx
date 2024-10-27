import FlashcardDisplay from "@app/_components/flashcards/FlashcardDisplay";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@components/ui/card";
import { Suspense } from "react";
import { CardContent } from "@/components/ui/card";
import FlashcardContainer from "@/app/_components/flashcards/FlashcardContainer";

const mockFlashcards = [
    {
        id: 1,
        front: "Hello",
        back: "你好",
        pinyin: "Nǐ hǎo",
        character: "你好",
        example: "你好，我叫小明。 (Hello, my name is Xiao Ming.)",
    },
    {
        id: 2,
        front: "Thank you",
        back: "谢谢",
        pinyin: "Xièxiè",
        character: "谢谢",
        example: "谢谢你的帮助。 (Thank you for your help.)",
    },
    {
        id: 3,
        front: "Goodbye",
        back: "再见",
        pinyin: "Zàijiàn",
        character: "再见",
        example: "再见，明天见。 (Goodbye, see you tomorrow.)",
    },
];

export default function Page({ params }: { params: { id: string } }) {
    return (
        <div className="container mx-auto p-4 space-y-8">
            <Card>
                <CardHeader>
                    <div className="flex justify-between items-center">
                        <div>
                            <CardTitle className="text-3xl font-bold">
                                Basic Chinese Phrases
                            </CardTitle>
                            <CardDescription>
                                Essential phrases for everyday conversations
                            </CardDescription>
                        </div>
                        <div className="text-lg font-semibold">
                            Language: Chinese
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <Suspense fallback={<div>Loading flashcards...</div>}>
                        <FlashcardContainer initialCards={mockFlashcards} />
                    </Suspense>
                </CardContent>
            </Card>
        </div>
    );
}
