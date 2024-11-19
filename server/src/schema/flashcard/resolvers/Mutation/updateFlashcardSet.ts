import { GraphQLError } from "graphql";
import type { MutationResolvers } from "./../../../types.generated";
export const updateFlashcardSet: NonNullable<MutationResolvers['updateFlashcardSet']> = async (_parent, _arg, _ctx) => {
    /* Implement Mutation.updateFlashcardSet resolver logic here */
    try {
        const flashcardSet =
            await _ctx.dataSources.prisma.flashcardSet.findUnique({
                where: { id: Number(_arg.id) },
            });

        if (!flashcardSet) {
            throw new GraphQLError(
                `Flashcard Set with ID "${_arg.id}" not found`,
                {
                    extensions: { code: "BAD_USER_INPUT" },
                }
            );
        }

        if (flashcardSet.userId !== _ctx.user.id) {
            throw new GraphQLError(
                "You are not authorized to update this Flashcard Set",
                {
                    extensions: { code: "UNAUTHORIZED" },
                }
            );
        }

        const updatedFlashcardSet =
            await _ctx.dataSources.prisma.flashcardSet.update({
                where: { id: Number(_arg.id) },
                data: {
                    ...(!!_arg.name && { name: _arg.name }),
                    ...(!!_arg.description && {
                        description: _arg.description,
                    }),
                    ...(!!_arg.languageName && {
                        languageName: _arg.languageName,
                    }),
                },
                include: {
                    _count: {
                        select: { cards: true },
                    },
                },
            });

        return {
            ...updatedFlashcardSet,
            totalCards: updatedFlashcardSet._count.cards,
        };
    } catch (error) {
        console.log(error);

        if (error instanceof GraphQLError) {
            throw error;
        }
        throw new GraphQLError("Failed to update flashcard set", {
            extensions: {
                code: "FLASHCARD_SET_UPDATE_FAILED",
            },
        });
    }
};
