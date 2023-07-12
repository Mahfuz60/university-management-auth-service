import { z } from 'zod';

const createAcademicDepartmentZodSchemes = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required!',
    }),

    academicFaculty: z.string({
      required_error: 'Academic Facility is required!',
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

export const AcademicDepartmentValidation = {
  createAcademicDepartmentZodSchemes,
  updateFacultyZodSchemes,
};
