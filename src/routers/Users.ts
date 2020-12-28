import express from 'express'

import {
  createUser,
  findById,
  deleteUser,
  findAll,
  logInUser,
  updateUser,
  /*   getProduct,
   */ getCart,
  forgotPassword,
  resetPassword,
} from '../controllers/Users'

import { VerifyToken } from '../controllers/VerifyToken'

const router = express.Router()

// Every path we define here will get /api/v1/products prefix
router.get('/', findAll)
router.get('/:userId', VerifyToken, findById)
router.put('/forgotPassword', forgotPassword)
router.put('/resetPassword', resetPassword)
router.delete('/:userId', VerifyToken, deleteUser)
router.post('/', createUser)
router.post('/logIn', logInUser)
router.get('/:userId/cart', VerifyToken, getCart)
router.put('/:userId/checkout', VerifyToken, updateUser)

export default router
