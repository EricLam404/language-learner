"use client";

import {
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
} from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { ChatFormData } from "@/lib/schemas/chat";
import { UseFormReturn } from "react-hook-form";

interface LanguageSelectorProps {
    form: UseFormReturn<ChatFormData>;
}

export function LanguageSelector({ form }: LanguageSelectorProps) {
    return (
        <FormField
            control={form.control}
            name="language"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Language</FormLabel>
                    <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                    >
                        <FormControl>
                            <SelectTrigger>
                                <SelectValue placeholder="Select a language" />
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            <SelectItem value="spanish">Spanish</SelectItem>
                            <SelectItem value="french">French</SelectItem>
                            <SelectItem value="german">German</SelectItem>
                            <SelectItem value="italian">Italian</SelectItem>
                        </SelectContent>
                    </Select>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}
