/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
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
  session?: Maybe<ChatSession>;
  sessionId: Scalars['ID']['output'];
  timestamp?: Maybe<Scalars['DateTime']['output']>;
};

export type ChatSession = {
  __typename?: 'ChatSession';
  createdAt: Scalars['DateTime']['output'];
  difficulty: Scalars['Int']['output'];
  flashcardSet?: Maybe<FlashcardSet>;
  flashcardSetId?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  language?: Maybe<Language>;
  languageName: Scalars['String']['output'];
  messages?: Maybe<Array<ChatMessage>>;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user?: Maybe<User>;
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

export enum ExerciseType {
  FillInBlank = 'FILL_IN_BLANK',
  Matching = 'MATCHING',
  MultipleChoice = 'MULTIPLE_CHOICE',
  SentenceConstruction = 'SENTENCE_CONSTRUCTION',
  Translation = 'TRANSLATION'
}

export enum FaceType {
  AudioNative = 'AUDIO_NATIVE',
  AudioSlow = 'AUDIO_SLOW',
  Character = 'CHARACTER',
  Conjugation = 'CONJUGATION',
  ContextNotes = 'CONTEXT_NOTES',
  Definition = 'DEFINITION',
  ExampleSentence = 'EXAMPLE_SENTENCE',
  ExampleSentenceTranslation = 'EXAMPLE_SENTENCE_TRANSLATION',
  Gender = 'GENDER',
  Hiragana = 'HIRAGANA',
  Image = 'IMAGE',
  Katakana = 'KATAKANA',
  Mnemonic = 'MNEMONIC',
  Notes = 'NOTES',
  Other = 'OTHER',
  PartOfSpeech = 'PART_OF_SPEECH',
  Pinyin = 'PINYIN',
  PluralForm = 'PLURAL_FORM',
  Romaji = 'ROMAJI',
  Translation = 'TRANSLATION',
  Transliteration = 'TRANSLITERATION',
  Video = 'VIDEO',
  Word = 'WORD'
}

export type Flashcard = {
  __typename?: 'Flashcard';
  createdAt: Scalars['DateTime']['output'];
  easeFactor?: Maybe<Scalars['Float']['output']>;
  faces?: Maybe<Array<FlashcardFace>>;
  id: Scalars['ID']['output'];
  interval?: Maybe<Scalars['Float']['output']>;
  n?: Maybe<Scalars['Int']['output']>;
  nextReviewAt?: Maybe<Scalars['DateTime']['output']>;
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
  isFront: Scalars['Boolean']['output'];
  order: Scalars['Int']['output'];
  type: FaceType;
  updatedAt: Scalars['DateTime']['output'];
};

export type FlashcardFaceInput = {
  audioUrl?: InputMaybe<Scalars['String']['input']>;
  content: Scalars['String']['input'];
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  isFront: Scalars['Boolean']['input'];
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
  lastFrontFace?: Maybe<FaceType>;
  name: Scalars['String']['output'];
  totalCards: Scalars['Int']['output'];
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
  createChatMessage?: Maybe<Array<Maybe<ChatMessage>>>;
  createChatSession?: Maybe<ChatSession>;
  createFlashcard: Flashcard;
  createFlashcardSet: FlashcardSet;
  createLanguage: Language;
  createStory: Story;
  createTag: Tag;
  createUser: User;
  createVocabulary: Vocabulary;
  createWorksheet?: Maybe<Worksheet>;
  deleteChatSession: Scalars['Boolean']['output'];
  deleteFlashcard: Scalars['Boolean']['output'];
  deleteFlashcardSet: Scalars['Boolean']['output'];
  deleteLanguage: Scalars['Boolean']['output'];
  deleteStory: Scalars['Boolean']['output'];
  deleteTag: Scalars['Boolean']['output'];
  deleteUser: Scalars['Boolean']['output'];
  deleteVocabulary: Scalars['Boolean']['output'];
  deleteWorksheet: Scalars['Boolean']['output'];
  generateFlashcardFaces: Array<GenerateFlashcardFacesPayload>;
  updateFlashcard: Flashcard;
  updateFlashcardSet: FlashcardSet;
  updateLanguage: Language;
  updateStory: Story;
  updateStudiedFlashcard: Flashcard;
  updateTag: Tag;
  updateUser: User;
  updateVocabulary: Vocabulary;
  updateWorksheet?: Maybe<Worksheet>;
};


export type MutationCreateChatMessageArgs = {
  content: Scalars['String']['input'];
  role: Scalars['String']['input'];
  sessionId: Scalars['ID']['input'];
};


export type MutationCreateChatSessionArgs = {
  chatMode: Scalars['String']['input'];
  difficulty: Scalars['Int']['input'];
  flashcardMode: Scalars['Boolean']['input'];
  flashcardSetId?: InputMaybe<Scalars['ID']['input']>;
  languageName: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateFlashcardArgs = {
  faces: Array<FlashcardFaceInput>;
  setId: Scalars['ID']['input'];
};


export type MutationCreateFlashcardSetArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  languageName: Scalars['String']['input'];
  name: Scalars['String']['input'];
};


export type MutationCreateLanguageArgs = {
  code: Scalars['String']['input'];
  name: Scalars['String']['input'];
};


export type MutationCreateStoryArgs = {
  input: CreateStoryInput;
};


export type MutationCreateTagArgs = {
  name: Scalars['String']['input'];
};


export type MutationCreateUserArgs = {
  languages: Array<Scalars['String']['input']>;
  username: Scalars['String']['input'];
};


export type MutationCreateVocabularyArgs = {
  example?: InputMaybe<Scalars['String']['input']>;
  languageName: Scalars['String']['input'];
  meaning: Scalars['String']['input'];
  word: Scalars['String']['input'];
};


export type MutationCreateWorksheetArgs = {
  input: CreateWorksheetInput;
};


export type MutationDeleteChatSessionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteFlashcardArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteFlashcardSetArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteLanguageArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteStoryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTagArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteVocabularyArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteWorksheetArgs = {
  id: Scalars['Int']['input'];
};


export type MutationGenerateFlashcardFacesArgs = {
  input: GenerateFlashcardFacesInput;
};


export type MutationUpdateFlashcardArgs = {
  faces: Array<FlashcardFaceInput>;
  id: Scalars['ID']['input'];
};


export type MutationUpdateFlashcardSetArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  languageName?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateLanguageArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateStoryArgs = {
  id: Scalars['ID']['input'];
  input: UpdateStoryInput;
};


export type MutationUpdateStudiedFlashcardArgs = {
  id: Scalars['ID']['input'];
  score: Scalars['Int']['input'];
};


export type MutationUpdateTagArgs = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID']['input'];
  username: Scalars['String']['input'];
};


export type MutationUpdateVocabularyArgs = {
  example?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  languageName?: InputMaybe<Scalars['String']['input']>;
  meaning?: InputMaybe<Scalars['String']['input']>;
  word?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateWorksheetArgs = {
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
  chatSession?: Maybe<ChatSession>;
  chatSessions?: Maybe<Array<ChatSession>>;
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


export type QueryChatSessionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFlashcardArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFlashcardSetArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFlashcardSetsByLanguageArgs = {
  languageName: Scalars['String']['input'];
};


export type QueryLanguageArgs = {
  id: Scalars['ID']['input'];
};


export type QueryLanguageByNameArgs = {
  name: Scalars['String']['input'];
};


export type QueryLanguageFaceConfigArgs = {
  languageName: Scalars['String']['input'];
};


export type QueryPublicStoriesArgs = {
  filters?: InputMaybe<StoryFilters>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryStoryArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTagArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUserArgs = {
  userId: Scalars['ID']['input'];
};


export type QueryVocabularyArgs = {
  id: Scalars['ID']['input'];
};


export type QueryWorksheetArgs = {
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
  flashcardSets?: Maybe<Array<FlashcardSet>>;
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

export type GenerateFlashcardFacesInput = {
  faces: Array<FaceType>;
  languageName: Scalars['String']['input'];
  word: Scalars['String']['input'];
};

export type GenerateFlashcardFacesPayload = {
  __typename?: 'generateFlashcardFacesPayload';
  content: Scalars['String']['output'];
  faceType: Scalars['String']['output'];
};

export type CreateChatSessionMutationVariables = Exact<{
  languageName: Scalars['String']['input'];
  difficulty: Scalars['Int']['input'];
  flashcardMode: Scalars['Boolean']['input'];
  chatMode: Scalars['String']['input'];
}>;


export type CreateChatSessionMutation = { __typename?: 'Mutation', createChatSession?: { __typename?: 'ChatSession', updatedAt: any, name: string, languageName: string, id: string, flashcardSetId?: string | null, difficulty: number, createdAt: any } | null };

export type CreateChatMessageMutationVariables = Exact<{
  sessionId: Scalars['ID']['input'];
  role: Scalars['String']['input'];
  content: Scalars['String']['input'];
}>;


export type CreateChatMessageMutation = { __typename?: 'Mutation', createChatMessage?: Array<{ __typename?: 'ChatMessage', content: string, id: string, role: string, sessionId: string } | null> | null };

export type ChatSessionQueryVariables = Exact<{
  chatSessionId: Scalars['ID']['input'];
}>;


export type ChatSessionQuery = { __typename?: 'Query', chatSession?: { __typename?: 'ChatSession', name: string, languageName: string, difficulty: number, messages?: Array<{ __typename?: 'ChatMessage', content: string, role: string }> | null } | null };

export type GetFlashcardSetsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFlashcardSetsQuery = { __typename?: 'Query', flashcardSets: Array<{ __typename?: 'FlashcardSet', description?: string | null, id: string, name: string, languageName: string, userId: string }> };

export type FlashcardSetQueryVariables = Exact<{
  flashcardSetId: Scalars['ID']['input'];
}>;


export type FlashcardSetQuery = { __typename?: 'Query', flashcardSet?: { __typename?: 'FlashcardSet', name: string, languageName: string, id: string, description?: string | null, lastFrontFace?: FaceType | null, cards?: Array<{ __typename?: 'Flashcard', id: string, nextReviewAt?: any | null, interval?: number | null, faces?: Array<{ __typename?: 'FlashcardFace', id: string, order: number, type: FaceType, content: string, isFront: boolean }> | null }> | null } | null };

export type CreateFlashcardSetMutationVariables = Exact<{
  languageName: Scalars['String']['input'];
  name: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateFlashcardSetMutation = { __typename?: 'Mutation', createFlashcardSet: { __typename?: 'FlashcardSet', description?: string | null, id: string, name: string, userId: string } };

export type DeleteFlashcardSetMutationVariables = Exact<{
  deleteFlashcardSetId: Scalars['ID']['input'];
}>;


export type DeleteFlashcardSetMutation = { __typename?: 'Mutation', deleteFlashcardSet: boolean };

export type UpdateFlashcardSetMutationVariables = Exact<{
  updateFlashcardSetId: Scalars['ID']['input'];
  languageName?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateFlashcardSetMutation = { __typename?: 'Mutation', updateFlashcardSet: { __typename?: 'FlashcardSet', id: string, description?: string | null, name: string, languageName: string } };

export type GetFlashcardQueryVariables = Exact<{
  flashcardId: Scalars['ID']['input'];
}>;


export type GetFlashcardQuery = { __typename?: 'Query', flashcard?: { __typename?: 'Flashcard', id: string, faces?: Array<{ __typename?: 'FlashcardFace', id: string, type: FaceType, content: string }> | null } | null };

export type CreateFlashcardMutationVariables = Exact<{
  setId: Scalars['ID']['input'];
  faces: Array<FlashcardFaceInput> | FlashcardFaceInput;
}>;


export type CreateFlashcardMutation = { __typename?: 'Mutation', createFlashcard: { __typename?: 'Flashcard', setId: string, nextReviewAt?: any | null, faces?: Array<{ __typename?: 'FlashcardFace', id: string, type: FaceType, content: string }> | null } };

export type UpdateFlashcardMutationVariables = Exact<{
  updateFlashcardId: Scalars['ID']['input'];
  faces: Array<FlashcardFaceInput> | FlashcardFaceInput;
}>;


export type UpdateFlashcardMutation = { __typename?: 'Mutation', updateFlashcard: { __typename?: 'Flashcard', id: string, faces?: Array<{ __typename?: 'FlashcardFace', id: string, type: FaceType, content: string }> | null } };

export type DeleteFlashcardMutationVariables = Exact<{
  deleteFlashcardId: Scalars['ID']['input'];
}>;


export type DeleteFlashcardMutation = { __typename?: 'Mutation', deleteFlashcard: boolean };

export type GenerateFlashcardFacesMutationVariables = Exact<{
  input: GenerateFlashcardFacesInput;
}>;


export type GenerateFlashcardFacesMutation = { __typename?: 'Mutation', generateFlashcardFaces: Array<{ __typename?: 'generateFlashcardFacesPayload', content: string, faceType: string }> };

export type UpdateStudiedFlashcardMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  score: Scalars['Int']['input'];
}>;


export type UpdateStudiedFlashcardMutation = { __typename?: 'Mutation', updateStudiedFlashcard: { __typename?: 'Flashcard', id: string, nextReviewAt?: any | null } };

export type GetLanguagesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLanguagesQuery = { __typename?: 'Query', languages: Array<{ __typename?: 'Language', id: string, name: string }> };

export type LanaguageFaceConfigQueryVariables = Exact<{
  languageName: Scalars['String']['input'];
}>;


export type LanaguageFaceConfigQuery = { __typename?: 'Query', languageFaceConfig?: { __typename?: 'LanguageFaceConfig', languageName: string, config: any } | null };

export type GetStoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetStoriesQuery = { __typename?: 'Query', stories: Array<{ __typename?: 'Story', completedAt?: any | null, description: string, id: string, content: string, difficulty: number, imageUrl?: string | null, languageName: string, title: string, translatedTitle: string, isPublished: boolean, tags?: Array<{ __typename?: 'Tag', name: string, id: string }> | null, chapters?: Array<{ __typename?: 'Chapter', title: string, content: string }> | null }> };

export type CreateStoryMutationVariables = Exact<{
  input: CreateStoryInput;
}>;


export type CreateStoryMutation = { __typename?: 'Mutation', createStory: { __typename?: 'Story', completedAt?: any | null, description: string, content: string, id: string, difficulty: number, imageUrl?: string | null, languageName: string, title: string, translatedTitle: string, isPublished: boolean, tags?: Array<{ __typename?: 'Tag', id: string, name: string }> | null } };

export type UpdateStoryMutationVariables = Exact<{
  updateStoryId: Scalars['ID']['input'];
  input: UpdateStoryInput;
}>;


export type UpdateStoryMutation = { __typename?: 'Mutation', updateStory: { __typename?: 'Story', completedAt?: any | null, description: string, content: string, id: string, difficulty: number, imageUrl?: string | null, languageName: string, title: string, translatedTitle: string, isPublished: boolean, tags?: Array<{ __typename?: 'Tag', id: string, name: string }> | null } };

export type DeleteStoryMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteStoryMutation = { __typename?: 'Mutation', deleteStory: boolean };

export type GetPublicStoriesQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  filters?: InputMaybe<StoryFilters>;
}>;


export type GetPublicStoriesQuery = { __typename?: 'Query', publicStories: { __typename?: 'PaginatedStoriesResponse', hasNextPage: boolean, totalCount: number, stories: Array<{ __typename?: 'Story', id: string, title: string, description: string, difficulty: number, languageName: string, user?: { __typename?: 'User', username: string } | null, tags?: Array<{ __typename?: 'Tag', name: string }> | null }> } };

export type GetStoryQueryVariables = Exact<{
  storyId: Scalars['ID']['input'];
}>;


export type GetStoryQuery = { __typename?: 'Query', story?: { __typename?: 'Story', title: string, translatedTitle: string, content: string } | null };

export type CreateUserMutationVariables = Exact<{
  username: Scalars['String']['input'];
  languages: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', username: string, languages?: Array<{ __typename?: 'Language', name: string }> | null } };

export type GetUserQueryVariables = Exact<{
  userId: Scalars['ID']['input'];
}>;


export type GetUserQuery = { __typename?: 'Query', user?: { __typename?: 'User', username: string, userId: string, stories?: Array<{ __typename?: 'Story', id: string, languageName: string, title: string, difficulty: number, description: string, tags?: Array<{ __typename?: 'Tag', id: string, name: string }> | null }> | null, flashcardSets?: Array<{ __typename?: 'FlashcardSet', id: string, name: string, description?: string | null, totalCards: number, languageName: string }> | null } | null };

export type GetVocabulariesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetVocabulariesQuery = { __typename?: 'Query', vocabularies: Array<{ __typename?: 'Vocabulary', id: string, languageName: string, word: string, meaning: string, example?: string | null }> };

export type CreateVocabularyMutationVariables = Exact<{
  word: Scalars['String']['input'];
  meaning: Scalars['String']['input'];
  example?: InputMaybe<Scalars['String']['input']>;
  languageName: Scalars['String']['input'];
}>;


export type CreateVocabularyMutation = { __typename?: 'Mutation', createVocabulary: { __typename?: 'Vocabulary', example?: string | null, id: string, meaning: string } };

export type UpdateVocabularyMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  word: Scalars['String']['input'];
  meaning: Scalars['String']['input'];
  example?: InputMaybe<Scalars['String']['input']>;
  languageName: Scalars['String']['input'];
}>;


export type UpdateVocabularyMutation = { __typename?: 'Mutation', updateVocabulary: { __typename?: 'Vocabulary', id: string, word: string, meaning: string, example?: string | null, languageName: string } };

export type DeleteVocabularyMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteVocabularyMutation = { __typename?: 'Mutation', deleteVocabulary: boolean };


export const CreateChatSessionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateChatSession"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"languageName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"difficulty"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"flashcardMode"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"chatMode"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createChatSession"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"languageName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"languageName"}}},{"kind":"Argument","name":{"kind":"Name","value":"difficulty"},"value":{"kind":"Variable","name":{"kind":"Name","value":"difficulty"}}},{"kind":"Argument","name":{"kind":"Name","value":"flashcardMode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"flashcardMode"}}},{"kind":"Argument","name":{"kind":"Name","value":"chatMode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"chatMode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"languageName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"flashcardSetId"}},{"kind":"Field","name":{"kind":"Name","value":"difficulty"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<CreateChatSessionMutation, CreateChatSessionMutationVariables>;
export const CreateChatMessageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateChatMessage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sessionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"role"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"content"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createChatMessage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sessionId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sessionId"}}},{"kind":"Argument","name":{"kind":"Name","value":"role"},"value":{"kind":"Variable","name":{"kind":"Name","value":"role"}}},{"kind":"Argument","name":{"kind":"Name","value":"content"},"value":{"kind":"Variable","name":{"kind":"Name","value":"content"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"sessionId"}}]}}]}}]} as unknown as DocumentNode<CreateChatMessageMutation, CreateChatMessageMutationVariables>;
export const ChatSessionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ChatSession"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"chatSessionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"chatSession"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"chatSessionId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"messages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"languageName"}},{"kind":"Field","name":{"kind":"Name","value":"difficulty"}}]}}]}}]} as unknown as DocumentNode<ChatSessionQuery, ChatSessionQueryVariables>;
export const GetFlashcardSetsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetFlashcardSets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"flashcardSets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"languageName"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}}]}}]} as unknown as DocumentNode<GetFlashcardSetsQuery, GetFlashcardSetsQueryVariables>;
export const FlashcardSetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FlashcardSet"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"flashcardSetId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"flashcardSet"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"flashcardSetId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"languageName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"lastFrontFace"}},{"kind":"Field","name":{"kind":"Name","value":"cards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nextReviewAt"}},{"kind":"Field","name":{"kind":"Name","value":"interval"}},{"kind":"Field","name":{"kind":"Name","value":"faces"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"order"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"isFront"}}]}}]}}]}}]}}]} as unknown as DocumentNode<FlashcardSetQuery, FlashcardSetQueryVariables>;
export const CreateFlashcardSetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateFlashcardSet"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"languageName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createFlashcardSet"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"languageName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"languageName"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}}]}}]} as unknown as DocumentNode<CreateFlashcardSetMutation, CreateFlashcardSetMutationVariables>;
export const DeleteFlashcardSetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteFlashcardSet"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteFlashcardSetId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteFlashcardSet"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteFlashcardSetId"}}}]}]}}]} as unknown as DocumentNode<DeleteFlashcardSetMutation, DeleteFlashcardSetMutationVariables>;
export const UpdateFlashcardSetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateFlashcardSet"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateFlashcardSetId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"languageName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateFlashcardSet"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateFlashcardSetId"}}},{"kind":"Argument","name":{"kind":"Name","value":"languageName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"languageName"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"languageName"}}]}}]}}]} as unknown as DocumentNode<UpdateFlashcardSetMutation, UpdateFlashcardSetMutationVariables>;
export const GetFlashcardDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetFlashcard"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"flashcardId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"flashcard"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"flashcardId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"faces"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]}}]} as unknown as DocumentNode<GetFlashcardQuery, GetFlashcardQueryVariables>;
export const CreateFlashcardDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateFlashcard"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"setId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"faces"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FlashcardFaceInput"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createFlashcard"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"setId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"setId"}}},{"kind":"Argument","name":{"kind":"Name","value":"faces"},"value":{"kind":"Variable","name":{"kind":"Name","value":"faces"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setId"}},{"kind":"Field","name":{"kind":"Name","value":"nextReviewAt"}},{"kind":"Field","name":{"kind":"Name","value":"faces"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]}}]} as unknown as DocumentNode<CreateFlashcardMutation, CreateFlashcardMutationVariables>;
export const UpdateFlashcardDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateFlashcard"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateFlashcardId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"faces"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FlashcardFaceInput"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateFlashcard"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateFlashcardId"}}},{"kind":"Argument","name":{"kind":"Name","value":"faces"},"value":{"kind":"Variable","name":{"kind":"Name","value":"faces"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"faces"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateFlashcardMutation, UpdateFlashcardMutationVariables>;
export const DeleteFlashcardDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteFlashcard"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteFlashcardId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteFlashcard"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteFlashcardId"}}}]}]}}]} as unknown as DocumentNode<DeleteFlashcardMutation, DeleteFlashcardMutationVariables>;
export const GenerateFlashcardFacesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"GenerateFlashcardFaces"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"generateFlashcardFacesInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"generateFlashcardFaces"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"faceType"}}]}}]}}]} as unknown as DocumentNode<GenerateFlashcardFacesMutation, GenerateFlashcardFacesMutationVariables>;
export const UpdateStudiedFlashcardDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateStudiedFlashcard"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"score"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateStudiedFlashcard"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"score"},"value":{"kind":"Variable","name":{"kind":"Name","value":"score"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nextReviewAt"}}]}}]}}]} as unknown as DocumentNode<UpdateStudiedFlashcardMutation, UpdateStudiedFlashcardMutationVariables>;
export const GetLanguagesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLanguages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"languages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetLanguagesQuery, GetLanguagesQueryVariables>;
export const LanaguageFaceConfigDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"LanaguageFaceConfig"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"languageName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"languageFaceConfig"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"languageName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"languageName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"languageName"}},{"kind":"Field","name":{"kind":"Name","value":"config"}}]}}]}}]} as unknown as DocumentNode<LanaguageFaceConfigQuery, LanaguageFaceConfigQueryVariables>;
export const GetStoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetStories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"completedAt"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"difficulty"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"languageName"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"translatedTitle"}},{"kind":"Field","name":{"kind":"Name","value":"isPublished"}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"chapters"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]}}]} as unknown as DocumentNode<GetStoriesQuery, GetStoriesQueryVariables>;
export const CreateStoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateStory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateStoryInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createStory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"completedAt"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"difficulty"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"languageName"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"translatedTitle"}},{"kind":"Field","name":{"kind":"Name","value":"isPublished"}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<CreateStoryMutation, CreateStoryMutationVariables>;
export const UpdateStoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateStory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateStoryId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateStoryInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateStory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateStoryId"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"completedAt"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"difficulty"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"languageName"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"translatedTitle"}},{"kind":"Field","name":{"kind":"Name","value":"isPublished"}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateStoryMutation, UpdateStoryMutationVariables>;
export const DeleteStoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteStory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteStory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeleteStoryMutation, DeleteStoryMutationVariables>;
export const GetPublicStoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPublicStories"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"StoryFilters"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publicStories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"pageSize"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}}},{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"stories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"difficulty"}},{"kind":"Field","name":{"kind":"Name","value":"languageName"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]} as unknown as DocumentNode<GetPublicStoriesQuery, GetPublicStoriesQueryVariables>;
export const GetStoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetStory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"storyId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"story"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"storyId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"translatedTitle"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]} as unknown as DocumentNode<GetStoryQuery, GetStoryQueryVariables>;
export const CreateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"languages"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"Argument","name":{"kind":"Name","value":"languages"},"value":{"kind":"Variable","name":{"kind":"Name","value":"languages"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"languages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<CreateUserMutation, CreateUserMutationVariables>;
export const GetUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"stories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageName"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"difficulty"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"flashcardSets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"totalCards"}},{"kind":"Field","name":{"kind":"Name","value":"languageName"}}]}}]}}]}}]} as unknown as DocumentNode<GetUserQuery, GetUserQueryVariables>;
export const GetVocabulariesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetVocabularies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"vocabularies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageName"}},{"kind":"Field","name":{"kind":"Name","value":"word"}},{"kind":"Field","name":{"kind":"Name","value":"meaning"}},{"kind":"Field","name":{"kind":"Name","value":"example"}}]}}]}}]} as unknown as DocumentNode<GetVocabulariesQuery, GetVocabulariesQueryVariables>;
export const CreateVocabularyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateVocabulary"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"word"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"meaning"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"example"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"languageName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createVocabulary"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"word"},"value":{"kind":"Variable","name":{"kind":"Name","value":"word"}}},{"kind":"Argument","name":{"kind":"Name","value":"meaning"},"value":{"kind":"Variable","name":{"kind":"Name","value":"meaning"}}},{"kind":"Argument","name":{"kind":"Name","value":"example"},"value":{"kind":"Variable","name":{"kind":"Name","value":"example"}}},{"kind":"Argument","name":{"kind":"Name","value":"languageName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"languageName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"example"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"meaning"}}]}}]}}]} as unknown as DocumentNode<CreateVocabularyMutation, CreateVocabularyMutationVariables>;
export const UpdateVocabularyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateVocabulary"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"word"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"meaning"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"example"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"languageName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateVocabulary"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"word"},"value":{"kind":"Variable","name":{"kind":"Name","value":"word"}}},{"kind":"Argument","name":{"kind":"Name","value":"meaning"},"value":{"kind":"Variable","name":{"kind":"Name","value":"meaning"}}},{"kind":"Argument","name":{"kind":"Name","value":"example"},"value":{"kind":"Variable","name":{"kind":"Name","value":"example"}}},{"kind":"Argument","name":{"kind":"Name","value":"languageName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"languageName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"word"}},{"kind":"Field","name":{"kind":"Name","value":"meaning"}},{"kind":"Field","name":{"kind":"Name","value":"example"}},{"kind":"Field","name":{"kind":"Name","value":"languageName"}}]}}]}}]} as unknown as DocumentNode<UpdateVocabularyMutation, UpdateVocabularyMutationVariables>;
export const DeleteVocabularyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteVocabulary"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteVocabulary"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeleteVocabularyMutation, DeleteVocabularyMutationVariables>;