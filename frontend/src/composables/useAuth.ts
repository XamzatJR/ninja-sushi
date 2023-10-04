import { ref } from "vue"

const isLoginOpen = ref(false)
const isRegisterOpen = ref(false)

export function useAuth() {


    return {isLoginOpen, isRegisterOpen}
}