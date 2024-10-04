import { GraphQLError } from "graphql";
import { validateInput } from "../../../../utils/validateInput";
import type { MutationResolvers } from "./../../../types.generated";
export const updateStory: NonNullable<
    MutationResolvers["updateStory"]
> = async (_parent, _arg, _ctx) => {
    /* Implement Mutation.updateStory resolver logic here */
    if (!_arg.input) {
        throw new GraphQLError("Input is required to update story", {
            extensions: {
                code: "STORY_UPDATE_FAILED",
            },
        });
    }
    validateInput(_arg.input);
    try {
        let createTags;
        if (_arg.input.tags && _arg.input.tags.length > 1) {
            createTags = _arg.input.tags.map((tag) => ({
                create: { name: tag },
                where: { name: tag },
            }));
        } else if (_arg.input.tags && _arg.input.tags.length === 1) {
            createTags = {
                create: { name: _arg.input.tags[0] },
                where: { name: _arg.input.tags[0] },
            };
        }
        const story = await _ctx.dataSources.prisma.story.findUnique({
            where: {
                id: Number(_arg.id),
            },
        });

        if (!story) {
            throw new GraphQLError("Story not found", {
                extensions: {
                    code: "NOT_FOUND",
                },
            });
        }

        if (story.userId !== _ctx.user.id) {
            throw new GraphQLError(
                "You are not authorized to access this story",
                {
                    extensions: {
                        code: "FORBIDDEN",
                    },
                }
            );
        }
        const result = await _ctx.dataSources.prisma.story.update({
            where: {
                id: Number(_arg.id),
            },
            data: {
                ...(_arg.input.title && { title: _arg.input.title }),
                ...(_arg.input.content && { content: _arg.input.content }),
                ...(_arg.input.languageName && {
                    languageName: _arg.input.languageName,
                }),
                ...(_arg.input.description && {
                    description: _arg.input.description,
                }),
                ...(_arg.input.difficulty && {
                    difficulty: _arg.input.difficulty,
                }),
                ...{
                    tags: {
                        connectOrCreate: _arg.input?.tags ? createTags : [],
                    },
                },
                ...(_arg.input.translatedTitle && {
                    translatedTitle: _arg.input.translatedTitle,
                }),
                ...(_arg.input.isPublished && {
                    isPublished: _arg.input.isPublished,
                }),
            },
        });

        return result;
    } catch (error) {
        console.log(error);

        if (error instanceof GraphQLError) {
            throw error;
        }

        throw new GraphQLError("Failed to update story", {
            extensions: {
                code: "STORY_UPDATE_FAILED",
            },
        });
    }
};
