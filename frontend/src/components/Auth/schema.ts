import { z } from 'zod'

export const registerSchema = z.object({
  email: z.string({ required_error: 'Email не указан' }).nonempty('Email не указан').email('Неправильный email'),
  password: z.string({ required_error: 'Пароль не указан' }).nonempty('Пароль не указан')
    .min(6, 'Пароль должен быть меньше 6 символов')
    .max(24, 'Пароль должен быть больше 24 символов')
    .regex(/^[a-zA-Z0-9_]*$/, 'Неверный пароль'),
})

export const loginSchema = z.object({
  email: z.string({ required_error: 'Email не указан' }).nonempty('Email не указан').email('Неправильный email'),
  password: z.string({ required_error: 'Пароль не указан' }).nonempty('Пароль не указан')
    .min(6, 'Пароль должен быть меньше 6 символов')
    .max(24, 'Пароль должен быть больше 24 символов')
    .regex(/^[a-zA-Z0-9_]*$/, 'Неверный пароль'),
})
