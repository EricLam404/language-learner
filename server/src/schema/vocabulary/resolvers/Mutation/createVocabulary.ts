import { GraphQLError } from "graphql";
import type { MutationResolvers } from "./../../../types.generated";
export const createVocabulary: NonNullable<MutationResolvers['createVocabulary']> = async (_parent, _arg, _ctx) => {
    /* Implement Mutation.createVocabulary resolver logic here */
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
            word: _arg.word,
            meaning: _arg.meaning,
            languageName: _arg.languageName,
            userId: _ctx.user.id,
        };
        return await _ctx.dataSources.prisma.vocabulary.create({
            data: {
                ...input,
                ...(!!_arg.example && { example: _arg.example }),
            },
        });
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
