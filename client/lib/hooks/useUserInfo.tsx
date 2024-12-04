import { useLazyQuery } from "@apollo/client";
import { GET_USER } from "@components/graphql/users";
import { useUser } from "./useUser";
import { useEffect } from "react";

export const useUserInfo = () => {
    const { data: user, isLoading, error: userError } = useUser();

    const [getUserInfo, { data, loading, error }] = useLazyQuery(GET_USER);

    useEffect(() => {
        if (user?.id) {
            getUserInfo({ variables: { userId: user.id } });
        }
    }, [user]);
        
    return {
        userInfo: data?.user,
        loading: isLoading || loading,
        error,
    };
};
