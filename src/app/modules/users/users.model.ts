import { Model, Schema, model } from 'mongoose'
import { IUser } from './users.interface'

// Create a new Model type that knows about IUserMethods...[statics procedure]
type UserModel = Model<IUser, object>

//  Create a Schema corresponding to the  interface.
const userSchema = new Schema<IUser>(
  {
    id: { type: String, required: true, unique: true },
    role: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
)

// Create a Model.
// const User = model<IUser>('User', userSchema)

//statics model
export const User = model<IUser, UserModel>('User', userSchema)
