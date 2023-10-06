import { z } from 'zod'

export const registerSchema = z.object({
  email: z.string({ required_error: 'Email не указан' }).nonempty('Email не указан').email('Неправильный email'),
  password: z.string({ required_error: 'Пароль не указан' }).nonempty('Пароль не указан')
    .min(6, 'Пароль должен быть не меньше 6 символов')
    .max(24, 'Пароль должен быть не больше 24 символов')
    .regex(/^[a-zA-Z0-9_]*$/, 'Неверный пароль'),
  first_name: z.string({required_error: 'Имя не указано'}).nonempty('Имя не указано').min(3, 'Имя не должно быть меньше 3 символов').max(18, 'Имя не должно быть больше 18 символов')
})

export const loginSchema = z.object({
  email: z.string({ required_error: 'Email не указан' }).nonempty('Email не указан').email('Неправильный email'),
  password: z.string({ required_error: 'Пароль не указан' }).nonempty('Пароль не указан')
    .min(6, 'Пароль должен быть не меньше 6 символов')
    .max(24, 'Пароль должен быть не больше 24 символов')
    .regex(/^[a-zA-Z0-9_]*$/, 'Неверный пароль'),
})
