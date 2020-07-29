const discord = require('../discord')

module.exports.checkUserAdmin = async userID => {
  const guilds = await discord.client.guilds.cache.filter(async guild => {
    await guild.members.cache.get(userID).permissions.has('ADMINISTRATOR')
  })
  return guilds.map(guild => ({
    id: guild.id,
    name: guild.name,
    icon: guild.iconURL({ format: 'png' })
  }))
}
