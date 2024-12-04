import { FaceType } from "@/__generated__/graphql";
import { Flashcard } from "@/lib/types";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

interface FlashcardDeleteFormProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onDelete: (id: string) => void;
    card: Flashcard;
}

export default function FlashcardDeleteForm({
    open,
    onOpenChange,
    onDelete,
    card,
}: FlashcardDeleteFormProps) {
    const handleDelete = () => {
        onDelete(card.id);
        onOpenChange(false);
    };

    const frontContent = card?.faces?.find((face) => face.isFront)?.content;

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Delete Flashcard</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently
                        delete the flashcard &quot;{frontContent}&quot; from your list.
                    </DialogDescription>
                </DialogHeader>

                <DialogFooter className="flex justify-end space-x-2">
                    <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button
                        type="button"
                        variant="destructive"
                        onClick={handleDelete}
                    >
                        Delete
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
