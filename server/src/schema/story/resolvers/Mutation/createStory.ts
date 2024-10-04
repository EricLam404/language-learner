import { GraphQLError } from "graphql";
import type { MutationResolvers } from "./../../../types.generated";
export const createStory: NonNullable<MutationResolvers['createStory']> = async (_parent, _arg, _ctx) => {
    /* Implement Mutation.createStory resolver logic here */
    try {
        const {tags, ...input} = _arg.input;
        let createTags;
        if (_arg.input.tags.length > 1) {
            createTags = _arg.input.tags?.map((tag) => ({
                create: { name: tag },
                where: { name: tag },
            }));
        } else {
            createTags = {
                create: { name: _arg.input.tags[0] },
                where: { name: _arg.input.tags[0] },
            };
        }
        
        const result = await _ctx.dataSources.prisma.story.create({
            data: {
                userId: _ctx.user.id,
                ...input,
                ...(_arg.input.tags.length > 0 && {
                    tags: {
                        connectOrCreate: createTags,
                    },
                }),
               
            },
            include: {
                tags: true,
            },
        });
        return result;
    } catch (error) {
        console.log(error);

        if (error instanceof GraphQLError) {
            throw error;
        }
        throw new GraphQLError("Failed to create story", {
            extensions: {
                code: "STORY_CREATION_FAILED",
            },
        });
    }
};
