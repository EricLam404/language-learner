import { GraphQLError } from "graphql";
import type { MutationResolvers } from "./../../../types.generated";
export const deleteTag: NonNullable<MutationResolvers['deleteTag']> = async (
    _parent,
    _arg,
    _ctx
) => {
    /* Implement Mutation.deleteTag resolver logic here */
    try {
        const result = await _ctx.dataSources.prisma.tag.delete({
            where: {
                id: Number(_arg.id),
            },
        });

        return result ? true : false;
    } catch (error) {
        console.log(error);

        throw new GraphQLError("Failed to delete tag", {
            extensions: {
                code: "TAG_DELETION_FAILED",
            },
        });
    }
};
