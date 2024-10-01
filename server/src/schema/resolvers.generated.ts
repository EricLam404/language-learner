/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    import type   { Resolvers } from './types.generated';
    import    { language as Query_language } from './language/resolvers/Query/language';
import    { languageByName as Query_languageByName } from './language/resolvers/Query/languageByName';
import    { languages as Query_languages } from './language/resolvers/Query/languages';
import    { stories as Query_stories } from './story/resolvers/Query/stories';
import    { story as Query_story } from './story/resolvers/Query/story';
import    { tag as Query_tag } from './tag/resolvers/Query/tag';
import    { tags as Query_tags } from './tag/resolvers/Query/tags';
import    { user as Query_user } from './user/resolvers/Query/user';
import    { users as Query_users } from './user/resolvers/Query/users';
import    { vocabularies as Query_vocabularies } from './vocabulary/resolvers/Query/vocabularies';
import    { vocabulary as Query_vocabulary } from './vocabulary/resolvers/Query/vocabulary';
import    { worksheet as Query_worksheet } from './worksheet/resolvers/Query/worksheet';
import    { worksheets as Query_worksheets } from './worksheet/resolvers/Query/worksheets';
import    { createLanguage as Mutation_createLanguage } from './language/resolvers/Mutation/createLanguage';
import    { createStory as Mutation_createStory } from './story/resolvers/Mutation/createStory';
import    { createTag as Mutation_createTag } from './tag/resolvers/Mutation/createTag';
import    { createUser as Mutation_createUser } from './user/resolvers/Mutation/createUser';
import    { createVocabulary as Mutation_createVocabulary } from './vocabulary/resolvers/Mutation/createVocabulary';
import    { createWorksheet as Mutation_createWorksheet } from './worksheet/resolvers/Mutation/createWorksheet';
import    { deleteLanguage as Mutation_deleteLanguage } from './language/resolvers/Mutation/deleteLanguage';
import    { deleteStory as Mutation_deleteStory } from './story/resolvers/Mutation/deleteStory';
import    { deleteTag as Mutation_deleteTag } from './tag/resolvers/Mutation/deleteTag';
import    { deleteUser as Mutation_deleteUser } from './user/resolvers/Mutation/deleteUser';
import    { deleteVocabulary as Mutation_deleteVocabulary } from './vocabulary/resolvers/Mutation/deleteVocabulary';
import    { deleteWorksheet as Mutation_deleteWorksheet } from './worksheet/resolvers/Mutation/deleteWorksheet';
import    { updateLanguage as Mutation_updateLanguage } from './language/resolvers/Mutation/updateLanguage';
import    { updateStory as Mutation_updateStory } from './story/resolvers/Mutation/updateStory';
import    { updateTag as Mutation_updateTag } from './tag/resolvers/Mutation/updateTag';
import    { updateUser as Mutation_updateUser } from './user/resolvers/Mutation/updateUser';
import    { updateVocabulary as Mutation_updateVocabulary } from './vocabulary/resolvers/Mutation/updateVocabulary';
import    { updateWorksheet as Mutation_updateWorksheet } from './worksheet/resolvers/Mutation/updateWorksheet';
import    { Language } from './language/resolvers/Language';
import    { Story } from './story/resolvers/Story';
import    { Tag } from './tag/resolvers/Tag';
import    { User } from './user/resolvers/User';
import    { Vocabulary } from './vocabulary/resolvers/Vocabulary';
import    { Worksheet } from './worksheet/resolvers/Worksheet';
import    { DateTimeResolver } from 'graphql-scalars';
    export const resolvers: Resolvers = {
      Query: { language: Query_language,languageByName: Query_languageByName,languages: Query_languages,stories: Query_stories,story: Query_story,tag: Query_tag,tags: Query_tags,user: Query_user,users: Query_users,vocabularies: Query_vocabularies,vocabulary: Query_vocabulary,worksheet: Query_worksheet,worksheets: Query_worksheets },
      Mutation: { createLanguage: Mutation_createLanguage,createStory: Mutation_createStory,createTag: Mutation_createTag,createUser: Mutation_createUser,createVocabulary: Mutation_createVocabulary,createWorksheet: Mutation_createWorksheet,deleteLanguage: Mutation_deleteLanguage,deleteStory: Mutation_deleteStory,deleteTag: Mutation_deleteTag,deleteUser: Mutation_deleteUser,deleteVocabulary: Mutation_deleteVocabulary,deleteWorksheet: Mutation_deleteWorksheet,updateLanguage: Mutation_updateLanguage,updateStory: Mutation_updateStory,updateTag: Mutation_updateTag,updateUser: Mutation_updateUser,updateVocabulary: Mutation_updateVocabulary,updateWorksheet: Mutation_updateWorksheet },
      
      Language: Language,
Story: Story,
Tag: Tag,
User: User,
Vocabulary: Vocabulary,
Worksheet: Worksheet,
DateTime: DateTimeResolver
    }