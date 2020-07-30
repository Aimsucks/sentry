require('dotenv').config()

const database = require('./models')
const discord = require('./discord').client

const express = require('express')

const cors = require('cors')
const cookieSession = require('cookie-session')
const cookieParser = require('cookie-parser')

const passport = require('passport')
require('./strategies/discord.strategy')
require('./strategies/eve.strategy')

const authenticationRoute = require('./routes/authentication.routes')
const characterRoute = require('./routes/character.routes')
const discordRoute = require('./routes/discord.routes')
const permissionRoute = require('./routes/permission.routes')

const app = express()

const PORT = process.env.PORT || 5000

// ********************
// Middlewares
// ********************

app.use(cors({
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true
}))

app.use(cookieSession({
  name: 'session',
  keys: [process.env.SESSION_SECRET],
  maxAge: 24 * 60 * 60 * 1000
}))

app.use(cookieParser())

// ********************
// Authentication
// ********************

app.use(passport.initialize())
app.use(passport.session())

// ********************
// Routes
// ********************

app.use('/auth', authenticationRoute)
app.use('/api/characters', characterRoute)
app.use('/api/discord', discordRoute)
app.use('/api/permissions', permissionRoute)

app.use((err, req, res, next) => {
  console.error(err)
  next()
})

const authenticationCheck = (req, res, next) => {
  if (!req.user) {
    res.status(401).json({
      authenticated: false,
      message: 'Not authenticated'
    })
  } else next()
}

// ********************
// Server
// ********************

app.get('/', authenticationCheck, (req, res) => {
  res.status(200).json({
    authenticated: true,
    message: 'Authenticated',
    user: req.user,
    cookies: req.cookies
  })
})

const checkDatabaseConnection = async () => {
  console.log('Checking database connection...')
  try {
    await database.authenticate()
    console.log('Database connection OK!')
  } catch (error) {
    console.log('Unable to connect to the database:')
    console.log(error.message)
    process.exit(1)
  }
}

const init = async () => {
  await checkDatabaseConnection()

  console.log(`Starting server on port ${PORT}...`)

  app.listen(PORT, () => {
    console.log(`Express server started on port ${PORT}.`)
  })

  discord.login(process.env.TOKEN)
}

init()
