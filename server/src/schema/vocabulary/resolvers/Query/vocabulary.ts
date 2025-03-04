import { GraphQLError } from "graphql";
import type { QueryResolvers } from "./../../../types.generated";
export const vocabulary: NonNullable<QueryResolvers['vocabulary']> = async (
    _parent,
    _arg,
    _ctx
) => {
    /* Implement Query.vocabulary resolver logic here */
    try {
        return await _ctx.dataSources.prisma.vocabulary.findUnique({
            where: { id: Number(_arg.id) },
        });
    } catch (error) {
        console.log(error);

        if (error instanceof GraphQLError) {
            throw error;
        }
        throw new GraphQLError("Failed to create vocabulary", {
            extensions: {
                code: "VOCABULARY_CREATION_FAILED",
            },
        });
    }
};
