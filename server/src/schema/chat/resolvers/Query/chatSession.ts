import { GraphQLError } from "graphql";
import type { QueryResolvers } from "./../../../types.generated";
export const chatSession: NonNullable<QueryResolvers['chatSession']> = async (
    _parent,
    _arg,
    _ctx
) => {
    /* Implement Query.chatSession resolver logic here */
    try {
        const chatSession =
            await _ctx.dataSources.prisma.chatSession.findUnique({
                where: {
                    id: _arg.id,
                },
                include: {
                    messages: true,
                },
            });

        if (!chatSession) {
            throw new GraphQLError(
                `Chat session with ID "${_arg.id}" not found`,
                {
                    extensions: { code: "BAD_USER_INPUT" },
                }
            );
        }

        console.log(chatSession);

        return chatSession;
    } catch (error) {
        console.log(error);

        if (error instanceof GraphQLError) {
            throw error;
        }
        throw new GraphQLError("Failed to query chat sesssion", {
            extensions: {
                code: "CHAT_SESSION_QUERY_FAILED",
            },
        });
    }
};
