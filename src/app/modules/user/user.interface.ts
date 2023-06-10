import { Model } from 'mongoose';

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
};

// Create a new Model type that knows about IUserMethods...[statics procedure]
// export type UserModel = Model<IUser, object>
export type UserModel = Model<IUser, Record<string, unknown>>;
