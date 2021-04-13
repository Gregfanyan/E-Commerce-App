import Users, { UserDocument } from '../models/Users'
import Products, { ProductDocument } from '../models/Products'

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

const addProductToCart = async (
  userId: string,
  productId: string
): Promise<UserDocument> => {
  const user = await Users.findById(userId).select('-password').exec()
  if (!user) {
    throw new Error(`User ${userId} not found`)
  }
  const selectedProduct = await Products.findById(productId).exec()
  if (!selectedProduct) {
    throw new Error(`Product ${selectedProduct} not found`)
  }

  const itemAdded = user.cart.find((item: any) => item.product === productId)
  if (!itemAdded) {
    user.cart.push(productId)
  }
  return await user.save()
}

/* const addProductToCart = async (
  userId: string,
  productId: any
): Promise<UserDocument> => {
  const user = await Users.findById(userId).select('-password').exec()
  if (!user) {
    throw new Error(`User ${userId} not found`)
  }
  const selectedProduct = await Products.findById(productId).exec()
  if (!selectedProduct) {
    throw new Error(`Product ${selectedProduct} not found`)
  }
  console.log('selectedProduct', selectedProduct)

  const itemAdded = user.cart.find(
    (item: any) => item.product === selectedProduct.id
  )
  console.log('itemAdded', itemAdded)

  if (!itemAdded) {
    user.cart.push(selectedProduct)
  }
  return await user.save()
}
 */

export default {
  create,
  findById,
  findAll,
  update,
  deleteUser,
  findUserByEmail,
  addProductToCart,
}
