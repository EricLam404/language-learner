import { GraphQLError } from "graphql";
import type { MutationResolvers } from "./../../../types.generated";

export const createUser: NonNullable<MutationResolvers['createUser']> = async (
    _parent,
    _arg,
    _ctx
) => {
    try {
        const existingUser = await _ctx.dataSources.prisma.user.findUnique({
            where: { username: _arg.username },
        });

        if (existingUser) {
            throw new GraphQLError("Username already exists", {
                extensions: {
                    code: "BAD_USER_INPUT",
                },
            });
        }

        const result = await _ctx.dataSources.prisma.user.create({
            data: {
                email: _ctx.user.email as string,
                username: _arg.username,
                updatedAt: new Date(),
                userId: _ctx.user.id,
                languages: {
                    connect: _arg.languages.map((language) => ({
                        name: language,
                    })),
                },
            },
        });

        const { error: updateUserMetaDataError } =
            await _ctx.dataSources.supabase.auth.admin.updateUserById(
                _ctx.user.id,
                {
                    user_metadata: {
                        profile: {
                            ..._ctx.user.app_metadata.profile,
                            username: _arg.username,
                            languages: _arg.languages,
                        },
                    },
                }
            );
        const { error: updateAppMetaDataError } =
            await _ctx.dataSources.supabase.auth.admin.updateUserById(
                _ctx.user.id,
                {
                    app_metadata: {
                        profile_created: true,
                    },
                }
            );

        if (updateUserMetaDataError || updateAppMetaDataError) {
            console.log(updateUserMetaDataError ?? updateAppMetaDataError);
            throw new GraphQLError("An error occurred while creating user.", {
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
