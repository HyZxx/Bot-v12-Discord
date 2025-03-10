const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const prefix  = require("../../config").prefix;

module.exports = {
  name: "clear",
  timeout: 1000,
  description: "",
  
  run: async (client, message, args) => {
  
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Vous n'avez pas les permissions `Gérer les messages`").then(message => message.delete({ timeout: 10000}).catch(err => console.log(err)))
    let toDelete = args[0];
    if(!toDelete || isNaN(toDelete) || parseInt(toDelete) < 1 || parseInt(toDelete) > 100) return message.reply("Spécifiez un nombre entre 1 et 100").then(message => message.delete({ timeout: 10000}).catch(err => console.log(err)))
    message.channel.bulkDelete(toDelete).then(() => {
        message.channel.send(`${toDelete} messages supprimés`)
    });
  }
}



