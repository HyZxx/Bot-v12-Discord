const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const prefix  = require("../../config").prefix;

module.exports = {
  name: "hug",
  timeout: 5000,
  description: "",
  
  run: async (client, message, args) => {
   let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.get(message.author.id) || client.users.cache.find(u => u.username.toLowerCase().includes(args[0].toLowerCase()));

    let replies = [
       'https://cdn.discordapp.com/attachments/902969434803671083/902969862035505162/HytoudXwW.gif',
       'https://cdn.discordapp.com/attachments/902969434803671083/902969866590511124/r1kC_dQPW.gif',
       'https://cdn.discordapp.com/attachments/902969434803671083/902969868943511582/S14ju_7Pb.gif',
       'https://cdn.discordapp.com/attachments/902969434803671083/902969879718666301/ByuHsvu8z.gif',
       'https://cdn.discordapp.com/attachments/902969434803671083/902969881559969892/rJnKu_XwZ.gif',
       'https://cdn.discordapp.com/attachments/902969434803671083/902969883950710784/HkfgF_QvW.gif',
       'https://cdn.discordapp.com/attachments/902969434803671083/902969891353686036/B11CDkhqM.gif',
       'https://cdn.discordapp.com/attachments/902969434803671083/902969897393455124/HkRwnuyuW.gif',
       'https://cdn.discordapp.com/attachments/902969434803671083/902969903798190170/cuddle-nuzzle.gif',
       'https://cdn.discordapp.com/attachments/902969434803671083/902969908806180874/anime-hug_1.gif',
       'https://cdn.discordapp.com/attachments/902969434803671083/902969989546528828/bangdream-bandori.gif',
       'https://cdn.discordapp.com/attachments/902969434803671083/902970008970342430/anime-cute_1.gif',
       'https://cdn.discordapp.com/attachments/902969434803671083/902970024669634620/hug-anime-hug.gif',
       'https://cdn.discordapp.com/attachments/902969434803671083/902970028834570240/hugs-sad.gif',
       'https://cdn.discordapp.com/attachments/902969434803671083/902970037747462154/hug-anime_1.gif',
       'https://cdn.discordapp.com/attachments/902969434803671083/902970060979699742/rkIK_u7Pb.gif',
       'https://cdn.discordapp.com/attachments/902969434803671083/902970060975509564/HkQs_dXPZ.gif',
       'https://cdn.discordapp.com/attachments/902969434803671083/902970071847166032/rk_6GyncG.gif',
       'https://cdn.discordapp.com/attachments/902969434803671083/902970083289210980/Bk5T2_1Ob.gif',
       'https://cdn.discordapp.com/attachments/902969434803671083/902970090365005884/beyond-the-boundary-anime-hugs.gif',
       'https://cdn.discordapp.com/attachments/902969434803671083/902970095419158618/tackle-hug-couple.gif',
       'https://cdn.discordapp.com/attachments/902969434803671083/902970102813704233/hug-anime.gif',
       'https://cdn.discordapp.com/attachments/902969434803671083/902970107167391835/anime-cheeks.gif',
       'https://cdn.discordapp.com/attachments/902969434803671083/902970114817818704/cute-hug.gif',
       'https://cdn.discordapp.com/attachments/902969434803671083/902970121469956146/anime-couple.gif',
       'https://cdn.discordapp.com/attachments/902969434803671083/902970134010933288/anime-bed.gif',
       'https://cdn.discordapp.com/attachments/902969434803671083/902970149898969168/HJU2OdmwW.gif',
       'https://cdn.discordapp.com/attachments/902969434803671083/902970151098515486/SJfEks3Rb.gif',
       'https://cdn.discordapp.com/attachments/902969434803671083/902970162658037761/Bk5haAocG.gif',
       'https://cdn.discordapp.com/attachments/902969434803671083/902970170060976148/BJ0UovdUM.gif',
       'https://cdn.discordapp.com/attachments/902969434803671083/902970178856423534/H1ui__XDW.gif',
       'https://cdn.discordapp.com/attachments/902969434803671083/902970185315651604/BkZngAYtb.gif',
       'https://cdn.discordapp.com/attachments/902969434803671083/902970194299846768/SknauOQwb.gif',
       'https://cdn.discordapp.com/attachments/902969434803671083/902970200847187998/ryMqdOXvZ.gif',
       'https://cdn.discordapp.com/attachments/902969434803671083/902970204852748309/B10Tfknqf.gif',
       'https://cdn.discordapp.com/attachments/902969434803671083/902970214264758312/S1qX2OJ_Z.gif',
       'https://cdn.discordapp.com/attachments/902969434803671083/902970216621936660/Hy4hxRKtW.gif',
       'https://cdn.discordapp.com/attachments/902969434803671083/902970228546367498/BkBs2uk_b.gif',
       'https://cdn.discordapp.com/attachments/902969434803671083/902970239971655760/BJCCd_7Pb.gif',
       'https://cdn.discordapp.com/attachments/902969434803671083/902970248070836314/SJZ-Qy35f.gif',
       'https://cdn.discordapp.com/attachments/902969434803671083/902970252185452604/rJ_slRYFZ.gif',
       'https://cdn.discordapp.com/attachments/902969434803671083/902970265775009802/skate-the-infinity-hug.gif',
       'https://cdn.discordapp.com/attachments/902969434803671083/902970270963339314/ohshc-ouran-high-school-host-club.gif',
       'https://cdn.discordapp.com/attachments/902969434803671083/902970277707788378/anime-cute.gif',
       'https://cdn.discordapp.com/attachments/902969434803671083/902970284334796820/toilet-bound-hanakokun.gif',
       'https://cdn.discordapp.com/attachments/902969434803671083/902970491717947394/anime-acchi-kocchi.gif',
       'https://cdn.discordapp.com/attachments/902969434803671083/902970943238979644/hug-hugs.gif',
       'https://cdn.discordapp.com/attachments/902969434803671083/902971423646171166/blush-hug.gif',
       'https://cdn.discordapp.com/attachments/902969434803671083/902971430097002506/loli-hug.gif',
       'https://cdn.discordapp.com/attachments/902969434803671083/902971430256377876/hug.gif',
       'https://cdn.discordapp.com/attachments/902969434803671083/902971691989360700/anime-hug_3.gif',
       'https://cdn.discordapp.com/attachments/902969434803671083/902976430529470554/teria-wang-kishuku-gakkou-no-juliet_1.gif',
     ];

     
     let result = Math.floor((Math.random() * replies.length));




	let embed = new Discord.MessageEmbed()
   .setDescription(`🤗 **${message.author.username}** fait un câlin à **${client.user.username}**`)
   .setImage(`${replies[result]}`)
   .setFooter(client.user.username)
   .setColor('RANDOM');
   if(!args[0]) return message.channel.send(embed)





  const embed2 = new Discord.MessageEmbed()
  .setDescription(`🤗 **${message.author.username}** fait un câlin à **${member.user.username}**`)
  .setImage(`${replies[result]}`)
  .setFooter(client.user.username)
  .setColor('RANDOM');
  message.channel.send(embed2)
   } 
}


