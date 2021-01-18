const db = require('../../config/mongoose')
const User = require('../user')
const users = [
  {
    name: 'Tony',
    email: 'tony@stark.com',
    password: 'iamironman'
  },
  {
    name: 'Steve',
    email: 'captain@hotmail.com',
    password: 'icandothisallday'
  },
  {
    name: 'Peter',
    email: 'peter@parker.com',
    password: 'enajyram'
  },
  {
    name: 'Natasha',
    email: 'natasha@gamil.com',
    password: '*parol#@$!'
  },
  {
    name: 'Nick',
    email: 'nick@shield.com',
    password: 'password'
  }
]

db.once('open', () => {
  for (const user of users) {
    User.create({
      name: user.name,
      email: user.email,
      password: user.password
    })
  }
  console.log('getting seed data!')
})
