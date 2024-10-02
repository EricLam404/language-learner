import { GraphQLError } from "graphql";
import type { MutationResolvers } from "./../../../types.generated";
export const updateUser: NonNullable<MutationResolvers['updateUser']> = async (
    _parent,
    _arg,
    _ctx
) => {
    /* Implement Mutation.updateUser resolver logic here */
    if (_arg.id !== _ctx.user.id) {
        throw new GraphQLError("You are not authorized to update this user", {
            extensions: {
                code: "USER_UPDATE_FAILED",
            },
        });
    }

    try {
        const result = await _ctx.dataSources.prisma.user.update({
            where: {
                userId: _arg.id,
            },
            data: {
                username: _arg.username,
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
