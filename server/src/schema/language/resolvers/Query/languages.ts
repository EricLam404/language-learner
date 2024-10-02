import { GraphQLError } from "graphql";
import type { QueryResolvers } from "./../../../types.generated";
export const languages: NonNullable<QueryResolvers['languages']> = async (
    _parent,
    _arg,
    _ctx
) => {
    /* Implement Query.languages resolver logic here */
    try {
        return await _ctx.dataSources.prisma.language.findMany();
    } catch (error) {
        console.log(error);

        if (error instanceof GraphQLError) {
            throw error;
        }
        throw new GraphQLError("Failed to query story", {
            extensions: {
                code: "INTERNAL_SERVER_ERROR",
            },
        });
    }
};
