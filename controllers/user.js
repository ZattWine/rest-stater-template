/**
 * User controller.
 */
import asyncHandler from 'express-async-handler'

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

/** exports */
export { demoAction }
