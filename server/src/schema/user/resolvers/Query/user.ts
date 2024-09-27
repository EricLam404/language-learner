import { MyContext } from "../../../../utils/types/context";
import type { QueryResolvers } from "./../../../types.generated";
export const user: NonNullable<QueryResolvers['user']> = async (
    _parent,
    _arg,
    _ctx: MyContext
) => {
    /* Implement Query.user resolver logic here */
    const { data, error } = await _ctx.dataSources.supabase.from("User").select().eq('id', _ctx.user.id).limit(1).single();
    if (error) {
        throw error;
    }

    return data;
};
