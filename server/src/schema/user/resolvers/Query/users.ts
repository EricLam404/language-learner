import type { QueryResolvers } from "./../../../types.generated";
export const users: NonNullable<QueryResolvers['users']> = async (
    _parent,
    _arg,
    _ctx
) => {
    /* Implement Query.users resolver logic here */
    const { data, error } = await _ctx.supabase.from("User").select();
    if (error) {
        throw error;
    }
    return data;
};
