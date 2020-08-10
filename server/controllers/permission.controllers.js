const { models } = require('../models')

module.exports.findRolePermissions = async (req, res) => {
  try {
    const roleIDs = req.params.roleIDs.split(',')

    const roles = await models.role.findAll({ where: { id: roleIDs }, include: [models.character, models.corporation, models.alliance] })

    res.send(roles.map(role => role.toJSON()))
  } catch (err) {
    console.error(err)
    res.status(500).send({ message: err.message || 'Cannot fetch role permissions' })
  }
}

module.exports.createPermission = async (req, res) => {
  try {
    const role = await models.role.findOrCreate({ where: { id: req.params.roleID }, defaults: { id: req.params.roleID } })

    res.send({ message: 'Permission created successfully' })
  } catch (err) {
    console.error(err)
    res.status(500).send({ message: err.message || 'Cannot create permission' })
  }
}

module.exports.setCharacterPermissions = async (req, res) => {
  try {
    const role = await models.role.findOrCreate({ where: { id: req.params.roleID }, defaults: { id: req.params.roleID } })
    role[0].setCharacters(req.params.characterIDs ? req.params.characterIDs.split(',') : [])
    res.send({ message: `Characters ${req.params.characterIDs ? req.params.characterIDs.replace(',', ', ') : 'N/A'} added to role` })
  } catch (err) {
    console.error(err)
    res.status(500).send({ message: err.message || 'Cannot set role permissions' })
  }
}

module.exports.setCorporationPermissions = async (req, res) => {
  try {
    const role = await models.role.findOrCreate({ where: { id: req.params.roleID }, defaults: { id: req.params.roleID } })
    role[0].setCorporations(req.params.corporationIDs ? req.params.corporationIDs.split(',') : [])
    res.send({ message: `Corporations ${req.params.corporationIDs ? req.params.corporationIDs.replace(',', ', ') : 'N/A'} added to role` })
  } catch (err) {
    console.error(err)
    res.status(500).send({ message: err.message || 'Cannot set role permissions' })
  }
}

module.exports.setAlliancePermissions = async (req, res) => {
  try {
    const role = await models.role.findOrCreate({ where: { id: req.params.roleID }, defaults: { id: req.params.roleID } })
    role[0].setAlliances(req.params.allianceIDs ? req.params.allianceIDs.split(',') : [])
    res.send({ message: `Alliances ${req.params.allianceIDs ? req.params.allianceIDs.replace(',', ', ') : 'N/A'} added to role` })
  } catch (err) {
    console.error(err)
    res.status(500).send({ message: err.message || 'Cannot set role permissions' })
  }
}

module.exports.deletePermission = async (req, res) => {
  try {
    const id = req.params.id

    console.log(`Beginning deletion process for role with ID ${id}`)

    await models.role.destroy({ where: { id: id } })
    console.log(`Deleted role with ID ${id}`)

    res.send({ message: `Deleted role with ID ${id}` })
  } catch (err) {
    console.error(err)
    res.status(500).send({ message: err.message || 'Cannot delete role' })
  }
}
