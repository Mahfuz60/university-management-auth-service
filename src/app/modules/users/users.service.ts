import config from '../../../config'
import { generateUserId } from './user.utils'
import { IUser } from './users.interface'
import { User } from './users.model'

const createUser = async (user: IUser): Promise<IUser | null> => {
  //auto generated incremental id
  const id = await generateUserId()

  user.id = id

  //default set password
  if (!user.password) {
    user.password = config.default_user_pass as string
  }
  const createdUser = await User.create(user)
  if (!createdUser) {
    throw new Error('Failed to create user!')
  }

  return createdUser
}

export default {
  createUser,
}
