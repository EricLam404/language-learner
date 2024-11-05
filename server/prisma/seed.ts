import { PrismaClient, ExerciseType, FaceType, Story } from '@prisma/client'
import { faker } from '@faker-js/faker'

const prisma = new PrismaClient()

// Types for our seed data
interface SeedUser {
  userId: string
  email: string
  username: string
}

interface LanguageConfig {
  required: FaceType[]
  optional: FaceType[]
  typeMetadata: {
    [key: string]: {
      label: string
      inputType: string
      options?: string[]
    }
  }
}

// Constants
const USERS: SeedUser[] = [
  {
    userId: 'a1062562-99dd-4a53-900c-0ac2be8796db',
    email: 'sarah.johnson@example.com',
    username: 'sarahj',
  },
  {
    userId: 'b2062562-88dd-4a53-900c-0ac2be8796dc',
    email: 'mark.wilson@example.com',
    username: 'markw',
  },
  {
    userId: 'c3062562-77dd-4a53-900c-0ac2be8796dd',
    email: 'emily.chen@example.com',
    username: 'emilyc',
  },
]

const LANGUAGES = [
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
]

const TAGS = [
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
  'daily life',
  'literature',
  'technology',
  'science',
  'nature',
]

const LANGUAGE_CONFIGS: Record<string, LanguageConfig> = {
  Chinese: {
    required: [FaceType.FRONT, FaceType.CHARACTER, FaceType.TRANSLATION],
    optional: [
      FaceType.PINYIN,
      FaceType.EXAMPLE_SENTENCE,
      FaceType.EXAMPLE_TRANSLATION,
      FaceType.CONTEXT_NOTES,
      FaceType.MNEMONIC,
      FaceType.AUDIO_NATIVE,
    ],
    typeMetadata: {
      FRONT: { label: 'Word/Phrase', inputType: 'text' },
      CHARACTER: { label: 'Chinese Characters', inputType: 'text' },
      PINYIN: { label: 'Pinyin', inputType: 'text' },
      TRANSLATION: { label: 'English Translation', inputType: 'text' },
      EXAMPLE_SENTENCE: { label: 'Example Sentence', inputType: 'textarea' },
      EXAMPLE_TRANSLATION: { label: 'Sentence Translation', inputType: 'textarea' },
      CONTEXT_NOTES: { label: 'Usage Notes', inputType: 'textarea' },
      MNEMONIC: { label: 'Memory Aid', inputType: 'textarea' },
      AUDIO_NATIVE: { label: 'Native Audio', inputType: 'audio' },
    },
  },
  Japanese: {
    required: [FaceType.FRONT, FaceType.HIRAGANA, FaceType.ROMAJI, FaceType.TRANSLATION],
    optional: [
      FaceType.KATAKANA,
      FaceType.EXAMPLE_SENTENCE,
      FaceType.EXAMPLE_TRANSLATION,
      FaceType.CONTEXT_NOTES,
      FaceType.AUDIO_NATIVE,
    ],
    typeMetadata: {
      FRONT: { label: 'Word/Phrase', inputType: 'text' },
      HIRAGANA: { label: 'Hiragana', inputType: 'text' },
      ROMAJI: { label: 'Romaji', inputType: 'text' },
      KATAKANA: { label: 'Katakana', inputType: 'text' },
      TRANSLATION: { label: 'English Translation', inputType: 'text' },
    },
  },
  Spanish: {
    required: [FaceType.FRONT, FaceType.TRANSLATION],
    optional: [
      FaceType.GENDER,
      FaceType.CONJUGATION,
      FaceType.EXAMPLE_SENTENCE,
      FaceType.EXAMPLE_TRANSLATION,
      FaceType.AUDIO_NATIVE,
    ],
    typeMetadata: {
      FRONT: { label: 'Spanish Word/Phrase', inputType: 'text' },
      TRANSLATION: { label: 'English Translation', inputType: 'text' },
      GENDER: {
        label: 'Grammatical Gender',
        inputType: 'select',
        options: ['masculine', 'feminine', 'neutral'],
      },
      CONJUGATION: { label: 'Verb Conjugation', inputType: 'textarea' },
    },
  },
}

// Seed data generators
const generateStoryContent = (language: string): string => {
  return Array(5)
    .fill(null)
    .map(() => faker.lorem.paragraph())
    .join('\n\n')
}

const generateChapters = (numChapters: number) => {
  return Array(numChapters)
    .fill(null)
    .map((_, index) => ({
      title: `Chapter ${index + 1}: ${faker.lorem.words(3)}`,
      content: generateStoryContent('en'),
      orderIndex: index,
      estimatedReadingTime: faker.number.int({ min: 5, max: 15 }),
    }))
}

// Main seed functions
async function seedUsers() {
  return Promise.all(
    USERS.map((user) =>
      prisma.user.upsert({
        where: { userId: user.userId },
        update: {},
        create: user,
      })
    )
  )
}

async function seedLanguages() {
  return Promise.all(
    LANGUAGES.map((language) =>
      prisma.language.upsert({
        where: { name: language.name },
        update: {},
        create: language,
      })
    )
  )
}

async function seedTags() {
  return Promise.all(
    TAGS.map((name) =>
      prisma.tag.upsert({
        where: { name },
        update: {},
        create: { name },
      })
    )
  )
}

async function seedLanguageConfigs() {
  return Promise.all(
    Object.entries(LANGUAGE_CONFIGS).map(([langName, config]) =>
      prisma.languageFaceConfig.upsert({
        where: { languageName: langName },
        update: { config: JSON.parse(JSON.stringify(config)) },
        create: {
          languageName: langName,
          config: JSON.parse(JSON.stringify(config)),
        },
      })
    )
  )
}

async function seedStories(users: SeedUser[]): Promise<Story[]> {
  const createdStories: Story[] = []
  
  for (const user of users) {
    const numStories = faker.number.int({ min: 2, max: 5 })
    
    for (let i = 0; i < numStories; i++) {
      const language = faker.helpers.arrayElement(LANGUAGES)
      const story = await prisma.story.create({
        data: {
          title: faker.lorem.words(3),
          translatedTitle: faker.lorem.words(3),
          description: faker.lorem.sentence(),
          content: generateStoryContent(language.code),
          difficulty: faker.number.int({ min: 1, max: 5 }),
          readCount: 0,
          audioUrl: null,
          imageUrl: null,
          averageRating: null,
          isPublished: faker.datatype.boolean(),
          isReviewed: faker.datatype.boolean(),
          userId: user.userId,
          languageName: language.name,
          tags: {
            connect: faker.helpers
              .arrayElements(TAGS, { min: 1, max: 3 })
              .map((name) => ({ name })),
          },
          chapters: {
            create: generateChapters(faker.number.int({ min: 3, max: 8 })),
          },
        },
      })
      createdStories.push(story)
    }
  }
  
  return createdStories
}

async function connectUsersToLanguages(users: SeedUser[]) {
  return Promise.all(
    users.map((user) =>
      prisma.user.update({
        where: { userId: user.userId },
        data: {
          languages: {
            connect: faker.helpers
              .arrayElements(LANGUAGES, { min: 2, max: 4 })
              .map((lang) => ({ name: lang.name })),
          },
        },
      })
    )
  )
}

// Main seed function
async function main() {
  console.log('🌱 Starting seed...')

  try {
    const users = await seedUsers()
    console.log('✅ Seeded users')

    const languages = await seedLanguages()
    console.log('✅ Seeded languages')

    const tags = await seedTags()
    console.log('✅ Seeded tags')

    await seedLanguageConfigs()
    console.log('✅ Seeded language configs')

    await connectUsersToLanguages(users)
    console.log('✅ Connected users to languages')

    const stories = await seedStories(users)
    console.log(`✅ Seeded ${stories.length} stories with chapters`)

    // Additional seeding functions would go here...
    
    console.log('✅ Seed completed successfully')
  } catch (error) {
    console.error('❌ Seed failed:', error)
    throw error
  } finally {
    await prisma.$disconnect()
  }
}

main()
  .catch((e) => {
    console.error(e)
    // @ts-ignore
    process.exit(1)
  })