import { GraphQLError } from "graphql";
import type { QueryResolvers } from "./../../../types.generated";
export const story: NonNullable<QueryResolvers['story']> = async (
    _parent,
    _arg,
    _ctx
) => {
    /* Implement Query.story resolver logic here */
    try {
        return await _ctx.dataSources.prisma.story.findUnique({
            where: {
                userId: _ctx.user.id,
                id: Number(_arg.id),
            },
        });
    } catch (error) {
        console.log(error);

        if (error instanceof GraphQLError) {
            throw error;
        }
        throw new GraphQLError("Failed to query story", {
            extensions: {
                code: "INTERNAL_SERVER_ERROR",
            },
        });
    }
};
