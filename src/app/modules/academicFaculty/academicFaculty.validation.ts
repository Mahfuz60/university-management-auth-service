import { z } from 'zod';

const createFacultyZodSchemes = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required!',
    }),
  }),
});

const updateFacultyZodSchemes = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required!',
    }),
  }),
});

export const AcademicFacultyValidation = {
  createFacultyZodSchemes,
  updateFacultyZodSchemes,
};
