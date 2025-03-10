const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const prefix  = require("../../config").prefix;
const ms = require('ms');

module.exports = {
  name: "hack",
  timeout: 5000,
  description: "",

  run: async (client, message, args) => {

if (!args[0]) return message.reply("Spécifiez un membre").then(message => message.delete({ timeout: 10000}).catch(err => console.log(err)))
      
      const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.get(message.author.id) || client.users.cache.find(u => u.username.toLowerCase().includes(args[0].toLowerCase()));
      let hacked;
      if (user) {hacked = user;}    

         else {hacked = message.args.args.join(' ');}

      const prompt = await message.channel.send(`Hacking ${hacked.displayName} à présent...`);
      var ipaddress = ["121.4.6.18","172.12.0.8","139.6.0.9","172.16.8.0","184.7.32.1","171.18.6.3","167.10.43.1","198.16.1.4"]
    let ip = ipaddress[Math.floor(Math.random() * ipaddress.length)]

    var Listwords = ["Reeeee", "Suce", "Fuck", "Bitch", "LOL", "XD", "Damnit", "Cul", "Discord", "Argent", "Wumpus", "Merde"]
        let word = Listwords[Math.floor(Math.random() * Listwords.length)]

      
      let time = "3s"
      setTimeout(function (){
          prompt.edit(`Trouve le login discord...`)
          }, ms(time))
          
          let time1 = "6s"
          setTimeout(function (){
            prompt.edit(`Trouvé:\n**Email**: \`${hacked.displayName}***@gmail.com\`\n**Password**: \`*******\``);
              }, ms(time1))      
    
              let time2 = "9s"
              setTimeout(function (){
                prompt.edit(`Récupération des dms.`);
                  }, ms(time2)) 

                  let time3 = "12s"
                  setTimeout(function (){
                    prompt.edit(`Liste des mots les plus courants... **${word}**`);
                      }, ms(time3))         
                      
                      let time4 = "15s"
                      setTimeout(function (){
                        prompt.edit(`Injection de virus dans le discriminator.`);
                          }, ms(time4))                   

                          let time5 = "18s"
                          setTimeout(function (){
                            prompt.edit('Virus injecté.');
                              }, ms(time5))                   

                              let time6 = "21s"
                              setTimeout(function (){
                                prompt.edit(`Trouve l'IP Address: **${ip}**`);
                                  }, ms(time6))                   
            
                                  let time7 = "24s"
                                  setTimeout(function (){
                                    prompt.edit('Spam Email...');
                                      }, ms(time7))    

                                      let time8 = "27s"
                                      setTimeout(function (){
                                        prompt.edit('Vend des données à Facebook...');
                                          }, ms(time8)) 
                                          
                                          let time9 = "30s"
                                          setTimeout(function (){
                                            prompt.edit(`Fin du piratage ${user ? hacked.displayName : hacked}`);
                                              }, ms(time9)) 
                                              
                                              let time10 = "33s"
                                              setTimeout(function (){
                                                prompt.edit(`Le piratage est terminé.`);
                                                  }, ms(time10)) 
    }
}