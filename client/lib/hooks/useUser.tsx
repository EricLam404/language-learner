import { createClient } from "@/utils/supabase/client";
import { useQuery } from "@tanstack/react-query";

async function fetchUser() {
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()
    console.log(user)
    if (!user) {
        throw new Error("User not found");
    }
    return user;
}

export function useUser() {
    return useQuery({ queryKey: ['user'] , queryFn: fetchUser});
}