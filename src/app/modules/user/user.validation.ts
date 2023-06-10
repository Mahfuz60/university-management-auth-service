import { z } from 'zod';

// request validation with zod
const createUserZodSchema = z.object({
  body: z.object({
    role: z.string({
      required_error: 'role is must be required',
    }),
    password: z.string().optional(),
  }),
});

export const userValidation = {
  createUserZodSchema,
};
