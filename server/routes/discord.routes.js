const router = require('express').Router()
const discordController = require('../controllers/discord.controllers')

router.get('/admin', discordController.getAdmin)

router.get('/roles/:id', discordController.getGuildRoles)

module.exports = router
