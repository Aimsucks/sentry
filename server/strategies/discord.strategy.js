const DiscordStrategy = require('passport-discord').Strategy
const passport = require('passport')
const { models } = require('../models')

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser(async (id, done) => {
  try {
    const user = await models.user.findOne(
      {
        where: { id: id }
        // include: [{ all: true, nested: true }]
      })
    done(null, user.toJSON())
  } catch (err) {
    console.error(err)
    done(err, null)
  }
})

passport.use(new DiscordStrategy({
  clientID: process.env.DISCORD_CLIENT_ID,
  clientSecret: process.env.DISCORD_CLIENT_SECRET,
  callbackURL: process.env.DISCORD_CALLBACK_URL,
  scope: ['identify']
}, async (accessToken, refreshToken, profile, done) => {
  try {
    const user = await models.user.findOrCreate(
      {
        where: { id: profile.id },
        defaults: { id: profile.id }
      })
    done(null, user[0].toJSON())
  } catch (err) {
    console.error(err)
    done(err, null)
  }
}))
