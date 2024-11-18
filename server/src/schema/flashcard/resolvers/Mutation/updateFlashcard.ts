import { GraphQLError } from "graphql";
import type { MutationResolvers } from "./../../../types.generated";
export const updateFlashcard: NonNullable<MutationResolvers['updateFlashcard']> = async (_parent, _arg, _ctx) => {
    /* Implement Mutation.updateFlashcard resolver logic here */
    try {
        const frontFaces = _arg.faces.filter((face) => face.isFront);
        if (frontFaces.length !== 1) {
            throw new GraphQLError("There must be exactly one front face", {
                extensions: {
                    code: "INVALID_FRONT_FACE_COUNT",
                },
            });
        }

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
                            isFront: face.isFront,
                        },
                        create: {
                            content: face.content,
                            type: face.type,
                            order: face.order,
                            isFront: face.isFront,
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
