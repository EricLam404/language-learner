import { GraphQLError } from "graphql";
import type { MutationResolvers } from "./../../../types.generated";
import { freePlayBot, freePlayUser } from "../../responses/response";
export const createChatSession: NonNullable<MutationResolvers['createChatSession']> = async (_parent, _arg, _ctx) => {
    /* Implement Mutation.createChatSession resolver logic here */
    try {
        const chatSession = await _ctx.dataSources.prisma.chatSession.create({
            data: {
                userId: _ctx.user.id,
                languageName: _arg.languageName,
                name: _arg.name ?? "New Chat",
                difficulty: _arg.difficulty,
                messages: {
                    create: [
                        {
                            role: "user",
                            content: freePlayUser,
                        },
                        {
                            role: "model",
                            content: freePlayBot,
                        },
                    ],
                },
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
