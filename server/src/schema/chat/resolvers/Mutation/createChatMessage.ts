import { GraphQLError } from "graphql";
import type { MutationResolvers } from "./../../../types.generated";
export const createChatMessage: NonNullable<
    MutationResolvers["createChatMessage"]
> = async (_parent, _arg, _ctx) => {
    /* Implement Mutation.createChatMessage resolver logic here */
    try {
        const messages =
            await _ctx.dataSources.prisma.chatMessage.createManyAndReturn({
                data: [
                    {
                        content: _arg.content,
                        role: "user",
                        sessionId: _arg.sessionId,
                    },
                    {
                        content: "bot reply",
                        role: "bot",
                        sessionId: _arg.sessionId,
                    },
                ],
            });

        return messages[0];
    } catch (error) {
        console.log(error);

        if (error instanceof GraphQLError) {
            throw error;
        }
        throw new GraphQLError("Failed to create flashcard", {
            extensions: {
                code: "FLASHCARD_CREATION_FAILED",
            },
        });
    }
};
