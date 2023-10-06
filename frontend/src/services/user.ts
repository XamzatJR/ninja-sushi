import { supabase } from './supabase'

export async function register(email: string, first_name: string, password: string) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { first_name } },
  })
  if (error)
    throw error
  return data
}
export async function login(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password })
  if (error)
    throw error
  return data
}
export async function loginWithGoogle() {
  const { data, error } = await supabase.auth.signInWithOAuth({ provider: 'google' })
  if (error)
    throw error
  return data
}

export async function resetPassword(email: string) {
  const { data, error } = await supabase.auth.resetPasswordForEmail(email)
  if (error)
    throw error
  return data
}
export async function logout() {
  const { error } = await supabase.auth.signOut()
  if (error)
    throw error
}
export async function updateUser(email: string, password: string, first_name: string) {
  const { data, error } = await supabase.auth.updateUser({
    email,
    password,
    data: { first_name },
  })
  if (error)
    throw error
  return data
}
