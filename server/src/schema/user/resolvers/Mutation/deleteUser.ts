import { GraphQLError } from "graphql";
import type { MutationResolvers } from "./../../../types.generated";
export const deleteUser: NonNullable<MutationResolvers['deleteUser']> = async (
    _parent,
    _arg,
    _ctx
) => {
    /* Implement Mutation.deleteUser resolver logic here */
    const { data, error } = await _ctx.dataSources.supabase
        .from("User")
        .delete()
        .eq("id", _arg.id).select().limit(1).single();

    if (error) {
        throw new GraphQLError(
            "An error occurred while deleting user.",
            {
                extensions: {
                    code: "INTERNAL_SERVER_ERROR",
                },
            }
        );
    }  

    return data;
};
