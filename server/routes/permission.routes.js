const router = require('express').Router()
const permissionController = require('../controllers/permission.controllers')

router.get('/:roleIDs', permissionController.findRolePermissions)

router.post('/:roleID', permissionController.createPermission)

router.put('/:roleID/characters/:characterIDs?', permissionController.setCharacterPermissions)
router.put('/:roleID/corporations/:corporationIDs?', permissionController.setCorporationPermissions)
router.put('/:roleID/alliances/:allianceIDs?', permissionController.setAlliancePermissions)

router.delete('/:roleID', permissionController.deletePermission)

module.exports = router
