const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const prefix  = require("../../config").prefix;

module.exports = {
  name: "ban",
  timeout: 1000,
  description: "",

  run: async (client, message, args) => {
    if (!message.member.hasPermission('BAN_MEMBERS')) return message.reply("Vous n'avez pas les permissions `Bannir des membres`").then(message => message.delete({ timeout: 10000}).catch(err => console.log(err)))

    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.get(message.author.id) || client.users.cache.find(u => u.username.toLowerCase().includes(args[0].toLowerCase()))
    const raison = args.slice(1).join(" ");     
    
    if (!member) return message.reply('Spécifiez un membre').then(message => message.delete({ timeout: 10000}).catch(err => console.log(err)))

    if(message.member.roles.highest.position <= member.roles.highest.position) return message.reply("Votre rôle est égal ou inférieur à ce membre").then(message => message.delete({ timeout: 10000}).catch(err => console.log(err)))
    if(member.hasPermission('BAN_MEMBERS')) return message.reply("Ce membre à la permission `Bannir des membres`").then(message => message.delete({ timeout: 10000}).catch(err => console.log(err)))

    if (!raison) return message.reply('Spécifiez votre raison').then(message => message.delete({ timeout: 10000}).catch(err => console.log(err)))
    message.channel.send(`${member} a été ban`)
    message.guild.members.ban(member.id, {days:7, reason: raison});
  }
}
    

