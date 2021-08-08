import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'norm',
    email: 'norm@gmail.com',
    password: bcrypt.hashSync('zattwine', 10),
  },
  {
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    password: bcrypt.hashSync('zattwine', 10),
  },
  {
    name: 'Kelvin Kate',
    email: 'kelvinkate@gmail.com',
    password: bcrypt.hashSync('zattwine', 10),
  },
]

export default users
