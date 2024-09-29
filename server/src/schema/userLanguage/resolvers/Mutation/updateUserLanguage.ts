import { GraphQLError } from "graphql";
import type { MutationResolvers } from "./../../../types.generated";
export const updateUserLanguage: NonNullable<
    MutationResolvers["updateUserLanguage"]
> = async (_parent, _arg, _ctx) => {
    /* Implement Mutation.updateUserLanguage resolver logic here */
    try {
        const updateUserLanguage =
            await _ctx.dataSources.prisma.userLanguage.update({
                where: {
                    userId_languageName: {
                        userId: _ctx.user.id,
                        languageName: _arg.languageName,
                    },
                },
                data: {
                    languageName: _arg.newLanguageName,
                },
            });
        return updateUserLanguage;
    } catch (error) {
        throw new GraphQLError(
            "An error occurred while deleting user language.",
            {
                extensions: {
                    code: "INTERNAL_SERVER_ERROR",
                },
            }
        );
    }
};
