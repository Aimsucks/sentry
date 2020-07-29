const { models } = require('../models')

module.exports.findAll = async (req, res) => {
  try {
    const id = req.user.id
    const characters = await models.character.findAll({ where: { userId: id }, include: { all: true, nested: true }, order: [['name', 'ASC']] })
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

    console.group(`Beginning deletion process for character with ID ${id}`)

    const character = await models.character.findOne({ where: { id: id, userId: req.user.id } })
    const count = await models.character.count({ where: { userId: req.user.id } })
    if (character.main && count > 1) {
      console.log(`Character with ID ${character.id} is a main`)
      await models.character.update({ main: true }, { where: { userId: req.user.id, main: false }, plain: true, returning: true, limit: 1, order: [['name', 'ASC']] })
      console.log('Made a new character a main')
    }

    await models.character.destroy({ where: { id: id, userId: req.user.id } })
    console.groupEnd()
    console.log(`Deleted character with ID ${req.user.id}`)

    res.send({ message: `Deleted character with ID ${id}` })
  } catch (err) {
    console.error(err)
    res.status(500).send({ message: err.message || 'Cannot delete character' })
  }
}
