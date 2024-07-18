import { supabase } from "../../../../utils/db";
import type { QueryResolvers } from "./../../../types.generated";
export const story: NonNullable<QueryResolvers['story']> = async (
    _parent,
    _arg,
    _ctx
) => {
    /* Implement Query.story resolver logic here */
    const { data, error } = await supabase
        .from("Story")
        .select()
        .eq("id", _arg.id)
        .single();
    if (error) {
        throw error;
    }
    return data;
};
