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
};

export type CreateStoryInput = {
  content: Scalars['String']['input'];
  description: Scalars['String']['input'];
  difficulty: Scalars['Int']['input'];
  languageName: Scalars['String']['input'];
  tags: Array<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type CreateWorksheetInput = {
  content: Scalars['String']['input'];
  languageName: Scalars['String']['input'];
};

export type Language = {
  __typename?: 'Language';
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

export type Query = {
  __typename?: 'Query';
  language?: Maybe<Language>;
  languageByName?: Maybe<Language>;
  languages: Array<Language>;
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

export type Story = {
  __typename?: 'Story';
  audioUrl?: Maybe<Scalars['String']['output']>;
  averageRating?: Maybe<Scalars['Float']['output']>;
  completedAt?: Maybe<Scalars['DateTime']['output']>;
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  difficulty: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  imageUrl?: Maybe<Scalars['String']['output']>;
  isPublished: Scalars['Boolean']['output'];
  isReviewed: Scalars['Boolean']['output'];
  languageName: Scalars['String']['output'];
  readCount: Scalars['Int']['output'];
  startedAt?: Maybe<Scalars['DateTime']['output']>;
  tags?: Maybe<Array<Tag>>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user?: Maybe<User>;
  vocabularies?: Maybe<Array<Vocabulary>>;
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
  languageName?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateWorksheetInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  languageName?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  languages?: Maybe<Array<Language>>;
  stories?: Maybe<Array<Story>>;
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
  id: Scalars['ID']['output'];
  languageName: Scalars['String']['output'];
  meaning: Scalars['String']['output'];
  story?: Maybe<Story>;
  updatedAt: Scalars['DateTime']['output'];
  user?: Maybe<User>;
  word: Scalars['String']['output'];
};

export type Worksheet = {
  __typename?: 'Worksheet';
  completedAt?: Maybe<Scalars['DateTime']['output']>;
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  language: Language;
  updatedAt: Scalars['DateTime']['output'];
  user: User;
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


export type Get_StoriesQuery = { __typename?: 'Query', stories: Array<{ __typename?: 'Story', completedAt?: any | null, description: string, content: string, id: string, difficulty: number, imageUrl?: string | null, languageName: string, title: string, tags?: Array<{ __typename?: 'Tag', name: string, id: string }> | null }> };

export type Create_StoryMutationVariables = Exact<{
  input: CreateStoryInput;
}>;


export type Create_StoryMutation = { __typename?: 'Mutation', createStory: { __typename?: 'Story', completedAt?: any | null, description: string, content: string, id: string, difficulty: number, imageUrl?: string | null, languageName: string, title: string, tags?: Array<{ __typename?: 'Tag', id: string, name: string }> | null } };

export type Update_StoryMutationVariables = Exact<{
  updateStoryId: Scalars['ID']['input'];
  input: UpdateStoryInput;
}>;


export type Update_StoryMutation = { __typename?: 'Mutation', updateStory: { __typename?: 'Story', completedAt?: any | null, description: string, content: string, id: string, difficulty: number, imageUrl?: string | null, languageName: string, title: string, tags?: Array<{ __typename?: 'Tag', id: string, name: string }> | null } };

export type Delete_StoryMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type Delete_StoryMutation = { __typename?: 'Mutation', deleteStory: boolean };


export const CreateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"languages"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"Argument","name":{"kind":"Name","value":"languages"},"value":{"kind":"Variable","name":{"kind":"Name","value":"languages"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"languages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<CreateUserMutation, CreateUserMutationVariables>;
export const CreateVocabularyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateVocabulary"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"word"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"meaning"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"example"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"languageName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createVocabulary"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"word"},"value":{"kind":"Variable","name":{"kind":"Name","value":"word"}}},{"kind":"Argument","name":{"kind":"Name","value":"meaning"},"value":{"kind":"Variable","name":{"kind":"Name","value":"meaning"}}},{"kind":"Argument","name":{"kind":"Name","value":"example"},"value":{"kind":"Variable","name":{"kind":"Name","value":"example"}}},{"kind":"Argument","name":{"kind":"Name","value":"languageName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"languageName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"example"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"meaning"}}]}}]}}]} as unknown as DocumentNode<CreateVocabularyMutation, CreateVocabularyMutationVariables>;
export const UpdateVocabularyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateVocabulary"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"word"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"meaning"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"example"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"languageName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateVocabulary"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"word"},"value":{"kind":"Variable","name":{"kind":"Name","value":"word"}}},{"kind":"Argument","name":{"kind":"Name","value":"meaning"},"value":{"kind":"Variable","name":{"kind":"Name","value":"meaning"}}},{"kind":"Argument","name":{"kind":"Name","value":"example"},"value":{"kind":"Variable","name":{"kind":"Name","value":"example"}}},{"kind":"Argument","name":{"kind":"Name","value":"languageName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"languageName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"word"}},{"kind":"Field","name":{"kind":"Name","value":"meaning"}},{"kind":"Field","name":{"kind":"Name","value":"example"}},{"kind":"Field","name":{"kind":"Name","value":"languageName"}}]}}]}}]} as unknown as DocumentNode<UpdateVocabularyMutation, UpdateVocabularyMutationVariables>;
export const DeleteVocabularyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteVocabulary"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteVocabulary"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeleteVocabularyMutation, DeleteVocabularyMutationVariables>;
export const GetLanguagesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLanguages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"languages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetLanguagesQuery, GetLanguagesQueryVariables>;
export const Get_VocabulariesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_VOCABULARIES"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"vocabularies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageName"}},{"kind":"Field","name":{"kind":"Name","value":"word"}},{"kind":"Field","name":{"kind":"Name","value":"meaning"}},{"kind":"Field","name":{"kind":"Name","value":"example"}}]}}]}}]} as unknown as DocumentNode<Get_VocabulariesQuery, Get_VocabulariesQueryVariables>;
export const Get_StoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_STORIES"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"completedAt"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"difficulty"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"languageName"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<Get_StoriesQuery, Get_StoriesQueryVariables>;
export const Create_StoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CREATE_STORY"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateStoryInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createStory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"completedAt"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"difficulty"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"languageName"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<Create_StoryMutation, Create_StoryMutationVariables>;
export const Update_StoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UPDATE_STORY"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateStoryId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateStoryInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateStory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateStoryId"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"completedAt"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"difficulty"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"languageName"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<Update_StoryMutation, Update_StoryMutationVariables>;
export const Delete_StoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DELETE_STORY"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteStory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<Delete_StoryMutation, Delete_StoryMutationVariables>;