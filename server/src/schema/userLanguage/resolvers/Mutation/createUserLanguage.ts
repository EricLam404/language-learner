import type { MutationResolvers } from "./../../../types.generated";
export const createUserLanguage: NonNullable<
    MutationResolvers["createUserLanguage"]
> = async (_parent, _arg, _ctx) => {
    /* Implement Mutation.createUserLanguage resolver logic here */
    const { error } = await _ctx.supabase.from("UserLanguage").insert({
        userId: _arg.userId,
        languageName: _arg.languageName,
        updatedAt: new Date().toISOString,
    });
    if (error) {
        throw error;
    }
    if (error) {
        return {
            success: false,
            message: error.message,
        };
    } else {
        return {
            success: true,
            message: "User Language created successfully",
        };
    }
};
