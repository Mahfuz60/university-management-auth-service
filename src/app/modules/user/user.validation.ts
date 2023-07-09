import { z } from 'zod';
import { bloodGroup, gender } from '../student/student.constant';

// request validation with zod
const createUserZodSchema = z.object({
  body: z.object({
    password: z.string().optional(),

    student: z.object({
      name: z.object({
        firstName: z.string({
          required_error: 'First Name is required!',
        }),
        middleName: z
          .string({
            required_error: 'Middle Name is required!',
          })
          .optional(),

        lastName: z.string({
          required_error: 'Last Name is required!',
        }),
      }),

      gender: z.enum([...gender] as [string, ...string[]], {
        required_error: 'Gender is required',
      }),
      dateOfBirth: z.string({
        required_error: 'Date of Birth is required!',
      }),
      email: z
        .string({
          required_error: 'Email is required!',
        })
        .email(),
      contactNo: z.string({
        required_error: 'Contact No is required!',
      }),
      emergencyContactNo: z.string({
        required_error: 'Emergency Contact No is required!',
      }),
      bloodGroup: z.enum([...bloodGroup] as [string, ...string[]]).optional(),
      presentAddress: z.string({
        required_error: 'Present Address is required!',
      }),

      permanentAddress: z.string({
        required_error: 'Permanent Address is required!',
      }),
      guardian: z.object({
        fatherName: z.string({
          required_error: 'Father Name is required!',
        }),
        fatherOccupation: z.string({
          required_error: 'Father Occupation is required!',
        }),
        fatherContactNo: z.string({
          required_error: 'Father Contact number is required',
        }),
        motherName: z.string({
          required_error: 'Mother Name is required!',
        }),
        motherOccupation: z.string({
          required_error: 'Mother Occupation is required!',
        }),
        motherContactNo: z.string({
          required_error: 'Mother Contact number is required',
        }),
      }),

      localGuardian: z.object({
        name: z.string({
          required_error: 'Local Guardian Name is required',
        }),

        occupation: z.string({
          required_error: 'Local Guardian Occupation Name is required',
        }),
        contactNo: z.string({
          required_error: 'Local Guardian Contact No is required',
        }),
        address: z.string({
          required_error: 'Local Guardian Address is required',
        }),
      }),

      profileImage: z.string().optional(),
    }),
  }),
});

export const UserValidation = {
  createUserZodSchema,
};
