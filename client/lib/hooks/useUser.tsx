import { useQuery } from "@tanstack/react-query";
import { useQuery as useApolloQuery, gql } from "@apollo/client";
import { GET_USER } from "@components/graphql/users";
import { createClient } from "@/utils/supabase/client";

const supabase = createClient();

async function fetchSupabaseUser() {
    const { data, error } = await supabase.auth.getUser();
    if (error) throw new Error(error.message);
    return data?.user;
}

export function useUser() {
    const { data: authUser, isLoading: authLoading, error: authError } = useQuery({
        queryKey: ["authUser"],
        queryFn: fetchSupabaseUser,
        staleTime: 1000 * 60 * 5,
        retry: false,
    });

    const { data: userData, loading: userLoading, error: userError } = useApolloQuery(GET_USER, {
        variables: { userId: authUser?.id!},
        skip: !authUser || !authUser.id,
    });

    return {
        userAuthData: authUser || null,
        user: userData?.user || null,
        isLoading: authLoading || userLoading,
        error: authError || userError,
    };
}
