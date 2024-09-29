import { GraphQLError } from "graphql";
import type { QueryResolvers } from "./../../../types.generated";
export const userLanguage: NonNullable<QueryResolvers['userLanguage']> = async (
    _parent,
    _arg,
    _ctx
) => {
    /* Implement Query.userLanguage resolver logic here */
    try {
        return await _ctx.dataSources.prisma.userLanguage.findUnique({
            where: {
                userId_languageName: {
                    userId: _arg.userId,
                    languageName: _arg.languageName,
                },
            },
        });
    } catch (error) {
        throw new GraphQLError("An error occurred while creating user.", {
            extensions: {
                code: "INTERNAL_SERVER_ERROR",
            },
        });
    }
};
