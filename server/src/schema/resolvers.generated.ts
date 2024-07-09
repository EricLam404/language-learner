/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    import type   { Resolvers } from './types.generated';
    import    { Language } from './language/resolvers/Language';
import    { Progress } from './progress/resolvers/Progress';
import    { Story } from './story/resolvers/Story';
import    { User } from './user/resolvers/User';
import    { UserLanguage } from './userLanguage/resolvers/UserLanguage';
import    { UserLanguageId } from './userLanguageId/resolvers/UserLanguageId';
import    { Vocabulary } from './vocabulary/resolvers/Vocabulary';
import    { Worksheet } from './worksheet/resolvers/Worksheet';
import    { DateTime } from './progress/resolvers/DateTime';
    export const resolvers: Resolvers = {
      
      
      
      Language: Language,
Progress: Progress,
Story: Story,
User: User,
UserLanguage: UserLanguage,
UserLanguageId: UserLanguageId,
Vocabulary: Vocabulary,
Worksheet: Worksheet,
DateTime: DateTime
    }