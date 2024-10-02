import { GraphQLError } from "graphql";
import type { MutationResolvers } from "./../../../types.generated";
export const updateTag: NonNullable<MutationResolvers['updateTag']> = async (
    _parent,
    _arg,
    _ctx
) => {
    /* Implement Mutation.updateTag resolver logic here */
    try {
        const result = await _ctx.dataSources.prisma.tag.update({
            where: {
                id: Number(_arg.id),
            },
            data: {
                name: _arg.name,
            },
        });

        return result;
    } catch (error) {
        console.log(error);

        throw new GraphQLError("Failed to update tag", {
            extensions: {
                code: "TAG_UPDATE_FAILED",
            },
        });
    }
};
