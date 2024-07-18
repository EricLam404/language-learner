import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
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


export type QuerylanguageArgs = {
  id: Scalars['ID']['input'];
};


export type QuerylanguageByNameArgs = {
  name: Scalars['String']['input'];
};


export type QuerystoryArgs = {
  id: Scalars['ID']['input'];
};


export type QueryuserArgs = {
  id: Scalars['ID']['input'];
};


export type QueryuserLanguageArgs = {
  languageName: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};


export type QueryuserLanguagesArgs = {
  userId: Scalars['ID']['input'];
};


export type QueryvocabularyArgs = {
  id: Scalars['ID']['input'];
};


export type QueryworksheetArgs = {
  id: Scalars['Int']['input'];
};

export type Story = {
  __typename?: 'Story';
  completedAt?: Maybe<Scalars['DateTime']['output']>;
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  languageName: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['Int']['output'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  languages?: Maybe<Array<UserLanguage>>;
  stories?: Maybe<Array<Story>>;
  updatedAt: Scalars['DateTime']['output'];
  username: Scalars['String']['output'];
  vocabularies?: Maybe<Array<Vocabulary>>;
  worksheets?: Maybe<Array<Worksheet>>;
};

export type UserLanguage = {
  __typename?: 'UserLanguage';
  languageName: Scalars['String']['output'];
  userId: Scalars['ID']['output'];
};

export type Vocabulary = {
  __typename?: 'Vocabulary';
  createdAt: Scalars['DateTime']['output'];
  example?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  languageName: Scalars['String']['output'];
  meaning: Scalars['String']['output'];
  storyId?: Maybe<Scalars['ID']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['ID']['output'];
  word: Scalars['String']['output'];
};

export type Worksheet = {
  __typename?: 'Worksheet';
  completedAt?: Maybe<Scalars['DateTime']['output']>;
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  languageName: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
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
  Language: ResolverTypeWrapper<Language>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Story: ResolverTypeWrapper<Story>;
  User: ResolverTypeWrapper<User>;
  UserLanguage: ResolverTypeWrapper<UserLanguage>;
  Vocabulary: ResolverTypeWrapper<Vocabulary>;
  Worksheet: ResolverTypeWrapper<Worksheet>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  DateTime: Scalars['DateTime']['output'];
  Language: Language;
  ID: Scalars['ID']['output'];
  String: Scalars['String']['output'];
  Mutation: {};
  Query: {};
  Int: Scalars['Int']['output'];
  Story: Story;
  User: User;
  UserLanguage: UserLanguage;
  Vocabulary: Vocabulary;
  Worksheet: Worksheet;
  Boolean: Scalars['Boolean']['output'];
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type LanguageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Language'] = ResolversParentTypes['Language']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  stories?: Resolver<Maybe<Array<Maybe<ResolversTypes['Story']>>>, ParentType, ContextType>;
  vocabularies?: Resolver<Maybe<Array<Maybe<ResolversTypes['Vocabulary']>>>, ParentType, ContextType>;
  worksheets?: Resolver<Maybe<Array<Maybe<ResolversTypes['Worksheet']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  language?: Resolver<Maybe<ResolversTypes['Language']>, ParentType, ContextType, RequireFields<QuerylanguageArgs, 'id'>>;
  languageByName?: Resolver<Maybe<ResolversTypes['Language']>, ParentType, ContextType, RequireFields<QuerylanguageByNameArgs, 'name'>>;
  languages?: Resolver<Array<ResolversTypes['Language']>, ParentType, ContextType>;
  stories?: Resolver<Array<ResolversTypes['Story']>, ParentType, ContextType>;
  story?: Resolver<Maybe<ResolversTypes['Story']>, ParentType, ContextType, RequireFields<QuerystoryArgs, 'id'>>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryuserArgs, 'id'>>;
  userLanguage?: Resolver<Maybe<ResolversTypes['UserLanguage']>, ParentType, ContextType, RequireFields<QueryuserLanguageArgs, 'languageName' | 'userId'>>;
  userLanguages?: Resolver<Array<ResolversTypes['UserLanguage']>, ParentType, ContextType, RequireFields<QueryuserLanguagesArgs, 'userId'>>;
  users?: Resolver<Maybe<Array<ResolversTypes['User']>>, ParentType, ContextType>;
  vocabularies?: Resolver<Array<ResolversTypes['Vocabulary']>, ParentType, ContextType>;
  vocabulary?: Resolver<Maybe<ResolversTypes['Vocabulary']>, ParentType, ContextType, RequireFields<QueryvocabularyArgs, 'id'>>;
  worksheet?: Resolver<Maybe<ResolversTypes['Worksheet']>, ParentType, ContextType, RequireFields<QueryworksheetArgs, 'id'>>;
  worksheets?: Resolver<Array<ResolversTypes['Worksheet']>, ParentType, ContextType>;
};

export type StoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Story'] = ResolversParentTypes['Story']> = {
  completedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  languageName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  languages?: Resolver<Maybe<Array<ResolversTypes['UserLanguage']>>, ParentType, ContextType>;
  stories?: Resolver<Maybe<Array<ResolversTypes['Story']>>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  vocabularies?: Resolver<Maybe<Array<ResolversTypes['Vocabulary']>>, ParentType, ContextType>;
  worksheets?: Resolver<Maybe<Array<ResolversTypes['Worksheet']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserLanguageResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserLanguage'] = ResolversParentTypes['UserLanguage']> = {
  languageName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VocabularyResolvers<ContextType = any, ParentType extends ResolversParentTypes['Vocabulary'] = ResolversParentTypes['Vocabulary']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  example?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  languageName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  meaning?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  storyId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  word?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WorksheetResolvers<ContextType = any, ParentType extends ResolversParentTypes['Worksheet'] = ResolversParentTypes['Worksheet']> = {
  completedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  languageName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  DateTime?: GraphQLScalarType;
  Language?: LanguageResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Story?: StoryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserLanguage?: UserLanguageResolvers<ContextType>;
  Vocabulary?: VocabularyResolvers<ContextType>;
  Worksheet?: WorksheetResolvers<ContextType>;
};

