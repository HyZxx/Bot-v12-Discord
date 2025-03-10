const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const prefix  = require("../../config").prefix;

module.exports = {
  name: "unmute",
  timeout: 1000,
  description: "",
  
  run: async (client, message, args) => {

if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply("Vous n'avez pas les permissions `Gérer les messages`").then(message => message.delete({ timeout: 10000}).catch(err => console.log(err)))

const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.get(message.author.id) || client.users.cache.find(u => u.username.toLowerCase().includes(args[0].toLowerCase()));

if(!member) return message.reply('Spécifiez un membre').then(message => message.delete({ timeout: 10000}).catch(err => console.log(err)))
if(member.hasPermission('MANAGE_MESSAGES')) return message.reply("Ce membre à la permission `Gérer les messages`").then(message => message.delete({ timeout: 10000}).catch(err => console.log(err)))

if(message.member.roles.highest.position <= member.roles.highest.position) return message.reply("Votre rôle est égal ou inférieur à ce membre").then(message => message.delete({ timeout: 10000}).catch(err => console.log(err)))


        const role = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'mute');

        await member.roles.remove(role)

        message.channel.send(`${member.user} a été unmute`)
  }
}

