import { GraphQLError } from "graphql";
import type { MutationResolvers } from "./../../../types.generated";
export const createTag: NonNullable<MutationResolvers['createTag']> = async (
    _parent,
    _arg,
    _ctx
) => {
    /* Implement Mutation.createTag resolver logic here */
    try {
        const result = await _ctx.dataSources.prisma.tag.create({
            data: {
                name: _arg.name,
            },
        });
        return result;
    } catch (error) {
        console.log(error);

        if (error instanceof GraphQLError) {
            throw error;
        }
        throw new GraphQLError("Failed to create tag", {
            extensions: {
                code: "TAG_CREATION_FAILED",
            },
        });
    }
};
