import type { MutationResolvers } from "./../../../types.generated.ts";
export const deleteUser: NonNullable<MutationResolvers['deleteUser']> = async (
    _parent,
    _arg,
    _ctx
) => {
    /* Implement Mutation.deleteUser resolver logic here */
    const { error } = await _ctx.supabase
        .from("User")
        .delete()
        .eq("id", _arg.id);

    if (error) {
        return {
            success: false,
            message: error.message,
        };
    } else {
        return {
            success: true,
            message: "User deleted successfully",
        };
    }
};
