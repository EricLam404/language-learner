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
      Language: {
        Row: {
          id: number
          name: string
        }
        Insert: {
          id?: number
          name: string
        }
        Update: {
          id?: number
          name?: string
        }
        Relationships: []
      }
      Story: {
        Row: {
          completedAt: string | null
          content: string
          createdAt: string
          id: number
          languageName: string
          updatedAt: string
          userId: string
        }
        Insert: {
          completedAt?: string | null
          content: string
          createdAt?: string
          id?: number
          languageName: string
          updatedAt: string
          userId: string
        }
        Update: {
          completedAt?: string | null
          content?: string
          createdAt?: string
          id?: number
          languageName?: string
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
      UserLanguage: {
        Row: {
          languageName: string
          userId: string
        }
        Insert: {
          languageName: string
          userId: string
        }
        Update: {
          languageName?: string
          userId?: string
        }
        Relationships: [
          {
            foreignKeyName: "UserLanguage_languageName_fkey"
            columns: ["languageName"]
            isOneToOne: false
            referencedRelation: "Language"
            referencedColumns: ["name"]
          },
          {
            foreignKeyName: "UserLanguage_userId_fkey"
            columns: ["userId"]
            isOneToOne: false
            referencedRelation: "User"
            referencedColumns: ["userId"]
          },
        ]
      }
      Vocabulary: {
        Row: {
          createdAt: string
          example: string | null
          id: number
          languageName: string
          meaning: string
          storyId: number | null
          updatedAt: string
          userId: string
          word: string
        }
        Insert: {
          createdAt?: string
          example?: string | null
          id?: number
          languageName: string
          meaning: string
          storyId?: number | null
          updatedAt: string
          userId: string
          word: string
        }
        Update: {
          createdAt?: string
          example?: string | null
          id?: number
          languageName?: string
          meaning?: string
          storyId?: number | null
          updatedAt?: string
          userId?: string
          word?: string
        }
        Relationships: [
          {
            foreignKeyName: "Vocabulary_languageName_fkey"
            columns: ["languageName"]
            isOneToOne: false
            referencedRelation: "Language"
            referencedColumns: ["name"]
          },
          {
            foreignKeyName: "Vocabulary_storyId_fkey"
            columns: ["storyId"]
            isOneToOne: false
            referencedRelation: "Story"
            referencedColumns: ["id"]
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
          content: string
          createdAt: string
          id: number
          languageName: string
          updatedAt: string
          userId: string
        }
        Insert: {
          completedAt?: string | null
          content: string
          createdAt?: string
          id?: number
          languageName: string
          updatedAt: string
          userId: string
        }
        Update: {
          completedAt?: string | null
          content?: string
          createdAt?: string
          id?: number
          languageName?: string
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
      [_ in never]: never
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

