const EVEStrategy = require('passport-eve-oauth2').Strategy
const passport = require('passport')
const { models } = require('../models')
const { addNewCharacter } = require('../tasks/characterProcessor.task')

passport.use(new EVEStrategy({
  clientID: process.env.ESI_CLIENT_ID,
  clientSecret: process.env.ESI_CLIENT_SECRET,
  callbackURL: process.env.ESI_CALLBACK_URL,
  state: Math.random().toString(36).substring(7),
  passReqToCallback: true
}, async (req, accessToken, refreshToken, profile, done) => {
  try {
    await addNewCharacter(req.user.id, profile.CharacterID)
    const user = await models.user.findOne({ where: { id: req.user.id }, include: { model: models.character } })
    done(null, user.toJSON())
  } catch (err) {
    console.error(err)
    done(err, null)
  }
}))
