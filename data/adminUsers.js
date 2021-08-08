import bcrypt from 'bcryptjs'

const adminUsers = [
  {
    name: 'SuperAdmin',
    email: 'super-admin@gmail.com',
    password: bcrypt.hashSync('zattwine', 10),
    role: 'super-admin',
  },
  {
    name: 'Admin',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('zattwine', 10),
  },
  {
    name: 'Assistance',
    email: 'assistance@gmail.com',
    password: bcrypt.hashSync('zattwine', 10),
  },
]

export default adminUsers
