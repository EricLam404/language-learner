"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import RequiredText from "@/components/RequiredText";
import { Flashcard } from "@/lib/types";
import { flashcardSchema, type FlashcardFormValues } from "@/lib/schemas/flashcard";
import { FaceType } from "@/__generated__/graphql";

interface FlashcardDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (card: FlashcardFormValues) => void;
  editCard?: Flashcard;
}

export function FlashcardDialog({
  open,
  onOpenChange,
  onSubmit,
  editCard
}: FlashcardDialogProps) {
  const [showOptionalFields, setShowOptionalFields] = useState(!!editCard);

  const form = useForm<FlashcardFormValues>({
    resolver: zodResolver(flashcardSchema),
    defaultValues: {
      front: editCard?.faces!.find((face) => face.type === FaceType.Front)?.content || "",
      back: editCard?.faces!.find((face) => face.type === FaceType.Back)?.content || "",
      pinyin: editCard?.faces!.find((face) => face.type === FaceType.Pinyin)?.content  || "",
      character: editCard?.faces!.find((face) => face.type === FaceType.Character)?.content || "",
      other: editCard?.faces!.find((face) => face.type === FaceType.Other)?.content  || ""
    }
  });

  const handleSubmit = (values: FlashcardFormValues) => {
    onSubmit(values);
    onOpenChange(false);
    form.reset();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{editCard ? "Edit Flashcard" : "Add New Flashcard"}</DialogTitle>
          <DialogDescription>
            {editCard ? "Edit the flashcard details below." : "Create a new flashcard for your set."}
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="front"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <RequiredText>Front</RequiredText>
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="back"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <RequiredText>Back</RequiredText>
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {(showOptionalFields || editCard) && (
              <>
                <FormField
                  control={form.control}
                  name="pinyin"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Pinyin</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="character"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Character</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="other"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Other (e.g. Example)</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}

            {!showOptionalFields && !editCard && (
              <Button
                type="button"
                variant="outline"
                onClick={() => setShowOptionalFields(true)}
              >
                Add Optional Fields
              </Button>
            )}

            <DialogFooter>
              <Button type="submit">
                {editCard ? "Save Changes" : "Add Flashcard"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}