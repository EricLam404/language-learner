import { GraphQLError } from "graphql";
import type { MutationResolvers } from "./../../../types.generated";
export const deleteStory: NonNullable<MutationResolvers['deleteStory']> = async (_parent, _arg, _ctx) => {
    /* Implement Mutation.deleteStory resolver logic here */
    try {
        const result = await _ctx.dataSources.prisma.story.delete({
            where: {
                id: Number(_arg.id),
            },
        });

        return result ? true : false;
    } catch (error) {
        console.log(error);

        throw new GraphQLError("Failed to delete story", {
            extensions: {
                code: "STORY_DELETION_FAILED",
            },
        });
    }
};
