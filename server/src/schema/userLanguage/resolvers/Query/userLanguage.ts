import { supabase } from "../../../../utils/db";
import type { QueryResolvers } from "./../../../types.generated";
export const userLanguage: NonNullable<QueryResolvers['userLanguage']> = async (
    _parent,
    _arg,
    _ctx
) => {
    /* Implement Query.userLanguage resolver logic here */
    const { data, error } = await supabase.from("UserLanguage").select().eq("id", _arg.userId).eq("languageName", _arg.languageName).limit(1).single();
    if (error) {
        throw error;
    }
    return data;
};
