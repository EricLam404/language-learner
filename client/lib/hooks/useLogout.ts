"use client";

import { useQueryClient } from "@tanstack/react-query";
import { createClient } from "../../utils/supabase/client";

export async function useLogout() {
    const supabase = createClient();
    const queryClient = useQueryClient();

    return async () => {
        const { error } = await supabase.auth.signOut({ scope: "local" });

        if (error) {
            console.log(error);
        } else {
            console.log("Signed out successfully!");
        }

        queryClient.invalidateQueries({ queryKey: ["user"] });
    };
}
