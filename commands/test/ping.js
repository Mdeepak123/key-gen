discord = require("discord.js")
module.exports = {
  name: "ping",
  aliases: [],
  usage: "ping",
  description: "ping",
  run: async (client, message, args) => {
  
    message.channel.send("Pong:ping_pong:")
  
  
  }
}
