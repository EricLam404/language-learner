import { GraphQLError } from "graphql";
import type { QueryResolvers } from "./../../../types.generated";
export const vocabularies: NonNullable<QueryResolvers['vocabularies']> = async (
    _parent,
    _arg,
    _ctx
) => {
    try {
        return await _ctx.dataSources.prisma.vocabulary.findMany({
            where: {
                userId: _ctx.user.id,
            },
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
