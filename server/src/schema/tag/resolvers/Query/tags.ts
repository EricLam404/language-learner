import { GraphQLError } from "graphql";
import type { QueryResolvers } from "./../../../types.generated";
export const tags: NonNullable<QueryResolvers['tags']> = async (
    _parent,
    _arg,
    _ctx
) => {
    /* Implement Query.tags resolver logic here */
    try {
        const data = await _ctx.dataSources.prisma.tag.findMany();
        return data;
    } catch (error) {
        console.log(error);

        if (error instanceof GraphQLError) {
            throw error;
        }
        throw new GraphQLError("Failed to query tag", {
            extensions: {
                code: "INTERNAL_SERVER_ERROR",
            },
        });
    }
};
