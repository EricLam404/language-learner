import { GraphQLError } from "graphql";
import type { MutationResolvers } from "./../../../types.generated";
export const createStory: NonNullable<
    MutationResolvers["createStory"]
> = async (_parent, _arg, _ctx) => {
    /* Implement Mutation.createStory resolver logic here */
    try {
        const result = await _ctx.dataSources.prisma.story.create({
            data: {
                userId: _ctx.user.id,
                title: _arg.input.title,
                content: _arg.input.content,
                languageName: _arg.input.languageName,
                description: _arg.input.description,
                tags: {
                    connectOrCreate: _arg.input.tags?.map((tag) => ({
                        where: { name: tag },
                        create: { name: tag },
                    })),
                },
                difficulty: _arg.input.difficulty,
                readCount: 0,
            },
        });
        return result;
    } catch (error) {
        console.log(error);

        if (error instanceof GraphQLError) {
            throw error;
        }
        throw new GraphQLError("Failed to create language", {
            extensions: {
                code: "LANGUAGE_CREATION_FAILED",
            },
        });
    }
};
