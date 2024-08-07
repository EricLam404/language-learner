import type { QueryResolvers } from "./../../../types.generated";
export const stories: NonNullable<QueryResolvers['stories']> = async (
    _parent,
    _arg,
    _ctx
) => {
    /* Implement Query.stories resolver logic here */
    const { data, error } = await _ctx.supabase.from("Story").select();
    if (error) {
        throw error;
    }
    return data;
};
