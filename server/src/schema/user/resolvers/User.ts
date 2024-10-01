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
};
