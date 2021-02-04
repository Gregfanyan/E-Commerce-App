import Products, { ProductDocument } from '../models/Products'

function create(product: ProductDocument): Promise<ProductDocument> {
  return product.save()
}

function findById(productId: string): Promise<ProductDocument> {
  return Products.findById(productId)
    .exec()
    .then((product) => {
      if (!product) {
        throw new Error(`Products ${productId} not found`)
      }
      return product
    })
}

function findAll(): Promise<ProductDocument[]> {
  return Products.find().exec() // Return a Promise
}

function update(
  productId: string,
  update: Partial<ProductDocument>
): Promise<ProductDocument> {
  return Products.findById(productId)
    .exec()
    .then((product) => {
      if (!product) {
        throw new Error(`Product ${productId} not found`)
      }

      if (update.name) {
        product.name = update.name
      }
      if (update.description) {
        product.description = update.description
      }
      if (update.categories) {
        product.categories = update.categories
      }
      if (update.variants) {
        product.variants = update.variants
      }
      if (update.sizes) {
        product.sizes = update.sizes
      }
      if (update.price) {
        product.price = update.price
      }
      if (update.img) {
        product.img = update.img
      }
      return product.save()
    })
}

function deleteProduct(productId: string): Promise<ProductDocument | null> {
  return Products.findByIdAndDelete(productId).exec()
}

export default {
  create,
  findById,
  findAll,
  update,
  deleteProduct,
}
