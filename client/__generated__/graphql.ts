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

export enum ExerciseType {
  FillInBlank = 'FILL_IN_BLANK',
  Matching = 'MATCHING',
  MultipleChoice = 'MULTIPLE_CHOICE',
  SentenceConstruction = 'SENTENCE_CONSTRUCTION',
  Translation = 'TRANSLATION'
}

export enum FaceType {
  Back = 'BACK',
  Character = 'CHARACTER',
  Front = 'FRONT',
  Other = 'OTHER',
  Pinyin = 'PINYIN',
  Translation = 'TRANSLATION'
}

export type Flashcard = {
  __typename?: 'Flashcard';
  createdAt: Scalars['DateTime']['output'];
  easeFactor?: Maybe<Scalars['Float']['output']>;
  faces?: Maybe<Array<FlashcardFace>>;
  id: Scalars['ID']['output'];
  interval?: Maybe<Scalars['Int']['output']>;
  nextReviewAt?: Maybe<Scalars['DateTime']['output']>;
  repetitions?: Maybe<Scalars['Int']['output']>;
  set: FlashcardSet;
  setId: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type FlashcardFace = {
  __typename?: 'FlashcardFace';
  audioUrl?: Maybe<Scalars['String']['output']>;
  content: Scalars['String']['output'];
  flashcard: Flashcard;
  flashcardId: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  imageUrl?: Maybe<Scalars['String']['output']>;
  order: Scalars['Int']['output'];
  type: FaceType;
};

export type FlashcardSet = {
  __typename?: 'FlashcardSet';
  cards?: Maybe<Array<Flashcard>>;
  chatSessions?: Maybe<Array<ChatSession>>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  user: User;
  userId: Scalars['ID']['output'];
  vocabularies?: Maybe<Array<Vocabulary>>;
};

export type Language = {
  __typename?: 'Language';
  chatSession?: Maybe<Array<ChatSession>>;
  code: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  stories?: Maybe<Array<Story>>;
  users?: Maybe<Array<User>>;
  vocabularies?: Maybe<Array<Vocabulary>>;
  worksheets?: Maybe<Array<Worksheet>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createLanguage: Language;
  createStory: Story;
  createTag: Tag;
  createUser: User;
  createVocabulary: Vocabulary;
  createWorksheet?: Maybe<Worksheet>;
  deleteLanguage: Scalars['Boolean']['output'];
  deleteStory: Scalars['Boolean']['output'];
  deleteTag: Scalars['Boolean']['output'];
  deleteUser: Scalars['Boolean']['output'];
  deleteVocabulary: Scalars['Boolean']['output'];
  deleteWorksheet: Scalars['Boolean']['output'];
  updateLanguage: Language;
  updateStory: Story;
  updateTag: Tag;
  updateUser: User;
  updateVocabulary: Vocabulary;
  updateWorksheet?: Maybe<Worksheet>;
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


export type MutationUpdateLanguageArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateStoryArgs = {
  id: Scalars['ID']['input'];
  input: UpdateStoryInput;
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
  language?: Maybe<Language>;
  languageByName?: Maybe<Language>;
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


export type QueryLanguageArgs = {
  id: Scalars['ID']['input'];
};


export type QueryLanguageByNameArgs = {
  name: Scalars['String']['input'];
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
  exercise: Exercise;
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
  language: Language;
  languageName: Scalars['String']['output'];
  meaning: Scalars['String']['output'];
  stories?: Maybe<Array<Story>>;
  story: Story;
  updatedAt: Scalars['DateTime']['output'];
  user: User;
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
  language: Language;
  languageName: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  userId: Scalars['ID']['output'];
};

export type CreateUserMutationVariables = Exact<{
  username: Scalars['String']['input'];
  languages: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', username: string, languages?: Array<{ __typename?: 'Language', name: string }> | null } };

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

export type GetLanguagesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLanguagesQuery = { __typename?: 'Query', languages: Array<{ __typename?: 'Language', id: string, name: string }> };

export type Get_VocabulariesQueryVariables = Exact<{ [key: string]: never; }>;


export type Get_VocabulariesQuery = { __typename?: 'Query', vocabularies: Array<{ __typename?: 'Vocabulary', id: string, languageName: string, word: string, meaning: string, example?: string | null }> };

export type Get_StoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type Get_StoriesQuery = { __typename?: 'Query', stories: Array<{ __typename?: 'Story', completedAt?: any | null, description: string, id: string, content: string, difficulty: number, imageUrl?: string | null, languageName: string, title: string, translatedTitle: string, isPublished: boolean, tags?: Array<{ __typename?: 'Tag', name: string, id: string }> | null, chapters?: Array<{ __typename?: 'Chapter', title: string, content: string }> | null }> };

export type Create_StoryMutationVariables = Exact<{
  input: CreateStoryInput;
}>;


export type Create_StoryMutation = { __typename?: 'Mutation', createStory: { __typename?: 'Story', completedAt?: any | null, description: string, content: string, id: string, difficulty: number, imageUrl?: string | null, languageName: string, title: string, translatedTitle: string, isPublished: boolean, tags?: Array<{ __typename?: 'Tag', id: string, name: string }> | null } };

export type Update_StoryMutationVariables = Exact<{
  updateStoryId: Scalars['ID']['input'];
  input: UpdateStoryInput;
}>;


export type Update_StoryMutation = { __typename?: 'Mutation', updateStory: { __typename?: 'Story', completedAt?: any | null, description: string, content: string, id: string, difficulty: number, imageUrl?: string | null, languageName: string, title: string, translatedTitle: string, isPublished: boolean, tags?: Array<{ __typename?: 'Tag', id: string, name: string }> | null } };

export type Delete_StoryMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type Delete_StoryMutation = { __typename?: 'Mutation', deleteStory: boolean };

export type Get_Public_StoriesQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  filters?: InputMaybe<StoryFilters>;
}>;


export type Get_Public_StoriesQuery = { __typename?: 'Query', publicStories: { __typename?: 'PaginatedStoriesResponse', hasNextPage: boolean, totalCount: number, stories: Array<{ __typename?: 'Story', id: string, title: string, description: string, difficulty: number, languageName: string, user?: { __typename?: 'User', username: string } | null, tags?: Array<{ __typename?: 'Tag', name: string }> | null }> } };

export type Get_StoryQueryVariables = Exact<{
  storyId: Scalars['ID']['input'];
}>;


export type Get_StoryQuery = { __typename?: 'Query', story?: { __typename?: 'Story', title: string, translatedTitle: string, content: string } | null };


export const CreateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"languages"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"Argument","name":{"kind":"Name","value":"languages"},"value":{"kind":"Variable","name":{"kind":"Name","value":"languages"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"languages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<CreateUserMutation, CreateUserMutationVariables>;
export const CreateVocabularyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateVocabulary"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"word"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"meaning"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"example"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"languageName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createVocabulary"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"word"},"value":{"kind":"Variable","name":{"kind":"Name","value":"word"}}},{"kind":"Argument","name":{"kind":"Name","value":"meaning"},"value":{"kind":"Variable","name":{"kind":"Name","value":"meaning"}}},{"kind":"Argument","name":{"kind":"Name","value":"example"},"value":{"kind":"Variable","name":{"kind":"Name","value":"example"}}},{"kind":"Argument","name":{"kind":"Name","value":"languageName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"languageName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"example"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"meaning"}}]}}]}}]} as unknown as DocumentNode<CreateVocabularyMutation, CreateVocabularyMutationVariables>;
export const UpdateVocabularyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateVocabulary"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"word"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"meaning"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"example"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"languageName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateVocabulary"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"word"},"value":{"kind":"Variable","name":{"kind":"Name","value":"word"}}},{"kind":"Argument","name":{"kind":"Name","value":"meaning"},"value":{"kind":"Variable","name":{"kind":"Name","value":"meaning"}}},{"kind":"Argument","name":{"kind":"Name","value":"example"},"value":{"kind":"Variable","name":{"kind":"Name","value":"example"}}},{"kind":"Argument","name":{"kind":"Name","value":"languageName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"languageName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"word"}},{"kind":"Field","name":{"kind":"Name","value":"meaning"}},{"kind":"Field","name":{"kind":"Name","value":"example"}},{"kind":"Field","name":{"kind":"Name","value":"languageName"}}]}}]}}]} as unknown as DocumentNode<UpdateVocabularyMutation, UpdateVocabularyMutationVariables>;
export const DeleteVocabularyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteVocabulary"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteVocabulary"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeleteVocabularyMutation, DeleteVocabularyMutationVariables>;
export const GetLanguagesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLanguages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"languages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetLanguagesQuery, GetLanguagesQueryVariables>;
export const Get_VocabulariesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_VOCABULARIES"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"vocabularies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageName"}},{"kind":"Field","name":{"kind":"Name","value":"word"}},{"kind":"Field","name":{"kind":"Name","value":"meaning"}},{"kind":"Field","name":{"kind":"Name","value":"example"}}]}}]}}]} as unknown as DocumentNode<Get_VocabulariesQuery, Get_VocabulariesQueryVariables>;
export const Get_StoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_STORIES"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"completedAt"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"difficulty"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"languageName"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"translatedTitle"}},{"kind":"Field","name":{"kind":"Name","value":"isPublished"}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"chapters"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]}}]} as unknown as DocumentNode<Get_StoriesQuery, Get_StoriesQueryVariables>;
export const Create_StoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CREATE_STORY"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateStoryInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createStory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"completedAt"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"difficulty"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"languageName"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"translatedTitle"}},{"kind":"Field","name":{"kind":"Name","value":"isPublished"}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<Create_StoryMutation, Create_StoryMutationVariables>;
export const Update_StoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UPDATE_STORY"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateStoryId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateStoryInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateStory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateStoryId"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"completedAt"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"difficulty"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"languageName"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"translatedTitle"}},{"kind":"Field","name":{"kind":"Name","value":"isPublished"}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<Update_StoryMutation, Update_StoryMutationVariables>;
export const Delete_StoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DELETE_STORY"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteStory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<Delete_StoryMutation, Delete_StoryMutationVariables>;
export const Get_Public_StoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_PUBLIC_STORIES"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"StoryFilters"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publicStories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"pageSize"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}}},{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"stories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"difficulty"}},{"kind":"Field","name":{"kind":"Name","value":"languageName"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]} as unknown as DocumentNode<Get_Public_StoriesQuery, Get_Public_StoriesQueryVariables>;
export const Get_StoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_STORY"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"storyId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"story"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"storyId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"translatedTitle"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]} as unknown as DocumentNode<Get_StoryQuery, Get_StoryQueryVariables>;