import { GraphQLError } from "graphql";
import type { QueryResolvers } from "./../../../types.generated";
export const story: NonNullable<QueryResolvers['story']> = async (
    _parent,
    _arg,
    _ctx
) => {
    /* Implement Query.story resolver logic here */
    try {
        const story = await _ctx.dataSources.prisma.story.findUnique({
            where: {
                id: Number(_arg.id),
            },
        });

        if (!story) {
            throw new GraphQLError("Story not found", {
                extensions: {
                    code: "NOT_FOUND",
                },
            });
        }

        if (story.userId !== _ctx.user.id) {
            throw new GraphQLError(
                "You are not authorized to access this story",
                {
                    extensions: {
                        code: "FORBIDDEN",
                    },
                }
            );
        }

        return story;
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
