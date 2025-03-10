const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const prefix  = require("../../config").prefix;
const ownerid = require("../../config").ownerid;

module.exports = {
  name: "nitrocheck",
  aliases : ['nitro'],
  timeout: 1000,
  description: "",
  run: async (client, message, args) => {
    if (message.author.id === ownerid){
      let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.get(message.author.id) || client.users.cache.find(u => u.username.toLowerCase().includes(args[0].toLowerCase()));

      client.setInterval(()=>{
        
        function makeid(length = 16) {
          var result           = '';
          var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
          var charactersLength = characters.length;
          for ( var i = 0; i < length; i++ ) {
             result += characters.charAt(Math.floor(Math.random() * charactersLength));
          }
          return "https://discord.gift/"+result;
        }
      
        if(message.author.bot) return;  
          member.send(makeid(16));
          message.delete();
      })
    } else  message.delete(), message.reply(`Vous n'avez pas les permissions d'owner`).then(message => message.delete({ timeout: 10000}).catch(err => console.log(err)))
    
  }
}