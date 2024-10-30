import { GraphQLError } from "graphql";
import type { QueryResolvers } from "./../../../types.generated";
export const flashcard: NonNullable<QueryResolvers['flashcard']> = async (
    _parent,
    _arg,
    _ctx
) => {
    /* Implement Query.flashcard resolver logic here */
    try {
        return await _ctx.dataSources.prisma.flashcard.findUnique({
            where: { id: Number(_arg.id) },
            include: {
                faces: true,
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
