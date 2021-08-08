import jwt from 'jsonwebtoken'

/**
 * Generate jwt token.
 */
const generateJwtToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })
}

export { generateJwtToken }
