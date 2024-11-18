import { GraphQLError } from "graphql";
import type { MutationResolvers } from "./../../../types.generated";
import { FaceType } from "@prisma/client";
export const createFlashcard: NonNullable<MutationResolvers['createFlashcard']> = async (_parent, _arg, _ctx) => {
    /* Implement Mutation.createFlashcard resolver logic here */
    try {
        const frontFaces = _arg.faces.filter(face => face.isFront);
        if (frontFaces.length !== 1) {
            throw new GraphQLError("There must be exactly one front face", {
                extensions: {
                    code: "INVALID_FRONT_FACE_COUNT",
                },
            });
        }
        return await _ctx.dataSources.prisma.flashcard.create({
            data: {
                setId: Number(_arg.setId),
                nextReviewAt: new Date(),
                faces: {
                    create: _arg.faces.map((face) => ({
                        ...face,
                        type: face.type.toUpperCase() as FaceType,
                        isFront: face.isFront
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
        throw new GraphQLError("Failed to create flashcard", {
            extensions: {
                code: "FLASHCARD_CREATION_FAILED",
            },
        });
    }
};
