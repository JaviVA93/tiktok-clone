export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          created_at: string
          id: string
          username: string
        }
        Insert: {
          created_at?: string
          id: string
          username: string
        }
        Update: {
          created_at?: string
          id?: string
          username?: string
        }
      }
      users_videos_likes: {
        Row: {
          created_at: string | null
          id: number
          user_id: string
          video_id: number
        }
        Insert: {
          created_at?: string | null
          id?: number
          user_id: string
          video_id: number
        }
        Update: {
          created_at?: string | null
          id?: number
          user_id?: string
          video_id?: number
        }
      }
      videos: {
        Row: {
          albumCover: string
          comments: number
          created_at: string | null
          description: string
          id: number
          likes: number
          shares: number
          song: string
          src: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          albumCover: string
          comments?: number
          created_at?: string | null
          description: string
          id?: number
          likes?: number
          shares?: number
          song?: string
          src: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          albumCover?: string
          comments?: number
          created_at?: string | null
          description?: string
          id?: number
          likes?: number
          shares?: number
          song?: string
          src?: string
          updated_at?: string | null
          user_id?: string
        }
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