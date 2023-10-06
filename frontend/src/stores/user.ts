import { defineStore } from 'pinia'
import { ref } from 'vue'
import { login, loginWithGoogle, register } from '@/services/user'
interface formData {
  email: string
  password: string
}
export const useUserStore = defineStore('user', () => {
  // const token = ref<string | null>(localStorage.getItem('token') ?? null)
  const session = ref<any>(null)
  const user = ref<any>(null)
  // const isAuth = computed(() => !!token.value)

  async function signin({ email, password }: formData) {
    const response = await login(email, password)
    user.value = response.user
    session.value = response.session
    return response
  }
  async function signinWithGoogle() {
    const response = await loginWithGoogle()
  }
  async function signup({ email, first_name, password }: formData & { first_name: string }) {
    register(email, first_name, password)
  }
  return { user, signin, signup }
})
