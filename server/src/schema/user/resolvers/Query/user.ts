import type { QueryResolvers } from "./../../../types.generated";
export const user: NonNullable<QueryResolvers['user']> = async (
    _parent,
    _arg,
    _ctx
) => {
    /* Implement Query.user resolver logic here */
    const { data, error } = await _ctx.supabase.from("User").select().eq("id", _arg.id).limit(1).single();
    if (error) {
        throw error;
    }

    return data;
};
