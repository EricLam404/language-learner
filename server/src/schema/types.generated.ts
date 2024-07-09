import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type EnumResolverSignature<T, AllowedValues = any> = { [key in keyof T]?: AllowedValues };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type Language = {
  __typename?: 'Language';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  progress: Array<Progress>;
  stories: Array<Story>;
  users: Array<UserLanguage>;
  vocabularies: Array<Vocabulary>;
  worksheets: Array<Worksheet>;
};

export type Progress = {
  __typename?: 'Progress';
  completedAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  language: Language;
  languageName: Scalars['String']['output'];
  type: ProgressType;
  user: User;
  userId: Scalars['Int']['output'];
};

export type ProgressType =
  | 'STORY'
  | 'VOCABULARY'
  | 'WORKSHEET';

export type Story = {
  __typename?: 'Story';
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  language: Language;
  languageName: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  userId: Scalars['Int']['output'];
  vocabularies: Array<Vocabulary>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  languages: Array<UserLanguage>;
  progress: Array<Progress>;
  stories: Array<Story>;
  updatedAt: Scalars['DateTime']['output'];
  username: Scalars['String']['output'];
  vocabularies: Array<Vocabulary>;
  worksheets: Array<Worksheet>;
};

export type UserLanguage = {
  __typename?: 'UserLanguage';
  language: Language;
  languageName: Scalars['String']['output'];
  user: User;
  userId: Scalars['Int']['output'];
  userLanguageId: UserLanguageId;
};

export type UserLanguageId = {
  __typename?: 'UserLanguageId';
  languageName: Scalars['String']['output'];
  userId: Scalars['Int']['output'];
};

export type Vocabulary = {
  __typename?: 'Vocabulary';
  createdAt: Scalars['DateTime']['output'];
  example?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  language: Language;
  languageName: Scalars['String']['output'];
  meaning: Scalars['String']['output'];
  story?: Maybe<Story>;
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  userId: Scalars['Int']['output'];
  word: Scalars['String']['output'];
};

export type Worksheet = {
  __typename?: 'Worksheet';
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  language: Language;
  languageName: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  userId: Scalars['Int']['output'];
};



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
export type ResolversTypes = {
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  Language: ResolverTypeWrapper<Omit<Language, 'progress' | 'stories' | 'users' | 'vocabularies' | 'worksheets'> & { progress: Array<ResolversTypes['Progress']>, stories: Array<ResolversTypes['Story']>, users: Array<ResolversTypes['UserLanguage']>, vocabularies: Array<ResolversTypes['Vocabulary']>, worksheets: Array<ResolversTypes['Worksheet']> }>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Progress: ResolverTypeWrapper<Omit<Progress, 'language' | 'type' | 'user'> & { language: ResolversTypes['Language'], type: ResolversTypes['ProgressType'], user: ResolversTypes['User'] }>;
  ProgressType: ResolverTypeWrapper<'VOCABULARY' | 'STORY' | 'WORKSHEET'>;
  Story: ResolverTypeWrapper<Omit<Story, 'language' | 'user' | 'vocabularies'> & { language: ResolversTypes['Language'], user: ResolversTypes['User'], vocabularies: Array<ResolversTypes['Vocabulary']> }>;
  User: ResolverTypeWrapper<Omit<User, 'languages' | 'progress' | 'stories' | 'vocabularies' | 'worksheets'> & { languages: Array<ResolversTypes['UserLanguage']>, progress: Array<ResolversTypes['Progress']>, stories: Array<ResolversTypes['Story']>, vocabularies: Array<ResolversTypes['Vocabulary']>, worksheets: Array<ResolversTypes['Worksheet']> }>;
  UserLanguage: ResolverTypeWrapper<Omit<UserLanguage, 'language' | 'user'> & { language: ResolversTypes['Language'], user: ResolversTypes['User'] }>;
  UserLanguageId: ResolverTypeWrapper<UserLanguageId>;
  Vocabulary: ResolverTypeWrapper<Omit<Vocabulary, 'language' | 'story' | 'user'> & { language: ResolversTypes['Language'], story?: Maybe<ResolversTypes['Story']>, user: ResolversTypes['User'] }>;
  Worksheet: ResolverTypeWrapper<Omit<Worksheet, 'language' | 'user'> & { language: ResolversTypes['Language'], user: ResolversTypes['User'] }>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  DateTime: Scalars['DateTime']['output'];
  Language: Omit<Language, 'progress' | 'stories' | 'users' | 'vocabularies' | 'worksheets'> & { progress: Array<ResolversParentTypes['Progress']>, stories: Array<ResolversParentTypes['Story']>, users: Array<ResolversParentTypes['UserLanguage']>, vocabularies: Array<ResolversParentTypes['Vocabulary']>, worksheets: Array<ResolversParentTypes['Worksheet']> };
  Int: Scalars['Int']['output'];
  String: Scalars['String']['output'];
  Progress: Omit<Progress, 'language' | 'user'> & { language: ResolversParentTypes['Language'], user: ResolversParentTypes['User'] };
  Story: Omit<Story, 'language' | 'user' | 'vocabularies'> & { language: ResolversParentTypes['Language'], user: ResolversParentTypes['User'], vocabularies: Array<ResolversParentTypes['Vocabulary']> };
  User: Omit<User, 'languages' | 'progress' | 'stories' | 'vocabularies' | 'worksheets'> & { languages: Array<ResolversParentTypes['UserLanguage']>, progress: Array<ResolversParentTypes['Progress']>, stories: Array<ResolversParentTypes['Story']>, vocabularies: Array<ResolversParentTypes['Vocabulary']>, worksheets: Array<ResolversParentTypes['Worksheet']> };
  UserLanguage: Omit<UserLanguage, 'language' | 'user'> & { language: ResolversParentTypes['Language'], user: ResolversParentTypes['User'] };
  UserLanguageId: UserLanguageId;
  Vocabulary: Omit<Vocabulary, 'language' | 'story' | 'user'> & { language: ResolversParentTypes['Language'], story?: Maybe<ResolversParentTypes['Story']>, user: ResolversParentTypes['User'] };
  Worksheet: Omit<Worksheet, 'language' | 'user'> & { language: ResolversParentTypes['Language'], user: ResolversParentTypes['User'] };
  Boolean: Scalars['Boolean']['output'];
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type LanguageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Language'] = ResolversParentTypes['Language']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  progress?: Resolver<Array<ResolversTypes['Progress']>, ParentType, ContextType>;
  stories?: Resolver<Array<ResolversTypes['Story']>, ParentType, ContextType>;
  users?: Resolver<Array<ResolversTypes['UserLanguage']>, ParentType, ContextType>;
  vocabularies?: Resolver<Array<ResolversTypes['Vocabulary']>, ParentType, ContextType>;
  worksheets?: Resolver<Array<ResolversTypes['Worksheet']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProgressResolvers<ContextType = any, ParentType extends ResolversParentTypes['Progress'] = ResolversParentTypes['Progress']> = {
  completedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  language?: Resolver<ResolversTypes['Language'], ParentType, ContextType>;
  languageName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['ProgressType'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProgressTypeResolvers = EnumResolverSignature<{ STORY?: any, VOCABULARY?: any, WORKSHEET?: any }, ResolversTypes['ProgressType']>;

export type StoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Story'] = ResolversParentTypes['Story']> = {
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  language?: Resolver<ResolversTypes['Language'], ParentType, ContextType>;
  languageName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  vocabularies?: Resolver<Array<ResolversTypes['Vocabulary']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  languages?: Resolver<Array<ResolversTypes['UserLanguage']>, ParentType, ContextType>;
  progress?: Resolver<Array<ResolversTypes['Progress']>, ParentType, ContextType>;
  stories?: Resolver<Array<ResolversTypes['Story']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  vocabularies?: Resolver<Array<ResolversTypes['Vocabulary']>, ParentType, ContextType>;
  worksheets?: Resolver<Array<ResolversTypes['Worksheet']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserLanguageResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserLanguage'] = ResolversParentTypes['UserLanguage']> = {
  language?: Resolver<ResolversTypes['Language'], ParentType, ContextType>;
  languageName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  userLanguageId?: Resolver<ResolversTypes['UserLanguageId'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserLanguageIdResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserLanguageId'] = ResolversParentTypes['UserLanguageId']> = {
  languageName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VocabularyResolvers<ContextType = any, ParentType extends ResolversParentTypes['Vocabulary'] = ResolversParentTypes['Vocabulary']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  example?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  language?: Resolver<ResolversTypes['Language'], ParentType, ContextType>;
  languageName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  meaning?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  story?: Resolver<Maybe<ResolversTypes['Story']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  word?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WorksheetResolvers<ContextType = any, ParentType extends ResolversParentTypes['Worksheet'] = ResolversParentTypes['Worksheet']> = {
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  language?: Resolver<ResolversTypes['Language'], ParentType, ContextType>;
  languageName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  DateTime?: GraphQLScalarType;
  Language?: LanguageResolvers<ContextType>;
  Progress?: ProgressResolvers<ContextType>;
  ProgressType?: ProgressTypeResolvers;
  Story?: StoryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserLanguage?: UserLanguageResolvers<ContextType>;
  UserLanguageId?: UserLanguageIdResolvers<ContextType>;
  Vocabulary?: VocabularyResolvers<ContextType>;
  Worksheet?: WorksheetResolvers<ContextType>;
};

