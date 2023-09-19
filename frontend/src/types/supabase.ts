export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export enum FoodType {
  Rolls = 1,
  Sushi,
  Sets,
  Snacks,
  Drinks,
}
export interface Database {
  public: {
    Tables: {
      dishes: {
        Row: {
          dish_id: number
          food_type_id: number
          img: string
          ingredients: Json | null
          name: string
          price: number | null
          quantity: number | null
          volume: number | null
        }
        Insert: {
          dish_id?: number
          food_type_id: number
          img?: string
          ingredients?: Json | null
          name: string
          price?: number | null
          quantity?: number | null
          volume?: number | null
        }
        Update: {
          dish_id?: number
          food_type_id?: number
          img?: string
          ingredients?: Json | null
          name?: string
          price?: number | null
          quantity?: number | null
          volume?: number | null
        }
        Relationships: [
          {
            foreignKeyName: 'dishes_food_type_id_fkey'
            columns: ['food_type_id']
            referencedRelation: 'food_types'
            referencedColumns: ['food_type_id']
          },
        ]
      }
      food_types: {
        Row: {
          food_type_id: number
          name: string
        }
        Insert: {
          food_type_id?: number
          name: string
        }
        Update: {
          food_type_id?: number
          name?: string
        }
        Relationships: []
      }
      user_favorites: {
        Row: {
          date_added: string | null
          dish_id: number
          favorite_id: number
          user_id: string | null
        }
        Insert: {
          date_added?: string | null
          dish_id: number
          favorite_id?: number
          user_id?: string | null
        }
        Update: {
          date_added?: string | null
          dish_id?: number
          favorite_id?: number
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'user_favorites_dish_id_fkey'
            columns: ['dish_id']
            referencedRelation: 'dishes'
            referencedColumns: ['dish_id']
          },
          {
            foreignKeyName: 'user_favorites_user_id_fkey'
            columns: ['user_id']
            referencedRelation: 'users'
            referencedColumns: ['id']
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
