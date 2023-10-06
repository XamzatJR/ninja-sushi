import { ref } from "vue"
import { useUserStore } from '@/stores/user'
import { login, loginWithGoogle, register } from '@/services/user'

const isLoginOpen = ref(false)
const isRegisterOpen = ref(false)

interface formData {
    email: string
    password: string
}

export function useAuth() {
    let { user, session } = useUserStore()
    
    async function signin({ email, password }: formData) {
        const response = await login(email, password)
        user = response.user
        session = response.session
        return response
      }
      async function signinWithGoogle() {
        const response = await loginWithGoogle()
      }
      async function signup({ email, first_name, password }: formData & { first_name: string }) {
        const response = await register(email, first_name, password)
        user = response.user
        session = response.session
      }
    return {isLoginOpen, isRegisterOpen, signin, signup, signinWithGoogle}
}