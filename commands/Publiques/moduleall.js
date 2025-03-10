const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const prefix  = require("../../config").prefix;
const couleur = require("../../config").couleur;

module.exports = {
  name: "moduleall",
  timeout: 10000,
  description: "",
  
  run: async (client, message, args) => {

    message.channel.send(
      new MessageEmbed()
      .setTitle(`Module`)
      .setDescription(`*Les paramètres peuvent utilisées des mentions ou des IDs*\n *Les paramètres obligatoire sont entre \`[]\` et non-obligatoire sont entre \`()\`* \n\n **\`help [divertissement]\`** \n\n **\`help [utilitaire]\`** \n\n **\`help [moderation]\`** \n\n **\`help [bot]\`**\n\n **\`help [gif]\`** \n\n **\`help [owner]\`**`)
      .setColor(`${couleur}`)
      .setTimestamp()
      .setFooter(`${client.user.username}`)
    )
    }
}