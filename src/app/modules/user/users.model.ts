import { Schema, model } from 'mongoose';
import { IUser, UserModel } from './user.interface';

//  Create a Schema corresponding to the  interface.
const userSchema = new Schema<IUser>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    role: { type: String, required: true },

    password: {
      type: String,
      required: true,
    },

    student: {
      type: Schema.Types.ObjectId,
      ref: 'Student',
    },
    faculty: {
      type: Schema.Types.ObjectId,
      ref: 'Faculty',
    },
    admin: {
      type: Schema.Types.ObjectId,
      ref: 'Admin',
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

// Create a Model.
// const User = model<IUser>('User', userSchema)

//statics model
export const User = model<IUser, UserModel>('User', userSchema);
