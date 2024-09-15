import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
    Table,
    TableHeader,
    TableRow,
    TableHead,
    TableBody,
    TableCell,
} from "@/components/ui/table";
import { UploadIcon, PlusIcon, FilePenIcon, TrashIcon } from "@app/_components/icons";
import { data } from "@/public/dummydata/vocabulary";

type vocabularyList = {
    word: string;
    meaning: string;
    sentence: string;
}[];
export default function Component() {
    let vocabularyList: vocabularyList = data;
    return (
        <div className="w-full max-w-4xl mx-auto py-12">
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold">Vocabulary List</h1>
                <div className="flex items-center gap-4">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="sm">
                                <UploadIcon className="mr-2 h-4 w-4" />
                                Upload Words
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem>
                                <UploadIcon className="mr-2 h-4 w-4" />
                                Import CSV
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <PlusIcon className="mr-2 h-4 w-4" />
                                Add Word
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
            <div className="border rounded-lg overflow-hidden">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[200px]">Word</TableHead>
                            <TableHead className="w-[200px]">Meaning</TableHead>
                            <TableHead className="w-[400px]">
                                Example Sentence
                            </TableHead>
                            <TableHead className="w-[100px]">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {vocabularyList.map((word, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium">
                                    {word.word}
                                </TableCell>
                                <TableCell>{word.meaning}</TableCell>
                                <TableCell>{word.sentence}</TableCell>
                                <TableCell>
                                    <div className="flex items-center gap-2">
                                        <Button variant="ghost" size="icon">
                                            <FilePenIcon className="h-4 w-4" />
                                            <span className="sr-only">
                                                Edit
                                            </span>
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="text-red-500"
                                        >
                                            <TrashIcon className="h-4 w-4" />
                                            <span className="sr-only">
                                                Delete
                                            </span>
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}