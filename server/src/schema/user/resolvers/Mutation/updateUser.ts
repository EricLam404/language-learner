import type { MutationResolvers } from "./../../../types.generated.ts";
export const updateUser: NonNullable<MutationResolvers["updateUser"]> = async (
    _parent,
    _arg,
    _ctx
) => {
    /* Implement Mutation.updateUser resolver logic here */
    const { error } = await _ctx.supabase
        .from("User")
        .update({
            email: _arg.email,
            username: _arg.username,
            updatedAt: new Date().toISOString(),
        })
        .eq("id", _arg.id);

    if (error) {
        return {
            success: false,
            message: error.message,
        };
    } else {
        return {
            success: true,
            message: "User updated successfully",
        };
    }
};
