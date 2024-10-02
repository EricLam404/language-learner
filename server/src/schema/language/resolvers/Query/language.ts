import { GraphQLError } from "graphql";
import type { QueryResolvers } from "./../../../types.generated";
export const language: NonNullable<QueryResolvers['language']> = async (
    _parent,
    _arg,
    _ctx
) => {
    /* Implement Query.language resolver logic here */
    try {
        const data = await _ctx.dataSources.prisma.language.findUnique({
            where: { id: Number(_arg.id) },
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
