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
import    { Language } from './language/resolvers/Language';
import    { Story } from './story/resolvers/Story';
import    { User } from './user/resolvers/User';
import    { UserLanguage } from './userLanguage/resolvers/UserLanguage';
import    { Vocabulary } from './vocabulary/resolvers/Vocabulary';
import    { Worksheet } from './worksheet/resolvers/Worksheet';
import    { DateTimeResolver } from 'graphql-scalars';
    export const resolvers: Resolvers = {
      Query: { language: Query_language,languageByName: Query_languageByName,languages: Query_languages,stories: Query_stories,story: Query_story,user: Query_user,userLanguage: Query_userLanguage,userLanguages: Query_userLanguages,users: Query_users,vocabularies: Query_vocabularies,vocabulary: Query_vocabulary,worksheet: Query_worksheet,worksheets: Query_worksheets },
      
      
      Language: Language,
Story: Story,
User: User,
UserLanguage: UserLanguage,
Vocabulary: Vocabulary,
Worksheet: Worksheet,
DateTime: DateTimeResolver
    }