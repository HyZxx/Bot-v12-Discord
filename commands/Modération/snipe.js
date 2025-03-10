const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const prefix = require("../../config").prefix;
const couleur = require("../../config").couleur;

module.exports = {
  name: "snipe",
  timeout: 1000,
  description: "",

  run: async (client, message, args) => {
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply("Vous n'avez pas les permissions `Gérer les messages`").then(message => message.delete({ timeout: 10000}).catch(err => console.log(err)))

     const snipes = client.snipes.get(message.channel.id)
     if(!snipes) return message.reply("Aucun message a été supprimé").then(message => message.delete({ timeout: 10000}).catch(err => console.log(err)))

     const snipe = +args[0] - 1 || 0;
     const target = snipes[snipe]
     if(!target) return message.reply(`Il a que ${snipes.length} messages`).then(message => message.delete({ timeout: 10000}).catch(err => console.log(err)))
    
     const { msg, time, image} = target;
     message.channel.send(
       new MessageEmbed()
       .setAuthor(msg.author.username, msg.author.displayAvatarURL())
       .setDescription(msg.content)
       .setImage(image)
       .setColor(couleur)
       .setTimestamp(time)
       .setFooter(client.user.username)
     )
  }
}