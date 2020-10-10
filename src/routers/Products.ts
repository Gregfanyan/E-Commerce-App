import express from 'express'

import {
  createProduct,
  findById,
  deleteProduct,
  findAll,
  updateProduct,
} from '../controllers/Products'

import { VerifyToken } from '../controllers/VerifyToken'

const router = express.Router()

// Every path we define here will get /api/v1/products prefix
router.get('/', findAll)
router.get('/:productId', findById)
router.put('/:productId', VerifyToken, updateProduct)
router.delete('/:productId', VerifyToken, deleteProduct)
router.post('/', VerifyToken, createProduct)

export default router
