import { GraphQLError } from "graphql";
import type { MutationResolvers } from "./../../../types.generated";

export const deleteVocabulary: NonNullable<MutationResolvers['deleteVocabulary']> = async (_parent, _arg, _ctx) => {
  try {
    const vocabulary = await _ctx.dataSources.prisma.vocabulary.findUnique({
      where: { id: Number(_arg.id )},
    });

    if (!vocabulary) {
      throw new GraphQLError(`Vocabulary with ID "${_arg.id}" not found`, {
        extensions: { code: "BAD_USER_INPUT" },
      });
    }

    if (vocabulary.userId !== _ctx.user.id) {
      throw new GraphQLError("You are not authorized to delete this vocabulary", {
        extensions: { code: "UNAUTHORIZED" },
      });
    }

    const vocab = await _ctx.dataSources.prisma.vocabulary.delete({
      where: { id: Number(_arg.id) },
    });

    return vocab;
  } catch (error) {
    console.log(error);

    if (error instanceof GraphQLError) {
      throw error;
    }
    throw new GraphQLError("Failed to delete vocabulary", {
      extensions: {
        code: "VOCABULARY_DELETION_FAILED",
      },
    });
  }
};
