import { GraphQLError } from "graphql";
import type { QueryResolvers } from "./../../../types.generated";
export const chatSessions: NonNullable<QueryResolvers['chatSessions']> = async (
    _parent,
    _arg,
    _ctx
) => {
    /* Implement Query.chatSessions resolver logic here */
    try {
        const chatSession = await _ctx.dataSources.prisma.chatSession.findMany({
            where: {
                userId: _ctx.user.id,
            },
        });

        if (!chatSession) {
            throw new GraphQLError(
                `Chat sessions not found`,
                {
                    extensions: { code: "BAD_USER_INPUT" },
                }
            );
        }

        return chatSession;
    } catch (error) {
        console.log(error);

        if (error instanceof GraphQLError) {
            throw error;
        }
        throw new GraphQLError("Failed to query chat sesssions", {
            extensions: {
                code: "CHAT_SESSIONs_QUERY_FAILED",
            },
        });
    }
};
