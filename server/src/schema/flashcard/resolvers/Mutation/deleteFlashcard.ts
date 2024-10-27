import { GraphQLError } from "graphql";
import type { MutationResolvers } from "./../../../types.generated";
export const deleteFlashcard: NonNullable<MutationResolvers['deleteFlashcard']> = async (_parent, _arg, _ctx) => {
    /* Implement Mutation.deleteFlashcard resolver logic here */
    try {
        const flashcard = await _ctx.dataSources.prisma.flashcard.findUnique({
            where: { id: Number(_arg.id) },
            include: { set: true },
        });

        if (!flashcard) {
            throw new GraphQLError(
                `Flashcard with ID "${_arg.id}" not found`,
                {
                    extensions: { code: "BAD_USER_INPUT" },
                }
            );
        }

        if (flashcard.set.userId !== _ctx.user.id) {
            throw new GraphQLError(
                "You are not authorized to delete this flashcard set",
                {
                    extensions: { code: "UNAUTHORIZED" },
                }
            );
        }

        await _ctx.dataSources.prisma.flashcard.delete({
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
