/**
 * AdminUser routes.
 */
import express from 'express'

import { loginAdminUser, createAdminUser } from '../controllers/adminUser.js'

const router = express.Router()

router.route('/').post(createAdminUser)
router.route('/login').post(loginAdminUser)

export default router
