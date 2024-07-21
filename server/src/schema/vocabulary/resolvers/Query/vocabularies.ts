import { supabase } from "../../../../utils/db.ts";
import type { QueryResolvers } from "./../../../types.generated";
export const vocabularies: NonNullable<QueryResolvers['vocabularies']> = async (
    _parent,
    _arg,
    _ctx
) => {
    /* Implement Query.vocabularies resolver logic here */
    const { data, error } = await supabase.from("Vocabulary").select();
    if (error) {
        throw error;
    }
    return data;
};
