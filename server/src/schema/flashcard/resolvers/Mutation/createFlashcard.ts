import { GraphQLError } from "graphql";
import type { MutationResolvers } from "./../../../types.generated";
import { FaceType } from "@prisma/client";
export const createFlashcard: NonNullable<MutationResolvers['createFlashcard']> = async (_parent, _arg, _ctx) => {
    /* Implement Mutation.createFlashcard resolver logic here */
    try {
        return await _ctx.dataSources.prisma.flashcard.create({
            data: {
                setId: Number(_arg.setId),
                nextReviewAt: new Date(),
                faces: {
                    create: _arg.faces.map((face) => ({
                        ...face,
                        type: face.type.toUpperCase() as FaceType,
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
