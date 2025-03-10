const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const prefix  = require("../../config").prefix;

module.exports = {
  name: "nuke",
  timeout: 10000,
  description: "",
  
  run: async (client, message, args) => {
  
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("Vous n'avez pas les permissions `Gérer les salons`").then(message => message.delete({ timeout: 10000}).catch(err => console.log(err)))
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Vous n'avez pas les permissions `Gérer les messages`").then(message => message.delete({ timeout: 10000}).catch(err => console.log(err)))
    
    message.channel.clone().then((ch) => {
        ch.setParent(message.channel.parent.id);
        ch.setPosition(message.channel.position)
        message.channel.delete();

        ch.send("Ce salon a été recrée")
    })
  }
}

 