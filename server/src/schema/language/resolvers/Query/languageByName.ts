import { GraphQLError } from "graphql";
import type { QueryResolvers } from "./../../../types.generated";
export const languageByName: NonNullable<QueryResolvers['languageByName']> = async (_parent, _arg, _ctx) => {
    /* Implement Query.languageByName resolver logic here */
    try {
        const data = await _ctx.dataSources.prisma.language.findUnique({
            where: { name: _arg.name },
        });
        return data;

    } catch (error) {
        console.log(error);

        if (error instanceof GraphQLError) {
            throw error;
        }
        throw new GraphQLError("Failed to query language", {
            extensions: {
                code: "INTERNAL_SERVER_ERROR",
            },
        });
    }
};
