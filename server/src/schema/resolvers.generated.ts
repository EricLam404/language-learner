/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    import type   { Resolvers } from './types.generated';
    import    { language as Query_language } from './language/resolvers/Query/language';
import    { languageByName as Query_languageByName } from './language/resolvers/Query/languageByName';
import    { languages as Query_languages } from './language/resolvers/Query/languages';
import    { stories as Query_stories } from './story/resolvers/Query/stories';
import    { story as Query_story } from './story/resolvers/Query/story';
import    { user as Query_user } from './user/resolvers/Query/user';
import    { userLanguage as Query_userLanguage } from './userLanguage/resolvers/Query/userLanguage';
import    { userLanguages as Query_userLanguages } from './userLanguage/resolvers/Query/userLanguages';
import    { users as Query_users } from './user/resolvers/Query/users';
import    { vocabularies as Query_vocabularies } from './vocabulary/resolvers/Query/vocabularies';
import    { vocabulary as Query_vocabulary } from './vocabulary/resolvers/Query/vocabulary';
import    { worksheet as Query_worksheet } from './worksheet/resolvers/Query/worksheet';
import    { worksheets as Query_worksheets } from './worksheet/resolvers/Query/worksheets';
import    { createUser as Mutation_createUser } from './user/resolvers/Mutation/createUser';
import    { createUserLanguage as Mutation_createUserLanguage } from './userLanguage/resolvers/Mutation/createUserLanguage';
import    { createVocabulary as Mutation_createVocabulary } from './vocabulary/resolvers/Mutation/createVocabulary';
import    { deleteUser as Mutation_deleteUser } from './user/resolvers/Mutation/deleteUser';
import    { deleteUserLanguage as Mutation_deleteUserLanguage } from './userLanguage/resolvers/Mutation/deleteUserLanguage';
import    { deleteVocabulary as Mutation_deleteVocabulary } from './vocabulary/resolvers/Mutation/deleteVocabulary';
import    { updateUser as Mutation_updateUser } from './user/resolvers/Mutation/updateUser';
import    { updateUserLanguage as Mutation_updateUserLanguage } from './userLanguage/resolvers/Mutation/updateUserLanguage';
import    { updateVocabulary as Mutation_updateVocabulary } from './vocabulary/resolvers/Mutation/updateVocabulary';
import    { Language } from './language/resolvers/Language';
import    { Story } from './story/resolvers/Story';
import    { User } from './user/resolvers/User';
import    { UserLanguage } from './userLanguage/resolvers/UserLanguage';
import    { UserLanguageResponse } from './userLanguage/resolvers/UserLanguageResponse';
import    { Vocabulary } from './vocabulary/resolvers/Vocabulary';
import    { Worksheet } from './worksheet/resolvers/Worksheet';
import    { DateTimeResolver } from 'graphql-scalars';
    export const resolvers: Resolvers = {
      Query: { language: Query_language,languageByName: Query_languageByName,languages: Query_languages,stories: Query_stories,story: Query_story,user: Query_user,userLanguage: Query_userLanguage,userLanguages: Query_userLanguages,users: Query_users,vocabularies: Query_vocabularies,vocabulary: Query_vocabulary,worksheet: Query_worksheet,worksheets: Query_worksheets },
      Mutation: { createUser: Mutation_createUser,createUserLanguage: Mutation_createUserLanguage,createVocabulary: Mutation_createVocabulary,deleteUser: Mutation_deleteUser,deleteUserLanguage: Mutation_deleteUserLanguage,deleteVocabulary: Mutation_deleteVocabulary,updateUser: Mutation_updateUser,updateUserLanguage: Mutation_updateUserLanguage,updateVocabulary: Mutation_updateVocabulary },
      
      Language: Language,
Story: Story,
User: User,
UserLanguage: UserLanguage,
UserLanguageResponse: UserLanguageResponse,
Vocabulary: Vocabulary,
Worksheet: Worksheet,
DateTime: DateTimeResolver
    }