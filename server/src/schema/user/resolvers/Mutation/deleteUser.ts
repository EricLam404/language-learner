import { GraphQLError } from "graphql";
import type { MutationResolvers } from "./../../../types.generated";
export const deleteUser: NonNullable<MutationResolvers['deleteUser']> = async (
    _parent,
    _arg,
    _ctx
) => {
    /* Implement Mutation.deleteUser resolver logic here */
    if(_arg.id !== _ctx.user.id) {
        throw new GraphQLError("You are not authorized to delete this user", {
            extensions: {
                code: "USER_DELETION_FAILED",
            },
        });
    }
    
    try {
        const result = await _ctx.dataSources.prisma.user.delete({
            where: {
                userId: _arg.id,
            },
        });

        return result;
    } catch (error) {
        console.log(error);

        if (error instanceof GraphQLError) {
            throw error;
        }
        throw new GraphQLError("Failed to delete language", {
            extensions: {
                code: "LANGUAGE_DELETION_FAILED",
            },
        });
    }
};
