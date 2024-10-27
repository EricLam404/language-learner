"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
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

interface FlashcardDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (card: Omit<Flashcard, "id">) => void;
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
      front: editCard?.front || "",
      back: editCard?.back || "",
      pinyin: editCard?.pinyin || "",
      character: editCard?.character || "",
      example: editCard?.example || ""
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
                  name="example"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Example</FormLabel>
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