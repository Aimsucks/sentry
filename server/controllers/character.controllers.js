const { models } = require('../models')

module.exports.findAll = async (req, res) => {
  try {
    const id = req.user.id
    const characters = await models.character.findAll({ where: { userId: id }, include: { all: true, nested: true } })
    res.send(characters.map(character => character.toJSON()))
  } catch (err) {
    console.error(err)
    res.status(500).send({ message: err.message || 'Cannot fetch characters' })
  }
}

module.exports.delete = async (req, res) => {
  try {
    const id = req.params.id
    await models.character.destroy({ where: { id: id, userId: req.user.id } })
    res.send({ message: `Deleted character with ID ${id}` })
  } catch (err) {
    console.error(err)
    res.status(500).send({ message: err.message || 'Cannot delete character' })
  }
}
