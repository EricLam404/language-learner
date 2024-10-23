/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    import type   { Resolvers } from './types.generated';
    import    { flashcardSet as Query_flashcardSet } from './flashcard/resolvers/Query/flashcardSet';
import    { flashcardSets as Query_flashcardSets } from './flashcard/resolvers/Query/flashcardSets';
import    { flashcardSetsByLanguage as Query_flashcardSetsByLanguage } from './flashcard/resolvers/Query/flashcardSetsByLanguage';
import    { language as Query_language } from './language/resolvers/Query/language';
import    { languageByName as Query_languageByName } from './language/resolvers/Query/languageByName';
import    { languages as Query_languages } from './language/resolvers/Query/languages';
import    { publicStories as Query_publicStories } from './story/resolvers/Query/publicStories';
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
import    { createFlashcardSet as Mutation_createFlashcardSet } from './flashcard/resolvers/Mutation/createFlashcardSet';
import    { createLanguage as Mutation_createLanguage } from './language/resolvers/Mutation/createLanguage';
import    { createStory as Mutation_createStory } from './story/resolvers/Mutation/createStory';
import    { createTag as Mutation_createTag } from './tag/resolvers/Mutation/createTag';
import    { createUser as Mutation_createUser } from './user/resolvers/Mutation/createUser';
import    { createVocabulary as Mutation_createVocabulary } from './vocabulary/resolvers/Mutation/createVocabulary';
import    { createWorksheet as Mutation_createWorksheet } from './worksheet/resolvers/Mutation/createWorksheet';
import    { deleteFlashcardSet as Mutation_deleteFlashcardSet } from './flashcard/resolvers/Mutation/deleteFlashcardSet';
import    { deleteLanguage as Mutation_deleteLanguage } from './language/resolvers/Mutation/deleteLanguage';
import    { deleteStory as Mutation_deleteStory } from './story/resolvers/Mutation/deleteStory';
import    { deleteTag as Mutation_deleteTag } from './tag/resolvers/Mutation/deleteTag';
import    { deleteUser as Mutation_deleteUser } from './user/resolvers/Mutation/deleteUser';
import    { deleteVocabulary as Mutation_deleteVocabulary } from './vocabulary/resolvers/Mutation/deleteVocabulary';
import    { deleteWorksheet as Mutation_deleteWorksheet } from './worksheet/resolvers/Mutation/deleteWorksheet';
import    { updateFlashcardSet as Mutation_updateFlashcardSet } from './flashcard/resolvers/Mutation/updateFlashcardSet';
import    { updateLanguage as Mutation_updateLanguage } from './language/resolvers/Mutation/updateLanguage';
import    { updateStory as Mutation_updateStory } from './story/resolvers/Mutation/updateStory';
import    { updateTag as Mutation_updateTag } from './tag/resolvers/Mutation/updateTag';
import    { updateUser as Mutation_updateUser } from './user/resolvers/Mutation/updateUser';
import    { updateVocabulary as Mutation_updateVocabulary } from './vocabulary/resolvers/Mutation/updateVocabulary';
import    { updateWorksheet as Mutation_updateWorksheet } from './worksheet/resolvers/Mutation/updateWorksheet';
import    { Chapter } from './chapter/resolvers/Chapter';
import    { ChapterProgress } from './chapter/resolvers/ChapterProgress';
import    { ChatMessage } from './chat/resolvers/ChatMessage';
import    { ChatSession } from './chat/resolvers/ChatSession';
import    { ComprehensionQuestion } from './comprehensionQuestion/resolvers/ComprehensionQuestion';
import    { ComprehensionQuestionOption } from './comprehensionQuestion/resolvers/ComprehensionQuestionOption';
import    { Exercise } from './exercise/resolvers/Exercise';
import    { Flashcard } from './flashcard/resolvers/Flashcard';
import    { FlashcardFace } from './flashcard/resolvers/FlashcardFace';
import    { FlashcardSet } from './flashcard/resolvers/FlashcardSet';
import    { Language } from './language/resolvers/Language';
import    { PaginatedStoriesResponse } from './story/resolvers/PaginatedStoriesResponse';
import    { ReadingProgress } from './readingProgress/resolvers/ReadingProgress';
import    { Story } from './story/resolvers/Story';
import    { Submission } from './submission/resolvers/Submission';
import    { Tag } from './tag/resolvers/Tag';
import    { User } from './user/resolvers/User';
import    { Vocabulary } from './vocabulary/resolvers/Vocabulary';
import    { Worksheet } from './worksheet/resolvers/Worksheet';
import    { DateTimeResolver,JSONResolver } from 'graphql-scalars';
    export const resolvers: Resolvers = {
      Query: { flashcardSet: Query_flashcardSet,flashcardSets: Query_flashcardSets,flashcardSetsByLanguage: Query_flashcardSetsByLanguage,language: Query_language,languageByName: Query_languageByName,languages: Query_languages,publicStories: Query_publicStories,stories: Query_stories,story: Query_story,tag: Query_tag,tags: Query_tags,user: Query_user,users: Query_users,vocabularies: Query_vocabularies,vocabulary: Query_vocabulary,worksheet: Query_worksheet,worksheets: Query_worksheets },
      Mutation: { createFlashcardSet: Mutation_createFlashcardSet,createLanguage: Mutation_createLanguage,createStory: Mutation_createStory,createTag: Mutation_createTag,createUser: Mutation_createUser,createVocabulary: Mutation_createVocabulary,createWorksheet: Mutation_createWorksheet,deleteFlashcardSet: Mutation_deleteFlashcardSet,deleteLanguage: Mutation_deleteLanguage,deleteStory: Mutation_deleteStory,deleteTag: Mutation_deleteTag,deleteUser: Mutation_deleteUser,deleteVocabulary: Mutation_deleteVocabulary,deleteWorksheet: Mutation_deleteWorksheet,updateFlashcardSet: Mutation_updateFlashcardSet,updateLanguage: Mutation_updateLanguage,updateStory: Mutation_updateStory,updateTag: Mutation_updateTag,updateUser: Mutation_updateUser,updateVocabulary: Mutation_updateVocabulary,updateWorksheet: Mutation_updateWorksheet },
      
      Chapter: Chapter,
ChapterProgress: ChapterProgress,
ChatMessage: ChatMessage,
ChatSession: ChatSession,
ComprehensionQuestion: ComprehensionQuestion,
ComprehensionQuestionOption: ComprehensionQuestionOption,
Exercise: Exercise,
Flashcard: Flashcard,
FlashcardFace: FlashcardFace,
FlashcardSet: FlashcardSet,
Language: Language,
PaginatedStoriesResponse: PaginatedStoriesResponse,
ReadingProgress: ReadingProgress,
Story: Story,
Submission: Submission,
Tag: Tag,
User: User,
Vocabulary: Vocabulary,
Worksheet: Worksheet,
DateTime: DateTimeResolver,
JSON: JSONResolver
    }