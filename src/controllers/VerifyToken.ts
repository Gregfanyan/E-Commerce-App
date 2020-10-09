import { Request, Response, NextFunction } from 'express'
import JsonWebToken from 'jsonwebtoken'

import { JWT_SECRET } from '../util/secrets'

export const VerifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.header('auth_token')
  if (!token) return res.status(401).send('access Denied')
  try {
    const verified = JsonWebToken.verify(token, JWT_SECRET)
    req.user = verified
    next()
  } catch (error) {
    res.status(400).send('invalid error')
  }
}
