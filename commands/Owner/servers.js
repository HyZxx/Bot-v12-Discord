const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const prefix  = require("../../config").prefix;
const ownerid = require("../../config").ownerid;
const couleur = require("../../config").couleur;

module.exports = {
  name: "servers",
  aliases : ['guilds'],
  timeout: 1000,
  description: "",
  run: async (client, message, args) => {
    if (message.author.id === ownerid){
    
      const servers = message.client.guilds.cache.array().map(guild => {
        return `\`${guild.id}\` - **${guild.name}** - \`${guild.members.cache.size}\` membres`;
      });
  
      const embed = new MessageEmbed()
        .setTitle('Liste de mes serveurs')
        .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor(couleur);
  
      if (servers.length <= 10) {
        const range = (servers.length == 1) ? '[1]' : `[1 - ${servers.length}]`;
        message.channel.send(embed.setTitle(`Liste de mes serveurs ${range}`).setDescription(servers.join('\n')));
      }

    } else  message.delete(), message.reply(`Vous n'avez pas les permissions d'owner`).then(message => message.delete({ timeout: 10000}).catch(err => console.log(err)))
    
  }
}