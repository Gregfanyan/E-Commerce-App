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

const router = express.Router()

// Every path we define here will get /api/v1/products prefix
router.get('/', findAll)
router.get('/:userId', findById)
router.put('/:userId', updateUser)
router.delete('/:userId', deleteUser)
router.post('/', createUser)
router.post('/logIn', logInUser)
router.post('/:userId/cart', getProduct)
router.get('/:userId/cart', getCart)

export default router
