import { GraphQLError } from "graphql";
import type { MutationResolvers } from "./../../../types.generated";
export const createLanguage: NonNullable<
    MutationResolvers["createLanguage"]
> = async (_parent, _arg, _ctx) => {
    /* Implement Mutation.createLanguage resolver logic here */
    try {
        const existingLanguage =
            await _ctx.dataSources.prisma.language.findUnique({
                where: { name: _arg.name },
            });

        if (existingLanguage) {
            throw new GraphQLError("Language already exists", {
                extensions: {
                    code: "BAD_USER_INPUT",
                },
            });
        }

        const result = await _ctx.dataSources.prisma.language.create({
            data: {
                name: _arg.name,
                code: _arg.code,
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
