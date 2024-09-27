import type   { UserResolvers } from './../../types.generated';
    export const User: UserResolvers = {
    /* Implement User resolver logic here */
    languages: async (parent, args, context, info) => {
      return await context.dataSources.prisma.userLanguage.findMany({
        where: {
          userId: parent.userId as string,
        },
      });
    },
  };