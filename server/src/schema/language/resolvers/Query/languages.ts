import type { QueryResolvers } from "./../../../types.generated";
export const languages: NonNullable<QueryResolvers['languages']> = async (
    _parent,
    _arg,
    _ctx
) => {
    /* Implement Query.languages resolver logic here */
    const { data, error } = await _ctx.supabase.from("Language").select();
    if (error) {
        throw error;
    }
    return data;
};
