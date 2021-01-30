import mongoose, { Document } from 'mongoose'
import { ProductDocument } from './Products'

export type UserDocument = Document & {
  firstName: string
  lastName: string
  password: string
  email: string
  isAdmin: boolean
  cart: ProductDocument[]
  resetLink: string
}

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    max: 64,
  },
  lastName: {
    type: String,
    required: true,
    max: 64,
  },
  password: {
    type: String,
    required: true,
    min: 3,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  cart: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Products',
    },
  ],
  resetLink: {
    data: String,
    default: '',
  },
})

export default mongoose.model<UserDocument>('Users', userSchema)
