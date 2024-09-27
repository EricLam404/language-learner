import { GraphQLError } from "graphql";
import type { MutationResolvers } from "./../../../types.generated";

export const updateVocabulary: NonNullable<MutationResolvers['updateVocabulary']> = async (_parent, _arg, _ctx) => {
  try {
    const vocabulary = await _ctx.dataSources.prisma.vocabulary.findUnique({
      where: { id: Number(_arg.id) },
    });

    if (!vocabulary) {
      throw new GraphQLError(`Vocabulary with ID "${_arg.id}" not found`, {
        extensions: { code: "BAD_USER_INPUT" },
      });
    }

    if (vocabulary.userId !== _ctx.user.id) {
      throw new GraphQLError("You are not authorized to update this vocabulary", {
        extensions: { code: "UNAUTHORIZED" },
      });
    }

    // Update the vocabulary entry with new data
    return await _ctx.dataSources.prisma.vocabulary.update({
      where: { id: Number(_arg.id) },
      data: {
        ...(!!_arg.word && { word: _arg.word }),
        ...(!!_arg.meaning && { meaning: _arg.meaning }),
        ...(!!_arg.example && { example: _arg.example }),
        ...(!!_arg.languageName && { languageName: _arg.languageName }),

      },
    });
  } catch (error) {
    console.log(error);

    if (error instanceof GraphQLError) {
      throw error;
    }
    throw new GraphQLError("Failed to update vocabulary", {
      extensions: {
        code: "VOCABULARY_UPDATE_FAILED",
      },
    });
  }
};
