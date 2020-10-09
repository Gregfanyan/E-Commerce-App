import { Request, Response, NextFunction } from 'express'
import bcrypt from 'bcrypt'
import JsonWebToken from 'jsonwebtoken'

import { Products, Users } from '../models'
import UserService from '../services/Users'

import { JWT_SECRET } from '../util/secrets'

import {
  NotFoundError,
  BadRequestError,
  InternalServerError,
} from '../helpers/apiError'

// POST /users
export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { firstName, lastName, password, email } = req.body
    const emailExists = await UserService.findUserByEmail(email)
    const hashedPassword = bcrypt.hashSync(password, 8)

    if (emailExists) {
      next(new BadRequestError('Email already exists'))
    } else {
      const user = new Users({
        firstName,
        lastName,
        password: hashedPassword,
        email,
      })

      await UserService.create(user)

      res.json(user)
    }
  } catch (error) {
    if (!bcrypt.compareSync(req.body.password, req.body.email)) {
      return res.status(400).send({ message: 'The password is invalid' })
    } else {
      next(new InternalServerError('Internal Server Error', error))
    }
  }
}

// PUT /users/:userId
export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const update = req.body
    const userId = req.params.userId
    const updatedUser = await UserService.update(userId, update)
    res.json(updatedUser)
  } catch (error) {
    next(new NotFoundError('UserById did not update', error))
  }
}

// DELETE /users/:userId
export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await UserService.deleteUser(req.params.userId)
    res.status(204).end()
  } catch (error) {
    next(new NotFoundError('did not delete user', error))
  }
}

// GET /Users/:users
export const findById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await UserService.findById(req.params.userId))
  } catch (error) {
    next(new NotFoundError('User by Id did not found', error))
  }
}

// GET /users
export const findAll = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await UserService.findAll())
  } catch (error) {
    next(new NotFoundError('User not found', error))
  }
}

export const logInUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body
    if (email) {
      const result = await UserService.findUserByEmail(email).then(
        async (user) => {
          if (!user) res.status(404).json({ message: 'email not found' })
          else {
            const logInSuccess = await bcrypt.compare(password, user!.password)
            logInSuccess ? user : res.status(404).json('Incorrect password')
            return user
          }
          /* const users = await Users.findOne(email)
          const token = JsonWebToken.sign({ users }, {process.env.JWT_SECRET}),
          res.json({ token:token }) */
        }
      )
      return res.status(200).json({ result, message: 'logIn successfully' })
    }
  } catch (error) {
    return res.status(404).json({ message: 'user not found' })
  }
}

//POST /users/:userId/cart
export const getProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = await req.body
    const productBought = await Products.findOne({ _id: productId }).then(
      (product) => {
        return product
      }
    )
    console.log(productBought)

    const updated = await Users.findOneAndUpdate(
      { _id: req.params.userId },
      { $push: { cart: productBought } },
      { new: true }
    )

      .populate('cart')
      .exec()
    return res.json(updated)
  } catch (error) {
    return res.status(404).json({ message: 'does not work' })
  }
}

//GET /users/:userId/cart
export const getCart = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await (await UserService.findById(req.params.userId))
      .populate('cart')
      .execPopulate()
    res.status(200).json(user)
  } catch (error) {
    next(new NotFoundError('User not found', error))
  }
}
