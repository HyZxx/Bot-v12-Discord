const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const prefix  = require("../../config").prefix;

module.exports = {
  name: "say",
  timeout: 1000,
  description: "",
  
  run: async (client, message, args) => {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply("Vous n'avez pas les permissions `Gérer les messages`").then(message => message.delete({ timeout: 10000}).catch(err => console.log(err)))
        
        if(!args[0]) return message.reply("Spécifiez votre message").then(message => message.delete({ timeout: 10000}).catch(err => console.log(err)))

        const sayMessage = args.join(" ");
        if (message.content.includes("@everyone") || message.content.includes("@here") || message.mentions.everyone || message.content.includes("@&")) return message.reply("Pas de mention fdp").then(message => message.delete({ timeout: 10000}).catch(err => console.log(err)))
        message.channel.send(sayMessage);
        message.delete().catch(O_o=>{}); // Ignores the error 
        
  }
}
