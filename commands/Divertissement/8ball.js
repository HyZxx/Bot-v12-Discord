const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const prefix  = require("../../config").prefix;

module.exports = {
  name: "8ball",
  timeout: 5000,
  description: "",
  
  run: async (client, message, args) => {



   if(!args[0]) return message.reply("Spécifiez votre question").then(message => message.delete({ timeout: 10000}).catch(err => console.log(err)))


   let replies = [
      'Peut-être',
      'Certainement pas',
      'Je l’espère',
      'Pas dans vos rêves les plus fous',
      'Il ya une bonne chance',
      'Très probable',
      'Je pense que oui',
      'J’espère que non',
      'Je l’espère',
      'Jamais',
      'Pfff',
      'les signes indiquent que tu parles trop',
      'Il serait temps d\'arrêter',
      'Je préfère ne pas dire',
      'Oui sans soucis',
      'Jamais, jamais, jamais',
      'Il ya une petite chance',
      'Oui',
      'Essaye encore',
      'Il ya une forte probabilité',
      'Quelle différence cela fait-il',
      'Ce n’est pas mon problème',
      'Demandez à quelqu’un d’autre',
   ];


   let result = Math.floor((Math.random() * replies.length));


   message.channel.send(`:8ball: ${message.author}, **${replies[result]}**`) 
  }
}



