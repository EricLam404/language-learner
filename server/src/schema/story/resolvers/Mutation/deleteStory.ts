import { GraphQLError } from "graphql";
import type { MutationResolvers } from "./../../../types.generated";
export const deleteStory: NonNullable<
    MutationResolvers["deleteStory"]
> = async (_parent, _arg, _ctx) => {
    /* Implement Mutation.deleteStory resolver logic here */
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
        const result = await _ctx.dataSources.prisma.story.delete({
            where: {
                id: Number(_arg.id),
            },
        });

        return result ? true : false;
    } catch (error) {
        console.log(error);

        if (error instanceof GraphQLError) {
            throw error;
        }

        throw new GraphQLError("Failed to delete story", {
            extensions: {
                code: "STORY_DELETION_FAILED",
            },
        });
    }
};
