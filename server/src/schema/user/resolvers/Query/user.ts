import { GraphQLError } from "graphql";
import type { QueryResolvers } from "./../../../types.generated";
export const user: NonNullable<QueryResolvers['user']> = async (
    _parent,
    _arg,
    _ctx
) => {
    /* Implement Query.user resolver logic here */
    try {
        return await _ctx.dataSources.prisma.user.findUnique({
            where: { userId: _arg.userId }

        });
    } catch (error) {
        console.log(error);

        if (error instanceof GraphQLError) {
            throw error;
        }
        throw new GraphQLError("Failed to query user", {
            extensions: {
                code: "INTERNAL_SERVER_ERROR",
            },
        });
    }
};
