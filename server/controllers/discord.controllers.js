const discord = require('../discord')

module.exports.getAdmin = async (req, res) => {
  try {
    const id = req.user.id
    const guilds = await discord.admin.checkUserAdmin(id)
    res.json(guilds)
  } catch (err) {
    console.error(err)
    res.status(500).send({ message: err.message || 'Cannot check admin status' })
  }
}

module.exports.getGuildRoles = async (req, res) => {
  try {
    const id = req.params.id
    const roles = await discord.roles.getGuildRoles(id)
    res.json(roles)
  } catch (err) {
    console.error(err)
    res.status(500).send({ message: err.message || 'Cannot get guild roles' })
  }
}
