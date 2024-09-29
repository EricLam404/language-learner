import { GraphQLError } from "graphql";
import type { MutationResolvers } from "./../../../types.generated";
export const deleteUserLanguage: NonNullable<MutationResolvers['deleteUserLanguage']> = async (_parent, _arg, _ctx) => {
    /* Implement Mutation.deleteUserLanguage resolver logic here */
    try {
        const deleteUser = await _ctx.dataSources.prisma.userLanguage.delete({
            where: {
                userId_languageName: {
                    userId: _ctx.user.id,
                    languageName: _arg.languageName,
                },
            },
        });
        return deleteUser;
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
