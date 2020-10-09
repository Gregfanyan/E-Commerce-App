import Users, { UserDocument } from '../models/Users'

function create(user: UserDocument): Promise<UserDocument> {
  return user.save()
}

function findById(userId: string): Promise<UserDocument> {
  return Users.findById(userId)
    .exec()
    .then((user) => {
      if (!user) {
        throw new Error(`Users ${userId} not found`)
      }
      return user
    })
}

function findAll(): Promise<UserDocument[]> {
  return Users.find().populate('cart').sort({ firstName: 1 }).exec()
}

function update(
  userId: string,
  update: Partial<UserDocument>
): Promise<UserDocument> {
  return Users.findById(userId)
    .exec()
    .then((user) => {
      if (!user) {
        throw new Error(`User ${userId} not found`)
      }

      if (update.firstName) {
        user.firstName = update.firstName
      }
      if (update.lastName) {
        user.lastName = update.lastName
      }
      if (update.password) {
        user.password = update.password
      }
      if (update.email) {
        user.email = update.email
      }
      if (update.isAdmin) {
        user.isAdmin = update.isAdmin
      }
      if (update.cart) {
        user.cart = update.cart
      }
      return user.save()
    })
}

function findUserByEmail(email: string): Promise<UserDocument | null> {
  return Users.findOne({ email: email }).exec()
}

function deleteUser(userId: string): Promise<UserDocument | null> {
  return Users.findByIdAndDelete(userId).exec()
}

export default {
  create,
  findById,
  findAll,
  update,
  deleteUser,
  findUserByEmail,
}
