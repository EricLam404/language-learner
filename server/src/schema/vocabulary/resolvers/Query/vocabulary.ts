import type { QueryResolvers } from "./../../../types.generated";
export const vocabulary: NonNullable<QueryResolvers['vocabulary']> = async (
    _parent,
    _arg,
    _ctx
) => {
    /* Implement Query.vocabulary resolver logic here */
    const { data, error } = await _ctx.supabase.from("Vocabulary").select().eq("id", _arg.id).limit(1).single();
    if (error) {
        throw error;
    }
    return data;
};
