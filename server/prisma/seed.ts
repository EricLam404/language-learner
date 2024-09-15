// /**
//  * ! Executing this script will delete all data in your database and seed it with 10 users.
//  * ! Make sure to adjust the script to your needs.
//  * Use any TypeScript runner to run this script, for example: `npx tsx seed.ts`
//  * Learn more about the Seed Client by following our guide: https://docs.snaplet.dev/seed/getting-started
//  */
// import { createSeedClient } from "@snaplet/seed";

// const main = async () => {
//   const seed = await createSeedClient();

//   // Truncate all tables in the database
//   await seed.$resetDatabase();

//   // Seed the database with 10 users
//   await seed.users((x) => x(10));

//   // Type completion not working? You might want to reload your TypeScript Server to pick up the changes

//   console.log("Database seeded successfully!");

//   process.exit();
// };

// main();

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    // Insert User
    const user = await prisma.user.upsert({
        where: { userId: "00c60d2d-4b8f-4019-b187-e85f6dffc000" },
        update: {},
        create: {
            userId: "00c60d2d-4b8f-4019-b187-e85f6dffc000",
            email: "user1@example.com",
            username: "user1",
        },
    });

    // Insert Languages
    const languages = await Promise.all(
        [
            "English",
            "Spanish",
            "French",
            "German",
            "Chinese",
            "Japanese",
            "Korean",
            "Italian",
            "Portuguese",
            "Russian",
        ].map((name) =>
            prisma.language.upsert({
                where: { name },
                update: {},
                create: { name },
            })
        )
    );

    // Insert UserLanguages
    await Promise.all([
        prisma.userLanguage.create({
            data: {
                userId: user.userId,
                languageName: "English",
            },
        }),
        prisma.userLanguage.create({
            data: {
                userId: user.userId,
                languageName: "Spanish",
            },
        }),
    ]);

    // Insert Vocabularies
    await Promise.all([
        prisma.vocabulary.create({
            data: {
                word: "hello",
                meaning: "a greeting",
                example: "Hello, how are you?",
                userId: user.userId,
                languageName: "English",
            },
        }),
        prisma.vocabulary.create({
            data: {
                word: "hola",
                meaning: "a greeting",
                example: "Hola, ¿cómo estás?",
                userId: user.userId,
                languageName: "Spanish",
            },
        }),
    ]);

    // Insert Stories
    await Promise.all([
        prisma.story.create({
            data: {
                content: "Once upon a time...",
                userId: user.userId,
                languageName: "English",
            },
        }),
        prisma.story.create({
            data: {
                content: "Había una vez...",
                userId: user.userId,
                languageName: "Spanish",
            },
        }),
    ]);

    // Insert Worksheets
    await Promise.all([
        prisma.worksheet.create({
            data: {
                content: "English Worksheet 1",
                userId: user.userId,
                languageName: "English",
            },
        }),
        prisma.worksheet.create({
            data: {
                content: "Spanish Worksheet 1",
                userId: user.userId,
                languageName: "Spanish",
            },
        }),
    ]);

    console.log("Seed data inserted successfully");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
