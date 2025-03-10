const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const prefix  = require("../../config").prefix;
const rgx = /^(?:<@!?)?(\d+)>?$/;

module.exports = {
  name: "unban",
  timeout: 1000,
  description: "",

  run: async (client, message, args) => {
    if (!message.member.hasPermission('BAN_MEMBERS')) return message.reply("Vous n'avez pas les permissions `Bannir des membres`");

    const id = args[0];
    if (!rgx.test(id)) return this.sendErrorMessage(message, 0, 'Spécifiez l\'ID d\'un membre');
    const bannedUsers = await message.guild.fetchBans();
    const member = bannedUsers.get(id).user;
    
    if (!member) return message.reply('Spécifiez un membre');

    message.channel.send(`${member} a été unban`)
    message.guild.members.unban(member.id);
  }
}