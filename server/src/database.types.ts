export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      _LanguageToUser: {
        Row: {
          A: number
          B: string
        }
        Insert: {
          A: number
          B: string
        }
        Update: {
          A?: number
          B?: string
        }
        Relationships: [
          {
            foreignKeyName: "_LanguageToUser_A_fkey"
            columns: ["A"]
            isOneToOne: false
            referencedRelation: "Language"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "_LanguageToUser_B_fkey"
            columns: ["B"]
            isOneToOne: false
            referencedRelation: "User"
            referencedColumns: ["userId"]
          },
        ]
      }
      _StoryToTag: {
        Row: {
          A: number
          B: number
        }
        Insert: {
          A: number
          B: number
        }
        Update: {
          A?: number
          B?: number
        }
        Relationships: [
          {
            foreignKeyName: "_StoryToTag_A_fkey"
            columns: ["A"]
            isOneToOne: false
            referencedRelation: "Story"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "_StoryToTag_B_fkey"
            columns: ["B"]
            isOneToOne: false
            referencedRelation: "Tag"
            referencedColumns: ["id"]
          },
        ]
      }
      _StoryToVocabulary: {
        Row: {
          A: number
          B: number
        }
        Insert: {
          A: number
          B: number
        }
        Update: {
          A?: number
          B?: number
        }
        Relationships: [
          {
            foreignKeyName: "_StoryToVocabulary_A_fkey"
            columns: ["A"]
            isOneToOne: false
            referencedRelation: "Story"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "_StoryToVocabulary_B_fkey"
            columns: ["B"]
            isOneToOne: false
            referencedRelation: "Vocabulary"
            referencedColumns: ["id"]
          },
        ]
      }
      Chapter: {
        Row: {
          audioUrl: string | null
          content: string
          createdAt: string
          estimatedReadingTime: number | null
          id: number
          orderIndex: number
          storyId: number
          title: string
          updatedAt: string
        }
        Insert: {
          audioUrl?: string | null
          content: string
          createdAt?: string
          estimatedReadingTime?: number | null
          id?: number
          orderIndex: number
          storyId: number
          title: string
          updatedAt: string
        }
        Update: {
          audioUrl?: string | null
          content?: string
          createdAt?: string
          estimatedReadingTime?: number | null
          id?: number
          orderIndex?: number
          storyId?: number
          title?: string
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "Chapter_storyId_fkey"
            columns: ["storyId"]
            isOneToOne: false
            referencedRelation: "Story"
            referencedColumns: ["id"]
          },
        ]
      }
      ChapterProgress: {
        Row: {
          chapterId: number
          completedAt: string | null
          currentPosition: Json | null
          id: number
          lastReadAt: string | null
          progress: number
          readingProgressId: number
          startedAt: string | null
        }
        Insert: {
          chapterId: number
          completedAt?: string | null
          currentPosition?: Json | null
          id?: number
          lastReadAt?: string | null
          progress?: number
          readingProgressId: number
          startedAt?: string | null
        }
        Update: {
          chapterId?: number
          completedAt?: string | null
          currentPosition?: Json | null
          id?: number
          lastReadAt?: string | null
          progress?: number
          readingProgressId?: number
          startedAt?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ChapterProgress_chapterId_fkey"
            columns: ["chapterId"]
            isOneToOne: false
            referencedRelation: "Chapter"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ChapterProgress_readingProgressId_fkey"
            columns: ["readingProgressId"]
            isOneToOne: false
            referencedRelation: "ReadingProgress"
            referencedColumns: ["id"]
          },
        ]
      }
      ChatMessage: {
        Row: {
          content: string
          id: number
          role: string
          sessionId: number
          timestamp: string
        }
        Insert: {
          content: string
          id?: number
          role: string
          sessionId: number
          timestamp?: string
        }
        Update: {
          content?: string
          id?: number
          role?: string
          sessionId?: number
          timestamp?: string
        }
        Relationships: [
          {
            foreignKeyName: "ChatMessage_sessionId_fkey"
            columns: ["sessionId"]
            isOneToOne: false
            referencedRelation: "ChatSession"
            referencedColumns: ["id"]
          },
        ]
      }
      ChatSession: {
        Row: {
          createdAt: string
          flashcardSetId: number | null
          id: number
          languageName: string
          updatedAt: string
          userId: string
        }
        Insert: {
          createdAt?: string
          flashcardSetId?: number | null
          id?: number
          languageName: string
          updatedAt: string
          userId: string
        }
        Update: {
          createdAt?: string
          flashcardSetId?: number | null
          id?: number
          languageName?: string
          updatedAt?: string
          userId?: string
        }
        Relationships: [
          {
            foreignKeyName: "ChatSession_flashcardSetId_fkey"
            columns: ["flashcardSetId"]
            isOneToOne: false
            referencedRelation: "FlashcardSet"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ChatSession_languageName_fkey"
            columns: ["languageName"]
            isOneToOne: false
            referencedRelation: "Language"
            referencedColumns: ["name"]
          },
          {
            foreignKeyName: "ChatSession_userId_fkey"
            columns: ["userId"]
            isOneToOne: false
            referencedRelation: "User"
            referencedColumns: ["userId"]
          },
        ]
      }
      ComprehensionQuestion: {
        Row: {
          chapterId: number
          id: number
          question: string
        }
        Insert: {
          chapterId: number
          id?: number
          question: string
        }
        Update: {
          chapterId?: number
          id?: number
          question?: string
        }
        Relationships: [
          {
            foreignKeyName: "ComprehensionQuestion_chapterId_fkey"
            columns: ["chapterId"]
            isOneToOne: false
            referencedRelation: "Chapter"
            referencedColumns: ["id"]
          },
        ]
      }
      ComprehensionQuestionOption: {
        Row: {
          content: string
          id: number
          isCorrect: boolean
          order: number
          questionId: number
        }
        Insert: {
          content: string
          id?: number
          isCorrect?: boolean
          order: number
          questionId: number
        }
        Update: {
          content?: string
          id?: number
          isCorrect?: boolean
          order?: number
          questionId?: number
        }
        Relationships: [
          {
            foreignKeyName: "ComprehensionQuestionOption_questionId_fkey"
            columns: ["questionId"]
            isOneToOne: false
            referencedRelation: "ComprehensionQuestion"
            referencedColumns: ["id"]
          },
        ]
      }
      Exercise: {
        Row: {
          content: Json
          id: number
          order: number
          type: Database["public"]["Enums"]["ExerciseType"]
          worksheetId: number
        }
        Insert: {
          content: Json
          id?: number
          order: number
          type: Database["public"]["Enums"]["ExerciseType"]
          worksheetId: number
        }
        Update: {
          content?: Json
          id?: number
          order?: number
          type?: Database["public"]["Enums"]["ExerciseType"]
          worksheetId?: number
        }
        Relationships: [
          {
            foreignKeyName: "Exercise_worksheetId_fkey"
            columns: ["worksheetId"]
            isOneToOne: false
            referencedRelation: "Worksheet"
            referencedColumns: ["id"]
          },
        ]
      }
      Flashcard: {
        Row: {
          createdAt: string
          easeFactor: number
          id: number
          interval: number
          nextReviewAt: string
          repetitions: number
          setId: number
          updatedAt: string
        }
        Insert: {
          createdAt?: string
          easeFactor?: number
          id?: number
          interval?: number
          nextReviewAt: string
          repetitions?: number
          setId: number
          updatedAt: string
        }
        Update: {
          createdAt?: string
          easeFactor?: number
          id?: number
          interval?: number
          nextReviewAt?: string
          repetitions?: number
          setId?: number
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "Flashcard_setId_fkey"
            columns: ["setId"]
            isOneToOne: false
            referencedRelation: "FlashcardSet"
            referencedColumns: ["id"]
          },
        ]
      }
      FlashcardFace: {
        Row: {
          audioUrl: string | null
          content: string
          createdAt: string
          flashcardId: number
          id: number
          imageUrl: string | null
          metadata: Json | null
          order: number
          type: Database["public"]["Enums"]["FaceType"]
          updatedAt: string
        }
        Insert: {
          audioUrl?: string | null
          content: string
          createdAt?: string
          flashcardId: number
          id?: number
          imageUrl?: string | null
          metadata?: Json | null
          order: number
          type: Database["public"]["Enums"]["FaceType"]
          updatedAt: string
        }
        Update: {
          audioUrl?: string | null
          content?: string
          createdAt?: string
          flashcardId?: number
          id?: number
          imageUrl?: string | null
          metadata?: Json | null
          order?: number
          type?: Database["public"]["Enums"]["FaceType"]
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "FlashcardFace_flashcardId_fkey"
            columns: ["flashcardId"]
            isOneToOne: false
            referencedRelation: "Flashcard"
            referencedColumns: ["id"]
          },
        ]
      }
      FlashcardSet: {
        Row: {
          description: string | null
          id: number
          languageName: string
          name: string
          userId: string
        }
        Insert: {
          description?: string | null
          id?: number
          languageName: string
          name: string
          userId: string
        }
        Update: {
          description?: string | null
          id?: number
          languageName?: string
          name?: string
          userId?: string
        }
        Relationships: [
          {
            foreignKeyName: "FlashcardSet_languageName_fkey"
            columns: ["languageName"]
            isOneToOne: false
            referencedRelation: "Language"
            referencedColumns: ["name"]
          },
          {
            foreignKeyName: "FlashcardSet_userId_fkey"
            columns: ["userId"]
            isOneToOne: false
            referencedRelation: "User"
            referencedColumns: ["userId"]
          },
        ]
      }
      Language: {
        Row: {
          code: string
          id: number
          name: string
        }
        Insert: {
          code: string
          id?: number
          name: string
        }
        Update: {
          code?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
      LanguageFaceConfig: {
        Row: {
          config: Json
          createdAt: string
          id: number
          languageName: string
          updatedAt: string
        }
        Insert: {
          config: Json
          createdAt?: string
          id?: number
          languageName: string
          updatedAt: string
        }
        Update: {
          config?: Json
          createdAt?: string
          id?: number
          languageName?: string
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "LanguageFaceConfig_languageName_fkey"
            columns: ["languageName"]
            isOneToOne: false
            referencedRelation: "Language"
            referencedColumns: ["name"]
          },
        ]
      }
      ReadingProgress: {
        Row: {
          addedToLibraryAt: string | null
          completedAt: string | null
          createdAt: string
          currentPosition: Json | null
          id: number
          lastReadAt: string | null
          progress: number
          rating: number | null
          startedAt: string
          storyId: number
          updatedAt: string
          userId: string
        }
        Insert: {
          addedToLibraryAt?: string | null
          completedAt?: string | null
          createdAt?: string
          currentPosition?: Json | null
          id?: number
          lastReadAt?: string | null
          progress?: number
          rating?: number | null
          startedAt: string
          storyId: number
          updatedAt: string
          userId: string
        }
        Update: {
          addedToLibraryAt?: string | null
          completedAt?: string | null
          createdAt?: string
          currentPosition?: Json | null
          id?: number
          lastReadAt?: string | null
          progress?: number
          rating?: number | null
          startedAt?: string
          storyId?: number
          updatedAt?: string
          userId?: string
        }
        Relationships: [
          {
            foreignKeyName: "ReadingProgress_storyId_fkey"
            columns: ["storyId"]
            isOneToOne: false
            referencedRelation: "Story"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ReadingProgress_userId_fkey"
            columns: ["userId"]
            isOneToOne: false
            referencedRelation: "User"
            referencedColumns: ["userId"]
          },
        ]
      }
      Story: {
        Row: {
          audioUrl: string | null
          averageRating: number | null
          content: string
          createdAt: string
          description: string
          difficulty: number
          id: number
          imageUrl: string | null
          isPublished: boolean
          isReviewed: boolean
          languageName: string
          readCount: number
          title: string
          translatedTitle: string
          updatedAt: string
          userId: string
        }
        Insert: {
          audioUrl?: string | null
          averageRating?: number | null
          content: string
          createdAt?: string
          description: string
          difficulty: number
          id?: number
          imageUrl?: string | null
          isPublished?: boolean
          isReviewed?: boolean
          languageName: string
          readCount?: number
          title: string
          translatedTitle: string
          updatedAt: string
          userId: string
        }
        Update: {
          audioUrl?: string | null
          averageRating?: number | null
          content?: string
          createdAt?: string
          description?: string
          difficulty?: number
          id?: number
          imageUrl?: string | null
          isPublished?: boolean
          isReviewed?: boolean
          languageName?: string
          readCount?: number
          title?: string
          translatedTitle?: string
          updatedAt?: string
          userId?: string
        }
        Relationships: [
          {
            foreignKeyName: "Story_languageName_fkey"
            columns: ["languageName"]
            isOneToOne: false
            referencedRelation: "Language"
            referencedColumns: ["name"]
          },
          {
            foreignKeyName: "Story_userId_fkey"
            columns: ["userId"]
            isOneToOne: false
            referencedRelation: "User"
            referencedColumns: ["userId"]
          },
        ]
      }
      Submission: {
        Row: {
          answer: Json
          createdAt: string
          exerciseId: number
          id: number
          isCorrect: boolean
          userId: string
        }
        Insert: {
          answer: Json
          createdAt?: string
          exerciseId: number
          id?: number
          isCorrect: boolean
          userId: string
        }
        Update: {
          answer?: Json
          createdAt?: string
          exerciseId?: number
          id?: number
          isCorrect?: boolean
          userId?: string
        }
        Relationships: [
          {
            foreignKeyName: "Submission_exerciseId_fkey"
            columns: ["exerciseId"]
            isOneToOne: false
            referencedRelation: "Exercise"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Submission_userId_fkey"
            columns: ["userId"]
            isOneToOne: false
            referencedRelation: "User"
            referencedColumns: ["userId"]
          },
        ]
      }
      Tag: {
        Row: {
          createdAt: string
          id: number
          name: string
          updatedAt: string
        }
        Insert: {
          createdAt?: string
          id?: number
          name: string
          updatedAt: string
        }
        Update: {
          createdAt?: string
          id?: number
          name?: string
          updatedAt?: string
        }
        Relationships: []
      }
      User: {
        Row: {
          createdAt: string
          email: string
          updatedAt: string
          userId: string
          username: string
        }
        Insert: {
          createdAt?: string
          email: string
          updatedAt: string
          userId: string
          username: string
        }
        Update: {
          createdAt?: string
          email?: string
          updatedAt?: string
          userId?: string
          username?: string
        }
        Relationships: []
      }
      Vocabulary: {
        Row: {
          createdAt: string
          example: string | null
          flashcardSetId: number | null
          id: number
          languageName: string
          meaning: string
          updatedAt: string
          userId: string
          word: string
        }
        Insert: {
          createdAt?: string
          example?: string | null
          flashcardSetId?: number | null
          id?: number
          languageName: string
          meaning: string
          updatedAt: string
          userId: string
          word: string
        }
        Update: {
          createdAt?: string
          example?: string | null
          flashcardSetId?: number | null
          id?: number
          languageName?: string
          meaning?: string
          updatedAt?: string
          userId?: string
          word?: string
        }
        Relationships: [
          {
            foreignKeyName: "Vocabulary_flashcardSetId_fkey"
            columns: ["flashcardSetId"]
            isOneToOne: false
            referencedRelation: "FlashcardSet"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Vocabulary_languageName_fkey"
            columns: ["languageName"]
            isOneToOne: false
            referencedRelation: "Language"
            referencedColumns: ["name"]
          },
          {
            foreignKeyName: "Vocabulary_userId_fkey"
            columns: ["userId"]
            isOneToOne: false
            referencedRelation: "User"
            referencedColumns: ["userId"]
          },
        ]
      }
      Worksheet: {
        Row: {
          completedAt: string | null
          createdAt: string
          description: string | null
          id: number
          languageName: string
          title: string
          updatedAt: string
          userId: string
        }
        Insert: {
          completedAt?: string | null
          createdAt?: string
          description?: string | null
          id?: number
          languageName: string
          title: string
          updatedAt: string
          userId: string
        }
        Update: {
          completedAt?: string | null
          createdAt?: string
          description?: string | null
          id?: number
          languageName?: string
          title?: string
          updatedAt?: string
          userId?: string
        }
        Relationships: [
          {
            foreignKeyName: "Worksheet_languageName_fkey"
            columns: ["languageName"]
            isOneToOne: false
            referencedRelation: "Language"
            referencedColumns: ["name"]
          },
          {
            foreignKeyName: "Worksheet_userId_fkey"
            columns: ["userId"]
            isOneToOne: false
            referencedRelation: "User"
            referencedColumns: ["userId"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      ExerciseType:
        | "MULTIPLE_CHOICE"
        | "FILL_IN_BLANK"
        | "MATCHING"
        | "SENTENCE_CONSTRUCTION"
        | "TRANSLATION"
      FaceType:
        | "FRONT"
        | "BACK"
        | "PINYIN"
        | "CHARACTER"
        | "ROMAJI"
        | "HIRAGANA"
        | "KATAKANA"
        | "TRANSLITERATION"
        | "TRANSLATION"
        | "DEFINITION"
        | "EXAMPLE_SENTENCE"
        | "EXAMPLE_TRANSLATION"
        | "CONTEXT_NOTES"
        | "MNEMONIC"
        | "PART_OF_SPEECH"
        | "CONJUGATION"
        | "GENDER"
        | "PLURAL_FORM"
        | "AUDIO_NATIVE"
        | "AUDIO_SLOW"
        | "IMAGE"
        | "VIDEO"
        | "NOTES"
        | "OTHER"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

