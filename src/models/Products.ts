import mongoose, { Document } from 'mongoose'

export type ProductDocument = Document & {
  name: string;
  description: string;
  categories: string[];
  variants: string[];
  sizes: number[];
  img: string;
  price: number;
  quantity: number
}

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    index: true,
  },
  description: {
    type: String,
    required: true,
  },

  categories: {
    type: [String],
    required: true,
  },
  variants: {
    type: [String],
    required: true,
  },
  sizes: {
    type: [Number],
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
  },
})

export default mongoose.model<ProductDocument>('Products', productSchema)
