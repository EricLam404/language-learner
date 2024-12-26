import { GraphQLError } from "graphql";
import type { MutationResolvers } from "./../../../types.generated";
export const deleteChatSession: NonNullable<MutationResolvers['deleteChatSession']> = async (_parent, _arg, _ctx) => {
    /* Implement Mutation.deleteChatSession resolver logic here */
    try {
        const chatSession =
            await _ctx.dataSources.prisma.chatSession.findUnique({
                where: { id: _arg.id },
            });

        if (!chatSession) {
            throw new GraphQLError(
                `Chat session with ID "${_arg.id}" not found`,
                {
                    extensions: { code: "BAD_USER_INPUT" },
                }
            );
        }

        if (chatSession.userId !== _ctx.user.id) {
            throw new GraphQLError(
                "You are not authorized to delete this chat session",
                {
                    extensions: { code: "UNAUTHORIZED" },
                }
            );
        }

        await _ctx.dataSources.prisma.chatSession.delete({
            where: { id: _arg.id },
        });

        return true;
    } catch (error) {
        console.log(error);

        if (error instanceof GraphQLError) {
            throw error;
        }
        throw new GraphQLError("Failed to delete chat session", {
            extensions: {
                code: "CHAT_SESSION_DELETION_FAILED",
            },
        });
    }
};
