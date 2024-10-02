import { GraphQLError } from "graphql";
import type { MutationResolvers } from "./../../../types.generated";
export const updateLanguage: NonNullable<MutationResolvers['updateLanguage']> = async (_parent, _arg, _ctx) => {
    /* Implement Mutation.updateLanguage resolver logic here */
    if (!_arg.name || !_arg.code) {
        throw new GraphQLError("Name or code are required to update language", {
            extensions: {
                code: "LANGUAGE_UPDATE_FAILED",
            },
        });
    }
    try {
        const result = await _ctx.dataSources.prisma.language.update({
            where: {
                id: Number(_arg.id),
            },
            data: {
                ...(_arg.name && { name: _arg.name }),
                ...(_arg.code && { code: _arg.code }),
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
