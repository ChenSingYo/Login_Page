const express = require('express')
const exphbs = require('express-handlebars')
const session = require('express-session')
const app = express()

app.engine('hbs', exphbs({ defaultLaybout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(express.urlencoded({ extended: true }))

const TWO_HOURS = 1000 * 60 * 60 * 2
const {
  PORT = 3000,
  SESS_NAME = 'sid',
  SESS_LIFETIME = TWO_HOURS,
  SESS_SECRET = '1234567890'
} = process.env

app.use(session({
  name: SESS_NAME,
  resave: false,
  saveUninitialized: false,
  secret: SESS_SECRET,
  cookie: {
    maxAge: SESS_LIFETIME,
    sameSite: true
  }
}))

const routes = require('./routes/index')
require('./config/mongoose')

app.use(routes)
app.use(express.static('public'))

// start and listen on the Express server
app.listen(PORT, () => {
  console.log(`Express is listening on http://localhost:${PORT}`)
})
