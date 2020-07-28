const router = require('express').Router()
const passport = require('passport')

router.get('/login/success', (req, res) => {
  if (req.user) {
    res.json({
      success: true,
      message: 'Succeeded to authenticate',
      user: req.user,
      cookies: req.cookies
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
  res.redirect('http://localhost:5000')
})

router.get('/discord', passport.authenticate('discord'))

router.get('/discord/callback', passport.authenticate('discord',
  {
    successRedirect: 'http://localhost:5000',
    failureRedirect: '/auth/login/failed'
  }))

router.get('/eve', passport.authenticate('eveOnline'))

router.get('/eve/callback', passport.authenticate('eveOnline',
  {
    successRedirect: 'http://localhost:5000',
    failureRedirect: '/auth/login/failed'
  }))

module.exports = router
