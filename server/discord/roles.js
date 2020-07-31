const discord = require('../discord')

module.exports.getGuildRoles = guildID => {
  const guild = discord.client.guilds.cache.get(guildID)

  const roles = guild.roles.cache
    .filter(role => role.name !== '@everyone')
    .map(role => ({
      id: role.id,
      name: role.name,
      color: role.color
    }))

  return roles
}
