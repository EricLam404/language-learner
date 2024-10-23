import { GraphQLError } from "graphql";
import type { QueryResolvers } from "./../../../types.generated";
export const flashcardSets: NonNullable<QueryResolvers['flashcardSets']> = async (_parent, _arg, _ctx) => {
    /* Implement Query.flashcardSets resolver logic here */
    try {
        return await _ctx.dataSources.prisma.flashcardSet.findMany({
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
