discord = require("discord.js")
const ms = require("ms")
module.exports = {
  name: "key",
  aliases: [],
  usage: "key",
  description: "test key",
  run: async (client, message, args) => {
  
    let time = ("1m")
  // Im make it 1 day because sometime your bot will restart
  // And if your bot is restart , your alarm will gone / auto ended
  
  
  
  
  
  setTimeout(() => {
    const embed = new discord.MessageEmbed()
    .setAuthor(`${message.author.tag} Your premium has been ended`,message.author.displayAvatarURL())
    .setColor("RANDOM")
    .setDescription(`your primium is over`)
    .setTimestamp()
    message.author.send(embed)
  }, ms(time))
  
  
  
  }
}
