/**
 * User controller.
 */
import asyncHandler from 'express-async-handler'

import User from '../models/userModel.js'
import { generateJwtToken } from '../helpers/generateToken.js'

/**
 * @desc    Demo service
 * @route   GET /api/users
 * @access  Public
 */
const demoAction = asyncHandler(async (req, res) => {
  res.json({
    message: 'Demo',
    status: res.statusCode,
  })
})

/**
 * @desc    Auth user & get token
 * @route   POST /api/users/login
 * @access  Public
 */
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateJwtToken(user._id),
    })
  } else {
    res.status(401)
    throw new Error('Invalid email or password.')
  }
})

/**
 * @desc    Register user & get token
 * @route   POST /api/users
 * @access  Public
 */
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body

  const alreadyUser = await User.findOne({ email })
  if (alreadyUser) {
    res.status(400)
    throw new Error('User already exists.')
  }

  const user = await User.create({
    name,
    email,
    password,
  })
  if (!user) {
    res.status(400)
    throw new Error('Invalid user data.')
  }

  res.status(201).json({
    _id: user._id,
    name: user.name,
    email: user.email,
    token: generateJwtToken(user._id),
  })
})

/** exports */
export { demoAction, loginUser, registerUser }
