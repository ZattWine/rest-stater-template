/**
 * User routes.
 */
import express from 'express'

import { demoAction, loginUser, registerUser } from '../controllers/user.js'

const router = express.Router()

router.route('/').get(demoAction).post(registerUser)
router.route('/login').post(loginUser)

export default router
