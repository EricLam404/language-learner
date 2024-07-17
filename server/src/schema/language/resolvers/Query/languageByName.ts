import { supabase } from "../../../../utils/db";
import type { QueryResolvers } from "./../../../types.generated";
export const languageByName: NonNullable<QueryResolvers['languageByName']> = async (_parent, _arg, _ctx) => {
    /* Implement Query.languageByName resolver logic here */
    const { data, error } = await supabase.from("Language").select("*").eq("name", _arg.name);
    if (error) {
        throw error;
    }

    return data;
    
};
