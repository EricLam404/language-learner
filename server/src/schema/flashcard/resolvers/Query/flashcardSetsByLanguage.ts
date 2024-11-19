import { GraphQLError } from "graphql";
import type { QueryResolvers } from "./../../../types.generated";
export const flashcardSetsByLanguage: NonNullable<QueryResolvers['flashcardSetsByLanguage']> = async (_parent, _arg, _ctx) => {
    /* Implement Query.flashcardSetsByLanguage resolver logic here */
    try {
        const flashcardSets =
            await _ctx.dataSources.prisma.flashcardSet.findMany({
                where: { languageName: _arg.languageName },
                include: {
                    _count: {
                        select: { cards: true },
                    },
                },
            });

        return flashcardSets.map((set) => ({
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
