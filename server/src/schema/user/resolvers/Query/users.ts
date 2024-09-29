import { GraphQLError } from "graphql";
import type { QueryResolvers } from "./../../../types.generated";
export const users: NonNullable<QueryResolvers["users"]> = async (
    _parent,
    _arg,
    _ctx
) => {
    /* Implement Query.users resolver logic here */
    try {
        return await _ctx.dataSources.prisma.user.findMany();
    } catch (error) {
        console.log(error);

        if (error instanceof GraphQLError) {
            throw error;
        }
        throw new GraphQLError("Failed to create vocabulary", {
            extensions: {
                code: "VOCABULARY_CREATION_FAILED",
            },
        });
    }
};
