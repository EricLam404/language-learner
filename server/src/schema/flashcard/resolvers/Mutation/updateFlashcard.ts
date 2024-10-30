import { GraphQLError } from "graphql";
import type { MutationResolvers } from "./../../../types.generated";
export const updateFlashcard: NonNullable<MutationResolvers['updateFlashcard']> = async (_parent, _arg, _ctx) => {
    /* Implement Mutation.updateFlashcard resolver logic here */
    try {
        const flashcard = await _ctx.dataSources.prisma.flashcard.findUnique({
            where: { id: Number(_arg.id) },
        });

        if (!flashcard) {
            throw new GraphQLError(`Flashcard with ID "${_arg.id}" not found`, {
                extensions: { code: "BAD_USER_INPUT" },
            });
        }

        return await _ctx.dataSources.prisma.flashcard.update({
            where: { id: Number(_arg.id) },
            data: {
                faces: {
                    upsert: _arg.faces.map((face) => ({
                        where: {
                            flashcardId_type: {
                                flashcardId: Number(_arg.id),
                                type: face.type,
                            },
                        },
                        update: {
                            content: face.content,
                        },
                        create: {
                            content: face.content,
                            type: face.type,
                            order: face.order,
                        },
                    })),
                },
            },
            include: { faces: true },
        });
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
