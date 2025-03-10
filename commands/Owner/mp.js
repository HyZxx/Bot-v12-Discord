const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const prefix  = require("../../config").prefix;
const ownerid = require("../../config").ownerid;

module.exports = {
  name: "mp",
  timeout: 1000,
  description: "",

  run: async (client, message, args) => {
    if (message.author.id === ownerid){
      
      mention = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.get(message.author.id) || client.users.cache.find(u => u.username.toLowerCase().includes(args[0].toLowerCase()))
      message.delete()
      const sayMessage = args.slice(1).join(" ");
      if(!sayMessage) return message.reply("Spécifiez un texte à envoyé")
      message.channel.send("Votre message a été envoyé")

      mention.send(sayMessage)
      

    } else  message.delete(), message.reply(`Vous n'avez pas les permissions d'owner`).then(message => message.delete({ timeout: 10000}).catch(err => console.log(err)))
  }
}