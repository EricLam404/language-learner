"use client";
import {
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ChatFormData } from "@/lib/schemas/chat";
import { UseFormReturn } from "react-hook-form";

type DifficultySelectorProps = {
    form: UseFormReturn<ChatFormData>;
};

export function DifficultySelector({ form }: DifficultySelectorProps) {
    return (
        <FormField
            control={form.control}
            name="difficulty"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Difficulty</FormLabel>
                    <FormControl>
                        <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex space-x-4"
                        >
                            {["beginner", "intermediate", "advanced"].map(
                                (level) => (
                                    <FormItem
                                        key={level}
                                        className="flex items-center space-x-2"
                                    >
                                        <FormControl>
                                            <RadioGroupItem value={level} />
                                        </FormControl>
                                        <FormLabel className="font-normal capitalize">
                                            {level}
                                        </FormLabel>
                                    </FormItem>
                                )
                            )}
                        </RadioGroup>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}
