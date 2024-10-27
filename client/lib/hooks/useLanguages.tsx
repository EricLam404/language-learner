import { useQuery } from "@tanstack/react-query";
import { useUser } from "@/lib/hooks/useUser"; // Assuming this hook fetches the user data
import { User } from "@supabase/supabase-js";

async function fetchLanguages(user: User | null | undefined): Promise<string[]> { 
    return user?.user_metadata?.profile?.languages || [];
}

export function useLanguages() {
    const { data: user, isLoading: isUserLoading, error: userError } = useUser();

    return useQuery({
        queryKey: ['languages', user], 
        queryFn: () => fetchLanguages(user),
    });
}
