const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const prefix  = require("../../config").prefix;
const couleur = require("../../config").couleur;

module.exports = {
  name: "avatar",
  aliases : ['pp'],
  timeout: 5000,
  description: "",
  
  run: async (client, message, args) => {
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.get(message.author.id) || client.users.cache.find(u => u.username.toLowerCase().includes(args[0].toLowerCase()));
    
  const embed = new Discord.MessageEmbed()
  .setAuthor(`${member.user.username}`)
  .setImage(`${member.user.displayAvatarURL({ format: 'png', dynamic: true, size: 2048 })}`)
  .setColor(couleur)
  .setFooter(`${client.user.username}`)
  message.channel.send(embed)
  }
}