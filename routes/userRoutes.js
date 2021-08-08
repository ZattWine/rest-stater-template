/**
 * User routes.
 */
import express from 'express'

import { demoAction } from '../controllers/user.js'

const router = express.Router()

router.route('/').get(demoAction)

export default router
