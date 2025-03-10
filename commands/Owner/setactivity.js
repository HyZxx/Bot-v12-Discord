const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const prefix = require("../../config").prefix;
const couleur = require("../../config").couleur;
const ownerid = require("../../config").ownerid;





module.exports = {
  name: "setactivity",
  timeout: 1000,
  description: "",

  run: async (client, message, args, text) => {
    if (message.author.id === ownerid){

      const statut = args.join(" "); 
      if(!statut) return message.reply('Spécifiez une activité').then(message => message.delete({ timeout: 10000}).catch(err => console.log(err)))

      client.user.setPresence({
        status: "dnd", 
        activity: {
            name: `${statut}`, 
            type: "STREAMING", //PLAYING: WATCHING: LISTENING: STREAMING:
            url: "https://www.twitch.tv/hyzeeoff"
        }
    });

    message.channel.send("L'activité a été changé")
  } else  message.delete(), message.reply(`Vous n'avez pas les permissions d'owner`).then(message => message.delete({ timeout: 10000}).catch(err => console.log(err)))

  }
}