import { Model, Types } from 'mongoose';
import { IStudent } from '../student/student.interface';
import { IFaculty } from '../faculty/faculty.interface';
import { IAdmin } from '../admin/admin.interface';

// 1. Create an interface
// export interface IUser {
//   id:string;
//   role:string;
//   password:string;
// }

export type IUser = {
  id: string;
  role: string;
  password: string;
  needsPasswordChange: boolean;
  passwordChangedAt?: Date;
  student?: Types.ObjectId | IStudent;
  faculty?: Types.ObjectId | IFaculty;
  admin?: Types.ObjectId | IAdmin;
};

//User Authentication types with static method
export type UserModel = {
  isUserExist(
    id: string
  ): Promise<Pick<IUser, 'id' | 'password' | 'role' | 'needsPasswordChange'>>;

  isPasswordMatched(
    givenPassword: string,
    savePassword: string
  ): Promise<boolean>;
} & Model<IUser>;

//User Authentication types with instance method

// export type IUserMethods = {
//   isUserExist(id: string): Promise<Partial<IUser> | null>;
//   isPasswordMatched(
//     givenPassword: string,
//     savePassword: string
//   ): Promise<boolean>;
// };

// export type UserModel = Model<IUser, Record<string, unknown>, IUserMethods>;
