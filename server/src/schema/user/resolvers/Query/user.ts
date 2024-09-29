import { GraphQLError } from "graphql";
import { MyContext } from "../../../../utils/types/context";
import type { QueryResolvers } from "./../../../types.generated";
export const user: NonNullable<QueryResolvers['user']> = async (
    _parent,
    _arg,
    _ctx: MyContext
) => {
    /* Implement Query.user resolver logic here */
    try {
        return await _ctx.dataSources.prisma.user.findUnique({
            where: { userId: _arg.userId }

        });
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
