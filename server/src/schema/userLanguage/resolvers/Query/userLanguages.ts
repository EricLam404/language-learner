import { GraphQLError } from "graphql";
import type { QueryResolvers } from "./../../../types.generated";
export const userLanguages: NonNullable<QueryResolvers['userLanguages']> = async (_parent, _arg, _ctx) => {
    /* Implement Query.userLanguages resolver logic here */
    try {
        return await _ctx.dataSources.prisma.userLanguage.findMany({
            where: {
                userId: _arg.userId,
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
