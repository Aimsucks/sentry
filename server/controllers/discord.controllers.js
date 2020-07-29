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
