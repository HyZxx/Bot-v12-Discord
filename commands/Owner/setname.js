const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const db = require('quick.db')
const prefix = require("../../config").prefix;
const couleur = require("../../config").couleur;
const ownerid = require("../../config").ownerid;


module.exports = {
  name: "setname",
  timeout: 1000,
  description: "",

  run: async (client, message, args, text) => {
    if (message.author.id === ownerid){    
            let str_content = args.join(" ")
            if (!str_content) return message.reply("Spécifiez le nom").then(message => message.delete({ timeout: 10000}).catch(err => console.log(err)))
            client.user.setUsername(str_content)
            .then(u => message.channel.send("Le nom a été changé"))
            .catch(e => { return message.reply(`Une erreur est survenue`); })
          } else  message.delete(), message.reply(`Vous n'avez pas les permissions d'owner`).then(message => message.delete({ timeout: 10000}).catch(err => console.log(err)))

  }
}