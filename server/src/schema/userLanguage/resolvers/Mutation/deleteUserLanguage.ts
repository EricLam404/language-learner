import type { MutationResolvers } from "./../../../types.generated";
export const deleteUserLanguage: NonNullable<
    MutationResolvers["deleteUserLanguage"]
> = async (_parent, _arg, _ctx) => {
    /* Implement Mutation.deleteUserLanguage resolver logic here */
    const { error } = await _ctx.supabase
        .from("UserLanguage")
        .delete()
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
