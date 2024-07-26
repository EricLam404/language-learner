import type { MutationResolvers } from "./../../../types.generated.ts";
export const createUser: NonNullable<MutationResolvers["createUser"]> = async (
    _parent,
    _arg,
    _ctx
) => {
    /* Implement Mutation.createUser resolver logic here */
    const { error } = await _ctx.supabase.from("User").insert({
        email: _arg.email,
        username: _arg.username,
        updatedAt: new Date().toISOString(),
    });

    if (error) {
        return {
            success: false,
            message: error.message,
        };
    } else {
        return {
            success: true,
            message: "User created successfully",
        };
    }
};
