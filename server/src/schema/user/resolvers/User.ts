import type { UserResolvers } from "./../../types.generated";
export const User: UserResolvers = {
    /* Implement User resolver logic here */
    languages: async (_parent, _arg, _ctx, _info) => {
        return await _ctx.dataSources.prisma.language.findMany({
            where: {
                users: {
                    some: {
                        userId: String(_parent.userId),
                    },
                },
            },
        });
    },

    stories: async (_parent, _arg, _ctx, _info) => {
        return await _ctx.dataSources.prisma.story.findMany({
            where: {
                userId: String(_parent.userId),
            },
        });
    },
    
    flashcardSets: async (_parent, _arg, _ctx, _info) => {
        const flashcardSets = await _ctx.dataSources.prisma.flashcardSet.findMany({
            where: {
                userId: String(_parent.userId),
            },
            include: {
                _count: {
                    select: { cards: true },
                },
            },
        });

        return flashcardSets.map(set => ({
            ...set,
            totalCards: set._count.cards,
        }));
    },

    chatSessions: async (_parent, _arg, _ctx, _info) => {
        return await _ctx.dataSources.prisma.chatSession.findMany({
            where: {
                userId: String(_parent.userId),
            },
            orderBy: {
                createdAt: 'desc',
            },
        });
    },
};
