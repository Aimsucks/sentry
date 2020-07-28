const { Client, Intents } = require('discord.js')
const client = new Client({ ws: { intents: Intents.ALL } })

client.once('ready', async () => {
  console.log(`Authenticated on Discord as ${client.user.tag}`)
})

module.exports.client = client
// client.login(process.env.TOKEN)
