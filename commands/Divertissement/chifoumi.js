const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const prefix  = require("../../config").prefix;
const ms = require('ms');

module.exports = {
  name: "chifoumi",
  timeout: 5000,
  description: "",

  run: async (client, message, args) => {

        let replies = ['💎', '📄', '✂️'];
        let result = Math.floor((Math.random() * replies.length));
        message.reply(`Réagis à un des émojis 💎 ou 📄 ou ✂️`).then(message => message.delete({ timeout: 30000 }).catch(err => console.log(err)))
        message.react(`💎`)
        message.react(`📄`)
        message.react(`✂️`)
        message.awaitReactions((reaction, user) => user.id === message.author.id && (reaction.emoji.name === '💎' || reaction.emoji.name === '📄' || reaction.emoji.name === '✂️'), {
            max: 1,
            time: 30000
        }).then(collected => {
            if (collected.first().emoji.name === '💎') {
                if (replies[result] === '💎') {
                    return message.channel.send(`J'ai fait ${replies[result]} donc il y a égalité`);
                } else if (replies[result] === '📄') {
                    return message.channel.send(`J'ai fait ${replies[result]} donc j'ai gagné`);
                } else {
                    return message.channel.send(`J'ai fait ${replies[result]} donc tu as gagné`);
                }
            }
            if (collected.first().emoji.name === '📄') {
                if (replies[result] === '📄') {
                    return message.channel.send(`J'ai fait ${replies[result]} donc il y a égalité`);
                } else if (replies[result] === '✂️') {
                    return message.channel.send(`J'ai fait ${replies[result]} donc j'ai gagné`);
                } else {
                    return message.channel.send(`J'ai fait ${replies[result]} donc tu as gagné`);
                }
            }
            if (collected.first().emoji.name === '✂️') {
                if (replies[result] === '✂️') {
                    return message.channel.send(`J'ai fait ${replies[result]} donc il y a égalité`);
                } else if (replies[result] === '💎') {
                    return message.channel.send(`J'ai fait ${replies[result]} donc j'ai gagné`);
                } else {
                    return message.channel.send(`J'ai fait ${replies[result]} donc tu as gagné`);
                }
            }
        }).catch(collected => {
            message.reply('Aucune réaction après 30 secondes, le jeu a été annulé').then(message => message.delete({ timeout: 10000}).catch(err => console.log(err)))
        });
  }
}
