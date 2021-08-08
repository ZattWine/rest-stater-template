/**
 * AdminUser mongoose model.
 */
import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const adminUserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      default: 'normal',
    },
    // role: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: true,
    //   ref: 'Role',
    // },
  },
  { timestamps: true }
)

adminUserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password)
}

adminUserSchema.pre('save', async function (next) {
  // the state that user does not update password
  if (!this.isModified('password')) {
    next()
  }

  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

const AdminUser = mongoose.model('AdminUser', adminUserSchema)

export default AdminUser
