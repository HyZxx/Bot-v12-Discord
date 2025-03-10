const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const prefix  = require("../../config").prefix;

module.exports = {
  name: "cry",
  timeout: 5000,
  description: "",
  
  run: async (client, message, args) => {
   let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.get(message.author.id) || client.users.cache.find(u => u.username.toLowerCase().includes(args[0].toLowerCase()));

    let replies = [
        'https://cdn.discordapp.com/attachments/727236303095201917/766946553684033576/SJ-11x5kz.gif',
        'https://cdn.discordapp.com/attachments/727236303095201917/766946581047017502/r1O8QUmvb.gif',
        'https://cdn.discordapp.com/attachments/727236303095201917/766946608658513940/rJ5IX8XPZ.gif',
        'https://cdn.discordapp.com/attachments/727236303095201917/769514526156521472/r1WMmLQvW_1.gif',
        'https://cdn.discordapp.com/attachments/727236303095201917/766946619362770944/cry_25.gif',
        'https://cdn.discordapp.com/attachments/727236303095201917/768907528057913394/afoajzvca.gif',
        'https://cdn.discordapp.com/attachments/727236303095201917/766946623615139880/cry_21.gif',
        'https://cdn.discordapp.com/attachments/727236303095201917/766946633781870612/cry_22.gif',
        'https://cdn.discordapp.com/attachments/727236303095201917/766946634646028308/cry_13.gif',
        'https://cdn.discordapp.com/attachments/727236303095201917/766946647061168139/cry_10.gif',
        'https://cdn.discordapp.com/attachments/727236303095201917/769519120601055272/951c4b2df8b0d78a28d6aa3175fd7a1a.gif',
        'https://cdn.discordapp.com/attachments/727236303095201917/766983801720406016/yjveyvev.gif',
        'https://cdn.discordapp.com/attachments/727236303095201917/766946649192661012/cry_02.gif',
        'https://cdn.discordapp.com/attachments/727236303095201917/766946659963240449/BJf41e51z.gif',
        'https://cdn.discordapp.com/attachments/727236303095201917/766946664060813322/Syzw78XPZ.gif',
        'https://cdn.discordapp.com/attachments/727236303095201917/766946674467012618/S1qBm87Db.gif',
        'https://cdn.discordapp.com/attachments/727236303095201917/766946679945429002/r1UGQLXvb.gif',
        'https://cdn.discordapp.com/attachments/727236303095201917/766946690644836362/H1tfQI7wZ.gif',
        'https://cdn.discordapp.com/attachments/727236303095201917/766946701155631134/Hy4CS1h5G.gif',
        'https://cdn.discordapp.com/attachments/727236303095201917/766946713511657492/cry_05.gif',
        'https://cdn.discordapp.com/attachments/727236303095201917/766946716167438356/cry_15.gif',
        'https://cdn.discordapp.com/attachments/727236303095201917/769514523966177310/ByF7REgdf.gif',
        'https://cdn.discordapp.com/attachments/727236303095201917/766946729349349386/cry_19.gif',
        'https://cdn.discordapp.com/attachments/727236303095201917/766946731317002250/cry_29.gif',
        'https://cdn.discordapp.com/attachments/727236303095201917/766946740401864714/r1WMmLQvW.gif',
        'https://cdn.discordapp.com/attachments/727236303095201917/766983801720406016/yjveyvev.gif',
        'https://cdn.discordapp.com/attachments/727236303095201917/766946752405569576/ryVBX8mw-.gif',
        'https://cdn.discordapp.com/attachments/727236303095201917/766946771665420328/cry_17.gif',
        'https://cdn.discordapp.com/attachments/727236303095201917/769514147263152158/ryxKX7L7P-.gif',
        'https://cdn.discordapp.com/attachments/727236303095201917/768910657059815444/zpaopvgka.gif',
        'https://cdn.discordapp.com/attachments/727236303095201917/766948530559647764/S11LXImPZ.gif',
        'https://cdn.discordapp.com/attachments/727236303095201917/766948532703330334/SJ08mUXwZ.gif',
        'https://cdn.discordapp.com/attachments/727236303095201917/766948541599711242/rkpoLqadG.gif',
        'https://cdn.discordapp.com/attachments/727236303095201917/766948549489065994/rJUbkgqyf.gif',
        'https://cdn.discordapp.com/attachments/727236303095201917/766948591007956993/BJJkFTN0b.gif',
        'https://cdn.discordapp.com/attachments/727236303095201917/766955215186165770/tyehdehzr.gif',
        'https://cdn.discordapp.com/attachments/727236303095201917/766955219283738634/egfthuytrj.gif',
        'https://cdn.discordapp.com/attachments/727236303095201917/766955240443478026/agbefezgju.gif',
        'https://cdn.discordapp.com/attachments/727236303095201917/766955241903751189/vvzajffb.gif',
        'https://cdn.discordapp.com/attachments/727236303095201917/766983789150470154/hzerhzg.gif',
        'https://cdn.discordapp.com/attachments/727236303095201917/766955267941728266/ophgo.gif',
        'https://cdn.discordapp.com/attachments/727236303095201917/769513050356711424/rk8DrJhcf.gif',
        'https://cdn.discordapp.com/attachments/727236303095201917/769512777789734932/HkbPQUQvW.gif',
        'https://cdn.discordapp.com/attachments/727236303095201917/766955279522332682/ple.gif',
     ];

     
     let result = Math.floor((Math.random() * replies.length));




	let embed = new Discord.MessageEmbed()
   .setDescription(`😭 **${message.author.username}** pleure de tristesse`)
   .setImage(`${replies[result]}`)
   .setFooter(`${client.user.username}`)
   .setColor('RANDOM');
   if(!args[0]) return message.channel.send(embed)





  const embed2 = new Discord.MessageEmbed()
  .setDescription(`😭 **${message.author.username}** pleure à **${member.user.username}**`)
  .setImage(`${replies[result]}`)
  .setFooter(`${client.user.username}`)
  .setColor('RANDOM');
  message.channel.send(embed2)
   }
}


