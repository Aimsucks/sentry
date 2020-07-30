const discord = require('../discord')

module.exports.checkUserAdmin = async userID => {
  const guilds = discord.client.guilds.cache.filter(guild => {
    try {
      return guild.members.cache.get(userID).hasPermission('ADMINISTRATOR')
    } catch {
      // Catch for when a user is not part of a guild the filter is checking
      return false
    }
  })

  return guilds.map(guild => ({
    id: guild.id,
    name: guild.name,
    icon: guild.iconURL({ format: 'png' })
  }))
}
