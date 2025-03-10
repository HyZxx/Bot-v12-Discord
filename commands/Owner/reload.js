const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const prefix  = require("../../config").prefix;
const token = require('../../config').token;
const ownerid = require("../../config").ownerid;

module.exports = {
  name: "reload",
  aliases : ['restart'],
  timeout: 1000,
  description: "",
  run: async (client, message, args) => {
    if (message.author.id === ownerid){
    
        message.delete();
        console.clear();
        message.channel.send("Je vais me relancé").then(message => message.delete({ timeout: 8000}).catch(err => console.log(err)));
        client.destroy();
        client.login(token);
        message.channel.send("Je me suis relancé").then(message => message.delete({ timeout: 8000}).catch(err => console.log(err)));
        
      } else  message.delete(), message.reply(`Vous n'avez pas les permissions d'owner`).then(message => message.delete({ timeout: 10000}).catch(err => console.log(err)))
  }
}