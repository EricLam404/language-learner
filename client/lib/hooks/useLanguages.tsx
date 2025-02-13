import { useQuery } from "@tanstack/react-query";
import { useUser } from "@/lib/hooks/useUser";
import { User } from "@supabase/supabase-js";

async function fetchLanguages(user: User | null | undefined): Promise<string[]> { 
    return user?.user_metadata?.profile?.languages || [];
}

export function useLanguages() {
    const { userAuthData: user, isLoading: isUserLoading, error: userError } = useUser();

    return useQuery({
        queryKey: ['languages', user], 
        queryFn: () => fetchLanguages(user),
    });
}
