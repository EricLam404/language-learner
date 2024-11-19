import { GraphQLError } from "graphql";
import type { QueryResolvers } from "./../../../types.generated";
export const flashcardSets: NonNullable<QueryResolvers['flashcardSets']> = async (_parent, _arg, _ctx) => {
    /* Implement Query.flashcardSets resolver logic here */
    try {
        const flashcardSets = await _ctx.dataSources.prisma.flashcardSet.findMany({
            where: {
                userId: String(_ctx.user.id),
            },
            include: {
                _count: {
                    select: { cards: true },
                },
            },
        });

        return flashcardSets.map(set => ({
            ...set,
            totalCards: set._count.cards,
        }));
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
