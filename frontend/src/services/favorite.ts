import { supabase } from './supabase'

async function getFavorites(limit = 7) {
  const { data: user_favorites, error } = await supabase
    .from('user_favorites')
    .select('*').range(0, limit)
  if (error)
    throw error
  return user_favorites
}
