import { z } from 'zod';

const loginZodSchema = z.object({
  body: z.object({
    id: z.string({
      required_error: 'ID is required!',
    }),
    password: z.string({
      required_error: 'Password is required!',
    }),
  }),
});
const refreshZodSchema = z.object({
  cookies: z.object({
    refreshToken: z.string({
      required_error: 'refreshToken is required!',
    }),
  }),
});
const changePasswordZodSchema = z.object({
  body: z.object({
    oldPassword: z.string({
      required_error: 'old password is required!',
    }),
    newPassword: z.string({
      required_error: 'new password is required!',
    }),
  }),
});

export const AuthValidation = {
  loginZodSchema,
  refreshZodSchema,
  changePasswordZodSchema,
};
