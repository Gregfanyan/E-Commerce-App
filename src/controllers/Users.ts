import { Request, Response, NextFunction } from 'express'
import bcrypt from 'bcrypt'
import JsonWebToken from 'jsonwebtoken'
import mailgun from 'mailgun-js'
import _ from 'lodash'
import { OAuth2Client } from 'google-auth-library'

import { Users } from '../models'
import UserService from '../services/Users'
import { UserDocument } from '../models/Users'

import {
  JWT_SECRET,
  RESET_PASSWORD_KEY,
  CLIENT_URL,
  MAILGUN_API_KEY,
  DOMAIN_ID,
  CLIENT_ID,
} from '../util/secrets'
const DOMAIN = DOMAIN_ID
const mg = mailgun({ apiKey: MAILGUN_API_KEY, domain: DOMAIN })
const clientId = CLIENT_ID
const client = new OAuth2Client(CLIENT_ID)

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
    const { firstName, lastName, password, email, cart } = req.body
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
        cart,
      })
      if (user.email === 'grigor.fanyan@integrify.io') {
        user.isAdmin = true
      }
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

export const logInUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body
    if (email) {
      await Users.findOne({ email }).then(async (user) => {
        if (!user) res.status(404).json({ message: 'user not found' })
        else {
          const logInSuccess = await bcrypt.compare(password, user.password)
          logInSuccess
            ? user
            : res.status(404).json({ message: 'Incorrect password' })
          const token = JsonWebToken.sign(
            { id: user._id },
            JWT_SECRET,
            { expiresIn: '30d' },
            async (err: any, token: any) => {
              if (err) throw err
              if (user) {
                await user.populate('cart').execPopulate()
                res.json({
                  token,
                  user: {
                    id: user._id,
                    email: user.email,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    isAdmin: user.isAdmin,
                    cart: user.cart,
                    resetLink: user.resetLink,
                  },
                })
              }
            }
          )
        }
      })
    }
  } catch (error) {
    return res.status(404).json({ message: 'user not found' })
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

// GET /User/:userId
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

export const forgotPassword = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email } = req.body

    Users.findOne({ email }, (err: any, user: any) => {
      if (err || !user) {
        return res.status(404).json({ msg: 'user not found' })
      } else {
        const token = JsonWebToken.sign({ email }, RESET_PASSWORD_KEY, {
          expiresIn: '20m',
        })

        const data = {
          from: 'Greg@mail.com',
          to: email,
          subject: 'Password Reset Link',
          html: `
                <p>${CLIENT_URL}/reset/${token}</p>`,
        }

        return user.updateOne({ resetLink: token }, (err: any) => {
          if (err) {
            return res.status(404).json({ msg: 'user not found' })
          } else {
            mg.messages().send(data, (err, body) => {
              if (err) {
                return res.json({
                  err: err.message,
                })
              }
              return res.json({
                msg: `Email has been sent to ${email}. Please follow the instructions to reset your password.`,
              })
            })
          }
        })
      }
    })
  } catch (err) {
    if (err.name === 'ValidationError') {
      next(new BadRequestError('Problem validating user'))
    } else {
      next(
        new InternalServerError('Something went wrong. Please refresh the page')
      )
    }
  }
}

export const resetPassword = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { resetLink, newPass } = req.body
    if (resetLink) {
      JsonWebToken.verify(resetLink, RESET_PASSWORD_KEY, (decodedData: any) => {
        if (decodedData) {
          return res.status(401).json({
            messages: 'Incorrect or expired token',
          })
        }
        Users.findOne({ resetLink }, (err: any, user: any) => {
          if (err || !user) {
            return res.status(404).json({
              msg: 'User with this token does not exist',
            })
          }
          const obj = {
            password: newPass,
            resetLink: '',
          }

          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(obj.password, salt, (err, hash) => {
              if (err) throw err
              obj.password = hash

              user = _.extend(user, obj)
              user.save((err: any) => {
                if (err) {
                  return res.status(400).json({
                    msg: 'reset password error',
                  })
                } else {
                  return res.status(200).json({
                    msg: 'Your password has been changed',
                  })
                }
              })
            })
          })
        })
      })
    } else {
      return res.status(401).json({ msg: 'Authentication Error' })
    }
  } catch (err) {
    next(new NotFoundError('Not found', err))
  }
}

//Patch/addToCart/:userid/
export const addProductToCart = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const productId = req.body.id
    const userId = req.params.userId
    const updatedUser = await UserService.addProductToCart(userId, productId)
    res.json(updatedUser)
  } catch (error) {
    next(new BadRequestError('Something went wrong', error))
  }
}

//POST/googleLogin/
export const googleLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { tokenId } = req.body
    client
      .verifyIdToken({
        idToken: tokenId,
        audience: clientId,
      })
      .then((response) => {
        const payload = response.getPayload()
        const userPropertiesLoginTicket = {
          firstName: payload?.given_name,
          lastName: payload?.family_name,
          email: payload?.email,
          emailVerified: payload?.email_verified,
        }
        const {
          firstName,
          lastName,
          email,
          emailVerified,
        } = userPropertiesLoginTicket
        if (emailVerified) {
          Users.findOne({ email }).exec((err, user) => {
            if (err) {
              return res.status(400).json({
                msg: 'Something went wrong',
              })
            } else {
              if (user) {
                JsonWebToken.sign(
                  { id: user._id },
                  JWT_SECRET,
                  //we set an expiration for the token
                  { expiresIn: '30d' },
                  async (err, token) => {
                    if (err) throw err
                    await user.populate('cart').execPopulate()
                    res.json({
                      token,
                      user: {
                        id: user._id,
                        email: user.email,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        cart: user.cart,
                        isAdmin: user.isAdmin,
                      },
                    })
                  }
                )
              } else {
                const password = email + JWT_SECRET

                const newUser = new Users({
                  firstName,
                  lastName,
                  email,
                  password,
                })
                if (newUser.email === 'grigor.fanyan@integrify.io') {
                  newUser.isAdmin = true
                }
                newUser.save((err: any, user: UserDocument) => {
                  if (err) {
                    return res.status(400).json({ msg: 'Something went wrong' })
                  }
                  JsonWebToken.sign(
                    { id: user._id },
                    JWT_SECRET,
                    { expiresIn: '30d' },
                    async (err, token) => {
                      if (err) throw err
                      const { _id, firstName, lastName, email } = newUser
                      await user.populate('cart').execPopulate()
                      res.json({
                        token,
                        user: {
                          _id,
                          email,
                          firstName,
                          lastName,
                          cart: user.cart,
                          isAdmin: user.isAdmin,
                        },
                      })
                    }
                  )
                })
              }
            }
          })
        }
      })
  } catch (err) {
    if (err.name === 'ValidationError') {
      next(res.status(400).json({ msg: 'Validation error' }))
    } else {
      next(
        next(
          res
            .status(500)
            .json({ msg: 'Something went wrong. Please refresh the page' })
        )
      )
    }
  }
}
