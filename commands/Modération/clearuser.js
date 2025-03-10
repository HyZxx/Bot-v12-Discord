const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const prefix  = require("../../config").prefix;

module.exports = {
  name: "clearuser",
  timeout: 1000,
  description: "",

  run: async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Vous n'avez pas les permissions `Gérer les messages`").then(message => message.delete({ timeout: 10000}).catch(err => console.log(err)))


    const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.get(message.author.id) || client.users.cache.find(u => u.username.toLowerCase().includes(args[0].toLowerCase()))

        if(!user) return message.reply("Spécifiez un membre").then(message => message.delete({ timeout: 10000}).catch(err => console.log(err)))
    
        let toDelete = args[1];
        if(!toDelete || isNaN(toDelete) || parseInt(toDelete) < 1 || parseInt(toDelete) > 100) return message.reply(`Spécifiez un nombre entre 1 et 100`).then(message => message.delete({ timeout: 10000}).catch(err => console.log(err)))
    
        let messages = (await message.channel.messages.fetch({
            limit: 100,
            before: message.id
        })).filter(a => a.author.id === user.id).array();
    
        messages.length = Math.min(parseInt(toDelete), messages.length);
    
        if(messages.length === 0) return message.reply(`Aucun message à supprimer de ce membre`).then(message => message.delete({ timeout: 10000}).catch(err => console.log(err)))
    
        await message.delete().catch(() => {});
    
        await message.channel.bulkDelete(messages).then(deletedMessage => {
            let deleted = deletedMessage.size;
            if(deleted === 0) deleted = 1;
    
            message.channel.send(`${deleted} messages supprimés de ce membre`)
        })
      

  }
}
