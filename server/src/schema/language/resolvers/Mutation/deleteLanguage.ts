import { GraphQLError } from "graphql";
import type { MutationResolvers } from "./../../../types.generated";
export const deleteLanguage: NonNullable<MutationResolvers['deleteLanguage']> = async (_parent, _arg, _ctx) => {
    /* Implement Mutation.deleteLanguage resolver logic here */
    try {
        const result = await _ctx.dataSources.prisma.language.delete({
            where: {
                id: Number(_arg.id),
            },
        });

        return result ? true : false;
    } catch (error) {
        console.log(error);

        if (error instanceof GraphQLError) {
            throw error;
        }
        throw new GraphQLError("Failed to delete language", {
            extensions: {
                code: "LANGUAGE_DELETION_FAILED",
            },
        });
    }
};
