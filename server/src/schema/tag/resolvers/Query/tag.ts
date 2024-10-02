import { GraphQLError } from "graphql";
import type { QueryResolvers } from "./../../../types.generated";
export const tag: NonNullable<QueryResolvers['tag']> = async (
    _parent,
    _arg,
    _ctx
) => {
    /* Implement Query.tag resolver logic here */
    try {
        return await _ctx.dataSources.prisma.tag.findUnique({
            where: {
                id: Number(_arg.id),
            },
        });
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
