import mongoose, { Document } from 'mongoose'

export type ProductDocument = Document & {
  name: string;
  description: string;
  categories: string[];
  variants: string[];
  sizes: number[];
}

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    index: true,
  },
  description: {
    type: String,
  },
  categories: [String],
  variants: [String],
  sizes: [Number],
})

export default mongoose.model<ProductDocument>('Products', productSchema)
