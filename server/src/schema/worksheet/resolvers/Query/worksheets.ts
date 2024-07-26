import type { QueryResolvers } from "./../../../types.generated";
export const worksheets: NonNullable<QueryResolvers['worksheets']> = async (
    _parent,
    _arg,
    _ctx
) => {
    /* Implement Query.worksheets resolver logic here */
    const { data, error } = await _ctx.supabase.from("Worksheet").select();
    if (error) {
        throw error;
    }
    return data;
};
