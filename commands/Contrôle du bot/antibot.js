
const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const db = require('quick.db')
const prefix = require("../../config").prefix;
const couleur = require("../../config").couleur;
const ownerid = require("../../config").ownerid;


module.exports = {
  name: "antibot",
  timeout: 1000,
  description: "",

  run: async (client, message, args, text) => {
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply("Vous n'avez pas les permissions `Administrateur`").then(message => message.delete({ timeout: 10000}).catch(err => console.log(err)))
    if(!args[0]) return message.reply("Spécifiez on ou off").then(message => message.delete({ timeout: 10000}).catch(err => console.log(err)))   
    if(args[0] === "on"){
        await db.set(`anti-bot-${message.guild.id}`, true)
        const on = new Discord.MessageEmbed()
        .setDescription("L'anti-bot a été activé")
        .setColor("GREEN")
        .setTimestamp()
        .setFooter(client.user.username)

        return message.channel.send(on).catch(e => console.log(e))
    }
    if(args[0] === "off"){
        await db.delete(`anti-bot-${message.guild.id}`)

        const off = new Discord.MessageEmbed()
        .setDescription("L'antibot a été désactivé")
        .setColor('RED')
        .setTimestamp()
        .setFooter(client.user.username)

        return message.channel.send(off).catch(e => console.log(e))
    }
  }
}