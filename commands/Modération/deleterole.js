const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const prefix  = require("../../config").prefix;

module.exports = {
  name: "deleterole",
  aliases : ['removerole'],
  timeout: 1000,
  description: "",

  run: async (client, message, args) => {

    if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("Vous n'avez pas les permissions `Gérer les rôles`").then(message => message.delete({ timeout: 10000}).catch(err => console.log(err)))

    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.get(message.author.id) || client.users.cache.find(u => u.username.toLowerCase().includes(args[0].toLowerCase()))
    const role = message.mentions.roles.first() || message.guild.roles.cache.get(args[1]);
    if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("Vous n'avez pas les permissions `Gérer les rôles`").then(message => message.delete({ timeout: 10000}).catch(err => console.log(err)))
    if (!member) return message.reply(`Spécifiez un membre`).then(message => message.delete({ timeout: 10000}).catch(err => console.log(err)))
    if (!role) return message.reply(`Spécifiez un rôle`).then(message => message.delete({ timeout: 10000}).catch(err => console.log(err)))
    const botRolePosition = message.guild.member(client.user).roles.highest.position;
    const rolePosition = role.position;
    if (userRolePossition <= rolePosition && !message.member.hasPermission('ADMINISTRATOR')) return message.reply("Votre rôle est inférieur au rôle spécifié").then(message => message.delete({ timeout: 10000}).catch(err => console.log(err)))
    if (botRolePosition <= rolePosition) return message.reply("Mon rôle est inférieur au rôle spécifié").then(message => message.delete({ timeout: 10000}).catch(err => console.log(err)))
    if (!member.roles.cache.has(role.id)) return message.channel.send(`1 rôle pas encore ajouté ce membre`);
    member.roles.remove(role);
    if (member.id === message.author.id) {
        message.channel.send(`1 rôle retiré à ce membre`);
    } else {
        message.channel.send(`1 rôle retiré à ce membre`);
    }
      

  }
}
