import { GraphQLError } from "graphql";
import type { MutationResolvers } from "./../../../types.generated";
export const deleteFlashcardSet: NonNullable<MutationResolvers['deleteFlashcardSet']> = async (_parent, _arg, _ctx) => {
    /* Implement Mutation.deleteFlashcardSet resolver logic here */
    try {
        const flashcardSet = await _ctx.dataSources.prisma.flashcardSet.findUnique({
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
                "You are not authorized to delete this flashcard set",
                {
                    extensions: { code: "UNAUTHORIZED" },
                }
            );
        }

        await _ctx.dataSources.prisma.flashcardSet.delete({
            where: { id: Number(_arg.id) },
        });

        return true;
    } catch (error) {
        console.log(error);

        if (error instanceof GraphQLError) {
            throw error;
        }
        throw new GraphQLError("Failed to delete flashcard set", {
            extensions: {
                code: "FLASHCARD_SET_DELETION_FAILED",
            },
        });
    }
};
