import { GraphQLError } from "graphql";
import type { MutationResolvers } from "./../../../types.generated";
import { calculateSpacedRepetitionSchedule } from "../../../../utils/srs/schedule";
export const updateStudiedFlashcard: NonNullable<MutationResolvers['updateStudiedFlashcard']> = async (_parent, _arg, _ctx) => {
    /* Implement Mutation.updateStudiedFlashcard resolver logic here */
    try {
        const flashcard = await _ctx.dataSources.prisma.flashcard.findUnique({
            where: { id: Number(_arg.id) },
        });

        if (!flashcard) {
            throw new GraphQLError(`Flashcard with ID "${_arg.id}" not found`, {
                extensions: { code: "BAD_USER_INPUT" },
            });
        }

        const prev = {
            n: flashcard.n,
            interval: flashcard.interval,
            easeFactor: flashcard.easeFactor,
        };

        // score from 1 - 5 where 1 is forgot and 5 is remembered
        // lateness is calculated as a float where every 24 hrs is 1.0
        const evaluation = {
            score: _arg.score,
            lateness:
                (new Date().getTime() - flashcard.nextReviewAt.getTime()) /
                (1000 * 60 * 60 * 24),
        };

        const data = calculateSpacedRepetitionSchedule(prev, evaluation);

        return await _ctx.dataSources.prisma.flashcard.update({
            where: { id: Number(_arg.id) },
            data: {
                n: data.n,
                interval: data.interval,
                easeFactor: data.easeFactor,
                nextReviewAt: new Date(
                    // convert days to milliseconds
                    new Date().getTime() + data.interval * 24 * 60 * 60 * 1000
                ),
            },
        });
    } catch (error) {
        console.log(error);

        if (error instanceof GraphQLError) {
            throw error;
        }
        throw new GraphQLError("Failed to update flashcard", {
            extensions: {
                code: "FLASHCARD_UPDATE_FAILED",
            },
        });
    }
};
