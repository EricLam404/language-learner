import type { MutationResolvers } from "./../../../types.generated";
export const updateUserLanguage: NonNullable<
    MutationResolvers["updateUserLanguage"]
> = async (_parent, _arg, _ctx) => {
    /* Implement Mutation.updateUserLanguage resolver logic here */
    const { error } = await _ctx.supabase
        .from("UserLanguage")
        .update({
            languageName: _arg.languageName,
        })
        .eq("id", _arg.userId)
        .eq("languageName", _arg.languageName);
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
