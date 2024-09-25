import { useUser } from "@/lib/hooks/useUser";
import { SelectItem } from "@components/ui/select";
import React from "react";

const Selections = () => {
    const { data: user, isLoading, error: userError } = useUser();
    return (
        <>
            {!isLoading &&
                user?.app_metadata?.profile?.languages?.map(
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
