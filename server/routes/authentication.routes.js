const router = require('express').Router()
const passport = require('passport')
const discord = require('../discord').client

router.get('/login/success', async (req, res) => {
  if (req.user) {
    const discordUser = await discord.users.fetch(req.user.id)
    res.json({
      success: true,
      message: 'Succeeded to authenticate',
      user: req.user,
      cookies: req.cookies,
      discord: {
        username: discordUser.username,
        discriminator: discordUser.discriminator,
        avatar: discordUser.displayAvatarURL({ format: 'png' })
      }
    })
  } else {
    res.json({
      success: false,
      message: 'Failed to authenticate'
    })
  }
})

router.get('/login/failed', (req, res) => {
  res.status(401).json({
    success: false,
    message: 'Failed to authenticate'
  })
})

router.get('/logout', (req, res) => {
  req.logout()
  res.redirect(process.env.URL)
})

router.get('/discord', passport.authenticate('discord'))

router.get('/discord/callback', passport.authenticate('discord',
  {
    successRedirect: process.env.URL,
    failureRedirect: '/auth/login/failed'
  }))

router.get('/eve', passport.authenticate('eveOnline'))

router.get('/eve/callback', passport.authenticate('eveOnline',
  {
    successRedirect: process.env.URL,
    failureRedirect: '/auth/login/failed'
  }))

module.exports = router
