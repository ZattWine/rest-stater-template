/**
 * Database seeder.
 */
import 'dotenv/config'
import mongoose from 'mongoose'

import users from './data/users.js'
import adminUsers from './data/adminUsers.js'
import roles from './data/roles.js'
import connectDatabase from './config/db.js'
import User from './models/userModel.js'
import AdminUser from './models/adminUserModel.js'
import Role from './models/roleModel.js'

// connect to database
connectDatabase()

// importing dummy data
const importData = async () => {
  try {
    // firstly delete all data from database if data is existed.
    await User.deleteMany()
    await AdminUser.deleteMany()
    await Role.deleteMany()

    // insert dummy data to database.
    await User.insertMany(users)
    await AdminUser.insertMany(adminUsers)
    await Role.insertMany(roles)

    console.log('Data imported!')
    process.exit(1)
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

// destroying data from database
const destroyData = async () => {
  try {
    await User.deleteMany()
    await AdminUser.deleteMany()
    await Role.deleteMany()

    console.log('Data destroyed!')
    process.exit(1)
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
