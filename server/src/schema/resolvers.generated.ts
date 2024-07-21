/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from "./types.generated.ts";
import { language as Query_language } from "./language/resolvers/Query/language.ts";
import { languageByName as Query_languageByName } from "./language/resolvers/Query/languageByName.ts";
import { languages as Query_languages } from "./language/resolvers/Query/languages.ts";
import { stories as Query_stories } from "./story/resolvers/Query/stories.ts";
import { story as Query_story } from "./story/resolvers/Query/story.ts";
import { user as Query_user } from "./user/resolvers/Query/user.ts";
import { userLanguage as Query_userLanguage } from "./userLanguage/resolvers/Query/userLanguage.ts";
import { userLanguages as Query_userLanguages } from "./userLanguage/resolvers/Query/userLanguages.ts";
import { users as Query_users } from "./user/resolvers/Query/users.ts";
import { vocabularies as Query_vocabularies } from "./vocabulary/resolvers/Query/vocabularies.ts";
import { vocabulary as Query_vocabulary } from "./vocabulary/resolvers/Query/vocabulary.ts";
import { worksheet as Query_worksheet } from "./worksheet/resolvers/Query/worksheet.ts";
import { worksheets as Query_worksheets } from "./worksheet/resolvers/Query/worksheets.ts";
import { Language } from "./language/resolvers/Language.ts";
import { Story } from "./story/resolvers/Story.ts";
import { User } from "./user/resolvers/User.ts";
import { UserLanguage } from "./userLanguage/resolvers/UserLanguage.ts";
import { Vocabulary } from "./vocabulary/resolvers/Vocabulary.ts";
import { Worksheet } from "./worksheet/resolvers/Worksheet.ts";
import { DateTimeResolver } from "graphql-scalars";
export const resolvers: Resolvers = {
    Query: {
        language: Query_language,
        languageByName: Query_languageByName,
        languages: Query_languages,
        stories: Query_stories,
        story: Query_story,
        user: Query_user,
        userLanguage: Query_userLanguage,
        userLanguages: Query_userLanguages,
        users: Query_users,
        vocabularies: Query_vocabularies,
        vocabulary: Query_vocabulary,
        worksheet: Query_worksheet,
        worksheets: Query_worksheets,
    },

    Language: Language,
    Story: Story,
    User: User,
    UserLanguage: UserLanguage,
    Vocabulary: Vocabulary,
    Worksheet: Worksheet,
    DateTime: DateTimeResolver,
};
