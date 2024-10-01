import { GraphQLError } from "graphql";
import type { QueryResolvers } from "./../../../types.generated";
export const stories: NonNullable<QueryResolvers['stories']> = async (
    _parent,
    _arg,
    _ctx
) => {
    /* Implement Query.stories resolver logic here */
    try {
        const data = await _ctx.dataSources.prisma.story.findMany({
            where: { userId: _ctx.user.id }
        });
        return data;

    } catch (error) {
        console.log(error);

        if (error instanceof GraphQLError) {
            throw error;
        }
        throw new GraphQLError("Failed to query stories", {
            extensions: {
                code: "INTERNAL_SERVER_ERROR",
            },
        });
    }
};
