import { useLanguages } from "@/lib/hooks/useLanguage";
import { SelectItem } from "@components/ui/select";
import React from "react";

const Selections = () => {
    const { data: languages, isLoading, error } = useLanguages();
    return (
        <>
            {!isLoading &&
                languages?.map(
                    (language: string) => (
                        <SelectItem key={language} value={language}>
                            {language}
                        </SelectItem>
                    )
                )}
        </>
    );
};

export default Selections;
