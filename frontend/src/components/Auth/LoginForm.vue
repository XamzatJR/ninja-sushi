<script setup lang="ts">
import { createZodPlugin } from '@formkit/zod'
import type { z } from 'zod'
import IconGoogle from '@/components/icons/IconGoogle.vue'
import { loginSchema } from '@/components/Auth/schema'
import AuthWrapper from '@/components/Auth/AuthWrapper.vue'
import { loginWithGoogle } from '@/services/user'
import { useUserStore } from '@/stores/user'
import {useAuth} from '@/composables/useAuth'

const { signin } = useUserStore()
const { isLoginOpen, isRegisterOpen } = useAuth()

const [zodPlugin, submitHandler] = createZodPlugin(
  loginSchema,
  async (formData: z.infer<typeof loginSchema>) => {
    await signin(formData)
  },
)
function closeLogin() {
  isLoginOpen.value = false
}
function openRegister() {
  isLoginOpen.value = false
  isRegisterOpen.value = true
}
</script>

<template>
  <AuthWrapper @close="closeLogin" title="Авторизация">
    <FormKit
      type="form"
      form-class="flex flex-col gap-4"
      :plugins="[zodPlugin]"
      :config="{ validationVisibility: 'dirty' }"
      :actions="false"
      :incomplete-message="false"
      @submit="submitHandler"
    >
      <FormKit
        id="email"
        label-class="text-ninja-60 text-sm md:text-base"
        name="email" type="email"
        input-class="w-full rounded-xl bg-ninja-50 py-3 px-4 text-ninja-70 font-medium text-base border-none placeholder-ninja-60"
        class=""
        message-class="text-xs text-ninja-400 mt-1.5"
        label="Email"
        placeholder="Введите адрес электронной почты"
      />

      <FormKit
        id="password" name="password"
        type="password"
        class="rounded-xl bg-ninja-50 py-3 px-4 text-ninja-70 font-medium text-base border-none"
        input-class="w-full rounded-xl bg-ninja-50 py-3 px-4 text-ninja-70 font-medium text-base border-none placeholder-ninja-60"
        label-class="text-ninja-60 text-sm md:text-base"
        message-class="text-xs text-ninja-400 mt-1.5"
        label="Пароль"
        placeholder="Введите пароль"
      />
      <FormKit
        type="submit" label="Войти"
        input-class="w-full p-3 bg-ninja-250 text-white text-base rounded-xl"
      />
      <FormKit
        type="button"
        input-class="w-full flex gap-3 justify-center items-center bg-ninja-50 py-3 rounded-xl font-medium text-base text-ninja-70"
        @click="loginWithGoogle"
      >
        <IconGoogle
          width="26" height="26"
        />
        Google
      </FormKit>
      <span
        class="text-center text-xs"
      >
        или
      </span>
      <button
        class="bg-ninja-50 py-3 rounded-xl font-medium text-base text-ninja-70"
        type="button"
        @click="openRegister"
      >
        Зарегистрироваться
      </button>
    </FormKit>
  </AuthWrapper>
</template>
