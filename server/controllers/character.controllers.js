const { models } = require('../models')

module.exports.findAll = async (req, res) => {
  try {
    const id = req.user.id
    const characters = await models.character.findAll({ where: { userId: id }, include: { all: true, nested: true }, order: { name: 'ASC ' } })
    res.send(characters.map(character => character.toJSON()))
  } catch (err) {
    console.error(err)
    res.status(500).send({ message: err.message || 'Cannot fetch characters' })
  }
}

module.exports.setMain = async (req, res) => {
  try {
    const userID = req.user.id
    const characterID = req.params.id

    await models.character.update({ main: false }, { where: { userId: userID } })
    await models.character.update({ main: true }, { where: { id: characterID } })

    res.send({ message: `Set character ID ${characterID} to main character for user ID ${userID}` })
  } catch (err) {
    console.error(err)
    res.status(500).send({ message: err.message || 'Cannot set main' })
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
