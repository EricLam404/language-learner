import { supabase } from "../../../../utils/db";
import type { QueryResolvers } from "./../../../types.generated";
export const language: NonNullable<QueryResolvers['language']> = async (
    _parent,
    _arg,
    _ctx
) => {
    /* Implement Query.language resolver logic here */
    const { data, error } = await supabase.from("Language").select("*").eq("id", _arg.id);
    if (error) {
        throw error;
    }

    return data;
};
