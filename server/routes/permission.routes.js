const router = require('express').Router()
const permissionController = require('../controllers/permission.controllers')

router.get('/:roleID', permissionController.findRolePermissions)

router.get('/:roleID/characters/:characterIDs', permissionController.setCharacterPermissions)
router.get('/:roleID/corporations/:corporationIDs', permissionController.setCorporationPermissions)
router.get('/:roleID/alliances/:allianceIDs', permissionController.setAlliancePermissions)

module.exports = router
