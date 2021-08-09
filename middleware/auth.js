import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'

import User from '../models/userModel.js'

const protect = asyncHandler(async (req, res, next) => {
  const header = req.headers.authorization
  if (!header) {
    res.status(401)
    throw new Error('Authorization header must be provided.')
  }

  const token = header.split('Bearer ')[1]
  if (!token) {
    res.status(401)
    throw new Error(`Authentication token must be 'Bearer [token]'.`)
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET)
  if (!decoded) {
    res.status(401)
    throw new Error(`Invalid/Expired token.`)
  }

  req.user = await User.findById(decoded.id).select('-password')

  next()
})

export { protect }
