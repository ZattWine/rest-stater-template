/**
 * Database seeder.
 */
import 'dotenv/config'
import mongoose from 'mongoose'

import users from './data/users.js'
import connectDatabase from './config/db.js'
import User from './models/userModel.js'

// connect to database
connectDatabase()

// importing dummy data
const importData = async () => {
  try {
    // firstly delete all data from database if data is existed.
    await User.deleteMany()

    // insert dummy users to database.
    await User.insertMany(users)

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
