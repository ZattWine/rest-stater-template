/**
 * AdminUser controller.
 */
import asyncHandler from 'express-async-handler'

import AdminUser from '../models/adminUserModel.js'
import { generateJwtToken } from '../helpers/generateToken.js'

/**
 * @desc    Auth uadmin ser & get token
 * @route   POST /api/admin/login
 * @access  Public
 */
const loginAdminUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const user = await AdminUser.findOne({ email })

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateJwtToken(user._id),
    })
  } else {
    res.status(401)
    throw new Error('Invalid email or password.')
  }
})

/**
 * @desc    Create admin user & get token
 * @route   POST /api/admin
 * @access  Private/Admin
 */
const createAdminUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body

  const alreadyUser = await AdminUser.findOne({ email })
  if (alreadyUser) {
    res.status(400)
    throw new Error('User already exists.')
  }

  const user = await AdminUser.create({
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
    role: user.role,
    token: generateJwtToken(user._id),
  })
})

/** exports */
export { loginAdminUser, createAdminUser }
