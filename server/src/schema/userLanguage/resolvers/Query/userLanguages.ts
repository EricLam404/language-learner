import type { QueryResolvers } from "./../../../types.generated";
export const userLanguages: NonNullable<QueryResolvers['userLanguages']> = async (_parent, _arg, _ctx) => {
    /* Implement Query.userLanguages resolver logic here */
    const { data, error } = await _ctx.supabase.from("UserLanguage").select().eq("id", _arg.userId);
    if (error) {
        throw error;
    }
    return data;
};
