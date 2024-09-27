import { GraphQLError } from "graphql";
import type { MutationResolvers } from "./../../../types.generated";
export const updateUser: NonNullable<MutationResolvers['updateUser']> = async (
    _parent,
    _arg,
    _ctx
) => {
    /* Implement Mutation.updateUser resolver logic here */
    const { data, error } = await _ctx.dataSources.supabase
        .from("User")
        .update({
            updatedAt: new Date().toISOString(),
        })
        .select().limit(1).single();

    if (error) {
        throw new GraphQLError(
            "An error occurred while updating user.",
            {
                extensions: {
                    code: "INTERNAL_SERVER_ERROR",
                },
            }
        );
    }
    
    return data
};
