const router = require('express').Router()
const characterController = require('../controllers/discord.controllers')

router.get('/admin', characterController.getAdmin)

module.exports = router
