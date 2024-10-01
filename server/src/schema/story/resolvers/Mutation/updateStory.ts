import { GraphQLError } from "graphql";
import { validateInput } from "../../../../utils/validateInput";
import type { MutationResolvers } from "./../../../types.generated";
export const updateStory: NonNullable<
    MutationResolvers["updateStory"]
> = async (_parent, _arg, _ctx) => {
    /* Implement Mutation.updateStory resolver logic here */
    if(!_arg.input) {
        throw new GraphQLError("Input is required to update story", {
            extensions: {
                code: "STORY_UPDATE_FAILED",
            },
        });
    }
    validateInput(_arg.input);
    try {
        const result = await _ctx.dataSources.prisma.story.update({
            where: {
                id: Number(_arg.id),
            },
            data: {
                ...(_arg.input.title && { title: _arg.input.title }),
                ...(_arg.input.content && { body: _arg.input.content }),
                ...(_arg.input.languageName && { languageName: _arg.input.languageName }),
                ...(_arg.input.description && { description: _arg.input.description }),
                ...(_arg.input.difficulty && { difficulty: _arg.input.difficulty }),
                ...(_arg.input.tags && {
                    tags: {
                        connectOrCreate: _arg.input.tags.map((tag) => ({
                            where: { name: tag },
                            create: { name: tag },
                        })),
                    },
                }),
            },
        });

        return result;
    } catch (error) {
        console.log(error);

        throw new GraphQLError("Failed to update language", {
            extensions: {
                code: "LANGUAGE_UPDATE_FAILED",
            },
        });
    }
};
