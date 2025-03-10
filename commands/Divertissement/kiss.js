const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const prefix  = require("../../config").prefix;

module.exports = {
  name: "kiss",
  timeout: 5000,
  description: "",
  
  run: async (client, message, args) => {
   let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.get(message.author.id) || client.users.cache.find(u => u.username.toLowerCase().includes(args[0].toLowerCase()));

    let replies = [
        'https://cdn.discordapp.com/attachments/784743831622909972/787344278480748554/S1PCJWASf.gif',
        'https://cdn.discordapp.com/attachments/784743831622909972/787344282364542986/S1qZksSXG.gif',
        'https://cdn.discordapp.com/attachments/784743831622909972/787344289910620180/S1VEna_v-.gif',
        'https://cdn.discordapp.com/attachments/784743831622909972/787344297460105245/SJ3dXCKtW.gif',
        'https://cdn.discordapp.com/attachments/784743831622909972/787344308264370196/Sk5P2adDb.gif',
        'https://cdn.discordapp.com/attachments/784743831622909972/787344308809891900/Sk1k3TdPW.gif',
        'https://cdn.discordapp.com/attachments/784743831622909972/787344320160071680/Skc42pdv-.gif',
        'https://cdn.discordapp.com/attachments/784743831622909972/787344330510958593/Sylj0s6dv-.jpeg',
        'https://cdn.discordapp.com/attachments/784743831622909972/787344333845037076/SkQIn6Ovb.gif',
        'https://cdn.discordapp.com/attachments/784743831622909972/787344336408543262/SybPhp_wZ.gif',
        'https://cdn.discordapp.com/attachments/784743831622909972/787344342989537340/B1NwJg9Jz.gif',
        'https://cdn.discordapp.com/attachments/784743831622909972/787344345887670322/B1yv36_PZ.gif',
        'https://cdn.discordapp.com/attachments/784743831622909972/787344358965641266/BJSdQRtFZ.gif',
        'https://cdn.discordapp.com/attachments/784743831622909972/787344362287792178/B12g3TOPZ.gif',
        'https://cdn.discordapp.com/attachments/784743831622909972/787344370080808990/Bkuk26uvb.gif',
        'https://cdn.discordapp.com/attachments/784743831622909972/787344373523415090/BydoCy9yG.gif',
        'https://cdn.discordapp.com/attachments/784743831622909972/787344373896970270/Bkk_hpdv-.gif',
        'https://cdn.discordapp.com/attachments/784743831622909972/787344379278000158/ByiMna_vb.gif',
        'https://cdn.discordapp.com/attachments/784743831622909972/787344383980339230/ByVQha_w-.gif',
        'https://cdn.discordapp.com/attachments/784743831622909972/787344394108928020/HJ8dQRYK-.gif',
        'https://cdn.discordapp.com/attachments/784743831622909972/787344394855776286/H1tv2p_Db.gif',
        'https://cdn.discordapp.com/attachments/784743831622909972/787344408441651230/H1Gx2aOvb.gif',
        'https://cdn.discordapp.com/attachments/784743831622909972/787344429429030912/kiss_42.gif',
        'https://cdn.discordapp.com/attachments/784743831622909972/787344438895575050/Hy-oQl91z.gif',
        'https://cdn.discordapp.com/attachments/784743831622909972/787344450246410290/rJrCj6_w-.gif',
        'https://cdn.discordapp.com/attachments/784743831622909972/787344462346584084/rypMnpuvW.gif',
        'https://cdn.discordapp.com/attachments/784743831622909972/787344465329258506/Hkt-nTOwW.gif',
        'https://cdn.discordapp.com/attachments/784743831622909972/787344467287474196/S1E1npuvb.gif',
        'https://cdn.discordapp.com/attachments/784743831622909972/787344485968379914/HJkxXNtjZ.gif',
        'https://cdn.discordapp.com/attachments/784743831622909972/787344483175628820/r1mcJlFVz.gif',
        'https://cdn.discordapp.com/attachments/784743831622909972/787344490070933514/rkde2aODb.gif',
        'https://cdn.discordapp.com/attachments/784743831622909972/787344864958349372/SJINn6OPW.gif',
        'https://cdn.discordapp.com/attachments/784743831622909972/787345180004712448/HJYghpOP-.gif',
        'https://cdn.discordapp.com/attachments/784743831622909972/787345496171479040/BkLQnT_PZ.gif',
        'https://cdn.discordapp.com/attachments/784743831622909972/787345895167361035/SkKL3adPb.gif',
        'https://cdn.discordapp.com/attachments/784743831622909972/787346635889180672/ByTBhp_vZ.gif',
        'https://cdn.discordapp.com/attachments/784743831622909972/787346779162673152/ry9uXAFKb.gif',
        'https://cdn.discordapp.com/attachments/784743831622909972/787347119006547968/SJ--2auDZ.gif',
        'https://cdn.discordapp.com/attachments/784743831622909972/787347349479358484/HJ5khTOP-.gif',
        'https://cdn.discordapp.com/attachments/784743831622909972/787348742743261184/SJn43adDb.gif',
        'https://cdn.discordapp.com/attachments/784743831622909972/902971822839050270/rascal-does-not-dream-of-bunny-girl-senpai-mai-sakurajima_1.gif',
     ];

     
     let result = Math.floor((Math.random() * replies.length));




	let embed = new Discord.MessageEmbed()
   .setDescription(`😘 **${message.author.username}** fait un bisou à **${client.user.username}**`)
   .setImage(`${replies[result]}`)
   .setFooter(client.user.username)
   .setColor('RANDOM');
   if(!args[0]) return message.channel.send(embed)





  const embed2 = new Discord.MessageEmbed()
  .setDescription(`😘 **${message.author.username}** fait un bisou à **${member.user.username}**`)
  .setImage(`${replies[result]}`)
  .setFooter(client.user.username)
  .setColor('RANDOM');
  message.channel.send(embed2)
   } 
}


