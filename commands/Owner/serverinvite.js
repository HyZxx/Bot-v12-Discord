const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const prefix = require("../../config").prefix;
const couleur = require("../../config").couleur;
const ownerid = require("../../config").ownerid;





module.exports = {
  name: "serverinvite",
  timeout: 1000,
  description: "",

  run: async (client, message, args, text) => {
    if (message.author.id === ownerid){

      const invitef = args.join(" "); 
      if(!invitef) return message.reply('Spécifiez une ID').then(message => message.delete({ timeout: 10000}).catch(err => console.log(err)))

      client.guilds.cache.get(invitef).channels.cache.filter((c) => c.isText()).first().createInvite({ maxAge: 0, maxUses: 0 }).then((i) => message.channel.send(i.url))
      

  } else  message.delete(), message.channel.send(`${message.author}, Vous n'avez pas les permissions d'owner`).then(message => message.delete({ timeout: 10000}).catch(err => console.log(err)))
  }
}