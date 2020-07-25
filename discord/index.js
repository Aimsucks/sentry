const { Client, Intents } = require('discord.js')
const client = new Client({ ws: { intents: Intents.ALL } })

client.once('ready', () => {
  console.log(`Authenticated as ${client.user.tag}`)
})

client.login(process.env.TOKEN)
