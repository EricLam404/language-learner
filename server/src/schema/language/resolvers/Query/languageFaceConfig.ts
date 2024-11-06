import { GraphQLError } from "graphql";
import type { QueryResolvers } from "./../../../types.generated";
export const languageFaceConfig: NonNullable<QueryResolvers['languageFaceConfig']> = async (_parent, _arg, _ctx) => {
    /* Implement Query.languageFaceConfig resolver logic here */
    try {
        const data =
            await _ctx.dataSources.prisma.languageFaceConfig.findUnique({
                where: { languageName: _arg.languageName },
            });
        return data;
    } catch (error) {
        console.log(error);

        if (error instanceof GraphQLError) {
            throw error;
        }
        throw new GraphQLError("Failed to query language config", {
            extensions: {
                code: "INTERNAL_SERVER_ERROR",
            },
        });
    }
/*  */};
