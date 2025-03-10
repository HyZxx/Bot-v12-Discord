const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const prefix  = require("../../config").prefix;
const ownerid = require("../../config").ownerid;

module.exports = {
  name: "leaveserver",
  timeout: 1000,
  description: "",
  run: async (client, message, args) => {
    if (message.author.id === ownerid){
    
      const guildId = args[0];
      const guild = message.client.guilds.cache.get(guildId);
      if (!guild) return this.sendErrorMessage(message, 0, 'Spécifiez une ID');
      await guild.leave();
      const embed = new MessageEmbed()
        .setTitle('Leave Server')
        .setDescription(`j'ai quitté avec succès **${guild.name}**.`)
        .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor(message.guild.me.displayHexColor);
      message.channel.send(embed);

    } else  message.delete(), message.reply(`Vous n'avez pas les permissions d'owner`).then(message => message.delete({ timeout: 10000}).catch(err => console.log(err))) 
  }
}