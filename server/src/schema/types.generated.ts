import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { MyContext } from '../utils/types/context';
export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type EnumResolverSignature<T, AllowedValues = any> = { [key in keyof T]?: AllowedValues };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string | number; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: Date | string; output: Date | string; }
  JSON: { input: any; output: any; }
};

export type Chapter = {
  __typename?: 'Chapter';
  audioUrl?: Maybe<Scalars['String']['output']>;
  chapterProgresses?: Maybe<Array<ChapterProgress>>;
  comprehensionQuestions?: Maybe<Array<ComprehensionQuestion>>;
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  estimatedReadingTime?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  orderIndex: Scalars['Int']['output'];
  story?: Maybe<Story>;
  storyId: Scalars['ID']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ChapterProgress = {
  __typename?: 'ChapterProgress';
  chapter: Chapter;
  chapterId: Scalars['ID']['output'];
  completedAt?: Maybe<Scalars['DateTime']['output']>;
  currentPosition?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  lastReadAt?: Maybe<Scalars['DateTime']['output']>;
  progress: Scalars['Float']['output'];
  readingProgress: ReadingProgress;
  readingProgressId: Scalars['ID']['output'];
  startedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ChatMessage = {
  __typename?: 'ChatMessage';
  content: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  role: Scalars['String']['output'];
  session: ChatSession;
  sessionId: Scalars['ID']['output'];
  timestamp: Scalars['DateTime']['output'];
};

export type ChatSession = {
  __typename?: 'ChatSession';
  chatMessages?: Maybe<Array<ChatMessage>>;
  createdAt: Scalars['DateTime']['output'];
  flashcardSet?: Maybe<FlashcardSet>;
  flashcardSetId?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  language: Language;
  languageName: Scalars['String']['output'];
  messages?: Maybe<Array<Scalars['JSON']['output']>>;
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  userId: Scalars['ID']['output'];
};

export type ComprehensionQuestion = {
  __typename?: 'ComprehensionQuestion';
  answer: Scalars['Int']['output'];
  chapter: Chapter;
  chapterId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  options: Array<ComprehensionQuestionOption>;
  question: Scalars['String']['output'];
};

export type ComprehensionQuestionOption = {
  __typename?: 'ComprehensionQuestionOption';
  content: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isCorrect: Scalars['Boolean']['output'];
  order: Scalars['Int']['output'];
  question: ComprehensionQuestion;
  questionId: Scalars['ID']['output'];
};

export type CreateStoryInput = {
  content: Scalars['String']['input'];
  description: Scalars['String']['input'];
  difficulty: Scalars['Int']['input'];
  isPublished: Scalars['Boolean']['input'];
  languageName: Scalars['String']['input'];
  tags: Array<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  translatedTitle: Scalars['String']['input'];
};

export type CreateWorksheetInput = {
  content: Scalars['String']['input'];
  languageName: Scalars['String']['input'];
};

export type Exercise = {
  __typename?: 'Exercise';
  content: Scalars['JSON']['output'];
  id: Scalars['ID']['output'];
  order: Scalars['Int']['output'];
  submissions?: Maybe<Array<Submission>>;
  type: ExerciseType;
  worksheet: Worksheet;
  worksheetId: Scalars['ID']['output'];
};

export type ExerciseType =
  | 'FILL_IN_BLANK'
  | 'MATCHING'
  | 'MULTIPLE_CHOICE'
  | 'SENTENCE_CONSTRUCTION'
  | 'TRANSLATION';

export type FaceType =
  | 'AUDIO_NATIVE'
  | 'AUDIO_SLOW'
  | 'BACK'
  | 'CHARACTER'
  | 'CONJUGATION'
  | 'CONTEXT_NOTES'
  | 'DEFINITION'
  | 'EXAMPLE_SENTENCE'
  | 'EXAMPLE_TRANSLATION'
  | 'FRONT'
  | 'GENDER'
  | 'HIRAGANA'
  | 'IMAGE'
  | 'KATAKANA'
  | 'MNEMONIC'
  | 'NOTES'
  | 'OTHER'
  | 'PART_OF_SPEECH'
  | 'PINYIN'
  | 'PLURAL_FORM'
  | 'ROMAJI'
  | 'TRANSLATION'
  | 'TRANSLITERATION'
  | 'VIDEO';

export type Flashcard = {
  __typename?: 'Flashcard';
  createdAt: Scalars['DateTime']['output'];
  easeFactor?: Maybe<Scalars['Float']['output']>;
  faces?: Maybe<Array<FlashcardFace>>;
  id: Scalars['ID']['output'];
  interval?: Maybe<Scalars['Int']['output']>;
  nextReviewAt?: Maybe<Scalars['DateTime']['output']>;
  repetitions?: Maybe<Scalars['Int']['output']>;
  set?: Maybe<FlashcardSet>;
  setId: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type FlashcardFace = {
  __typename?: 'FlashcardFace';
  audioUrl?: Maybe<Scalars['String']['output']>;
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  flashcard?: Maybe<Flashcard>;
  flashcardId: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  imageUrl?: Maybe<Scalars['String']['output']>;
  order: Scalars['Int']['output'];
  type: FaceType;
  updatedAt: Scalars['DateTime']['output'];
};

export type FlashcardFaceInput = {
  audioUrl?: InputMaybe<Scalars['String']['input']>;
  content: Scalars['String']['input'];
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  order: Scalars['Int']['input'];
  type: FaceType;
};

export type FlashcardSet = {
  __typename?: 'FlashcardSet';
  cards?: Maybe<Array<Flashcard>>;
  chatSessions?: Maybe<Array<ChatSession>>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  language?: Maybe<Language>;
  languageName: Scalars['String']['output'];
  name: Scalars['String']['output'];
  user?: Maybe<User>;
  userId: Scalars['ID']['output'];
  vocabularies?: Maybe<Array<Vocabulary>>;
};

export type Language = {
  __typename?: 'Language';
  chatSession?: Maybe<Array<ChatSession>>;
  code: Scalars['String']['output'];
  flashcardSets?: Maybe<Array<FlashcardSet>>;
  id: Scalars['ID']['output'];
  languageFaceConfig?: Maybe<LanguageFaceConfig>;
  name: Scalars['String']['output'];
  stories?: Maybe<Array<Story>>;
  users?: Maybe<Array<User>>;
  vocabularies?: Maybe<Array<Vocabulary>>;
  worksheets?: Maybe<Array<Worksheet>>;
};

export type LanguageFaceConfig = {
  __typename?: 'LanguageFaceConfig';
  config: Scalars['JSON']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  language?: Maybe<Language>;
  languageName: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createFlashcard: Flashcard;
  createFlashcardSet: FlashcardSet;
  createLanguage: Language;
  createStory: Story;
  createTag: Tag;
  createUser: User;
  createVocabulary: Vocabulary;
  createWorksheet?: Maybe<Worksheet>;
  deleteFlashcard: Scalars['Boolean']['output'];
  deleteFlashcardSet: Scalars['Boolean']['output'];
  deleteLanguage: Scalars['Boolean']['output'];
  deleteStory: Scalars['Boolean']['output'];
  deleteTag: Scalars['Boolean']['output'];
  deleteUser: Scalars['Boolean']['output'];
  deleteVocabulary: Scalars['Boolean']['output'];
  deleteWorksheet: Scalars['Boolean']['output'];
  updateFlashcard: Flashcard;
  updateFlashcardSet: FlashcardSet;
  updateLanguage: Language;
  updateStory: Story;
  updateTag: Tag;
  updateUser: User;
  updateVocabulary: Vocabulary;
  updateWorksheet?: Maybe<Worksheet>;
};


export type MutationcreateFlashcardArgs = {
  faces: Array<FlashcardFaceInput>;
  setId: Scalars['ID']['input'];
};


export type MutationcreateFlashcardSetArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  languageName: Scalars['String']['input'];
  name: Scalars['String']['input'];
};


export type MutationcreateLanguageArgs = {
  code: Scalars['String']['input'];
  name: Scalars['String']['input'];
};


export type MutationcreateStoryArgs = {
  input: CreateStoryInput;
};


export type MutationcreateTagArgs = {
  name: Scalars['String']['input'];
};


export type MutationcreateUserArgs = {
  languages: Array<Scalars['String']['input']>;
  username: Scalars['String']['input'];
};


export type MutationcreateVocabularyArgs = {
  example?: InputMaybe<Scalars['String']['input']>;
  languageName: Scalars['String']['input'];
  meaning: Scalars['String']['input'];
  word: Scalars['String']['input'];
};


export type MutationcreateWorksheetArgs = {
  input: CreateWorksheetInput;
};


export type MutationdeleteFlashcardArgs = {
  id: Scalars['ID']['input'];
};


export type MutationdeleteFlashcardSetArgs = {
  id: Scalars['ID']['input'];
};


export type MutationdeleteLanguageArgs = {
  id: Scalars['ID']['input'];
};


export type MutationdeleteStoryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationdeleteTagArgs = {
  id: Scalars['ID']['input'];
};


export type MutationdeleteUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationdeleteVocabularyArgs = {
  id: Scalars['ID']['input'];
};


export type MutationdeleteWorksheetArgs = {
  id: Scalars['Int']['input'];
};


export type MutationupdateFlashcardArgs = {
  faces: Array<FlashcardFaceInput>;
  id: Scalars['ID']['input'];
};


export type MutationupdateFlashcardSetArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  languageName?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};


export type MutationupdateLanguageArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};


export type MutationupdateStoryArgs = {
  id: Scalars['ID']['input'];
  input: UpdateStoryInput;
};


export type MutationupdateTagArgs = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};


export type MutationupdateUserArgs = {
  id: Scalars['ID']['input'];
  username: Scalars['String']['input'];
};


export type MutationupdateVocabularyArgs = {
  example?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  languageName?: InputMaybe<Scalars['String']['input']>;
  meaning?: InputMaybe<Scalars['String']['input']>;
  word?: InputMaybe<Scalars['String']['input']>;
};


export type MutationupdateWorksheetArgs = {
  id: Scalars['Int']['input'];
  input: UpdateWorksheetInput;
};

export type PaginatedStoriesResponse = {
  __typename?: 'PaginatedStoriesResponse';
  hasNextPage: Scalars['Boolean']['output'];
  stories: Array<Story>;
  totalCount: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  flashcard?: Maybe<Flashcard>;
  flashcardSet?: Maybe<FlashcardSet>;
  flashcardSets: Array<FlashcardSet>;
  flashcardSetsByLanguage: Array<FlashcardSet>;
  language?: Maybe<Language>;
  languageByName?: Maybe<Language>;
  languageFaceConfig?: Maybe<LanguageFaceConfig>;
  languages: Array<Language>;
  publicStories: PaginatedStoriesResponse;
  stories: Array<Story>;
  story?: Maybe<Story>;
  tag?: Maybe<Tag>;
  tags: Array<Tag>;
  user?: Maybe<User>;
  users?: Maybe<Array<User>>;
  vocabularies: Array<Vocabulary>;
  vocabulary?: Maybe<Vocabulary>;
  worksheet?: Maybe<Worksheet>;
  worksheets: Array<Worksheet>;
};


export type QueryflashcardArgs = {
  id: Scalars['ID']['input'];
};


export type QueryflashcardSetArgs = {
  id: Scalars['ID']['input'];
};


export type QueryflashcardSetsByLanguageArgs = {
  languageName: Scalars['String']['input'];
};


export type QuerylanguageArgs = {
  id: Scalars['ID']['input'];
};


export type QuerylanguageByNameArgs = {
  name: Scalars['String']['input'];
};


export type QuerylanguageFaceConfigArgs = {
  languageName: Scalars['String']['input'];
};


export type QuerypublicStoriesArgs = {
  filters?: InputMaybe<StoryFilters>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerystoryArgs = {
  id: Scalars['ID']['input'];
};


export type QuerytagArgs = {
  id: Scalars['ID']['input'];
};


export type QueryuserArgs = {
  userId: Scalars['ID']['input'];
};


export type QueryvocabularyArgs = {
  id: Scalars['ID']['input'];
};


export type QueryworksheetArgs = {
  id: Scalars['ID']['input'];
};

export type ReadingProgress = {
  __typename?: 'ReadingProgress';
  addedToLibraryAt?: Maybe<Scalars['DateTime']['output']>;
  chapterProgresses?: Maybe<Array<ChapterProgress>>;
  completedAt?: Maybe<Scalars['DateTime']['output']>;
  createdAt: Scalars['DateTime']['output'];
  currentPosition?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  lastReadAt?: Maybe<Scalars['DateTime']['output']>;
  progress: Scalars['Float']['output'];
  rating?: Maybe<Scalars['Int']['output']>;
  startedAt?: Maybe<Scalars['DateTime']['output']>;
  story?: Maybe<Story>;
  storyId: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user?: Maybe<User>;
  userId: Scalars['ID']['output'];
};

export type Story = {
  __typename?: 'Story';
  audioUrl?: Maybe<Scalars['String']['output']>;
  averageRating?: Maybe<Scalars['Float']['output']>;
  chapters?: Maybe<Array<Chapter>>;
  completedAt?: Maybe<Scalars['DateTime']['output']>;
  comprehensionQuestions?: Maybe<Array<ComprehensionQuestion>>;
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  difficulty: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  imageUrl?: Maybe<Scalars['String']['output']>;
  isPublished: Scalars['Boolean']['output'];
  isReviewed: Scalars['Boolean']['output'];
  language?: Maybe<Language>;
  languageName: Scalars['String']['output'];
  readCount: Scalars['Int']['output'];
  readingProgress?: Maybe<Array<ReadingProgress>>;
  tags?: Maybe<Array<Tag>>;
  title: Scalars['String']['output'];
  translatedTitle: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user?: Maybe<User>;
  userId: Scalars['ID']['output'];
  vocabularies?: Maybe<Array<Vocabulary>>;
};

export type StoryFilters = {
  difficulty?: InputMaybe<Scalars['Int']['input']>;
  languageName?: InputMaybe<Scalars['String']['input']>;
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type Submission = {
  __typename?: 'Submission';
  answer: Scalars['JSON']['output'];
  createdAt: Scalars['DateTime']['output'];
  exercise?: Maybe<Exercise>;
  exerciseId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  isCorrect: Scalars['Boolean']['output'];
  user?: Maybe<User>;
  userId: Scalars['ID']['output'];
};

export type Tag = {
  __typename?: 'Tag';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  stories?: Maybe<Array<Story>>;
  updatedAt: Scalars['DateTime']['output'];
};

export type UpdateStoryInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  difficulty?: InputMaybe<Scalars['Int']['input']>;
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  languageName?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  title?: InputMaybe<Scalars['String']['input']>;
  translatedTitle?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateWorksheetInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  languageName?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  chatSession?: Maybe<Array<ChatSession>>;
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  flashcardSet?: Maybe<Array<FlashcardSet>>;
  languages?: Maybe<Array<Language>>;
  readingProgress?: Maybe<Array<ReadingProgress>>;
  stories?: Maybe<Array<Story>>;
  submission?: Maybe<Array<Submission>>;
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['ID']['output'];
  username: Scalars['String']['output'];
  vocabularies?: Maybe<Array<Vocabulary>>;
  worksheets?: Maybe<Array<Worksheet>>;
};

export type Vocabulary = {
  __typename?: 'Vocabulary';
  createdAt: Scalars['DateTime']['output'];
  example?: Maybe<Scalars['String']['output']>;
  flashcardSet?: Maybe<FlashcardSet>;
  flashcardSetId?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  language?: Maybe<Language>;
  languageName: Scalars['String']['output'];
  meaning: Scalars['String']['output'];
  stories?: Maybe<Array<Story>>;
  story?: Maybe<Story>;
  updatedAt: Scalars['DateTime']['output'];
  user?: Maybe<User>;
  userId: Scalars['ID']['output'];
  word: Scalars['String']['output'];
};

export type Worksheet = {
  __typename?: 'Worksheet';
  completedAt?: Maybe<Scalars['DateTime']['output']>;
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  exercises?: Maybe<Array<Maybe<Exercise>>>;
  id: Scalars['ID']['output'];
  language?: Maybe<Language>;
  languageName: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user?: Maybe<User>;
  userId: Scalars['ID']['output'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Chapter: ResolverTypeWrapper<Omit<Chapter, 'chapterProgresses' | 'comprehensionQuestions' | 'story'> & { chapterProgresses?: Maybe<Array<ResolversTypes['ChapterProgress']>>, comprehensionQuestions?: Maybe<Array<ResolversTypes['ComprehensionQuestion']>>, story?: Maybe<ResolversTypes['Story']> }>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  ChapterProgress: ResolverTypeWrapper<Omit<ChapterProgress, 'chapter' | 'readingProgress'> & { chapter: ResolversTypes['Chapter'], readingProgress: ResolversTypes['ReadingProgress'] }>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  ChatMessage: ResolverTypeWrapper<Omit<ChatMessage, 'session'> & { session: ResolversTypes['ChatSession'] }>;
  ChatSession: ResolverTypeWrapper<Omit<ChatSession, 'chatMessages' | 'flashcardSet' | 'language' | 'user'> & { chatMessages?: Maybe<Array<ResolversTypes['ChatMessage']>>, flashcardSet?: Maybe<ResolversTypes['FlashcardSet']>, language: ResolversTypes['Language'], user: ResolversTypes['User'] }>;
  ComprehensionQuestion: ResolverTypeWrapper<Omit<ComprehensionQuestion, 'chapter' | 'options'> & { chapter: ResolversTypes['Chapter'], options: Array<ResolversTypes['ComprehensionQuestionOption']> }>;
  ComprehensionQuestionOption: ResolverTypeWrapper<Omit<ComprehensionQuestionOption, 'question'> & { question: ResolversTypes['ComprehensionQuestion'] }>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  CreateStoryInput: CreateStoryInput;
  CreateWorksheetInput: CreateWorksheetInput;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  Exercise: ResolverTypeWrapper<Omit<Exercise, 'submissions' | 'type' | 'worksheet'> & { submissions?: Maybe<Array<ResolversTypes['Submission']>>, type: ResolversTypes['ExerciseType'], worksheet: ResolversTypes['Worksheet'] }>;
  ExerciseType: ResolverTypeWrapper<'MULTIPLE_CHOICE' | 'FILL_IN_BLANK' | 'MATCHING' | 'SENTENCE_CONSTRUCTION' | 'TRANSLATION'>;
  FaceType: ResolverTypeWrapper<'FRONT' | 'BACK' | 'PINYIN' | 'CHARACTER' | 'ROMAJI' | 'HIRAGANA' | 'KATAKANA' | 'TRANSLITERATION' | 'TRANSLATION' | 'DEFINITION' | 'EXAMPLE_SENTENCE' | 'EXAMPLE_TRANSLATION' | 'CONTEXT_NOTES' | 'MNEMONIC' | 'PART_OF_SPEECH' | 'CONJUGATION' | 'GENDER' | 'PLURAL_FORM' | 'AUDIO_NATIVE' | 'AUDIO_SLOW' | 'IMAGE' | 'VIDEO' | 'NOTES' | 'OTHER'>;
  Flashcard: ResolverTypeWrapper<Omit<Flashcard, 'faces' | 'set'> & { faces?: Maybe<Array<ResolversTypes['FlashcardFace']>>, set?: Maybe<ResolversTypes['FlashcardSet']> }>;
  FlashcardFace: ResolverTypeWrapper<Omit<FlashcardFace, 'flashcard' | 'type'> & { flashcard?: Maybe<ResolversTypes['Flashcard']>, type: ResolversTypes['FaceType'] }>;
  FlashcardFaceInput: FlashcardFaceInput;
  FlashcardSet: ResolverTypeWrapper<Omit<FlashcardSet, 'cards' | 'chatSessions' | 'language' | 'user' | 'vocabularies'> & { cards?: Maybe<Array<ResolversTypes['Flashcard']>>, chatSessions?: Maybe<Array<ResolversTypes['ChatSession']>>, language?: Maybe<ResolversTypes['Language']>, user?: Maybe<ResolversTypes['User']>, vocabularies?: Maybe<Array<ResolversTypes['Vocabulary']>> }>;
  JSON: ResolverTypeWrapper<Scalars['JSON']['output']>;
  Language: ResolverTypeWrapper<Omit<Language, 'chatSession' | 'flashcardSets' | 'languageFaceConfig' | 'stories' | 'users' | 'vocabularies' | 'worksheets'> & { chatSession?: Maybe<Array<ResolversTypes['ChatSession']>>, flashcardSets?: Maybe<Array<ResolversTypes['FlashcardSet']>>, languageFaceConfig?: Maybe<ResolversTypes['LanguageFaceConfig']>, stories?: Maybe<Array<ResolversTypes['Story']>>, users?: Maybe<Array<ResolversTypes['User']>>, vocabularies?: Maybe<Array<ResolversTypes['Vocabulary']>>, worksheets?: Maybe<Array<ResolversTypes['Worksheet']>> }>;
  LanguageFaceConfig: ResolverTypeWrapper<Omit<LanguageFaceConfig, 'language'> & { language?: Maybe<ResolversTypes['Language']> }>;
  Mutation: ResolverTypeWrapper<{}>;
  PaginatedStoriesResponse: ResolverTypeWrapper<Omit<PaginatedStoriesResponse, 'stories'> & { stories: Array<ResolversTypes['Story']> }>;
  Query: ResolverTypeWrapper<{}>;
  ReadingProgress: ResolverTypeWrapper<Omit<ReadingProgress, 'chapterProgresses' | 'story' | 'user'> & { chapterProgresses?: Maybe<Array<ResolversTypes['ChapterProgress']>>, story?: Maybe<ResolversTypes['Story']>, user?: Maybe<ResolversTypes['User']> }>;
  Story: ResolverTypeWrapper<Omit<Story, 'chapters' | 'comprehensionQuestions' | 'language' | 'readingProgress' | 'tags' | 'user' | 'vocabularies'> & { chapters?: Maybe<Array<ResolversTypes['Chapter']>>, comprehensionQuestions?: Maybe<Array<ResolversTypes['ComprehensionQuestion']>>, language?: Maybe<ResolversTypes['Language']>, readingProgress?: Maybe<Array<ResolversTypes['ReadingProgress']>>, tags?: Maybe<Array<ResolversTypes['Tag']>>, user?: Maybe<ResolversTypes['User']>, vocabularies?: Maybe<Array<ResolversTypes['Vocabulary']>> }>;
  StoryFilters: StoryFilters;
  Submission: ResolverTypeWrapper<Omit<Submission, 'exercise' | 'user'> & { exercise?: Maybe<ResolversTypes['Exercise']>, user?: Maybe<ResolversTypes['User']> }>;
  Tag: ResolverTypeWrapper<Omit<Tag, 'stories'> & { stories?: Maybe<Array<ResolversTypes['Story']>> }>;
  UpdateStoryInput: UpdateStoryInput;
  UpdateWorksheetInput: UpdateWorksheetInput;
  User: ResolverTypeWrapper<Omit<User, 'chatSession' | 'flashcardSet' | 'languages' | 'readingProgress' | 'stories' | 'submission' | 'vocabularies' | 'worksheets'> & { chatSession?: Maybe<Array<ResolversTypes['ChatSession']>>, flashcardSet?: Maybe<Array<ResolversTypes['FlashcardSet']>>, languages?: Maybe<Array<ResolversTypes['Language']>>, readingProgress?: Maybe<Array<ResolversTypes['ReadingProgress']>>, stories?: Maybe<Array<ResolversTypes['Story']>>, submission?: Maybe<Array<ResolversTypes['Submission']>>, vocabularies?: Maybe<Array<ResolversTypes['Vocabulary']>>, worksheets?: Maybe<Array<ResolversTypes['Worksheet']>> }>;
  Vocabulary: ResolverTypeWrapper<Omit<Vocabulary, 'flashcardSet' | 'language' | 'stories' | 'story' | 'user'> & { flashcardSet?: Maybe<ResolversTypes['FlashcardSet']>, language?: Maybe<ResolversTypes['Language']>, stories?: Maybe<Array<ResolversTypes['Story']>>, story?: Maybe<ResolversTypes['Story']>, user?: Maybe<ResolversTypes['User']> }>;
  Worksheet: ResolverTypeWrapper<Omit<Worksheet, 'exercises' | 'language' | 'user'> & { exercises?: Maybe<Array<Maybe<ResolversTypes['Exercise']>>>, language?: Maybe<ResolversTypes['Language']>, user?: Maybe<ResolversTypes['User']> }>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Chapter: Omit<Chapter, 'chapterProgresses' | 'comprehensionQuestions' | 'story'> & { chapterProgresses?: Maybe<Array<ResolversParentTypes['ChapterProgress']>>, comprehensionQuestions?: Maybe<Array<ResolversParentTypes['ComprehensionQuestion']>>, story?: Maybe<ResolversParentTypes['Story']> };
  String: Scalars['String']['output'];
  Int: Scalars['Int']['output'];
  ID: Scalars['ID']['output'];
  ChapterProgress: Omit<ChapterProgress, 'chapter' | 'readingProgress'> & { chapter: ResolversParentTypes['Chapter'], readingProgress: ResolversParentTypes['ReadingProgress'] };
  Float: Scalars['Float']['output'];
  ChatMessage: Omit<ChatMessage, 'session'> & { session: ResolversParentTypes['ChatSession'] };
  ChatSession: Omit<ChatSession, 'chatMessages' | 'flashcardSet' | 'language' | 'user'> & { chatMessages?: Maybe<Array<ResolversParentTypes['ChatMessage']>>, flashcardSet?: Maybe<ResolversParentTypes['FlashcardSet']>, language: ResolversParentTypes['Language'], user: ResolversParentTypes['User'] };
  ComprehensionQuestion: Omit<ComprehensionQuestion, 'chapter' | 'options'> & { chapter: ResolversParentTypes['Chapter'], options: Array<ResolversParentTypes['ComprehensionQuestionOption']> };
  ComprehensionQuestionOption: Omit<ComprehensionQuestionOption, 'question'> & { question: ResolversParentTypes['ComprehensionQuestion'] };
  Boolean: Scalars['Boolean']['output'];
  CreateStoryInput: CreateStoryInput;
  CreateWorksheetInput: CreateWorksheetInput;
  DateTime: Scalars['DateTime']['output'];
  Exercise: Omit<Exercise, 'submissions' | 'worksheet'> & { submissions?: Maybe<Array<ResolversParentTypes['Submission']>>, worksheet: ResolversParentTypes['Worksheet'] };
  Flashcard: Omit<Flashcard, 'faces' | 'set'> & { faces?: Maybe<Array<ResolversParentTypes['FlashcardFace']>>, set?: Maybe<ResolversParentTypes['FlashcardSet']> };
  FlashcardFace: Omit<FlashcardFace, 'flashcard'> & { flashcard?: Maybe<ResolversParentTypes['Flashcard']> };
  FlashcardFaceInput: FlashcardFaceInput;
  FlashcardSet: Omit<FlashcardSet, 'cards' | 'chatSessions' | 'language' | 'user' | 'vocabularies'> & { cards?: Maybe<Array<ResolversParentTypes['Flashcard']>>, chatSessions?: Maybe<Array<ResolversParentTypes['ChatSession']>>, language?: Maybe<ResolversParentTypes['Language']>, user?: Maybe<ResolversParentTypes['User']>, vocabularies?: Maybe<Array<ResolversParentTypes['Vocabulary']>> };
  JSON: Scalars['JSON']['output'];
  Language: Omit<Language, 'chatSession' | 'flashcardSets' | 'languageFaceConfig' | 'stories' | 'users' | 'vocabularies' | 'worksheets'> & { chatSession?: Maybe<Array<ResolversParentTypes['ChatSession']>>, flashcardSets?: Maybe<Array<ResolversParentTypes['FlashcardSet']>>, languageFaceConfig?: Maybe<ResolversParentTypes['LanguageFaceConfig']>, stories?: Maybe<Array<ResolversParentTypes['Story']>>, users?: Maybe<Array<ResolversParentTypes['User']>>, vocabularies?: Maybe<Array<ResolversParentTypes['Vocabulary']>>, worksheets?: Maybe<Array<ResolversParentTypes['Worksheet']>> };
  LanguageFaceConfig: Omit<LanguageFaceConfig, 'language'> & { language?: Maybe<ResolversParentTypes['Language']> };
  Mutation: {};
  PaginatedStoriesResponse: Omit<PaginatedStoriesResponse, 'stories'> & { stories: Array<ResolversParentTypes['Story']> };
  Query: {};
  ReadingProgress: Omit<ReadingProgress, 'chapterProgresses' | 'story' | 'user'> & { chapterProgresses?: Maybe<Array<ResolversParentTypes['ChapterProgress']>>, story?: Maybe<ResolversParentTypes['Story']>, user?: Maybe<ResolversParentTypes['User']> };
  Story: Omit<Story, 'chapters' | 'comprehensionQuestions' | 'language' | 'readingProgress' | 'tags' | 'user' | 'vocabularies'> & { chapters?: Maybe<Array<ResolversParentTypes['Chapter']>>, comprehensionQuestions?: Maybe<Array<ResolversParentTypes['ComprehensionQuestion']>>, language?: Maybe<ResolversParentTypes['Language']>, readingProgress?: Maybe<Array<ResolversParentTypes['ReadingProgress']>>, tags?: Maybe<Array<ResolversParentTypes['Tag']>>, user?: Maybe<ResolversParentTypes['User']>, vocabularies?: Maybe<Array<ResolversParentTypes['Vocabulary']>> };
  StoryFilters: StoryFilters;
  Submission: Omit<Submission, 'exercise' | 'user'> & { exercise?: Maybe<ResolversParentTypes['Exercise']>, user?: Maybe<ResolversParentTypes['User']> };
  Tag: Omit<Tag, 'stories'> & { stories?: Maybe<Array<ResolversParentTypes['Story']>> };
  UpdateStoryInput: UpdateStoryInput;
  UpdateWorksheetInput: UpdateWorksheetInput;
  User: Omit<User, 'chatSession' | 'flashcardSet' | 'languages' | 'readingProgress' | 'stories' | 'submission' | 'vocabularies' | 'worksheets'> & { chatSession?: Maybe<Array<ResolversParentTypes['ChatSession']>>, flashcardSet?: Maybe<Array<ResolversParentTypes['FlashcardSet']>>, languages?: Maybe<Array<ResolversParentTypes['Language']>>, readingProgress?: Maybe<Array<ResolversParentTypes['ReadingProgress']>>, stories?: Maybe<Array<ResolversParentTypes['Story']>>, submission?: Maybe<Array<ResolversParentTypes['Submission']>>, vocabularies?: Maybe<Array<ResolversParentTypes['Vocabulary']>>, worksheets?: Maybe<Array<ResolversParentTypes['Worksheet']>> };
  Vocabulary: Omit<Vocabulary, 'flashcardSet' | 'language' | 'stories' | 'story' | 'user'> & { flashcardSet?: Maybe<ResolversParentTypes['FlashcardSet']>, language?: Maybe<ResolversParentTypes['Language']>, stories?: Maybe<Array<ResolversParentTypes['Story']>>, story?: Maybe<ResolversParentTypes['Story']>, user?: Maybe<ResolversParentTypes['User']> };
  Worksheet: Omit<Worksheet, 'exercises' | 'language' | 'user'> & { exercises?: Maybe<Array<Maybe<ResolversParentTypes['Exercise']>>>, language?: Maybe<ResolversParentTypes['Language']>, user?: Maybe<ResolversParentTypes['User']> };
}>;

export type ChapterResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Chapter'] = ResolversParentTypes['Chapter']> = ResolversObject<{
  audioUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  chapterProgresses?: Resolver<Maybe<Array<ResolversTypes['ChapterProgress']>>, ParentType, ContextType>;
  comprehensionQuestions?: Resolver<Maybe<Array<ResolversTypes['ComprehensionQuestion']>>, ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  estimatedReadingTime?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  orderIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  story?: Resolver<Maybe<ResolversTypes['Story']>, ParentType, ContextType>;
  storyId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ChapterProgressResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['ChapterProgress'] = ResolversParentTypes['ChapterProgress']> = ResolversObject<{
  chapter?: Resolver<ResolversTypes['Chapter'], ParentType, ContextType>;
  chapterId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  completedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  currentPosition?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastReadAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  progress?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  readingProgress?: Resolver<ResolversTypes['ReadingProgress'], ParentType, ContextType>;
  readingProgressId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  startedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ChatMessageResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['ChatMessage'] = ResolversParentTypes['ChatMessage']> = ResolversObject<{
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  session?: Resolver<ResolversTypes['ChatSession'], ParentType, ContextType>;
  sessionId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ChatSessionResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['ChatSession'] = ResolversParentTypes['ChatSession']> = ResolversObject<{
  chatMessages?: Resolver<Maybe<Array<ResolversTypes['ChatMessage']>>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  flashcardSet?: Resolver<Maybe<ResolversTypes['FlashcardSet']>, ParentType, ContextType>;
  flashcardSetId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  language?: Resolver<ResolversTypes['Language'], ParentType, ContextType>;
  languageName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  messages?: Resolver<Maybe<Array<ResolversTypes['JSON']>>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ComprehensionQuestionResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['ComprehensionQuestion'] = ResolversParentTypes['ComprehensionQuestion']> = ResolversObject<{
  answer?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  chapter?: Resolver<ResolversTypes['Chapter'], ParentType, ContextType>;
  chapterId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  options?: Resolver<Array<ResolversTypes['ComprehensionQuestionOption']>, ParentType, ContextType>;
  question?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ComprehensionQuestionOptionResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['ComprehensionQuestionOption'] = ResolversParentTypes['ComprehensionQuestionOption']> = ResolversObject<{
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isCorrect?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  order?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  question?: Resolver<ResolversTypes['ComprehensionQuestion'], ParentType, ContextType>;
  questionId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type ExerciseResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Exercise'] = ResolversParentTypes['Exercise']> = ResolversObject<{
  content?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  order?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  submissions?: Resolver<Maybe<Array<ResolversTypes['Submission']>>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['ExerciseType'], ParentType, ContextType>;
  worksheet?: Resolver<ResolversTypes['Worksheet'], ParentType, ContextType>;
  worksheetId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ExerciseTypeResolvers = EnumResolverSignature<{ FILL_IN_BLANK?: any, MATCHING?: any, MULTIPLE_CHOICE?: any, SENTENCE_CONSTRUCTION?: any, TRANSLATION?: any }, ResolversTypes['ExerciseType']>;

export type FaceTypeResolvers = EnumResolverSignature<{ AUDIO_NATIVE?: any, AUDIO_SLOW?: any, BACK?: any, CHARACTER?: any, CONJUGATION?: any, CONTEXT_NOTES?: any, DEFINITION?: any, EXAMPLE_SENTENCE?: any, EXAMPLE_TRANSLATION?: any, FRONT?: any, GENDER?: any, HIRAGANA?: any, IMAGE?: any, KATAKANA?: any, MNEMONIC?: any, NOTES?: any, OTHER?: any, PART_OF_SPEECH?: any, PINYIN?: any, PLURAL_FORM?: any, ROMAJI?: any, TRANSLATION?: any, TRANSLITERATION?: any, VIDEO?: any }, ResolversTypes['FaceType']>;

export type FlashcardResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Flashcard'] = ResolversParentTypes['Flashcard']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  easeFactor?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  faces?: Resolver<Maybe<Array<ResolversTypes['FlashcardFace']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  interval?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  nextReviewAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  repetitions?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  set?: Resolver<Maybe<ResolversTypes['FlashcardSet']>, ParentType, ContextType>;
  setId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FlashcardFaceResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['FlashcardFace'] = ResolversParentTypes['FlashcardFace']> = ResolversObject<{
  audioUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  flashcard?: Resolver<Maybe<ResolversTypes['Flashcard']>, ParentType, ContextType>;
  flashcardId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  imageUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  order?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['FaceType'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FlashcardSetResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['FlashcardSet'] = ResolversParentTypes['FlashcardSet']> = ResolversObject<{
  cards?: Resolver<Maybe<Array<ResolversTypes['Flashcard']>>, ParentType, ContextType>;
  chatSessions?: Resolver<Maybe<Array<ResolversTypes['ChatSession']>>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  language?: Resolver<Maybe<ResolversTypes['Language']>, ParentType, ContextType>;
  languageName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  vocabularies?: Resolver<Maybe<Array<ResolversTypes['Vocabulary']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface JSONScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type LanguageResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Language'] = ResolversParentTypes['Language']> = ResolversObject<{
  chatSession?: Resolver<Maybe<Array<ResolversTypes['ChatSession']>>, ParentType, ContextType>;
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  flashcardSets?: Resolver<Maybe<Array<ResolversTypes['FlashcardSet']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  languageFaceConfig?: Resolver<Maybe<ResolversTypes['LanguageFaceConfig']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  stories?: Resolver<Maybe<Array<ResolversTypes['Story']>>, ParentType, ContextType>;
  users?: Resolver<Maybe<Array<ResolversTypes['User']>>, ParentType, ContextType>;
  vocabularies?: Resolver<Maybe<Array<ResolversTypes['Vocabulary']>>, ParentType, ContextType>;
  worksheets?: Resolver<Maybe<Array<ResolversTypes['Worksheet']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LanguageFaceConfigResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['LanguageFaceConfig'] = ResolversParentTypes['LanguageFaceConfig']> = ResolversObject<{
  config?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  language?: Resolver<Maybe<ResolversTypes['Language']>, ParentType, ContextType>;
  languageName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  createFlashcard?: Resolver<ResolversTypes['Flashcard'], ParentType, ContextType, RequireFields<MutationcreateFlashcardArgs, 'faces' | 'setId'>>;
  createFlashcardSet?: Resolver<ResolversTypes['FlashcardSet'], ParentType, ContextType, RequireFields<MutationcreateFlashcardSetArgs, 'languageName' | 'name'>>;
  createLanguage?: Resolver<ResolversTypes['Language'], ParentType, ContextType, RequireFields<MutationcreateLanguageArgs, 'code' | 'name'>>;
  createStory?: Resolver<ResolversTypes['Story'], ParentType, ContextType, RequireFields<MutationcreateStoryArgs, 'input'>>;
  createTag?: Resolver<ResolversTypes['Tag'], ParentType, ContextType, RequireFields<MutationcreateTagArgs, 'name'>>;
  createUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationcreateUserArgs, 'languages' | 'username'>>;
  createVocabulary?: Resolver<ResolversTypes['Vocabulary'], ParentType, ContextType, RequireFields<MutationcreateVocabularyArgs, 'languageName' | 'meaning' | 'word'>>;
  createWorksheet?: Resolver<Maybe<ResolversTypes['Worksheet']>, ParentType, ContextType, RequireFields<MutationcreateWorksheetArgs, 'input'>>;
  deleteFlashcard?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationdeleteFlashcardArgs, 'id'>>;
  deleteFlashcardSet?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationdeleteFlashcardSetArgs, 'id'>>;
  deleteLanguage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationdeleteLanguageArgs, 'id'>>;
  deleteStory?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationdeleteStoryArgs, 'id'>>;
  deleteTag?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationdeleteTagArgs, 'id'>>;
  deleteUser?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationdeleteUserArgs, 'id'>>;
  deleteVocabulary?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationdeleteVocabularyArgs, 'id'>>;
  deleteWorksheet?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationdeleteWorksheetArgs, 'id'>>;
  updateFlashcard?: Resolver<ResolversTypes['Flashcard'], ParentType, ContextType, RequireFields<MutationupdateFlashcardArgs, 'faces' | 'id'>>;
  updateFlashcardSet?: Resolver<ResolversTypes['FlashcardSet'], ParentType, ContextType, RequireFields<MutationupdateFlashcardSetArgs, 'id'>>;
  updateLanguage?: Resolver<ResolversTypes['Language'], ParentType, ContextType, RequireFields<MutationupdateLanguageArgs, 'id'>>;
  updateStory?: Resolver<ResolversTypes['Story'], ParentType, ContextType, RequireFields<MutationupdateStoryArgs, 'id' | 'input'>>;
  updateTag?: Resolver<ResolversTypes['Tag'], ParentType, ContextType, RequireFields<MutationupdateTagArgs, 'id' | 'name'>>;
  updateUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationupdateUserArgs, 'id' | 'username'>>;
  updateVocabulary?: Resolver<ResolversTypes['Vocabulary'], ParentType, ContextType, RequireFields<MutationupdateVocabularyArgs, 'id'>>;
  updateWorksheet?: Resolver<Maybe<ResolversTypes['Worksheet']>, ParentType, ContextType, RequireFields<MutationupdateWorksheetArgs, 'id' | 'input'>>;
}>;

export type PaginatedStoriesResponseResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['PaginatedStoriesResponse'] = ResolversParentTypes['PaginatedStoriesResponse']> = ResolversObject<{
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  stories?: Resolver<Array<ResolversTypes['Story']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  flashcard?: Resolver<Maybe<ResolversTypes['Flashcard']>, ParentType, ContextType, RequireFields<QueryflashcardArgs, 'id'>>;
  flashcardSet?: Resolver<Maybe<ResolversTypes['FlashcardSet']>, ParentType, ContextType, RequireFields<QueryflashcardSetArgs, 'id'>>;
  flashcardSets?: Resolver<Array<ResolversTypes['FlashcardSet']>, ParentType, ContextType>;
  flashcardSetsByLanguage?: Resolver<Array<ResolversTypes['FlashcardSet']>, ParentType, ContextType, RequireFields<QueryflashcardSetsByLanguageArgs, 'languageName'>>;
  language?: Resolver<Maybe<ResolversTypes['Language']>, ParentType, ContextType, RequireFields<QuerylanguageArgs, 'id'>>;
  languageByName?: Resolver<Maybe<ResolversTypes['Language']>, ParentType, ContextType, RequireFields<QuerylanguageByNameArgs, 'name'>>;
  languageFaceConfig?: Resolver<Maybe<ResolversTypes['LanguageFaceConfig']>, ParentType, ContextType, RequireFields<QuerylanguageFaceConfigArgs, 'languageName'>>;
  languages?: Resolver<Array<ResolversTypes['Language']>, ParentType, ContextType>;
  publicStories?: Resolver<ResolversTypes['PaginatedStoriesResponse'], ParentType, ContextType, RequireFields<QuerypublicStoriesArgs, 'orderBy' | 'orderDirection' | 'page' | 'pageSize'>>;
  stories?: Resolver<Array<ResolversTypes['Story']>, ParentType, ContextType>;
  story?: Resolver<Maybe<ResolversTypes['Story']>, ParentType, ContextType, RequireFields<QuerystoryArgs, 'id'>>;
  tag?: Resolver<Maybe<ResolversTypes['Tag']>, ParentType, ContextType, RequireFields<QuerytagArgs, 'id'>>;
  tags?: Resolver<Array<ResolversTypes['Tag']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryuserArgs, 'userId'>>;
  users?: Resolver<Maybe<Array<ResolversTypes['User']>>, ParentType, ContextType>;
  vocabularies?: Resolver<Array<ResolversTypes['Vocabulary']>, ParentType, ContextType>;
  vocabulary?: Resolver<Maybe<ResolversTypes['Vocabulary']>, ParentType, ContextType, RequireFields<QueryvocabularyArgs, 'id'>>;
  worksheet?: Resolver<Maybe<ResolversTypes['Worksheet']>, ParentType, ContextType, RequireFields<QueryworksheetArgs, 'id'>>;
  worksheets?: Resolver<Array<ResolversTypes['Worksheet']>, ParentType, ContextType>;
}>;

export type ReadingProgressResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['ReadingProgress'] = ResolversParentTypes['ReadingProgress']> = ResolversObject<{
  addedToLibraryAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  chapterProgresses?: Resolver<Maybe<Array<ResolversTypes['ChapterProgress']>>, ParentType, ContextType>;
  completedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  currentPosition?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastReadAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  progress?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  rating?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  startedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  story?: Resolver<Maybe<ResolversTypes['Story']>, ParentType, ContextType>;
  storyId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StoryResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Story'] = ResolversParentTypes['Story']> = ResolversObject<{
  audioUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  averageRating?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  chapters?: Resolver<Maybe<Array<ResolversTypes['Chapter']>>, ParentType, ContextType>;
  completedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  comprehensionQuestions?: Resolver<Maybe<Array<ResolversTypes['ComprehensionQuestion']>>, ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  difficulty?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  imageUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isPublished?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isReviewed?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  language?: Resolver<Maybe<ResolversTypes['Language']>, ParentType, ContextType>;
  languageName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  readCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  readingProgress?: Resolver<Maybe<Array<ResolversTypes['ReadingProgress']>>, ParentType, ContextType>;
  tags?: Resolver<Maybe<Array<ResolversTypes['Tag']>>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  translatedTitle?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  vocabularies?: Resolver<Maybe<Array<ResolversTypes['Vocabulary']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SubmissionResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Submission'] = ResolversParentTypes['Submission']> = ResolversObject<{
  answer?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  exercise?: Resolver<Maybe<ResolversTypes['Exercise']>, ParentType, ContextType>;
  exerciseId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isCorrect?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TagResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Tag'] = ResolversParentTypes['Tag']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  stories?: Resolver<Maybe<Array<ResolversTypes['Story']>>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  chatSession?: Resolver<Maybe<Array<ResolversTypes['ChatSession']>>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  flashcardSet?: Resolver<Maybe<Array<ResolversTypes['FlashcardSet']>>, ParentType, ContextType>;
  languages?: Resolver<Maybe<Array<ResolversTypes['Language']>>, ParentType, ContextType>;
  readingProgress?: Resolver<Maybe<Array<ResolversTypes['ReadingProgress']>>, ParentType, ContextType>;
  stories?: Resolver<Maybe<Array<ResolversTypes['Story']>>, ParentType, ContextType>;
  submission?: Resolver<Maybe<Array<ResolversTypes['Submission']>>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  vocabularies?: Resolver<Maybe<Array<ResolversTypes['Vocabulary']>>, ParentType, ContextType>;
  worksheets?: Resolver<Maybe<Array<ResolversTypes['Worksheet']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VocabularyResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Vocabulary'] = ResolversParentTypes['Vocabulary']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  example?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  flashcardSet?: Resolver<Maybe<ResolversTypes['FlashcardSet']>, ParentType, ContextType>;
  flashcardSetId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  language?: Resolver<Maybe<ResolversTypes['Language']>, ParentType, ContextType>;
  languageName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  meaning?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  stories?: Resolver<Maybe<Array<ResolversTypes['Story']>>, ParentType, ContextType>;
  story?: Resolver<Maybe<ResolversTypes['Story']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  word?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WorksheetResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Worksheet'] = ResolversParentTypes['Worksheet']> = ResolversObject<{
  completedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  exercises?: Resolver<Maybe<Array<Maybe<ResolversTypes['Exercise']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  language?: Resolver<Maybe<ResolversTypes['Language']>, ParentType, ContextType>;
  languageName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MyContext> = ResolversObject<{
  Chapter?: ChapterResolvers<ContextType>;
  ChapterProgress?: ChapterProgressResolvers<ContextType>;
  ChatMessage?: ChatMessageResolvers<ContextType>;
  ChatSession?: ChatSessionResolvers<ContextType>;
  ComprehensionQuestion?: ComprehensionQuestionResolvers<ContextType>;
  ComprehensionQuestionOption?: ComprehensionQuestionOptionResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Exercise?: ExerciseResolvers<ContextType>;
  ExerciseType?: ExerciseTypeResolvers;
  FaceType?: FaceTypeResolvers;
  Flashcard?: FlashcardResolvers<ContextType>;
  FlashcardFace?: FlashcardFaceResolvers<ContextType>;
  FlashcardSet?: FlashcardSetResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  Language?: LanguageResolvers<ContextType>;
  LanguageFaceConfig?: LanguageFaceConfigResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  PaginatedStoriesResponse?: PaginatedStoriesResponseResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  ReadingProgress?: ReadingProgressResolvers<ContextType>;
  Story?: StoryResolvers<ContextType>;
  Submission?: SubmissionResolvers<ContextType>;
  Tag?: TagResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  Vocabulary?: VocabularyResolvers<ContextType>;
  Worksheet?: WorksheetResolvers<ContextType>;
}>;

