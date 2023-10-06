import type { User, Session } from '@supabase/supabase-js'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  // const token = ref<string | null>(localStorage.getItem('token') ?? null)
  const session = ref<Session | null>(null)
  const user = ref<User | null>(null)
  // const isAuth = computed(() => !!token.value)

  
  return { user, session }
})
