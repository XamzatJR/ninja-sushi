import { supabase } from './supabase'
import { FoodType } from '@/types/supabase'

export async function getSushi() {
  const { data, error } = await supabase
    .from('dishes')
    .select('*')
    .eq('food_type_id', FoodType.Sushi)
    .range(0, 7)
  if (error)
    throw error
  return data
}
export async function getRolls() {
  const { data, error } = await supabase
    .from('dishes')
    .select('*')
    .eq('food_type_id', FoodType.Rolls)
    .range(0, 7)
  if (error)
    throw error
  return data
}
export async function getSets() {
  const { data, error } = await supabase
    .from('dishes')
    .select('*')
    .eq('food_type_id', FoodType.Sets)
    .range(0, 7)
  if (error)
    throw error
  return data
}
export async function getSnacks() {
  const { data, error } = await supabase
    .from('dishes')
    .select('*')
    .eq('food_type_id', FoodType.Snacks)
    .range(0, 7)
  if (error)
    throw error
  return data
}
export async function getDrinks() {
  const { data, error } = await supabase
    .from('dishes')
    .select('*')
    .eq('food_type_id', FoodType.Drinks)
    .range(0, 7)
  if (error)
    throw error
  return data
}
