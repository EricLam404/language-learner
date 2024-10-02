import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { MyContext } from '../utils/types/context';
export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string | number; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: Date | string; output: Date | string; }
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


export type MutationupdateLanguageArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};


export type MutationupdateStoryArgs = {
  id: Scalars['ID']['input'];
  input?: InputMaybe<UpdateStoryInput>;
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


export type QuerylanguageArgs = {
  id: Scalars['ID']['input'];
};


export type QuerylanguageByNameArgs = {
  name: Scalars['String']['input'];
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
  CreateStoryInput: CreateStoryInput;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  CreateWorksheetInput: CreateWorksheetInput;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  Language: ResolverTypeWrapper<Language>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Query: ResolverTypeWrapper<{}>;
  Story: ResolverTypeWrapper<Story>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  Tag: ResolverTypeWrapper<Tag>;
  UpdateStoryInput: UpdateStoryInput;
  UpdateWorksheetInput: UpdateWorksheetInput;
  User: ResolverTypeWrapper<User>;
  Vocabulary: ResolverTypeWrapper<Vocabulary>;
  Worksheet: ResolverTypeWrapper<Worksheet>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  CreateStoryInput: CreateStoryInput;
  String: Scalars['String']['output'];
  Int: Scalars['Int']['output'];
  CreateWorksheetInput: CreateWorksheetInput;
  DateTime: Scalars['DateTime']['output'];
  Language: Language;
  ID: Scalars['ID']['output'];
  Mutation: {};
  Boolean: Scalars['Boolean']['output'];
  Query: {};
  Story: Story;
  Float: Scalars['Float']['output'];
  Tag: Tag;
  UpdateStoryInput: UpdateStoryInput;
  UpdateWorksheetInput: UpdateWorksheetInput;
  User: User;
  Vocabulary: Vocabulary;
  Worksheet: Worksheet;
}>;

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type LanguageResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Language'] = ResolversParentTypes['Language']> = ResolversObject<{
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  stories?: Resolver<Maybe<Array<ResolversTypes['Story']>>, ParentType, ContextType>;
  users?: Resolver<Maybe<Array<ResolversTypes['User']>>, ParentType, ContextType>;
  vocabularies?: Resolver<Maybe<Array<ResolversTypes['Vocabulary']>>, ParentType, ContextType>;
  worksheets?: Resolver<Maybe<Array<ResolversTypes['Worksheet']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  createLanguage?: Resolver<ResolversTypes['Language'], ParentType, ContextType, RequireFields<MutationcreateLanguageArgs, 'code' | 'name'>>;
  createStory?: Resolver<ResolversTypes['Story'], ParentType, ContextType, RequireFields<MutationcreateStoryArgs, 'input'>>;
  createTag?: Resolver<ResolversTypes['Tag'], ParentType, ContextType, RequireFields<MutationcreateTagArgs, 'name'>>;
  createUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationcreateUserArgs, 'languages' | 'username'>>;
  createVocabulary?: Resolver<ResolversTypes['Vocabulary'], ParentType, ContextType, RequireFields<MutationcreateVocabularyArgs, 'languageName' | 'meaning' | 'word'>>;
  createWorksheet?: Resolver<Maybe<ResolversTypes['Worksheet']>, ParentType, ContextType, RequireFields<MutationcreateWorksheetArgs, 'input'>>;
  deleteLanguage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationdeleteLanguageArgs, 'id'>>;
  deleteStory?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationdeleteStoryArgs, 'id'>>;
  deleteTag?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationdeleteTagArgs, 'id'>>;
  deleteUser?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationdeleteUserArgs, 'id'>>;
  deleteVocabulary?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationdeleteVocabularyArgs, 'id'>>;
  deleteWorksheet?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationdeleteWorksheetArgs, 'id'>>;
  updateLanguage?: Resolver<ResolversTypes['Language'], ParentType, ContextType, RequireFields<MutationupdateLanguageArgs, 'id'>>;
  updateStory?: Resolver<ResolversTypes['Story'], ParentType, ContextType, RequireFields<MutationupdateStoryArgs, 'id'>>;
  updateTag?: Resolver<ResolversTypes['Tag'], ParentType, ContextType, RequireFields<MutationupdateTagArgs, 'id' | 'name'>>;
  updateUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationupdateUserArgs, 'id' | 'username'>>;
  updateVocabulary?: Resolver<ResolversTypes['Vocabulary'], ParentType, ContextType, RequireFields<MutationupdateVocabularyArgs, 'id'>>;
  updateWorksheet?: Resolver<Maybe<ResolversTypes['Worksheet']>, ParentType, ContextType, RequireFields<MutationupdateWorksheetArgs, 'id' | 'input'>>;
}>;

export type QueryResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  language?: Resolver<Maybe<ResolversTypes['Language']>, ParentType, ContextType, RequireFields<QuerylanguageArgs, 'id'>>;
  languageByName?: Resolver<Maybe<ResolversTypes['Language']>, ParentType, ContextType, RequireFields<QuerylanguageByNameArgs, 'name'>>;
  languages?: Resolver<Array<ResolversTypes['Language']>, ParentType, ContextType>;
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

export type StoryResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Story'] = ResolversParentTypes['Story']> = ResolversObject<{
  audioUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  averageRating?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  completedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  difficulty?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  imageUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isPublished?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isReviewed?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  languageName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  readCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  startedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  tags?: Resolver<Maybe<Array<ResolversTypes['Tag']>>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  vocabularies?: Resolver<Maybe<Array<ResolversTypes['Vocabulary']>>, ParentType, ContextType>;
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
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  languages?: Resolver<Maybe<Array<ResolversTypes['Language']>>, ParentType, ContextType>;
  stories?: Resolver<Maybe<Array<ResolversTypes['Story']>>, ParentType, ContextType>;
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
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  languageName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  meaning?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  story?: Resolver<Maybe<ResolversTypes['Story']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  word?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WorksheetResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Worksheet'] = ResolversParentTypes['Worksheet']> = ResolversObject<{
  completedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  language?: Resolver<ResolversTypes['Language'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MyContext> = ResolversObject<{
  DateTime?: GraphQLScalarType;
  Language?: LanguageResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Story?: StoryResolvers<ContextType>;
  Tag?: TagResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  Vocabulary?: VocabularyResolvers<ContextType>;
  Worksheet?: WorksheetResolvers<ContextType>;
}>;

