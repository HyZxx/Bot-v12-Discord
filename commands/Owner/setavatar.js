
const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const db = require('quick.db')
const prefix = require("../../config").prefix;
const couleur = require("../../config").couleur;
const ownerid = require("../../config").ownerid;


module.exports = {
  name: "setavatar",
  timeout: 1000,
  description: "",

  run: async (client, message, args, text) => {
    if (message.author.id === ownerid){          
        let str_content = args.join(" ")
            if (!str_content) return message.reply("Spécifiez une photo de profil").then(message => message.delete({ timeout: 10000}).catch(err => console.log(err)))
            client.user.setAvatar(str_content)
            .then(u => message.channel.send("La photo de profil a été changé"))
            .catch(e => { return message.reply(`Une erreur est survenue`); }).then(message => message.delete({ timeout: 10000}).catch(err => console.log(err)))
    } else  message.delete(), message.reply(`Vous n'avez pas les permissions d'owner`).then(message => message.delete({ timeout: 10000}).catch(err => console.log(err)))

  }
}