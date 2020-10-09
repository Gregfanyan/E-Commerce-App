import express from 'express'

import {
  createUser,
  findById,
  deleteUser,
  findAll,
  logInUser,
  updateUser,
  getProduct,
  getCart,
} from '../controllers/Users'

import { VerifyToken } from '../controllers/VerifyToken'

const router = express.Router()

// Every path we define here will get /api/v1/products prefix
router.get('/', VerifyToken, findAll)
router.get('/:userId', VerifyToken, findById)
router.put('/:userId', VerifyToken, updateUser)
router.delete('/:userId', VerifyToken, deleteUser)
router.post('/', createUser)
router.post('/logIn', logInUser)
router.post('/:userId/cart', VerifyToken, getProduct)
router.get('/:userId/cart', VerifyToken, getCart)

export default router
