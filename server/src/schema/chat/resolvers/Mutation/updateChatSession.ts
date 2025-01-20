import { GraphQLError } from "graphql";
import type { MutationResolvers } from "./../../../types.generated";
export const updateChatSession: NonNullable<MutationResolvers['updateChatSession']> = async (_parent, _arg, _ctx) => {
    /* Implement Mutation.updateChatSession resolver logic here */
    try {
        const chatSession = await _ctx.dataSources.prisma.chatSession.update({
            where: { id: _arg.id },
            data: {
                ...(!!_arg.name && { name: _arg.name }),
                ...(!!_arg.difficulty && { difficulty: _arg.difficulty }),
                ...(!!_arg.flashcardSetId && {
                    flashcardSetId: Number(_arg.flashcardSetId),
                }),
            },
        });

        return chatSession;
    } catch (error) {
        console.log(error);

        if (error instanceof GraphQLError) {
            throw error;
        }
        throw new GraphQLError("Failed to create chat session", {
            extensions: {
                code: "CHAT_SESSION_CREATION_FAILED",
            },
        });
    }
};
