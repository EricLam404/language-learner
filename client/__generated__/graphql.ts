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

export type Language = {
  __typename?: 'Language';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  stories?: Maybe<Array<Maybe<Story>>>;
  vocabularies?: Maybe<Array<Maybe<Vocabulary>>>;
  worksheets?: Maybe<Array<Maybe<Worksheet>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: User;
  createUserLanguage?: Maybe<UserLanguageResponse>;
  createVocabulary?: Maybe<Vocabulary>;
  deleteUser?: Maybe<User>;
  deleteUserLanguage?: Maybe<UserLanguageResponse>;
  deleteVocabulary?: Maybe<Vocabulary>;
  updateUser?: Maybe<User>;
  updateUserLanguage?: Maybe<UserLanguageResponse>;
  updateVocabulary?: Maybe<Vocabulary>;
};


export type MutationCreateUserArgs = {
  languages: Array<Scalars['String']['input']>;
  username: Scalars['String']['input'];
};


export type MutationCreateUserLanguageArgs = {
  languageName: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};


export type MutationCreateVocabularyArgs = {
  example?: InputMaybe<Scalars['String']['input']>;
  languageName: Scalars['String']['input'];
  meaning: Scalars['String']['input'];
  word: Scalars['String']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUserLanguageArgs = {
  languageName: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};


export type MutationDeleteVocabularyArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID']['input'];
  username?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateUserLanguageArgs = {
  languageName: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};


export type MutationUpdateVocabularyArgs = {
  example?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  languageName?: InputMaybe<Scalars['String']['input']>;
  meaning?: InputMaybe<Scalars['String']['input']>;
  word?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  language?: Maybe<Language>;
  languageByName?: Maybe<Language>;
  languages: Array<Language>;
  stories: Array<Story>;
  story?: Maybe<Story>;
  user?: Maybe<User>;
  userLanguage?: Maybe<UserLanguage>;
  userLanguages: Array<UserLanguage>;
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


export type QueryUserArgs = {
  userId: Scalars['ID']['input'];
};


export type QueryUserLanguageArgs = {
  languageName: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};


export type QueryUserLanguagesArgs = {
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
  completedAt?: Maybe<Scalars['DateTime']['output']>;
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  languageName: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['ID']['output'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  languages?: Maybe<Array<UserLanguage>>;
  stories?: Maybe<Array<Story>>;
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['ID']['output'];
  username: Scalars['String']['output'];
  vocabularies?: Maybe<Array<Vocabulary>>;
  worksheets?: Maybe<Array<Worksheet>>;
};

export type UserLanguage = {
  __typename?: 'UserLanguage';
  languageName: Scalars['String']['output'];
  userId: Scalars['ID']['output'];
};

export type UserLanguageResponse = {
  __typename?: 'UserLanguageResponse';
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
  userLanguage?: Maybe<UserLanguage>;
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
  languageName: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['ID']['output'];
};

export type CreateUserMutationVariables = Exact<{
  username: Scalars['String']['input'];
  languages: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', username: string, languages?: Array<{ __typename?: 'UserLanguage', languageName: string }> | null } };

export type CreateVocabularyMutationVariables = Exact<{
  word: Scalars['String']['input'];
  meaning: Scalars['String']['input'];
  example?: InputMaybe<Scalars['String']['input']>;
  languageName: Scalars['String']['input'];
}>;


export type CreateVocabularyMutation = { __typename?: 'Mutation', createVocabulary?: { __typename?: 'Vocabulary', example?: string | null, id: string, meaning: string } | null };

export type GetLanguagesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLanguagesQuery = { __typename?: 'Query', languages: Array<{ __typename?: 'Language', id: string, name: string }> };

export type Get_VocabulariesQueryVariables = Exact<{ [key: string]: never; }>;


export type Get_VocabulariesQuery = { __typename?: 'Query', vocabularies: Array<{ __typename?: 'Vocabulary', id: string, languageName: string, word: string, meaning: string, example?: string | null }> };


export const CreateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"languages"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"Argument","name":{"kind":"Name","value":"languages"},"value":{"kind":"Variable","name":{"kind":"Name","value":"languages"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"languages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"languageName"}}]}}]}}]}}]} as unknown as DocumentNode<CreateUserMutation, CreateUserMutationVariables>;
export const CreateVocabularyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateVocabulary"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"word"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"meaning"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"example"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"languageName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createVocabulary"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"word"},"value":{"kind":"Variable","name":{"kind":"Name","value":"word"}}},{"kind":"Argument","name":{"kind":"Name","value":"meaning"},"value":{"kind":"Variable","name":{"kind":"Name","value":"meaning"}}},{"kind":"Argument","name":{"kind":"Name","value":"example"},"value":{"kind":"Variable","name":{"kind":"Name","value":"example"}}},{"kind":"Argument","name":{"kind":"Name","value":"languageName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"languageName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"example"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"meaning"}}]}}]}}]} as unknown as DocumentNode<CreateVocabularyMutation, CreateVocabularyMutationVariables>;
export const GetLanguagesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLanguages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"languages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetLanguagesQuery, GetLanguagesQueryVariables>;
export const Get_VocabulariesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_VOCABULARIES"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"vocabularies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageName"}},{"kind":"Field","name":{"kind":"Name","value":"word"}},{"kind":"Field","name":{"kind":"Name","value":"meaning"}},{"kind":"Field","name":{"kind":"Name","value":"example"}}]}}]}}]} as unknown as DocumentNode<Get_VocabulariesQuery, Get_VocabulariesQueryVariables>;