import type { StoryResolvers } from "./../../types.generated";
export const Story: StoryResolvers = {
    /* Implement Story resolver logic here */
    tags: async (_parent, _arg, _ctx, _info) => {
        return await _ctx.dataSources.prisma.tag.findMany({
            where: {
                stories: {
                    some: {
                        id: Number(_parent.id),
                    },
                },
            },
        });
    },
};
