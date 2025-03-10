const client = require('../index')
const { MessageEmbed } = require("discord.js");

client.on('guildCreate', (guild) => {
    client.channels.cache.get('827880433307353088').send(
        new MessageEmbed()
        .setDescription(`${client.user} vient d'être ajouté sur le serveur ${guild.name}, voici quelques informations :`)
        .addField(`Owner :`, `${guild.owner}`)
        .addField(`Nom du serveur :`, `\`\`\`${guild.name} (${guild.id})\`\`\``)
        .addField(`Membres :`, `\`\`\`${guild.memberCount}\`\`\``)
        .setFooter(`Je suis maintenant sur ${client.guilds.cache.size} serveurs !`)
        .setTimestamp()
        .setThumbnail(guild.iconURL({ dynamic: true}))
        .setColor('GREEN')
    )
})