import { GraphQLError } from "graphql";
import type { QueryResolvers } from "./../../../types.generated";
export const publicStories: NonNullable<QueryResolvers['publicStories']> = async (_parent, _arg, _ctx) => {
    /* Implement Query.publicStories resolver logic here */
    const {
        filters,
        page = 1,
        pageSize = 10,
        orderBy = "createdAt",
        orderDirection = "desc",
    } = _arg;

    try {
        let where = {
            isPublished: true,
        };

        if (filters) {
            where = {
                ...where,
                ...(filters.languageName && {
                    languageName: filters.languageName,
                }),
                ...(filters.difficulty && { difficulty: filters.difficulty }),
                ...(filters.searchTerm && {
                    OR: [
                        {
                            title: {
                                contains: filters.searchTerm,
                                mode: "insensitive",
                            },
                        },
                        {
                            description: {
                                contains: filters.searchTerm,
                                mode: "insensitive",
                            },
                        },
                    ],
                }),
                ...(filters.tags &&
                    filters.tags.length > 0 && {
                        tags: {
                            some: {
                                name: {
                                    in: filters.tags,
                                },
                            },
                        },
                    }),
            };
        }

        const stories = await _ctx.dataSources.prisma.story.findMany({
            where,
            include: {
                user: {
                    select: {
                        userId: true,
                        username: true,
                        createdAt: true,
                        email: true,
                        updatedAt: true,
                    },
                },
                tags: true,
            },
            skip: (page - 1) * pageSize,
            take: pageSize,
            orderBy: {
                [orderBy]: orderDirection.toLowerCase(),
            },
        });
        console.log(stories);
        const totalCount = await _ctx.dataSources.prisma.story.count({ where });

        return {
            stories,
            totalCount,
            hasNextPage: totalCount > page * pageSize,
        };
    } catch (error) {
        console.error("Error fetching public stories:", error);
        throw new GraphQLError("Failed to fetch public stories", {
            extensions: {
                code: "INTERNAL_SERVER_ERROR",
            },
        });
    }
};
