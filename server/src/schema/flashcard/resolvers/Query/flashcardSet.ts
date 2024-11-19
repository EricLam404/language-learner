import { GraphQLError } from "graphql";
import type { QueryResolvers } from "./../../../types.generated";
export const flashcardSet: NonNullable<QueryResolvers['flashcardSet']> = async (
    _parent,
    _arg,
    _ctx
) => {
    /* Implement Query.flashcardSet resolver logic here */
    try {
        const flashcardSet = await _ctx.dataSources.prisma.flashcardSet.findUnique({
            where: {
                id: Number(_arg.id),
            },
            include: {
                cards: {
                    include: {
                        faces: true,
                    },
                },
                _count: {
                    select: { cards: true },
                },
            },
        });

        if (!flashcardSet) {
            throw new GraphQLError(
                `Flashcard Set with ID "${_arg.id}" not found`,
                {
                    extensions: { code: "BAD_USER_INPUT" },
                }
            );
        }

        return {
            ...flashcardSet,
            totalCards: flashcardSet._count.cards,
        }
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
