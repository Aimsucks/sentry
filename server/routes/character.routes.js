const router = require('express').Router()
const characterController = require('../controllers/character.controllers')

router.get('/', (req, res) => characterController.findAll(req, res))

router.delete('/:id', characterController.delete)

module.exports = router
