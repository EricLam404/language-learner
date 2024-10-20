import { PrismaClient, ExerciseType, FaceType } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const userIds = [
    'a1062562-99dd-4a53-900c-0ac2be8796db',
    'b2062562-88dd-4a53-900c-0ac2be8796dc',
    'c3062562-77dd-4a53-900c-0ac2be8796dd',
  ]

  // Create Users
  const users = await Promise.all(
    userIds.map((userId, index) =>
      prisma.user.upsert({
        where: { userId },
        update: {},
        create: {
          userId,
          email: `user${index + 1}@example.com`,
          username: `user${index + 1}`,
        },
      })
    )
  )

  // Create Languages
  const languages = await Promise.all(
    [
      { name: 'English', code: 'en' },
      { name: 'Spanish', code: 'es' },
      { name: 'French', code: 'fr' },
      { name: 'German', code: 'de' },
      { name: 'Chinese', code: 'zh' },
      { name: 'Japanese', code: 'ja' },
      { name: 'Korean', code: 'ko' },
      { name: 'Italian', code: 'it' },
      { name: 'Portuguese', code: 'pt' },
      { name: 'Russian', code: 'ru' },
    ].map(language =>
      prisma.language.upsert({
        where: { name: language.name },
        update: {},
        create: language,
      })
    )
  )

  // Create Tags
  const tags = await Promise.all(
    [
      'beginner',
      'intermediate',
      'advanced',
      'fairy tale',
      'history',
      'culture',
      'business',
      'travel',
      'food',
      'music',
    ].map(tagName =>
      prisma.tag.upsert({
        where: { name: tagName },
        update: {},
        create: { name: tagName },
      })
    )
  )

  // Connect Users to Languages
  await Promise.all(
    users.map(user =>
      prisma.user.update({
        where: { userId: user.userId },
        data: {
          languages: {
            connect: [
              { name: 'English' },
              { name: 'Spanish' },
              { name: 'French' },
            ],
          },
        },
      })
    )
  )

  // Create Stories with Chapters
  const stories = await Promise.all([
    prisma.story.create({
      data: {
        title: 'The Magic Garden',
        translatedTitle: 'El Jardín Mágico',
        description: 'A magical tale about a secret garden',
        content: 'Introduction to the magical garden...',
        difficulty: 1,
        user: { connect: { userId: userIds[0] } },
        language: { connect: { name: 'English' } },
        tags: {
          connect: [
            { name: 'beginner' },
            { name: 'fairy tale' },
          ],
        },
        isPublished: true,
        chapters: {
          create: [
            {
              title: 'Chapter 1: The Discovery',
              content: 'Sarah found an old key...',
              orderIndex: 0,
              estimatedReadingTime: 5,
            },
            {
              title: 'Chapter 2: The First Visit',
              content: 'The garden was more beautiful than imagined...',
              orderIndex: 1,
              estimatedReadingTime: 7,
            },
          ],
        },
      },
    }),
    prisma.story.create({
      data: {
        title: 'Business in Paris',
        translatedTitle: 'Les Affaires à Paris',
        description: 'A story about international business',
        content: 'Introduction to business culture...',
        difficulty: 2,
        user: { connect: { userId: userIds[1] } },
        language: { connect: { name: 'French' } },
        tags: {
          connect: [
            { name: 'intermediate' },
            { name: 'business' },
          ],
        },
        isPublished: true,
        chapters: {
          create: [
            {
              title: 'Chapter 1: First Meeting',
              content: 'The meeting was scheduled for 9 AM...',
              orderIndex: 0,
              estimatedReadingTime: 6,
            },
          ],
        },
      },
    }),
    prisma.story.create({
      data: {
        title: 'Cocina Española',
        translatedTitle: 'Spanish Cuisine',
        description: 'Journey through Spanish gastronomy',
        content: 'Introduction to Spanish cuisine...',
        difficulty: 1,
        user: { connect: { userId: userIds[2] } },
        language: { connect: { name: 'Spanish' } },
        tags: {
          connect: [
            { name: 'beginner' },
            { name: 'food' },
          ],
        },
        isPublished: true,
        chapters: {
          create: [
            {
              title: 'Capítulo 1: Paella Valenciana',
              content: 'La paella es un plato tradicional...',
              orderIndex: 0,
              estimatedReadingTime: 8,
            },
          ],
        },
      },
    }),
  ])

  // Create Vocabularies
  const vocabularies = await Promise.all([
    ...Array(10).fill(null).map((_, i) =>
      prisma.vocabulary.create({
        data: {
          word: ['hello', 'garden', 'magic', 'business', 'food', 'journey', 'culture', 'music', 'travel', 'world'][i],
          meaning: `Meaning for word ${i + 1}`,
          example: `Example sentence ${i + 1}`,
          user: { connect: { userId: userIds[i % 3] } },
          language: { connect: { name: 'English' } },
        },
      })
    ),
  ])

  // Create Worksheets with Exercises
  const worksheets = await Promise.all([
    prisma.worksheet.create({
      data: {
        title: 'English Basics',
        description: 'Basic English grammar exercises',
        user: { connect: { userId: userIds[0] } },
        language: { connect: { name: 'English' } },
        exercises: {
          create: [
            {
              type: ExerciseType.MULTIPLE_CHOICE,
              content: {
                question: 'Choose the correct article',
                options: ['a', 'an', 'the'],
                correctAnswer: 'an',
              },
              order: 0,
            },
            {
              type: ExerciseType.FILL_IN_BLANK,
              content: {
                sentence: 'The cat ___ on the mat',
                correctAnswer: 'sits',
              },
              order: 1,
            },
          ],
        },
      },
    }),
    prisma.worksheet.create({
      data: {
        title: 'French Verbs',
        description: 'Practice French verb conjugations',
        user: { connect: { userId: userIds[1] } },
        language: { connect: { name: 'French' } },
        exercises: {
          create: [
            {
              type: ExerciseType.TRANSLATION,
              content: {
                sentence: 'I am going to the store',
                correctAnswer: 'Je vais au magasin',
              },
              order: 0,
            },
          ],
        },
      },
    }),
  ])

  // Create FlashcardSets with Flashcards
  const flashcardSets = await Promise.all([
    prisma.flashcardSet.create({
      data: {
        name: 'Basic English Vocabulary',
        description: 'Essential English words for beginners',
        user: { connect: { userId: userIds[0] } },
        cards: {
          create: [
            {
              nextReviewAt: new Date(),
              faces: {
                create: [
                  {
                    content: 'Hello',
                    type: FaceType.FRONT,
                    order: 0,
                  },
                  {
                    content: 'A greeting',
                    type: FaceType.BACK,
                    order: 1,
                  },
                ],
              },
            },
            {
              nextReviewAt: new Date(),
              faces: {
                create: [
                  {
                    content: 'Goodbye',
                    type: FaceType.FRONT,
                    order: 0,
                  },
                  {
                    content: 'A parting greeting',
                    type: FaceType.BACK,
                    order: 1,
                  },
                ],
              },
            },
          ],
        },
      },
    }),
    prisma.flashcardSet.create({
      data: {
        name: 'Chinese Characters',
        description: 'Common Chinese characters',
        user: { connect: { userId: userIds[1] } },
        cards: {
          create: [
            {
              nextReviewAt: new Date(),
              faces: {
                create: [
                  {
                    content: '你好',
                    type: FaceType.CHARACTER,
                    order: 0,
                  },
                  {
                    content: 'nǐ hǎo',
                    type: FaceType.PINYIN,
                    order: 1,
                  },
                  {
                    content: 'Hello',
                    type: FaceType.TRANSLATION,
                    order: 2,
                  },
                ],
              },
            },
          ],
        },
      },
    }),
  ])

  // Create Chat Sessions with Messages
  const chatSessions = await Promise.all([
    prisma.chatSession.create({
      data: {
        user: { connect: { userId: userIds[0] } },
        language: { connect: { name: 'English' } },
        flashcardSet: { connect: { id: flashcardSets[0].id } },
        messages: {
          create: [
            {
              role: 'user',
              content: 'Hello! Can you help me practice English?',
              timestamp: new Date(),
            },
            {
              role: 'assistant',
              content: 'Of course! Let\'s start with basic greetings.',
              timestamp: new Date(),
            },
          ],
        },
      },
    }),
  ])

  // Create Reading Progress with Chapter Progress
  await Promise.all(stories.map(async story => {
    const chapters = await prisma.chapter.findMany({
      where: { storyId: story.id },
    });
    return prisma.readingProgress.create({
      data: {
        user: { connect: { userId: userIds[0] } },
        story: { connect: { id: story.id } },
        progress: 0.5,
        startedAt: new Date(),
        lastReadAt: new Date(),
        chapterProgresses: {
          create: chapters.map(chapter => ({
            chapter: { connect: { id: chapter.id } },
            progress: 0.5,
            startedAt: new Date(),
            lastReadAt: new Date(),
          })),
        },
      },
    });
  }))
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })