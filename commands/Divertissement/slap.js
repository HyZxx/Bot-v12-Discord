const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const prefix  = require("../../config").prefix;

module.exports = {
  name: "slap",
  timeout: 5000,
  description: "",
  
  run: async (client, message, args) => {
   let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.get(message.author.id) || client.users.cache.find(u => u.username.toLowerCase().includes(args[0].toLowerCase()));


    let replies = [
        'https://cdn.discordapp.com/attachments/784743889080811530/784751422599331860/SkNimyKvZ.gif',
        'https://cdn.discordapp.com/attachments/784743889080811530/784751418945830912/HJKpm1twW.gif',
        'https://cdn.discordapp.com/attachments/784743889080811530/784751419176910878/Sk9mfCtY-.gif',
        'https://cdn.discordapp.com/attachments/784743889080811530/784751418699546654/ryn_Zg5JG.gif',
        'https://cdn.discordapp.com/attachments/784743889080811530/784751407504424990/rJ4141YDZ.gif',
        'https://cdn.discordapp.com/attachments/784743889080811530/784751405520126002/ry_RQkYDb.gif',
        'https://cdn.discordapp.com/attachments/784743889080811530/784751400155611166/rJgTQ1tvb.gif',
        'https://cdn.discordapp.com/attachments/784743889080811530/784751397408473108/Hy09QJFDZ.gif',
        'https://cdn.discordapp.com/attachments/784743889080811530/784751394900803605/S1ylxxc1M.gif',
        'https://cdn.discordapp.com/attachments/784743889080811530/784751394522791946/ByHUMRNR-.gif',
        'https://cdn.discordapp.com/attachments/784743889080811530/784751384981536768/rJYqQyKv-.gif',
        'https://cdn.discordapp.com/attachments/784743889080811530/784751382968008724/Skafgaegf.gif',
        'https://cdn.discordapp.com/attachments/784743889080811530/784751382020358154/Sk0RmyYvb.gif',
        'https://cdn.discordapp.com/attachments/784743889080811530/784751381139161098/SJlkNkFwb.gif',
        'https://cdn.discordapp.com/attachments/784743889080811530/784751369667084308/Hkw1VkYP-.gif',
        'https://cdn.discordapp.com/attachments/784743889080811530/784751366995443722/Byjqm1tDW.gif',
        'https://cdn.discordapp.com/attachments/784743889080811530/784751359026397204/ByTR7kFwW.gif',
        'https://cdn.discordapp.com/attachments/784743889080811530/784751352709775360/rJrnXJYPb.gif',
        'https://cdn.discordapp.com/attachments/784743889080811530/784751342387593246/HJcoQ1Fwb.gif',
        'https://cdn.discordapp.com/attachments/784743889080811530/784751351238098954/SJx7M0Ft-.gif',
        'https://cdn.discordapp.com/attachments/784743889080811530/784751341276889138/B1fnQyKDW.gif',
        'https://cdn.discordapp.com/attachments/784743889080811530/784751333060116480/SkdyfWCSf.gif',
        'https://cdn.discordapp.com/attachments/784743889080811530/784751330786934834/HkskD56OG.gif',
        'https://cdn.discordapp.com/attachments/784743889080811530/784751329586184192/BkxEo7ytDb.gif',
        'https://cdn.discordapp.com/attachments/784743889080811530/784751327296356362/SkKn-xc1f.gif',
        'https://cdn.discordapp.com/attachments/784743889080811530/784751327107743784/rkaqm1twZ.gif',
        'https://cdn.discordapp.com/attachments/784743889080811530/784751312935452702/slap_03.gif',
        'https://cdn.discordapp.com/attachments/784743889080811530/784751310989819914/slap_07.gif',
        'https://cdn.discordapp.com/attachments/784743889080811530/784751307751292958/slap_06.gif',
        'https://cdn.discordapp.com/attachments/784743889080811530/784751283244236810/tenor.gif',
        'https://cdn.discordapp.com/attachments/784743889080811530/784751279758901278/tenor_4.gif',
        'https://cdn.discordapp.com/attachments/784743889080811530/784751276557860924/tenor_1.gif',
        'https://cdn.discordapp.com/attachments/784743889080811530/784751274850779136/tenor_2.gif',
        'https://cdn.discordapp.com/attachments/784743889080811530/784751273290891274/tenor_5.gif',
        'https://cdn.discordapp.com/attachments/784743889080811530/784751269985517579/tenor_6.gif',
        'https://cdn.discordapp.com/attachments/784743889080811530/784751268475699210/BJ8o71tD-.gif',
        'https://cdn.discordapp.com/attachments/784743889080811530/784751263731417088/rkpAXa5bG.gif',
        'https://cdn.discordapp.com/attachments/784743889080811530/784751262485839872/By2iXyFw-.gif',
        'https://cdn.discordapp.com/attachments/784743889080811530/784751260795797534/r1VF-lcyz.gif',
     ];

     
     let result = Math.floor((Math.random() * replies.length));




	let embed = new Discord.MessageEmbed()
   .setDescription(`✋ **${message.author.username}** met une claque à **${client.user.username}**`)
   .setImage(`${replies[result]}`)
  .setFooter(client.user.username)
   .setColor('RANDOM');
   if(!args[0]) return message.channel.send(embed)





  const embed2 = new Discord.MessageEmbed()
  .setDescription(`✋ **${message.author.username}** met une claque à **${member.user.username}**`)
  .setImage(`${replies[result]}`)
  .setFooter(`${client.user.username}`)
  .setColor('RANDOM');
  message.channel.send(embed2)
   }
}


