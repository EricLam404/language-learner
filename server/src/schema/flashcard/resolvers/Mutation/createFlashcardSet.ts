import { GraphQLError } from "graphql";
import type { MutationResolvers } from "./../../../types.generated";
export const createFlashcardSet: NonNullable<MutationResolvers['createFlashcardSet']> = async (_parent, _arg, _ctx) => {
    /* Implement Mutation.createFlashcardSet resolver logic here */
    try {
        const language = await _ctx.dataSources.prisma.language.findUnique({
            where: { name: _arg.languageName },
        });

        if (!language) {
            throw new GraphQLError(
                `Language "${_arg.languageName}" not found`,
                {
                    extensions: { code: "BAD_USER_INPUT" },
                }
            );
        }
        const input = {
            name: _arg.name,
            languageName: _arg.languageName,
            userId: _ctx.user.id,
        };
        const createdFlashcardSet = await _ctx.dataSources.prisma.flashcardSet.create({
            data: {
                ...input,
                ...(!!_arg.description && { description: _arg.description }),
            },
        });

        return {
            ...createdFlashcardSet,
            totalCards: 0,
        }
    } catch (error) {
        console.log(error);

        if (error instanceof GraphQLError) {
            throw error;
        }
        throw new GraphQLError("Failed to create flashcard set", {
            extensions: {
                code: "FLASHCARD_SET_CREATION_FAILED",
            },
        });
    }
};
