import { supabase } from "../../../../utils/db";
import type { QueryResolvers } from "./../../../types.generated";
export const worksheet: NonNullable<QueryResolvers['worksheet']> = async (
    _parent,
    _arg,
    _ctx
) => {
    /* Implement Query.worksheet resolver logic here */
    const { data, error } = await supabase.from("Worksheet").select().eq("id", _arg.id).single();
    if (error) {
        throw error;
    }
    return data;
};
