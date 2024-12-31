import { expect, test, vi } from "vitest";
import { v4 as uuidv4 } from "uuid";
import prisma from "./utils/__mocks__/prisma";
import { resolvers } from "../src/schema/resolvers.generated";
import { createFlashcardSet } from "../src/schema/flashcard/resolvers/Mutation/createFlashcardSet";
import { MyContext } from "../src/utils/types/context";
import { getResolverFunction } from "./utils/resolver";

vi.mock("../libs/prisma");

// Test for createUser
// test("createUser should return the generated user", async () => {
//     const newUser = {
//         email: "user@prisma.io",
//         username: "Prisma Fan",
//         userId: uuidv4(),
//         createdAt: new Date(),
//         updatedAt: new Date(),
//     };
//     prisma.user.create.mockResolvedValue(newUser);
//     const user = await createUser(newUser);
//     expect(user).toStrictEqual(newUser);
// });

test("createFlashcardSet should return the generated flashcard set", async () => {
    const newFlashcardSet = {
        title: "Spanish Basics",
        description: "Basic Spanish vocabulary",
        id: 1,
        userId: uuidv4(),
        languageName: "Spanish",
        name: "Spanish Basics",
        lastFrontFace: null,
        createdAt: new Date(),
        updatedAt: new Date(),
    };

    const mockContext = {
        dataSources: {
            prisma,
        },
        user: {
            id: newFlashcardSet.userId,
        },
    };

    prisma.language.findUnique.mockResolvedValue({
        id: 1,
        name: newFlashcardSet.languageName,
        code: "ES",
    });

    prisma.flashcardSet.create.mockResolvedValue(newFlashcardSet);

    if (!resolvers.Mutation?.createFlashcardSet) {
        throw new Error("createFlashcardSet resolver is not defined");
    }

    const flashcardSet = await getResolverFunction(createFlashcardSet)(
        {},
        {
            name: newFlashcardSet.name,
            languageName: newFlashcardSet.languageName,
            description: newFlashcardSet.description,
        },
        mockContext as unknown as MyContext,
        {} as any
    );

    expect(flashcardSet).toStrictEqual({...newFlashcardSet, totalCards: 0});
});
