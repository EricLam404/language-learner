import { GraphQLError } from "graphql";
import type { MutationResolvers } from "./../../../types.generated";
import { language } from "../../../language/resolvers/Query/language";
export const createUserLanguage: NonNullable<MutationResolvers['createUserLanguage']> = async (_parent, _arg, _ctx) => {
    /* Implement Mutation.createUserLanguage resolver logic here */
    try {
        const existingUserLanguage =
            await _ctx.dataSources.prisma.userLanguage.findUnique({
                where: {
                    userId_languageName: {
                        userId: _ctx.user.id,
                        languageName: _arg.languageName,
                    },
                },
            });

        if (existingUserLanguage) {
            throw new GraphQLError("Language already added", {
                extensions: {
                    code: "BAD_USER_INPUT",
                },
            });
        }

        const result = await _ctx.dataSources.prisma.userLanguage.create({
            data: {
                user: { connect: { userId: _ctx.user.id} },
                language: { connect: { name: _arg.languageName } },
            },
        });

        const { error: updateMetaDataError } =
            await _ctx.dataSources.supabase.auth.admin.updateUserById(
                _ctx.user.id,
                {
                    app_metadata: {
                        profile: {
                            ..._ctx.user.app_metadata.profile,
                            languages: _ctx.user.app_metadata.profile.languages.concat([_arg.languageName]),
                        },
                    },
                }
            );

        if (updateMetaDataError) {
            console.log(updateMetaDataError);
            throw new GraphQLError("An error occurred while updating user.", {
                extensions: {
                    code: "INTERNAL_SERVER_ERROR",
                },
            });
        }

        return result;
    } catch (error) {
        console.log(error);

        if (error instanceof GraphQLError) {
            throw error;
        }

        throw new GraphQLError("An error occurred while creating user.", {
            extensions: {
                code: "INTERNAL_SERVER_ERROR",
            },
        });
    }
};
